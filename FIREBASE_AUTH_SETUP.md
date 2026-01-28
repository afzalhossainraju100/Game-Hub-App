# Firebase Authentication Setup - Complete Guide

## Overview

Your Game Hub application now has a fully functional Firebase authentication system with login and registration features.

---

## Files Updated & Their Purposes

### 1. **src/Context/AuthContext.jsx** ✅

**Purpose**: Provides authentication context to the entire application

**Key Features**:

- Creates Firebase auth instance
- Provides authentication functions:
  - `createUser(email, password)` - Register new users
  - `signInUser(email, password)` - Login users
  - `updateUser(updatedData)` - Update user profile (name, photo)
  - `logOut()` - Sign out users
- Monitors auth state with `onAuthStateChanged`
- Provides `user` and `loading` states

**Usage**:

```jsx
const { user, loading, createUser, signInUser, updateUser, logOut } =
  useContext(AuthContext);
```

---

### 2. **src/main.jsx** ✅

**Purpose**: Wraps entire app with AuthProvider

**What Changed**:

- Added `AuthProvider` wrapper around `RouterProvider`
- Ensures all routes have access to authentication context

**Structure**:

```jsx
<AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>
```

---

### 3. **src/Pages/Login/Login.jsx** ✅

**Purpose**: User login page with email/password authentication

**Features**:

- Form validation
- Real-time error messages
- Loading state during sign-in
- Specific error codes (user not found, wrong password, etc.)
- Redirects to intended page after login
- Link to registration page

**Error Handling**:

- User not found
- Wrong password
- Invalid email
- User account disabled

---

### 4. **src/Pages/Registration/Registration.jsx** ✅

**Purpose**: User registration page with profile setup

**Features**:

- Name validation (minimum 3 characters)
- Email and password input
- Optional photo URL
- Real-time error messages
- Updates user profile after registration
- Specific error codes (email already in use, weak password, etc.)
- Link to login page

**Error Handling**:

- Email already in use
- Weak password (less than 6 characters)
- Invalid email format
- Display all custom error messages

---

### 5. **src/Provider/PrivateRoute.jsx** ✅

**Purpose**: Protects routes that require authentication

**Features**:

- Checks if user is logged in
- Shows loading state while checking auth
- Redirects unauthenticated users to login
- Saves intended location for redirect after login

**Usage**:

```jsx
<PrivateRoute>
  <ProtectedComponent />
</PrivateRoute>
```

---

### 6. **src/Routes/Routes.jsx** ✅

**Purpose**: Defines all application routes

**Protected Routes**:

- `/allapps` - Requires login
- `/appDetails/:id` - Requires login

**Public Routes**:

- `/` - Home page (accessible to all)
- `/auth/login` - Login page
- `/auth/registration` - Registration page

---

## Step-by-Step Guide to Use

### Register a New User

1. Go to `/auth/registration`
2. Enter name (minimum 3 characters)
3. Enter email address
4. Enter password (minimum 6 characters)
5. (Optional) Enter photo URL
6. Click "Register"
7. On success, redirect to login page

### Login

1. Go to `/auth/login`
2. Enter registered email
3. Enter password
4. Click "Login"
5. On success, redirect to home page or intended page

### Access Protected Pages

1. Login first
2. Navigate to `/allapps` or `/appDetails/:id`
3. If not logged in, redirect to login page automatically

### Logout

```jsx
const { logOut } = useContext(AuthContext);
const handleLogout = () => {
  logOut().then(() => {
    // Handle logout success
  });
};
```

---

## Firebase Configuration

Your Firebase config is in: **src/Firebase/Firebase.config.js**

The following Firebase services are initialized:

- Authentication (Firebase Auth)
- Analytics

---

## Error Messages

### Registration Errors

- **Email already in use**: This email is already registered
- **Weak password**: Password must be at least 6 characters
- **Invalid email**: The email format is invalid

### Login Errors

- **User not found**: Email is not registered. Please register first
- **Wrong password**: Incorrect password. Try again
- **Invalid email**: The email format is invalid
- **User disabled**: Contact support. This account has been disabled

---

## Context Values Available

```jsx
const {
  user, // Current logged-in user object (null if not logged in)
  loading, // Boolean indicating if auth is still loading
  createUser, // Function to register new user
  signInUser, // Function to login user
  updateUser, // Function to update user profile
  logOut, // Function to logout user
  setUser, // Function to manually set user
} = useContext(AuthContext);
```

---

## How It Works

### Authentication Flow

```
User Registration
  ↓
createUser(email, password)
  ↓
updateUser(name, photoURL)
  ↓
setUser (update context)
  ↓
Redirect to Login

User Login
  ↓
signInUser(email, password)
  ↓
onAuthStateChanged (automatically updates user)
  ↓
Redirect to home/intended page

Protected Route
  ↓
Check if user exists
  ↓
If yes → Show protected component
If no → Redirect to login
```

---

## Security Notes

1. ✅ Passwords are never stored in your code
2. ✅ Firebase handles password hashing and encryption
3. ✅ Protected routes prevent unauthorized access
4. ✅ Auth state persists across page refreshes
5. ✅ Form validation on client side
6. ✅ Error messages don't expose sensitive info

---

## Testing Checklist

- [ ] Register a new user successfully
- [ ] Error message appears for invalid email
- [ ] Error message appears for weak password
- [ ] Error message appears when email already exists
- [ ] Login with registered credentials works
- [ ] Error message appears for wrong password
- [ ] Logout works correctly
- [ ] Protected pages redirect to login when not authenticated
- [ ] After login, can access protected pages
- [ ] User profile displays correct name and photo
- [ ] Page refresh maintains authentication state

---

## Troubleshooting

### "Cannot destructure property" Error

**Solution**: Ensure AuthProvider wraps your app in main.jsx

### User gets logged out on page refresh

**Solution**: This is normal during initial auth check. Use the `loading` state to show a loading page during this time.

### Password weak error

**Solution**: Firebase requires passwords to be at least 6 characters. Make sure you're entering a strong password.

### "user is null" in updateUser

**Solution**: Wait for user creation to complete before calling updateUser, or check if `auth.currentUser` exists.

---

## Next Steps (Optional Features)

1. Add password reset functionality
2. Add email verification
3. Add social login (Google, GitHub, etc.)
4. Add user profile page
5. Add role-based access control
6. Add 2FA (Two-Factor Authentication)

---

## Support

For Firebase documentation: https://firebase.google.com/docs/auth
For React Router v6: https://reactrouter.com/
For your app: Check console logs for detailed error messages
