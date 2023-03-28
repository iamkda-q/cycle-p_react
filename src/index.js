import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { YMaps } from "@pbe/react-yandex-maps";
import ErrorPage from "./components/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <YMaps /* query={{
            load: "package.full",
          }} */
            >
                <App />
            </YMaps>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "products/:productId",
        //   element: <Contact />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
