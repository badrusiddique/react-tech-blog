import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import RegisterButton from "./RegisterButton";

const Header = () => {
    const status = useSelector((state) => state.auth.status);

    const navItems = [
        { element: 'Home', link: '/', active: status },
        { element: "Feeds", link: '/feeds', active: status },
        { element: "Create a post", link: '/create-post', active: status },
        { element: <RegisterButton />, link: '', active: !status },
        { element: <LoginButton />, link: '', active: !status },
        { element: <LogoutButton />, link: '', active: status },
    ];

    const getActiveNavLinkClass = ({ isActive }) => {
        return `p-2 ${isActive ? "text-orange-600" : ""}`;
    }

    return (
        <div className="flex flex-row justify-between items-center border-b-2 border-gray-300 p-2">
            <Logo />
            {/* <h1 className="text-xl justify-center text-center p-4">Header</h1> */}
            <div className="flex flex-row space-x-2">
                {navItems.filter(item => item.active).map(({ element, link }) => (
                    <NavLink key={element} className={getActiveNavLinkClass} to={link}>
                        {element}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Header;