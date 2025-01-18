import { Routes, Route } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </>
    );
}

export default App;
