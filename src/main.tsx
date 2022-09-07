import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.less";

const app = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

app.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
