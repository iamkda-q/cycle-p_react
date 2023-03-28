import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div
            id="error-page"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100vh",
            }}
        >
            {}
            <h1>Упс!</h1>
            <p>Страница не найдена...</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
