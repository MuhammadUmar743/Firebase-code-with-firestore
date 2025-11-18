import { auth, onAuthStateChanged, signOut } from "./config.js";

window.logOut = () => {
    signOut(auth).then(() => {
        console.log("Logout ho chuka ha")
        window.location.href = "./login.html"
  // Sign-out successful.
}).catch((error) => {
    console.log(error , "error aa gya ha")
  // An error happened.
});
};

// Dashboard page access **sirf logged-in users ke liye**
function getUser(){
onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("User Login ha abhi" , user)
    // ...
  } else {
    // User is signed out
    console.log("User Login nhi ha")
    window.location.href = "./login.html"
    
    // ...
  }
});
}   
getUser()
