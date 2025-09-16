// Service Worker for PhysioHelper
// Advanced caching strategies for maximum performance

const CACHE_NAME = 'physiohelper-v1.0.0';
const STATIC_CACHE = 'static-v1';
const API_CACHE = 'api-v1';
const PAGES_CACHE = 'pages-v1';

// Cache strategies
const CACHE_STRATEGIES = {
  static: 'cacheFirst',
  api: 'networkFirst',
  pages: 'staleWhileRevalidate',
  images: 'cacheFirst',
};

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll([
        '/',
        '/about',
        '/contact',
        '/resources',
        '/case-studies',
        '/articles',
        '/favicon.ico',
        '/og-image.jpg',
        '/manifest.json',
        // Add critical CSS and JS files
        '/_next/static/css/',
        '/_next/static/js/',
      ]);
    })
  );
  
  // Skip waiting to activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && 
              cacheName !== STATIC_CACHE && 
              cacheName !== API_CACHE && 
              cacheName !== PAGES_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Take control of all clients immediately
  self.clients.claim();
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Determine cache strategy based on request type
  let strategy = CACHE_STRATEGIES.static;
  
  if (url.pathname.startsWith('/api/')) {
    strategy = CACHE_STRATEGIES.api;
  } else if (url.pathname.startsWith('/_next/static/')) {
    strategy = CACHE_STRATEGIES.static;
  } else if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$/)) {
    strategy = CACHE_STRATEGIES.images;
  } else if (url.pathname.startsWith('/_next/') || url.pathname === '/') {
    strategy = CACHE_STRATEGIES.pages;
  }
  
  // Apply appropriate strategy
  switch (strategy) {
    case 'cacheFirst':
      event.respondWith(cacheFirst(request));
      break;
    case 'networkFirst':
      event.respondWith(networkFirst(request));
      break;
    case 'staleWhileRevalidate':
      event.respondWith(staleWhileRevalidate(request));
      break;
    default:
      event.respondWith(fetch(request));
  }
});

// Cache First strategy - for static assets
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache first strategy failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network First strategy - for API calls
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(API_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', { status: 503 });
  }
}

// Stale While Revalidate strategy - for pages
async function staleWhileRevalidate(request) {
  const cache = await caches.open(PAGES_CACHE);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    // Return cached response if network fails
    return cachedResponse;
  });
  
  return cachedResponse || fetchPromise;
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Implement background sync logic here
  console.log('Background sync triggered');
}

// Push notifications
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      vibrate: [100, 50, 100],
      data: data.data,
      actions: data.actions || [],
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  );
});

// Message handling
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Performance monitoring
self.addEventListener('fetch', (event) => {
  const startTime = performance.now();
  
  event.respondWith(
    (async () => {
      try {
        const response = await fetch(event.request);
        const endTime = performance.now();
        
        // Log performance metrics
        console.log(`Resource loaded: ${event.request.url} in ${endTime - startTime}ms`);
        
        return response;
      } catch (error) {
        console.error('Fetch failed:', error);
        throw error;
      }
    })()
  );
});

// Cache cleanup
setInterval(() => {
  caches.keys().then((cacheNames) => {
    cacheNames.forEach((cacheName) => {
      caches.open(cacheName).then((cache) => {
        cache.keys().then((requests) => {
          if (requests.length > 100) { // Limit cache size
            const requestsToDelete = requests.slice(0, 20);
            requestsToDelete.forEach((request) => {
              cache.delete(request);
            });
          }
        });
      });
    });
  });
}, 60000); // Run every minute
