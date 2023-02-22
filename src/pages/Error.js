import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './Error.css';

const ErrorPage = () => {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="pulse"></div>
                <p className="error-text">Ooops...this page does not exist!</p>
            </div>
            <Footer></Footer>
        </>
    );

}

export default ErrorPage;