# 🌟 Dynamic Portfolio Website

A modern, fully dynamic portfolio website built with React, TypeScript, Tailwind CSS, and Firebase. Features a complete admin dashboard for content management - no code changes needed for updates!

## ✨ Features

### For Visitors (Public)
- 🎨 Modern, responsive design with smooth animations
- 📱 Mobile-first approach
- ⚡ Fast loading with optimized images
- 🎭 Clean, professional UI with Tailwind CSS
- 🔍 SEO-friendly structure

### For Admin (You)
- 🔐 Secure authentication with Firebase
- 📊 Comprehensive admin dashboard
- ✏️ Edit all content without coding
- 📸 Image upload for projects and profile
- 📄 Resume PDF upload
- 🎯 Real-time updates
- 💾 Cloud-based storage

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **Animations**: Framer Motion
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Routing**: React Router v6
- **Build Tool**: Vite

## 🚀 Quick Start

### 1. Clone the Repository
```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd shaik-siddiq-folio-nova-main

# Step 3: Install dependencies
npm install

# Step 4: Configure environment variables
cp .env.example .env
# Edit .env with your Firebase credentials

# Step 5: Start development server
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## 📖 Complete Setup Guide

**For detailed Firebase setup and configuration**, see **[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)**

**For quick reference and common commands**, see **[QUICK_START.md](./QUICK_START.md)**

## 🔐 Admin Access

### Login
Navigate to `/admin/login` and enter your credentials.

### Dashboard Features
- ✏️ Edit hero section (name, role, tagline, profile image)
- 📝 Update about section (bio, resume)
- 🎯 Manage skills (add/edit/delete with proficiency levels)
- 🚀 Manage projects (add/edit/delete with images and links)
- 📧 Update contact information

## 📦 What You Can Manage

All content is editable via the admin dashboard - no coding required!

- **Hero Section**: Name, role, tagline, profile picture
- **About Section**: Description, bio, resume PDF
- **Skills Section**: Add/edit/delete skills with categories and proficiency
- **Projects Section**: Add/edit/delete projects with images, links, and metadata
- **Contact Section**: Email, phone, location, social media links

## 🔒 Security

- ✅ Firebase Authentication (email/password)
- ✅ Protected admin routes
- ✅ Secure Firestore rules (public read, admin write)
- ✅ Secure Storage rules (public read, admin write)
- ✅ Environment variables for sensitive data

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables from `.env`
4. Deploy

### Netlify
```sh
npm run build
# Deploy 'dist' folder to Netlify
```

### Firebase Hosting
```sh
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## 📝 Content Update Workflow

1. Login to `/admin/login`
2. Make changes in the dashboard
3. Click "Save Changes"
4. Updates appear instantly on public site
5. No redeployment needed!

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── admin/          # Admin dashboard editors
│   └── ui/             # Reusable UI components
├── config/             # Firebase configuration
├── contexts/           # Auth context
├── services/           # Firebase services
│   ├── authService.ts
│   ├── firestoreService.ts
│   └── storageService.ts
├── pages/              # Route pages
└── App.tsx             # Main app with routing
```

## 🔥 Technologies Used

This project is built with:

- **Vite** - Fast build tool
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI framework
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Component library
- **Framer Motion** - Smooth animations
- **Firebase** - Backend services (Auth, Firestore, Storage)
- **React Router** - Client-side routing

## 🐛 Troubleshooting

See [QUICK_START.md](./QUICK_START.md#-troubleshooting) for common issues and solutions.

## 📜 License

This project is open source and available under the MIT License.

## 💡 Acknowledgments

- Initial design generated with [Lovable](https://lovable.dev/)
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Backend powered by [Firebase](https://firebase.google.com/)

---

**Made with ❤️ by Shaik Abubakar Siddiq**

Need help? Check out [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for detailed setup instructions!
