// import React from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="buttons">
                <h2>This is log in page</h2>
                {
                    user ?
                        <button onClick={handleSignOut}>Google Sign Out</button> :
                        <>
                            <button onClick={handleGoogleSignIn}>Google Sign In</button>
                            <button onClick={handleGitHubSignIn}>GitHub Sign In</button>
                        </>
                }
            </div>

            {user && <div className="info">
                <img className="img" src={user.photoURL} alt="" />
                <h1>Name: {user.displayName}</h1>
                <h4>Email: {user.email}</h4>
            </div>}
        </div>
    );
};

export default Login;