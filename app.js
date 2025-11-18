import { auth, db, createUserWithEmailAndPassword, doc, setDoc, onAuthStateChanged } from "./config.js";
import { getUser } from "./login.js"


      getUser()     


window.signUp = (event) => {
    event.preventDefault();

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let phoneNumber = document.getElementById("phoneNumber");

        console.log(email.value , password.value)

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            const user = userCredential.user;
             console.log("Signup & data save successful!" , user.uid);

            // Firestore me data save karo
            await setDoc(doc(db, "users", user.uid), {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                phoneNumber: phoneNumber.value,
                userId: user.uid,
                createdAt: new Date().toISOString()
            });
              window.location.href = "./dashboard.html";
   });
}


    





 