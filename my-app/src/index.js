import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import Profile from "./components/User/Profile";

const user = {
    firstName: "Thinh",
    lastName: "Le",
    age: 24,
    gender: "Male",
    company: "Visual weber co.ltd...",
    study: "Nong Lam University",
    favorite: "Coding, Game",
};
ReactDOM.render(
    <React.StrictMode>
        <Profile user={user} />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
