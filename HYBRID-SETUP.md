# PhysioHelper Hybrid Setup Guide
## Firebase Authentication + Neon PostgreSQL

This guide will help you set up PhysioHelper with Firebase for authentication and Neon PostgreSQL for data storage.

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Next.js App  │───▶│  Firebase Auth  │    │  Neon PostgreSQL│
│                 │    │                  │    │                 │
│ - Admin Panel  │    │ - User Login     │    │ - User Profiles │
│ - User Portal  │    │ - Registration   │    │ - Drug Database │
│ - API Routes   │    │ - Social Login   │    │ - Books Library │
│                 │    │ - Password Reset │    │ - Courses      │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install firebase pg @types/pg
```

### 2. Environment Configuration
Create `.env.local` in your project root:

```env
# Firebase Configuration (Authentication Only)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Neon PostgreSQL Database
DATABASE_URL=postgresql://neondb_owner:npg_0WypML7oEVGi@ep-snowy-fog-adj46ih8-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
# Alternative: NEON_DATABASE_URL (same value)
```

## 🔥 Firebase Setup (Authentication Only)

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing
3. Enable only **Authentication** service

### Step 2: Configure Authentication
1. Go to Authentication → Sign-in method
2. Enable Email/Password authentication
3. Optionally enable Google, Facebook, etc.
4. Set up authorized domains

### Step 3: Get Configuration
1. Project Settings → General → Your Apps
2. Add Web App (</>)
3. Copy the config object
4. Add to `.env.local`

## 🐘 Neon PostgreSQL Setup

### Step 1: Create Neon Database
1. Go to [Neon Console](https://console.neon.tech/)
2. Create new project
3. Choose region close to your users
4. Copy connection string

### Step 2: Database Configuration
Your connection string should look like:
```
postgresql://username:password@host/database?sslmode=require
```

### Step 3: Test Connection
```bash
# Test with psql (if you have it installed)
psql 'postgresql://neondb_owner:npg_0WypML7oEVGi@ep-snowy-fog-adj46ih8-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
```

## 🗄️ Database Schema

The hybrid service automatically creates these tables:

### Users Table
```sql
CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,           -- Firebase UID
  email VARCHAR(255) UNIQUE NOT NULL,    -- User email
  name VARCHAR(255) NOT NULL,            -- Full name
  role VARCHAR(50) DEFAULT 'student',    -- student/teacher/admin
  status VARCHAR(50) DEFAULT 'active',   -- active/inactive/suspended
  created_at TIMESTAMP DEFAULT NOW(),
  last_active TIMESTAMP DEFAULT NOW(),
  profile JSONB                          -- Extended profile data
);
```

### Drugs Table
```sql
CREATE TABLE drugs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  generic_name VARCHAR(255),
  category VARCHAR(100) NOT NULL,
  subcategory VARCHAR(100),
  description TEXT,
  indications TEXT[],
  contraindications TEXT[],
  side_effects TEXT[],
  dosage TEXT,
  interactions TEXT[],
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by VARCHAR(255) REFERENCES users(id)
);
```

### Books Table
```sql
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  author VARCHAR(255) NOT NULL,
  year INTEGER NOT NULL,
  category VARCHAR(100) NOT NULL,
  academic_year VARCHAR(50) NOT NULL,
  description TEXT,
  file_url TEXT,
  file_size BIGINT,
  status VARCHAR(50) DEFAULT 'draft',
  tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_by VARCHAR(255) REFERENCES users(id),
  downloads INTEGER DEFAULT 0,
  views INTEGER DEFAULT 0
);
```

## 🔧 Implementation

### 1. Update Admin Panel
Replace the old Firestore service with the hybrid service:

```typescript
// In src/app/admin/page.tsx
import HybridDatabaseService from '@/lib/hybrid-database';
import { seedDatabase } from '@/lib/hybrid-seeder';

// Replace FirestoreService with HybridDatabaseService
const fetchAllData = async () => {
  try {
    const stats = await HybridDatabaseService.getDashboardStats();
    const users = await HybridDatabaseService.getUsers();
    const drugs = await HybridDatabaseService.getDrugs();
    // ... etc
  } catch (error) {
    setError('Failed to fetch data');
  }
};
```

### 2. Update Authentication
```typescript
// In your auth components
import HybridDatabaseService from '@/lib/hybrid-database';

const handleLogin = async (email: string, password: string) => {
  try {
    const user = await HybridDatabaseService.signIn(email, password);
    // User is now authenticated via Firebase
    // Profile data is available in PostgreSQL
  } catch (error) {
    console.error('Login failed:', error);
  }
};
```

### 3. Database Operations
```typescript
// Create new drug
const newDrug = await HybridDatabaseService.createDrug({
  name: 'Aspirin',
  category: 'NSAID',
  description: 'Pain reliever',
  createdBy: currentUser.uid
});

// Get user profile
const userProfile = await HybridDatabaseService.getUser(currentUser.uid);

