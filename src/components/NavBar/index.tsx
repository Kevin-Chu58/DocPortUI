import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";
import NavButton from "./NavButton";
import NavSearch from "./NavSearch";
import LogoutButton from "../LogoutButton";
import LoginButton from "../LoginButton";

const usernameGuest = "guest";
const classes = {
    navBar: "nav-bar",
    navLinks: "nav-links",
    authLinks: "auth-links",
    authButton: "auth-button",
}

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
    
    let username = isAuthenticated ? user?.name : usernameGuest;
    
    return (
        <div className={classes.navBar}>
            <div className={classes.navLinks}>
                {navLinks.map((navLink) => (
                    <NavButton key={navLink.name} name={navLink.name} to={navLink.to} />
                ))}
            </div>
            <div className={classes.authLinks}>
                <NavSearch/>
                <div className={classes.authButton}>{username}</div>
                {isAuthenticated && <LogoutButton/>}
                {!isAuthenticated && <LoginButton/>}
            </div>
        </div>
    );
};

export default NavBar;
