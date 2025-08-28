# Firebase OAuth Authentication Setup Guide

This guide will help you set up Firebase Authentication with all OAuth providers (Google, Microsoft, Phone, Email/Password) for your PhysioHelper application.

## Prerequisites

- Firebase project created
- Next.js application ready
- Environment variables configured

## Step 1: Firebase Console Setup

### 1.1 Enable Authentication
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Authentication** → **Sign-in method**
4. Click **Get started**

### 1.2 Enable Email/Password Authentication
1. Click on **Email/Password**
2. Toggle **Enable**
3. Toggle **Email link (passwordless sign-in)** if desired
4. Click **Save**

### 1.3 Enable Google Authentication
1. Click on **Google**
2. Toggle **Enable**
3. Add your **Project support email**
4. Click **Save**

### 1.4 Enable Microsoft Authentication
1. Click on **Microsoft**
2. Toggle **Enable**
3. Add your **Project support email**
4. Click **Save**

### 1.5 Enable Phone Authentication
1. Click on **Phone**
2. Toggle **Enable**
3. Add your **Project support email**
4. Click **Save**

## Step 2: Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Firebase Config
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Optional: Firebase Emulator (for development)
NEXT_PUBLIC_USE_FIREBASE_EMULATOR=false
```

## Step 3: Firebase Security Rules

### 3.1 Firestore Security Rules
Go to **Firestore Database** → **Rules** and update with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read and write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Public documents (read-only for authenticated users)
    match /documents/{documentId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

### 3.2 Storage Security Rules
Go to **Storage** → **Rules** and update with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Users can upload and manage their own files
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Public documents (read-only for authenticated users)
    match /documents/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

## Step 4: OAuth Provider Configuration

### 4.1 Google OAuth Setup
1. In Firebase Console, go to **Authentication** → **Sign-in method** → **Google**
2. Copy the **Web SDK configuration**
3. Add authorized domains in **Authorized domains**

### 4.2 Microsoft OAuth Setup
1. Go to [Azure Portal](https://portal.azure.com/)
2. Create a new **App registration**
3. Set redirect URI: `https://your-project-id.firebaseapp.com/__/auth/handler`
4. Copy **Application (client) ID** and **Directory (tenant) ID**
5. In Firebase Console, go to **Authentication** → **Sign-in method** → **Microsoft**
6. Add the **Client ID** and **Client secret**

### 4.3 Phone Authentication Setup
1. In Firebase Console, go to **Authentication** → **Sign-in method** → **Phone**
2. Add your **Project support email**
3. Configure **reCAPTCHA Enterprise** if needed

## Step 5: Testing OAuth Providers

### 5.1 Test Google Sign-in
1. Click "Continue with Google" button
2. Should redirect to Google OAuth consent screen
3. After successful authentication, user should be redirected to dashboard

### 5.2 Test Microsoft Sign-in
1. Click "Continue with Microsoft" button
2. Should redirect to Microsoft OAuth consent screen
3. After successful authentication, user should be redirected to dashboard

### 5.3 Test Phone Sign-in
1. Enter phone number with country code
2. Complete reCAPTCHA verification
3. Enter SMS verification code
4. After successful verification, user should be redirected to dashboard

### 5.4 Test Email/Password
1. Fill in email and password fields
2. Submit form
3. After successful authentication, user should be redirected to dashboard

## Step 6: Error Handling

Common errors and solutions:

### 6.1 "popup_closed_by_user"
- User closed the OAuth popup before completing authentication
- Solution: Inform users to complete the authentication flow

### 6.2 "auth/account-exists-with-different-credential"
- User tries to sign in with OAuth but account exists with email/password
- Solution: Implement account linking or suggest alternative sign-in method

### 6.3 "auth/invalid-phone-number"
- Phone number format is incorrect
- Solution: Ensure phone number includes country code (+1 for US, +91 for India, etc.)

### 6.4 "auth/invalid-verification-code"
- SMS verification code is incorrect or expired
- Solution: Allow users to request new code

## Step 7: Production Deployment

### 7.1 Authorized Domains
1. In Firebase Console, go to **Authentication** → **Settings**
2. Add your production domain to **Authorized domains**

### 7.2 Environment Variables
1. Set production environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Ensure all Firebase config values are correctly set

### 7.3 Security Headers
Add security headers to your Next.js app:

```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ];
  }
};
```

## Step 8: Monitoring and Analytics

### 8.1 Authentication Analytics
1. In Firebase Console, go to **Authentication** → **Users**
2. Monitor user sign-up methods and success rates

### 8.2 Error Monitoring
1. Set up Firebase Crashlytics for error tracking
2. Monitor authentication errors in Firebase Console

## Troubleshooting

### Issue: OAuth popup not opening
- Check if popup blockers are enabled
- Ensure domain is in authorized domains
- Verify Firebase configuration

### Issue: Phone authentication not working
- Check if phone number format is correct
- Verify reCAPTCHA is properly configured
- Ensure SMS service is enabled

### Issue: Users not being created in Firestore
- Check Firestore security rules
- Verify user creation logic in `convertFirebaseUser` function
- Check Firebase Console for errors

## Support

For additional help:
- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Firebase Console](https://console.firebase.google.com/)
- [Firebase Support](https://firebase.google.com/support)

## Security Best Practices

1. **Never expose Firebase config secrets** in client-side code
2. **Use environment variables** for all sensitive configuration
3. **Implement proper security rules** for Firestore and Storage
4. **Validate user input** on both client and server
5. **Monitor authentication attempts** for suspicious activity
6. **Regularly review OAuth app permissions**
7. **Implement rate limiting** for authentication attempts
8. **Use HTTPS** in production environments
