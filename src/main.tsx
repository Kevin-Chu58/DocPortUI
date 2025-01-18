import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.tsx";

let root = document.getElementById("root")!;
let domain = import.meta.env.VITE_AUTH0_DOMAIN;
let clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

createRoot(root).render(
    <StrictMode>
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <Router>
                <App />
            </Router>
        </Auth0Provider>
    </StrictMode>
);
