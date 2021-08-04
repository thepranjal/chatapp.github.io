import React from "react";
import { Button } from "material-ui/core";
import "./login.css"

function login() {
    const signIn = ()  => {};
    return (
        <div className="login" >
            <div className="login__container">
            <img src="icon.svg"
            alt=""
            />
            <div className="login__text">
                <h1>sign in to whatsapp</h1>

            </div>
            <Button onClick={signIn}>
                Sign In With Google
            </Button>

            </div>
          
        </div>
    );
}

export default login

