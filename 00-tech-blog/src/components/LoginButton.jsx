import React from "react";
import { useDispatch } from "react-redux";

import * as authSlice from '../store/authSlice.js';
import { login } from '../appwrite/authContext.js';

const LoginButton = () => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        // await login();
        // dispatch(authSlice.login());
        console.log("[LoginButton]: User logged in");
    };

    return (
        <button className="bg-blue-400 text-white text-center text-sm rounded-xl w-20 h-7 hover:cursor-pointer" onClick={handleClick}>Log in</button>
    );
};

export default LoginButton;