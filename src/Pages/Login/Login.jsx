import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext.jsx";

const Login = () => {
  const [error, setError] = useState("");
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = event.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log("User logged in:", loggedUser);
        alert("Login successful!");
        form.reset();
        navigate(location.state?.from?.pathname || "/");
      })
      .catch((error) => {
        console.error("Login Error:", error);
        let errorMessage = error.message;

        if (error.code === "auth/user-not-found") {
          errorMessage = "User not found. Please register first.";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Wrong password. Please try again.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "Invalid email address.";
        } else if (error.code === "auth/user-disabled") {
          errorMessage = "This user account has been disabled.";
        } else if (error.code === "auth/operation-not-allowed") {
          errorMessage =
            "Email/Password authentication is not enabled. Please contact admin.";
        }

        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="card w-full max-w-md shrink-0 shadow-lg md:shadow-2xl p-4 sm:p-5 md:p-6 hover:shadow-3xl transition-shadow">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center p-2 sm:p-3 md:p-4">
            Login to your account
          </h1>
          <hr className="text-[#E7E7E7]" />
          <div className="card-body p-3 md:p-8">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset text-black">
                <label className="label text-sm md:text-base">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input bg-[#F3F3F3] border-0 hover:shadow-md w-full text-sm md:text-base"
                  placeholder="Email"
                />
                <label className="label text-sm md:text-base">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="input bg-[#F3F3F3] border-0 hover:shadow-md w-full text-sm md:text-base"
                  placeholder="Password"
                />
                {error && (
                  <p className="text-red-600 mt-2 mb-1 text-xs md:text-sm">
                    {error}
                  </p>
                )}
                <div>
                  <a className="link link-hover text-xs md:text-sm">
                    Forgot password?
                  </a>
                </div>
                <button
                  className="btn btn-neutral mt-3 md:mt-4 text-sm md:text-base"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </fieldset>
            </form>
            <p className="text-xs md:text-sm text-center md:text-left">
              Don't have an account?{" "}
              <Link
                className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-bold"
                to="/auth/registration"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
