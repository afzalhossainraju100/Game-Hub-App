# 🚀 Quick Start Guide - Firebase Auth

## Get Up and Running in 2 Minutes

### Step 1: Start the Dev Server

```bash
npm run dev
```

Then go to: `http://localhost:5173`

---

## 🎯 Test Registration

**URL**: `http://localhost:5173/auth/registration`

**Form Fields**:

- Name: `John Doe` (minimum 3 characters)
- Email: `john@example.com`
- Password: `password123` (minimum 6 characters)
- Photo URL: (leave empty or add a URL)

**Expected Result**:

- ✅ See "Registration successful!" message
- ✅ Redirected to login page
- ✅ User appears in Firebase Console

---

## 🎯 Test Login

**URL**: `http://localhost:5173/auth/login`

**Form Fields**:

- Email: `john@example.com` (same as registered)
- Password: `password123` (same as registered)

**Expected Result**:

- ✅ See "Login successful!" message
- ✅ Redirected to home page
- ✅ Can see user info in navbar (if implemented)

---

## 🎯 Test Protected Routes

**After Logging In**:

- Go to: `http://localhost:5173/allapps`
- Should see the apps page ✅

**When Not Logged In**:

- Go to: `http://localhost:5173/allapps`
- Should redirect to login ❌→✅

---

## 🔐 Test Logout

**If Navbar Has Logout Button**:

- Click logout
- Should redirect to home
- Try visiting `/allapps` again
- Should redirect to login ✅

---

## ⚠️ Common Issues & Fixes

### Issue: "Email already in use" on registration

**Fix**: Use a different email address

### Issue: "Wrong password" on login

**Fix**: Make sure caps lock is off, password must match exactly

### Issue: Form doesn't submit

**Fix**:

- Check all fields are filled
- Check password is 6+ characters
- Check name is 3+ characters
- Check browser console for errors

### Issue: Can't access `/allapps` after login

**Fix**:

- Refresh the page
- Make sure you're actually logged in
- Check Firebase Console for user

---

## 📊 What's Working

| Feature          | Status | How to Test                   |
| ---------------- | ------ | ----------------------------- |
| Register         | ✅     | Go to `/auth/registration`    |
| Login            | ✅     | Go to `/auth/login`           |
| Protected Routes | ✅     | Try `/allapps` without login  |
| Logout           | ✅     | Click logout button           |
| Error Messages   | ✅     | Try wrong password            |
| Loading States   | ✅     | Click submit and watch button |
| Profile Update   | ✅     | Check Firebase Console        |

---

## 💾 Firebase Console

**To see your users**:

1. Go to: https://console.firebase.google.com
2. Select your project: `game-hub-9fc91`
3. Go to: **Authentication** → **Users**
4. You'll see all registered users here

---

## 🎨 Using Auth in Your Components

```jsx
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function MyComponent() {
  const { user, loading, logOut } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please login</div>;

  return (
    <div>
      <h1>Welcome, {user.displayName}!</h1>
      <button onClick={() => logOut()}>Logout</button>
    </div>
  );
}
```

---

## 📋 Files to Know

| File               | What It Does                |
| ------------------ | --------------------------- |
| `AuthContext.jsx`  | Authentication logic        |
| `main.jsx`         | Wraps app with AuthProvider |
| `Login.jsx`        | Login page                  |
| `Registration.jsx` | Registration page           |
| `PrivateRoute.jsx` | Protects routes             |
| `Routes.jsx`       | All app routes              |

---

## ✅ Checklist

Before deploying, verify:

- [ ] Can register new user
- [ ] Can login with credentials
- [ ] Can see error for wrong password
- [ ] Protected routes redirect to login
- [ ] Can access protected routes after login
- [ ] Page refresh keeps user logged in
- [ ] Can logout
- [ ] User info shows in navbar

---

## 🆘 Need Help?

1. **Check browser console** (F12) for errors
2. **Check Firebase Console** for user data
3. **See VERIFICATION_CHECKLIST.md** for detailed testing
4. **See FIREBASE_AUTH_SETUP.md** for complete setup guide
5. **See AUTH_CODE_EXAMPLES.md** for code examples

---

## 🎉 You're All Set!

Everything is ready to use. Start with:

1. Register a test user
2. Login with that user
3. Try accessing protected pages
4. Test logout

That's it! Your authentication system is working! 🚀