// Search drugs
const results = await HybridDatabaseService.searchDrugs('pain', 10);
```

## 🚀 Database Seeding

### Initialize Database
```typescript
import { seedDatabase } from '@/lib/hybrid-seeder';

// This will create tables and populate with sample data
await seedDatabase();
```

### Sample Data Included
- **Users**: Admin, Teacher, Student accounts
- **Drugs**: Common medications with detailed information
- **Books**: Sample textbooks by academic year
- **Courses**: Sample physiotherapy courses
- **Assessments**: Sample quizzes and exams

## 🔐 Authentication Flow

### 1. User Registration
```
User Input → Firebase Auth → Create User → Store Profile in PostgreSQL
```

### 2. User Login
```
User Input → Firebase Auth → Get UID → Fetch Profile from PostgreSQL
```

### 3. Session Management
```
Firebase Token → Validate → Get User Data → Update Last Active
```

## 📊 Benefits of Hybrid Approach

### Firebase Auth Advantages
- ✅ **Robust Authentication**: Social logins, MFA, password reset
- ✅ **Security**: Google-managed security infrastructure
- ✅ **Scalability**: Handles millions of users
- ✅ **Free Tier**: Generous free authentication limits

### Neon PostgreSQL Advantages
- ✅ **ACID Compliance**: Reliable data transactions
- ✅ **Complex Queries**: SQL joins, aggregations, full-text search
- ✅ **Cost Effective**: Pay-per-use, generous free tier
- ✅ **Performance**: Optimized for read-heavy workloads
- ✅ **Backup**: Automatic backups and point-in-time recovery

## 🐛 Troubleshooting

### Common Issues

#### 1. Database Connection Failed
```bash
# Check environment variables
echo $DATABASE_URL

# Test connection manually
psql $DATABASE_URL -c "SELECT 1;"
```

#### 2. Firebase Auth Not Working
- Verify Firebase config in `.env.local`
- Check Firebase Console for authentication errors
- Ensure domain is authorized

#### 3. Tables Not Created
```typescript
// Manually initialize database
await HybridDatabaseService.initializeDatabase();
```

#### 4. Permission Denied
- Check Neon database permissions
- Verify connection string format
- Ensure SSL is enabled

### Debug Steps

1. **Check Environment Variables**
   ```bash
   cat .env.local
   ```

2. **Test Database Connection**
   ```bash
   psql $DATABASE_URL -c "SELECT version();"
   ```

3. **Check Firebase Config**
   - Browser console for Firebase errors
   - Network tab for failed requests

4. **Verify Tables Exist**
   ```sql
   \dt  -- List tables in PostgreSQL
   ```

## 🔒 Security Considerations

### Production Security
1. **Environment Variables**: Never commit `.env.local`
2. **Database Access**: Use connection pooling
3. **Firebase Rules**: Restrict authentication domains
4. **SSL**: Always use SSL for database connections

### Data Validation
```typescript
// Validate user input before database operations
const validateDrugData = (data: any) => {
  if (!data.name || !data.category) {
    throw new Error('Missing required fields');
  }
  // Additional validation...
};
```

## 📈 Performance Optimization

### Database Indexes
The service automatically creates indexes for:
- User email and role
- Drug name and category
- Book academic year and category
- Assessment type and difficulty

### Connection Pooling
```typescript
// Optimized connection pool settings
const pool = new Pool({
  max: 20,                    // Maximum connections
  idleTimeoutMillis: 30000,   // Close idle connections
  connectionTimeoutMillis: 2000, // Connection timeout
});
```

## 🚀 Deployment

### Vercel Deployment
1. Set environment variables in Vercel dashboard
2. Ensure `DATABASE_URL` is set
3. Deploy with `npm run build`

### Environment Variables in Production
```env
# Production environment
DATABASE_URL=postgresql://prod_user:prod_pass@prod_host/prod_db?sslmode=require
NEXT_PUBLIC_FIREBASE_API_KEY=prod_api_key
# ... other production values
```

## 🔮 Future Enhancements

### Planned Features
- **Real-time Updates**: PostgreSQL notifications
- **Advanced Search**: Full-text search with PostgreSQL
- **Data Analytics**: Complex aggregations
- **Backup & Recovery**: Automated database backups

### Scaling Considerations
- **Read Replicas**: For heavy read workloads
- **Connection Pooling**: Optimize database connections
- **Caching**: Redis for frequently accessed data
- **CDN**: For static assets and files

## 📞 Support

### Getting Help
- **Firebase Docs**: [firebase.google.com/docs](https://firebase.google.com/docs)
- **Neon Docs**: [neon.tech/docs](https://neon.tech/docs)
- **PostgreSQL Docs**: [postgresql.org/docs](https://postgresql.org/docs)

### Common Commands
```bash
# Check database status
psql $DATABASE_URL -c "SELECT COUNT(*) FROM users;"

# View table structure
psql $DATABASE_URL -c "\d users"

# Backup database
pg_dump $DATABASE_URL > backup.sql
```

---

**PhysioHelper Hybrid Setup** - Best of both worlds: Firebase Auth + Neon PostgreSQL
