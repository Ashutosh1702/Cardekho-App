import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav className="h-[50px] bg-white shadow-2xl sticky top-0 z-[50] w-full flex justify-between items-center p-8">
      <Logo />
      <Searchbar />
      <div className="flex gap-6 items-center">
        {isAuthenticated ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={() => logout({ returnTo: window.location.origin })}>LogOut</button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>LogIn</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;