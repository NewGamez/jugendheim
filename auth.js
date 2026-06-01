import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
onAuthStateChanged,
signOut
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

window.login = async () => {

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try{

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        window.location.href =
        "dashboard.html";

    }catch(error){
        alert(error.message);
    }
};

window.register = async () => {

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try{

        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert("Benutzer erstellt");

        window.location.href =
        "dashboard.html";

    }catch(error){
        alert(error.message);
    }
};

window.logout = async () => {
    await signOut(auth);
    window.location.href = "login.html";
};
