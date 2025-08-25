# PhysioHelper - Comprehensive Physiotherapy Learning Platform

A modern, responsive web application designed for physiotherapy students and professionals, featuring comprehensive drug databases, educational resources, and a powerful admin panel.

## 🚀 Features

### Core Platform
- **Drug Database**: 2000+ comprehensive drug listings with detailed information
- **Digital Library**: Academic year-based textbook collections (2010-2024)
- **Course Management**: Interactive learning modules with assessments
- **Study Resources**: Anatomy guides, clinical skills, and evidence-based resources
- **Responsive Design**: Mobile-first approach with custom breakpoints

### Admin Panel
- **Comprehensive Dashboard**: Real-time statistics and analytics
- **User Management**: Student, teacher, and admin role management
- **Content Management**: Drugs, books, courses, and assessments
- **Data Analytics**: Platform usage statistics and insights
- **Database Operations**: Seeding, clearing, and bulk operations

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Database**: Firebase Firestore
- **Authentication**: Client-side admin authentication
- **Deployment**: Vercel-ready with optimized builds

## 📁 Project Structure

```
PhysioHelper/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── admin/             # Admin panel pages
│   │   ├── courses/           # Course pages and assessments
│   │   ├── resources/         # Study resources and library
│   │   └── ...                # Other app pages
│   ├── components/            # Reusable React components
│   │   ├── ui/               # Shadcn/ui components
│   │   ├── admin-auth.tsx    # Admin authentication
│   │   └── ...               # Other components
│   ├── lib/                  # Utility libraries
│   │   ├── firestore-admin.ts # Firestore service layer
│   │   ├── firestore-seeder.ts # Database seeding utilities
│   │   ├── combined-drugs.ts  # Merged drug database
│   │   └── ...               # Other utilities
│   └── hooks/                # Custom React hooks
├── public/                   # Static assets
├── docs/                    # Documentation
└── configuration files      # Next.js, Tailwind, etc.
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Firebase project (for admin panel)

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd PhysioHelper

# Install dependencies
npm install

# Start development server
npm run dev
```

### Firebase Setup (Required for Admin Panel)

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project

2. **Enable Firestore Database**
   - Go to Firestore Database
   - Create database in test mode
   - Choose location close to your users

3. **Get Configuration**
   - Project Settings → General → Your Apps
   - Add web app and copy config

4. **Environment Variables**
   Create `.env.local` in project root:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. **Install Firebase**
   ```bash
   npm install firebase
   ```

## 🔐 Admin Panel Access

### URL
```
http://localhost:3000/admin
```

### Demo Credentials
- **Username**: `admin`
- **Password**: `admin123`

### Features
- **Dashboard**: Real-time statistics and quick actions
- **Users**: Manage student and teacher accounts
- **Drugs**: Comprehensive drug database management
- **Books**: Digital library resource management
- **Courses**: Educational course management
- **Assessments**: Quiz and test management
- **Analytics**: Platform usage insights
- **System**: Database operations and maintenance

### Quick Actions
- **Seed Database**: Populate with sample data
- **Refresh Data**: Update all data from Firestore
- **Clear Database**: Remove all data (use with caution)

## 📊 Data Management

### Collections
- `users` - User accounts and profiles
- `drugs` - Drug database (2000+ entries)
- `books` - Library resources by academic year
- `courses` - Educational modules
- `assessments` - Quizzes and tests
- `analytics` - Platform statistics

### Sample Data
The admin panel includes comprehensive sample data for testing:
- 50+ sample users with different roles
- 100+ sample drugs with detailed information
- 200+ sample books across academic years
- 25+ sample courses with modules
- 50+ sample assessments
- Analytics data for insights

## 🎨 UI Components

### Responsive Design
- Mobile-first approach
- Custom breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Responsive utilities: `responsive-container`, `responsive-grid`, `responsive-text`

### Component Library
- **Shadcn/ui**: Modern, accessible components
- **Lucide Icons**: Consistent iconography
- **Tailwind CSS**: Utility-first styling

## 📱 Responsive Features

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

### Responsive Utilities
- `responsive-container`: Adaptive container sizing
- `responsive-grid`: Dynamic grid layouts
- `responsive-text`: Scalable typography
- `responsive-padding`: Adaptive spacing
- `responsive-margin`: Dynamic margins

## 🔧 Development

### Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Responsive design best practices

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Manual Deployment
```bash
npm run build
npm run start
```

## 📚 Documentation

### Detailed Guides
- [Firebase Setup Guide](src/app/admin/FIREBASE-SETUP.md) - Complete Firebase configuration
- [Responsive Design Documentation](src/app/responsive-design-documentation.md) - Design system details

### API Reference
- **FirestoreService**: Complete database operations
- **Admin Components**: Admin panel architecture
- **UI Components**: Reusable component library

## 🐛 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### Firebase Connection
- Verify environment variables
- Check Firestore security rules
- Ensure database is created

#### Admin Panel Issues
- Clear browser localStorage
- Check Firebase configuration
- Verify collection names

### Debug Steps
1. Check browser console for errors
2. Verify environment variables
3. Test Firestore connection
4. Check network requests

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch
3. Make changes with responsive design
4. Test across devices
5. Submit pull request

### Code Standards
- TypeScript for all components
- Responsive design principles
- Accessibility best practices
- Component documentation

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

### Getting Help
- Check [Firebase Documentation](https://firebase.google.com/docs)
- Review [Next.js Documentation](https://nextjs.org/docs)
- Check browser console for detailed errors

### Contact
For support and questions, please open an issue in the repository.

---

**PhysioHelper** - Empowering physiotherapy education with modern technology and comprehensive resources.
