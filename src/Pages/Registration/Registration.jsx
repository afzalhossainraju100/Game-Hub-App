import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext.jsx";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setNameError("");
    setRegisterError("");
    setLoading(true);

    const form = e.target;
    const name = form.name.value.trim();
    const photoURL = form.photoURL.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    // Validate name
    if (name.length < 3) {
      setNameError("Name should be at least 3 characters long");
      setLoading(false);
      return;
    }

    // Create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update user profile with name and photo
        return updateUser({
          displayName: name,
          photoURL: photoURL || null,
        }).then(() => {
          // Refresh the user info
          return user;
        });
      })
      .then(() => {
        setRegisterError("");
        alert("Registration successful! You can now login.");
        form.reset();
        navigate("/auth/login");
      })
      .catch((error) => {
        console.error("Registration Error:", error);
        let errorMessage = error.message;

        if (error.code === "auth/email-already-in-use") {
          errorMessage = "This email is already in use";
        } else if (error.code === "auth/weak-password") {
          errorMessage = "Password is too weak (at least 6 characters)";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "Invalid email address";
        } else if (error.code === "auth/operation-not-allowed") {
          errorMessage =
            "Email/Password authentication is not enabled. Please contact admin.";
        }

        setRegisterError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 ">
        <div className="card w-full max-w-md shrink-0 shadow-lg md:shadow-2xl p-4 sm:p-5 md:p-6 hover:shadow-3xl transition-shadow ">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center p-2 sm:p-3 md:p-4">
            Register your account
          </h1>
          <hr className="text-[#E7E7E7]" />
          <div className="card-body p-3 md:p-8">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset text-black">
                <label className="label text-sm md:text-base">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="input bg-[#F3F3F3] border-0 hover:shadow-md w-full text-sm md:text-base"
                  placeholder="Enter your name"
                  required
                />
                {nameError && (
                  <p className="text-red-600 mt-2 mb-1 text-xs md:text-sm">
                    {nameError}
                  </p>
                )}

                <label className="label text-sm md:text-base">Photo URL</label>
                <input
                  type="url"
                  name="photoURL"
                  className="input bg-[#F3F3F3] border-0 hover:shadow-md w-full text-sm md:text-base"
                  placeholder="Enter photo URL (optional)"
                />

                <label className="label text-sm md:text-base">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input bg-[#F3F3F3] border-0 hover:shadow-md w-full text-sm md:text-base"
                  placeholder="Email"
                  required
                />

                <label className="label text-sm md:text-base">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input bg-[#F3F3F3] border-0 hover:shadow-md w-full text-sm md:text-base"
                  placeholder="Password (minimum 6 characters)"
                  required
                />

                {registerError && (
                  <p className="text-red-600 mt-2 mb-1 text-xs md:text-sm">
                    {registerError}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-neutral mt-3 md:mt-4 text-sm md:text-base"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </fieldset>
            </form>
            <p className="text-xs md:text-sm text-center md:text-left">
              Already have an account?{" "}
              <Link
                className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-bold"
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
