'use client';

import { useEffect } from 'react';

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
          });

          console.log('Service Worker registered successfully:', registration);

          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, prompt user to refresh
                  if (confirm('New version available! Refresh to update?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });

          // Handle controller change
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            window.location.reload();
          });

        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      };

      registerSW();
    }
  }, []);

  return null;
}

// Service Worker utilities
export const swUtils = {
  // Check if service worker is supported
  isSupported: (): boolean => {
    return typeof window !== 'undefined' && 'serviceWorker' in navigator;
  },

  // Get service worker registration
  getRegistration: async (): Promise<ServiceWorkerRegistration | null> => {
    if (!swUtils.isSupported()) return null;
    
    try {
      return await navigator.serviceWorker.getRegistration() || null;
    } catch (error) {
      console.error('Failed to get service worker registration:', error);
      return null;
    }
  },

  // Unregister service worker
  unregister: async (): Promise<boolean> => {
    if (!swUtils.isSupported()) return false;
    
    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        return await registration.unregister();
      }
      return false;
    } catch (error) {
      console.error('Failed to unregister service worker:', error);
      return false;
    }
  },

  // Send message to service worker
  sendMessage: async (message: any): Promise<any> => {
    if (!swUtils.isSupported()) return null;
    
    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration && registration.active) {
        return new Promise((resolve, reject) => {
          const messageChannel = new MessageChannel();
          messageChannel.port1.onmessage = (event) => {
            resolve(event.data);
          };
          registration.active!.postMessage(message, [messageChannel.port2]);
        });
      }
    } catch (error) {
      console.error('Failed to send message to service worker:', error);
    }
  },

  // Check for updates
  checkForUpdates: async (): Promise<void> => {
    if (!swUtils.isSupported()) return;
    
    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        await registration.update();
      }
    } catch (error) {
      console.error('Failed to check for updates:', error);
    }
  },

  // Get cache size
  getCacheSize: async (): Promise<number> => {
    if (!swUtils.isSupported()) return 0;
    
    try {
      const caches = await window.caches.keys();
      let totalSize = 0;
      
      for (const cacheName of caches) {
        const cache = await window.caches.open(cacheName);
        const keys = await cache.keys();
        totalSize += keys.length;
      }
      
      return totalSize;
    } catch (error) {
      console.error('Failed to get cache size:', error);
      return 0;
    }
  },

  // Clear all caches
  clearAllCaches: async (): Promise<void> => {
    if (!swUtils.isSupported()) return;
    
    try {
      const caches = await window.caches.keys();
      await Promise.all(caches.map(cacheName => window.caches.delete(cacheName)));
    } catch (error) {
      console.error('Failed to clear caches:', error);
    }
  },
};
