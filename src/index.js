import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { YMaps } from "@pbe/react-yandex-maps";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <YMaps /* query={{
    load: "package.full",
  }} */
            >
                <App />
            </YMaps>
        </BrowserRouter>
    </React.StrictMode>
);
