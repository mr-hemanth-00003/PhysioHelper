# Firebase Setup Guide for Admin Panel

## Prerequisites
- A Firebase project (create one at [console.firebase.google.com](https://console.firebase.google.com/))
- Node.js and npm installed

## Step 1: Install Dependencies
```bash
npm install firebase
```

## Step 2: Firebase Configuration

### 2.1 Get Firebase Config
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click the gear icon (⚙️) next to "Project Overview"
4. Select "Project settings"
5. Scroll down to "Your apps" section
6. Click the web app icon (</>)
7. Copy the config object

### 2.2 Create Environment File
Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Step 3: Enable Firestore Database

### 3.1 Create Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users
5. Click "Done"

### 3.2 Set Security Rules
In Firestore Database > Rules, set:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to all users under any document
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

**⚠️ Warning: These rules allow full access. Use proper authentication in production.**

## Step 4: Create Collections

The admin panel expects these collections:

- `users` - User accounts and profiles
- `drugs` - Drug database information
- `books` - Library resources
- `courses` - Educational courses
- `assessments` - Quizzes and tests
- `analytics` - Platform statistics

### 4.1 Auto-Create Collections
1. Go to your admin panel (`/admin`)
2. Login with `admin/admin123`
3. Click "Seed Database" button
4. This will automatically create all collections with sample data

## Step 5: Test the Setup

### 5.1 Start Development Server
```bash
npm run dev
```

### 5.2 Access Admin Panel
1. Navigate to `http://localhost:3000/admin`
2. Login with demo credentials:
   - Username: `admin`
   - Password: `admin123`

### 5.3 Verify Data Loading
- Dashboard should show real-time statistics
- All tabs should display data from Firestore
- "Seed Database" button should populate collections

## Troubleshooting

### Common Issues

#### 1. "Failed to fetch data from Firestore"
- Check your `.env.local` file exists
- Verify Firebase config values are correct
- Ensure Firestore Database is created
- Check browser console for detailed errors

#### 2. "Permission denied" errors
- Verify Firestore security rules allow read/write
- Check if you're in test mode
- Ensure collections exist

#### 3. Empty data displays
- Click "Seed Database" to populate with sample data
- Check Firestore Console to see if data was created
- Verify collection names match exactly

### Debug Steps

1. **Check Environment Variables**
   ```bash
   # In your terminal
   cat .env.local
   ```

2. **Verify Firebase Config**
   - Open browser console
   - Look for Firebase initialization logs
   - Check for configuration errors

3. **Test Firestore Connection**
   - Go to Firestore Console
   - Try to manually create a document
   - Verify you can read/write data

4. **Check Network Tab**
   - Open browser DevTools
   - Go to Network tab
   - Look for failed requests to Firebase

## Production Considerations

### Security Rules
Replace test mode rules with proper authentication:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```

### Authentication
- Implement proper user authentication
- Use Firebase Auth with custom claims
- Add role-based access control

### Data Validation
- Add input validation
- Implement data sanitization
- Use Firestore triggers for data consistency

### Monitoring
- Enable Firebase Analytics
- Set up error tracking
- Monitor database usage and costs

## Support

If you encounter issues:

1. Check the [Firebase Documentation](https://firebase.google.com/docs)
2. Review [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
3. Check [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
4. Review browser console for detailed error messages

## Sample Data Structure

After seeding, your collections will contain:

### Users Collection
```json
{
  "email": "john.doe@example.com",
  "name": "John Doe",
  "role": "student",
  "status": "active",
  "profile": {
    "institution": "University of Physiotherapy",
    "specialization": "Orthopedic Physiotherapy"
  }
}
```

### Drugs Collection
```json
{
  "name": "Paracetamol",
  "category": "Analgesic",
  "description": "Pain reliever and fever reducer",
  "indications": ["Pain relief", "Fever reduction"],
  "status": "active"
}
```

### Books Collection
```json
{
  "title": "Anatomy & Physiology for Physiotherapists",
  "author": "Dr. Robert Johnson",
  "year": 2024,
  "academicYear": "first-year",
  "status": "published"
}
```

This setup will give you a fully functional admin panel connected to Firestore!
