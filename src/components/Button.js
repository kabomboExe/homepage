import React from "react";
import { Link } from "react-router-dom";
import './Button.css';

const Button = (props) => {

    return (
        <>
            <br/><br/><br/>
            <Link className="link" to={props.path}>
                {props.buttonText}
            </Link>
            <br/><br/><br/>
        </>
    );
}

export default Button;