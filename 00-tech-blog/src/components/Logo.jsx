import React from "react";
import { Link } from "react-router-dom";

import LogoSvg from '../assets/logo.svg';

const Logo = () => {
    return (
        <Link to="/">
            <img src={LogoSvg} alt="Logo" className="h-10 w-10" />
        </Link>
        // <img className="h-10 w-10" src={LogoSvg} alt="Logo" />
    );
};

export default Logo;