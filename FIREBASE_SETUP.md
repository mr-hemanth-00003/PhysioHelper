# Firebase Setup Guide for PhysioHelper

This guide will help you set up Firebase for the PhysioHelper platform to enable document management, user authentication, and data storage.

## Prerequisites

- A Google account
- Node.js and npm installed
- Basic knowledge of Firebase Console

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Enter project name: `physiohelper-[your-name]`
4. Disable Google Analytics (optional)
5. Click "Create Project"

## Step 2: Enable Firebase Services

### Authentication
1. In Firebase Console, go to "Authentication" → "Get Started"
2. Click "Sign-in method"
3. Enable "Email/Password" authentication
4. Click "Save"

### Firestore Database
1. Go to "Firestore Database" → "Create Database"
2. Choose "Start in test mode" (for development)
3. Select a location close to your users
4. Click "Done"

### Storage
1. Go to "Storage" → "Get Started"
2. Choose "Start in test mode" (for development)
3. Select a location close to your users
4. Click "Done"

## Step 3: Get Firebase Configuration

1. In Firebase Console, go to "Project Settings" (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" → "Web"
4. Enter app nickname: `physiohelper-web`
5. Click "Register app"
6. Copy the configuration object

## Step 4: Configure Environment Variables

1. Create a `.env.local` file in your project root
2. Add your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Step 5: Set Up Firestore Security Rules

1. Go to "Firestore Database" → "Rules"
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read their own documents
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Documents can be read by authenticated users, written by document owners
    match /documents/{documentId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        (request.auth.uid == resource.data.uploadedBy || 
         request.auth.uid == request.resource.data.uploadedBy);
    }
    
    // Courses can be read by authenticated users, written by course creators
    match /courses/{courseId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        (request.auth.uid == resource.data.createdBy || 
         request.auth.uid == request.resource.data.createdBy);
    }
  }
}
```

## Step 6: Set Up Storage Security Rules

1. Go to "Storage" → "Rules"
2. Replace the default rules with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Users can upload files to their own folder
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Documents can be read by authenticated users, written by document owners
    match /documents/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

## Step 7: Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to `/course-materials`
3. Try uploading a document (you'll need to be logged in)
4. Check Firebase Console to see if files are uploaded

## Step 8: Deploy to Production

1. Push your code to GitHub
2. In Vercel, add your environment variables:
   - Go to Project Settings → Environment Variables
   - Add all the Firebase environment variables
3. Deploy your project

## Troubleshooting

### Common Issues

1. **"Firebase: Error (auth/unauthorized-domain)"**
   - Add your domain to Firebase Console → Authentication → Settings → Authorized domains

2. **"Firebase: Error (storage/unauthorized)"**
   - Check Storage security rules
   - Ensure user is authenticated

3. **"Firebase: Error (firestore/permission-denied)"**
   - Check Firestore security rules
   - Ensure user has proper permissions

### Development Tips

1. **Use Firebase Emulator for Development**
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init emulators
   firebase emulators:start
   ```

2. **Enable Firebase Analytics** (optional)
   - Go to Analytics → Get Started
   - Follow the setup instructions

3. **Monitor Usage**
   - Check Firebase Console → Usage and billing
   - Monitor Firestore reads/writes
   - Monitor Storage usage

## Free Tier Limits (Spark Plan)

- **Firestore**: 50,000 reads/day, 20,000 writes/day, 1GB storage
- **Storage**: 1GB total storage, 50,000 uploads/day
- **Authentication**: 10,000 monthly active users
- **Hosting**: 10GB storage, 360MB/day data transfer

## Next Steps

1. Implement real-time updates using Firestore listeners
2. Add file compression for better storage efficiency
3. Implement user roles and permissions
4. Add document sharing and collaboration features
5. Set up automated backups

## Support

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Community](https://firebase.google.com/community)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/firebase)
