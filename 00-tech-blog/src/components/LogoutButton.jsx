import React from "react";
import { useDispatch } from "react-redux";

import * as authSlice from '../store/authSlice.js';
import { logout } from '../appwrite/authContext.js';

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        await logout();
        dispatch(authSlice.logout());
        console.log("[LogoutButton]: User logged out");
    };

    return (
        <button className="bg-blue-400 text-white text-center text-sm rounded-xl w-20 h-7 hover:cursor-pointer" onClick={handleClick}>Log out</button>
    );
};

export default LogoutButton;