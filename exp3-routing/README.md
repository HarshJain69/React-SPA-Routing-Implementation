# Experiment 3: React SPA Routing Implementation

A comprehensive Single Page Application (SPA) built with React, TypeScript, and React Router DOM v6, demonstrating all essential routing concepts for modern web applications.

## 🎯 Project Overview

This project implements **Experiment 3: Implement Routing in SPA** using:
- **Framework**: Vite + React
- **Language**: TypeScript
- **Routing**: React Router DOM v6
- **Rendering**: Client Side Rendering (CSR)

## 🌟 Features Implemented

### ✅ Core Routing Features
- **Basic Routing**: Multiple pages with clean URL structure
- **Dynamic Routes**: Product details with URL parameters (`/products/:id`)
- **Nested Routes**: Dashboard with nested sub-pages
- **Programmatic Navigation**: Form redirects and navigation controls
- **Protected Routes**: Authentication-based access control
- **404 Handling**: User-friendly error pages

### 🗂️ Route Structure

#### Public Routes
- `/` → Home page
- `/about` → About us
- `/contact` → Contact information
- `/products` → Product catalog
- `/products/:id` → Individual product details (dynamic)
- `/login` → User authentication

#### Protected Routes (Requires Authentication)
- `/dashboard` → Dashboard overview
- `/dashboard/profile` → User profile management
- `/dashboard/settings` → Application settings

#### Fallback Route
- `*` → 404 Not Found page

## 🏗️ Architecture

### Folder Structure
```
src/
├── main.tsx                 # App entry point with routing setup
├── App.tsx                  # Main app with navigation
├── routes/
│   ├── AppRoutes.tsx       # Central routing configuration
│   └── ProtectedRoute.tsx  # Authentication guard
├── layout/
│   └── DashboardLayout.tsx # Nested route layout
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Products.tsx        # Product catalog
│   ├── ProductDetails.tsx  # Dynamic route handler
│   ├── Login.tsx           # Authentication
│   ├── Dashboard.tsx       # Protected dashboard
│   ├── Profile.tsx         # Nested route
│   ├── Settings.tsx        # Nested route
│   └── NotFound.tsx        # 404 handler
└── types/
    └── auth.ts             # Authentication context & types
```

## 🔧 Technical Implementation

### Router Setup
- **BrowserRouter** wraps the entire application in `main.tsx`
- **AuthProvider** manages authentication state globally
- **Routes** and **Route** components define the routing structure

### Navigation Components
- **Link**: Basic navigation without page reload
- **NavLink**: Navigation with active state highlighting
- **useNavigate**: Programmatic navigation hook

### Dynamic Routing
```typescript
// URL: /products/123
const { id } = useParams<{ id: string }>();
// Access product ID from URL parameter
```

### Nested Routes
```typescript
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<Dashboard />} />
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

### Protected Routes
```typescript
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Running
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development URL
Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🧪 Testing the Features

### 1. Basic Navigation
- Use the navigation bar to visit different pages
- Notice how the URL changes without page reloads
- Observe active link highlighting

### 2. Dynamic Routes
- Go to `/products`
- Click on any product to see dynamic routing (`/products/1`, `/products/2`, etc.)
- Try invalid product IDs to see error handling

### 3. Protected Routes
- Try accessing `/dashboard` without logging in (redirects to login)
- Login with any username/password
- Explore nested dashboard routes: `/dashboard/profile`, `/dashboard/settings`

### 4. 404 Error Handling
- Visit any non-existent URL (e.g., `/invalid-page`)
- See the custom 404 page with navigation options

### 5. Authentication Flow
- Login redirects to dashboard
- Dashboard shows user information
- Logout returns to home page
- Protected routes redirect unauthenticated users

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-friendly navigation
- Adaptive layouts for different screen sizes
- Touch-friendly interface elements

## 🔒 Authentication System

### Features
- Simple mock authentication (any username/password works)
- Persistent login state during session
- Automatic redirects for protected routes
- User context available throughout the app

### Context API Usage
```typescript
const { isAuthenticated, user, login, logout } = useAuthContext();
```

## 🎨 Styling

- Clean, modern design with Bootstrap-inspired colors
- Consistent spacing and typography
- Interactive hover effects
- Professional navigation and layouts

## 📝 Key Learning Outcomes

This project demonstrates:
- **React Router DOM v6** syntax and best practices
- **TypeScript** integration with routing
- **Context API** for state management
- **Protected routes** implementation
- **Nested routing** with layouts
- **Programmatic navigation** patterns
- **Error boundary** concepts
- **SPA architecture** principles

## 🔄 SPA Behavior

✅ **Confirmed SPA Features:**
- No page reloads during navigation
- Fast transitions between routes
- Shared state across routes
- SEO-friendly URLs
- Browser back/forward button support

## 🚀 Production Ready

The application is production-ready with:
- TypeScript for type safety
- Optimized Vite build process
- Modern React patterns
- Clean code architecture
- Comprehensive error handling

---

**Built with ❤️ using React, TypeScript, and React Router DOM v6**
