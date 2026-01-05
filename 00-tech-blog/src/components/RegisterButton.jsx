import React from "react";
import { useDispatch } from "react-redux";

import * as authSlice from '../store/authSlice.js';
import { createUser } from '../appwrite/authContext.js';

const RegisterButton = () => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        // await createUser();
        // dispatch(authSlice.login());
        console.log("[RegisterButton]: User registered");
    };

    return (
        <button className="bg-green-700 text-white text-sm text-center rounded-xl w-20 h-7 hover:cursor-pointer" onClick={handleClick}>Register</button>
    );
};

export default RegisterButton;