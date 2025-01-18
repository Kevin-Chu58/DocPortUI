import { useNavigate } from "react-router-dom";

type NavButtonProps = {
    name: String,
    to: String,
}

const NavButton = ({ name, to }: NavButtonProps) => {

    let navigate = useNavigate();

    return (
        <div className='nav-button' onClick={() => navigate(`${to}`)}>{name}</div>
    )
}

export default NavButton;