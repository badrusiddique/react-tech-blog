# React Tech Blog

A modern tech blog application built with React, Vite, and Appwrite as the backend service. This project demonstrates authentication, content management, and modern web development practices using the latest React features and state management tools.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Available Scripts](#available-scripts)
- [Key Components](#key-components)
- [Authentication](#authentication)
- [Development](#development)

## 🎯 Overview

This is a full-featured tech blog application that leverages Appwrite's Backend-as-a-Service (BaaS) platform for authentication, database, and storage. The application is built with React 19 and uses modern tools like Vite for blazing-fast development, Redux Toolkit for state management, and TailwindCSS for styling.

## 🚀 Tech Stack

### Frontend
- **React 19.2.0** - Latest version with improved performance and features
- **Vite 7.2.4** - Next-generation frontend build tool
- **TailwindCSS 4.1.18** - Utility-first CSS framework
- **React Router DOM 7.11.0** - Client-side routing

### State Management
- **Redux Toolkit 2.11.2** - Modern Redux state management
- **React Redux 9.2.0** - Official React bindings for Redux

### Backend Services
- **Appwrite 21.5.0** - Open-source backend server for authentication, database, and storage

### Forms & UI
- **React Hook Form 7.70.0** - Performant form validation
- **TinyMCE React 6.3.0** - Rich text editor for blog content
- **HTML React Parser 5.2.11** - Parse HTML strings into React components

### Development Tools
- **ESLint 9.39.1** - Code linting
- **Vite Plugin React** - Fast Refresh support

## 📁 Project Structure

```
react-tech-blog/
├── 00-tech-blog/                 # Main application directory
│   ├── public/                   # Static assets
│   ├── src/
│   │   ├── appwrite/            # Appwrite integration layer
│   │   │   ├── authContext.js   # Authentication services (login, logout, user management)
│   │   │   ├── dbContext.js     # Database operations (CRUD for blog posts)
│   │   │   └── bucketContext.js # File storage operations (upload, download, preview)
│   │   ├── assets/              # Images, fonts, and other assets
│   │   ├── config/              # Configuration files
│   │   │   └── index.js         # Appwrite environment config
│   │   ├── App.jsx              # Main application component
│   │   ├── App.css              # Application styles
│   │   ├── main.jsx             # Application entry point
│   │   └── index.css            # Global styles
│   ├── eslint.config.js         # ESLint configuration
│   ├── vite.config.js           # Vite configuration
│   ├── package.json             # Dependencies and scripts
│   ├── index.html               # HTML template
│   └── README.md                # Project-specific README
└── README.md                     # This file
```

## ✨ Features

### Current Features
- **User Authentication**: Complete authentication system with login, logout, and user registration
- **Blog Post Management**: Full CRUD operations for blog posts (Create, Read, Update, Delete)
- **File Storage**: Upload, download, preview, and delete images/files
- **Database Operations**: Query blog posts by status, ID, or list all posts
- **Appwrite Integration**: Fully integrated with Appwrite backend services (Auth, Database, Storage)
- **Modern React**: Built with React 19 and latest best practices
- **Responsive Design**: TailwindCSS for mobile-first responsive design
- **Hot Module Replacement**: Instant feedback during development
- **Form Handling**: React Hook Form for performant form validation
- **Rich Text Editor**: TinyMCE integration for creating blog posts

### Planned Features
- User profile management
- Blog post categories and tags
- Advanced search and filtering
- Comments system
- Social sharing
- Draft management
- SEO optimization

## 🏁 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
- An Appwrite account and project setup

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/badrusiddique/react-tech-blog.git
   cd react-tech-blog/00-tech-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `00-tech-blog` directory with the following variables:
   ```env
   VITE_APPWRITE_URL=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_BUCKET_ID=your_bucket_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## ⚙️ Configuration

### Appwrite Configuration

The Appwrite configuration is managed in [src/config/index.js](00-tech-blog/src/config/index.js). It pulls environment variables for:

- **appwriteUrl**: Your Appwrite endpoint
- **appwriteProjectId**: Your Appwrite project ID
- **appwriteDatabaseId**: Database ID for storing blog posts
- **appwriteCollectionId**: Collection ID for blog content
- **appwriteBucketId**: Bucket ID for file storage

### Vite Configuration

The Vite configuration ([vite.config.js](00-tech-blog/vite.config.js)) includes:
- React plugin for Fast Refresh
- TailwindCSS Vite plugin for optimized styling

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🔑 Key Components

### Authentication Service (`authContext.js`)

Located in [src/appwrite/authContext.js](00-tech-blog/src/appwrite/authContext.js), provides complete user authentication:

- **`login({ email, password })`** - Authenticate users with email/password
- **`logout({ sessionId })`** - End user sessions
- **`getCurrentUser()`** - Retrieve current authenticated user
- **`createUser({ email, password })`** - Register new users

### Database Service (`dbContext.js`)

Located in [src/appwrite/dbContext.js](00-tech-blog/src/appwrite/dbContext.js), manages blog post data:

- **`getDocuments()`** - Retrieve all blog posts
- **`getDocumentById(rowId)`** - Get a specific blog post by ID
- **`getDocumentsByStatus(status)`** - Filter posts by status (active, draft, etc.)
- **`createDocument({ data })`** - Create a new blog post with title, content, slug, featureImage, status, and createdBy
- **`updateDocument({ rowId, data })`** - Update an existing blog post
- **`deleteDocument(rowId)`** - Delete a blog post

### Storage Service (`bucketContext.js`)

Located in [src/appwrite/bucketContext.js](00-tech-blog/src/appwrite/bucketContext.js), handles file operations:

- **`createFile(file)`** - Upload files (images, documents)
- **`downloadFile(fileId)`** - Download files from storage
- **`previewFile(fileId)`** - Get file preview URL
- **`deleteFile(fileId)`** - Remove files from storage

### Configuration

[src/config/index.js](00-tech-blog/src/config/index.js) centralizes all Appwrite configuration using environment variables, making it easy to manage different environments (development, staging, production).

### Main Application

[src/App.jsx](00-tech-blog/src/App.jsx) serves as the root component, currently displaying the application title and ready to be expanded with routing and additional features.

## 🔐 Authentication

The authentication system is built on Appwrite's Account API and includes:

1. **User Registration**: Create new accounts with email/password
2. **Session Management**: Secure session handling
3. **User Verification**: Check for existing users
4. **Error Handling**: Comprehensive error logging for debugging

Example usage:
```javascript
import { login, createUser, getCurrentUser, logout } from './appwrite/authContext';

// Register a new user
const user = await createUser({ 
  email: 'user@example.com', 
  password: 'securepassword' 
});

// Login
const session = await login({ 
  email: 'user@example.com', 
  password: 'securepassword' 
});

// Get current user
const currentUser = await getCurrentUser();

// Logout
await logout({ sessionId: 'current' });
```

## 📝 Blog Post Management

The database service provides full CRUD functionality for blog posts:

```javascript
import { 
  createDocument, 
  getDocuments, 
  getDocumentById,
  getDocumentsByStatus,
  updateDocument, 
  deleteDocument 
} from './appwrite/dbContext';

// Create a new blog post
const newPost = await createDocument({
  data: {
    title: 'My First Blog Post',
    content: 'This is the content of my blog post',
    slug: 'my-first-blog-post',
    featureImage: 'image-file-id',
    status: 'active',
    createdBy: 'user-id'
  }
});

// Get all blog posts
const allPosts = await getDocuments();

// Get posts by status
const activePosts = await getDocumentsByStatus('active');

// Get a specific post
const post = await getDocumentById('post-id');

// Update a blog post
const updatedPost = await updateDocument({
  rowId: 'post-id',
  data: {
    title: 'Updated Title',
    content: 'Updated content',
    slug: 'updated-slug',
    status: 'active'
  }
});

// Delete a blog post
await deleteDocument('post-id');
```

## 📁 File Storage

The storage service handles all file operations:

```javascript
import { 
  createFile, 
  downloadFile, 
  previewFile, 
  deleteFile 
} from './appwrite/bucketContext';

// Upload a file
const uploadedFile = await createFile(fileObject);

// Get file preview URL
const previewUrl = previewFile('file-id');

// Download a file
const fileData = await downloadFile('file-id');

// Delete a file
await deleteFile('file-id');
```

## 💻 Development

### Code Style
- ESLint is configured for React best practices
- Uses React Hooks and functional components
- Follows modern JavaScript ES6+ syntax

### State Management
- Redux Toolkit is set up for global state management
- React Redux for connecting components to the store

### Styling
- TailwindCSS for utility-first styling
- Custom CSS in App.css and index.css for additional styling

### Development Workflow
1. Make changes to source files
2. Hot Module Replacement (HMR) automatically updates the browser
3. Run linting with `npm run lint`
4. Build for production with `npm run build`
5. Preview production build with `npm run preview`

## 🔮 Future Enhancements

- User dashboard with analytics
- Advanced profile management
- Blog post categories and tags with filtering
- Advanced search functionality with full-text search
- Comments and reactions system
- Social media sharing integration
- Draft auto-save functionality
- SEO optimization and meta tags
- Dark mode support
- Progressive Web App (PWA) features
- Email notifications
- Multi-author support
- Content moderation tools

## 📝 License

This project is part of a learning initiative.

## 👤 Author

**Badru Siddique**
- GitHub: [@badrusiddique](https://github.com/badrusiddique)
- Repository: [react-tech-blog](https://github.com/badrusiddique/react-tech-blog)

---

**Note**: This is a learning project demonstrating the integration of React with Appwrite for building modern web applications. The project is actively under development, and new features are being added regularly.
