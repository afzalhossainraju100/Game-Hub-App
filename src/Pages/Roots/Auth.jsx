import React from 'react';
import Navbar from '../../Components/Header/Navbar.jsx';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
      <div className="min-h-screen">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="w-11/12 mx-auto py-5">
          <Outlet></Outlet>
        </main>
      </div>
    );
};

export default Auth;