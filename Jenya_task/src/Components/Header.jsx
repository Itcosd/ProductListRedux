import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../Actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  return (
    <nav className="w-full flex h-12 justify-around items-center p-5 bg-blue-500 text-white">
      <Link to="/">Products</Link>
      {userInfo && <Link to="/add">Add Product</Link>}

      {userInfo ? (
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(logoutUser())}
            className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Header;
