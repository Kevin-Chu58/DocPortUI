import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    let navigate = useNavigate();

    if (isLoading) {
        return <div>is loading...</div>;
    } else if (!isAuthenticated) {
        navigate("/login");
    }

    return (
        isAuthenticated &&
        user && (
            <div>
                <p>name: {user.name}</p>
                <p>email: {user.email}</p>
            </div>
        )
    );
};

export default Home;
