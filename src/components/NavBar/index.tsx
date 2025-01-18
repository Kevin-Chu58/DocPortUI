import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";
import NavButton from "./NavButton";
import NavSearch from "./NavSearch";

const navLinks = [
    {
        name: "home",
        to: "",
    },
    {
        name: "docs",
        to: "/docs",
    },
    {
        name: "inventory",
        to: "/inventory",
    },
    {
        name: "community",
        to: "/community",
    },
];

const NavBar = () => {
    const { user, isAuthenticated } = useAuth0();
    
    let username = isAuthenticated ? user?.name : "guest";
    
    return (
        <div className="nav-bar">
            <div className="nav-links">
                {navLinks.map((navLink) => (
                    <NavButton key={navLink.name} name={navLink.name} to={navLink.to} />
                ))}
            </div>
            <div className="auth-links">
                <NavSearch/>
                <div className="auth-button">{username}</div>
            </div>
        </div>
    );
};

export default NavBar;
