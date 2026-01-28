import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const User = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt={user.displayName || user.email}
            className="w-10 h-10 rounded-full"
          />
        )}
        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-black">
            {user.displayName || user.email}
          </p>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="btn btn-sm btn-ghost text-red-500 flex items-center gap-1"
        title="Logout"
      >
        <IoIosLogOut size={20} />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </div>
  );
};

export default User;
