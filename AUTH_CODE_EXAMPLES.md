# Firebase Authentication - Code Examples

## Using Authentication in Your Components

### Example 1: Display Current User in Navbar

```jsx
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
        // Optionally navigate to home
      })
      .catch((error) => console.error("Logout error:", error));
  };

  return (
    <nav>
      {user ? (
        <div>
          <p>Welcome, {user.displayName || user.email}</p>
          {user.photoURL && <img src={user.photoURL} alt="Profile" />}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <a href="/auth/login">Login</a>
          <a href="/auth/registration">Register</a>
        </div>
      )}
    </nav>
  );
}
```

---

### Example 2: Conditional Rendering Based on Auth State

```jsx
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";

export default function Home() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome back, {user.displayName}!</h1>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <div>
          <h1>Please login to continue</h1>
        </div>
      )}
    </div>
  );
}
```

---

### Example 3: Check if User is Logged In

```jsx
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";

export default function Profile() {
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && !user) {
      // User is not logged in
      console.log("User not authenticated");
    } else if (user) {
      // User is logged in
      console.log("User authenticated:", user.email);
    }
  }, [user, loading]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please login first</div>;

  return <div>Profile page for {user.displayName}</div>;
}
```

---

### Example 4: Update User Profile After Registration

```jsx
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";

export default function UpdateProfile() {
  const { updateUser, user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async () => {
    try {
      await updateUser({
        displayName: displayName,
        photoURL: photoURL,
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update profile");
    }
  };

  return (
    <div>
      <input
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Display Name"
      />
      <input
        value={photoURL}
        onChange={(e) => setPhotoURL(e.target.value)}
        placeholder="Photo URL"
      />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
}
```

---

### Example 5: Logout Functionality

```jsx
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext.jsx";

export default function LogoutButton() {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("Logged out successfully");
      navigate("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Failed to logout");
    }
  };

  return (
    <button onClick={handleLogout} className="btn btn-error">
      Logout
    </button>
  );
}
```

---

### Example 6: Custom Hook for Auth

```jsx
// Create file: src/hooks/useAuth.js

import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

// Usage in any component:
import { useAuth } from "../hooks/useAuth.js";

export default function MyComponent() {
  const { user, loading, logOut } = useAuth();
  // ... rest of component
}
```

---

### Example 7: Redirect After Login

```jsx
import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext.jsx";

export default function LoginPage() {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      await signInUser(email, password);

      // Redirect to the page user tried to access, or home
      const from = location.state?.from?.pathname || "/";
      navigate(from);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
```

---

### Example 8: Protected Component Wrapper

```jsx
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <div>Checking authentication...</div>;
  }

  if (!user) {
    navigate("/auth/login");
    return null;
  }

  return children;
}

// Usage:
// <RequireAuth>
//   <AdminPanel />
// </RequireAuth>
```

---

### Example 9: Get User UID

```jsx
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";

export default function UserProfile() {
  const { user } = useContext(AuthContext);

  if (!user) return <div>Not logged in</div>;

  return (
    <div>
      <p>UID: {user.uid}</p>
      <p>Email: {user.email}</p>
      <p>Name: {user.displayName}</p>
      <p>Photo: {user.photoURL}</p>
      <p>Email Verified: {user.emailVerified}</p>
      <p>Joined: {user.metadata?.createdAt}</p>
    </div>
  );
}
```

---

### Example 10: Form with All Auth Features

```jsx
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext.jsx";

export default function CompleteAuthForm() {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const photoURL = formData.get("photoURL");

    try {
      // Step 1: Create user account
      const result = await createUser(email, password);

      // Step 2: Update user profile
      await updateUser({
        displayName: name,
        photoURL: photoURL || null,
      });

      // Step 3: Success
      alert("Registration successful!");
      navigate("/auth/login");
    } catch (err) {
      let message = err.message;
      if (err.code === "auth/email-already-in-use") {
        message = "This email is already registered";
      } else if (err.code === "auth/weak-password") {
        message = "Password must be at least 6 characters";
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Full Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <input name="photoURL" placeholder="Photo URL (optional)" />

      {error && <p className="error">{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>

      <p>
        Already have an account? <Link to="/auth/login">Login</Link>
      </p>
    </form>
  );
}
```

---

## Common Error Codes & Solutions

```javascript
// Firebase Error Codes

// Authentication Errors
"auth/user-not-found" → User doesn't exist. Prompt to register.
"auth/wrong-password" → Incorrect password. Prompt to try again.
"auth/email-already-in-use" → Email exists. Prompt to login instead.
"auth/weak-password" → Password < 6 characters. Request stronger password.
"auth/invalid-email" → Invalid email format.
"auth/user-disabled" → Account disabled by admin.
"auth/too-many-requests" → Too many failed login attempts. Try later.
"auth/operation-not-allowed" → Sign-in method not enabled.

// Handle errors:
const handleAuthError = (error) => {
  const errorMessages = {
    "auth/user-not-found": "User not found. Please register.",
    "auth/wrong-password": "Incorrect password.",
    "auth/email-already-in-use": "Email already in use.",
    "auth/weak-password": "Password must be 6+ characters.",
    "auth/invalid-email": "Invalid email address.",
  };

  return errorMessages[error.code] || error.message;
};
```

---

## Tips & Best Practices

1. **Always check loading state** before accessing user data
2. **Use custom hooks** to avoid repeating `useContext(AuthContext)` everywhere
3. **Handle errors gracefully** and show user-friendly messages
4. **Never store sensitive data** in context (passwords, tokens)
5. **Use PrivateRoute** for all protected pages
6. **Check `user?.property`** to avoid null reference errors
7. **Call setError("")** before new operations to clear old errors
8. **Use try-catch** with async/await for cleaner error handling
9. **Show loading states** while operations are in progress
10. **Redirect after logout** to prevent confused users
