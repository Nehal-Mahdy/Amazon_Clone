import { userArr } from "./index.js";
var currentUser;
console.log(userArr)
var userEmail = document.getElementById("email");
var userPass = document.getElementById("password");

var signInBtn = document.getElementById("signIn");
var invalid = document.getElementById("invalid")

userEmail.addEventListener('input',function(){
    console.log(userEmail.value)
})

function signIn() {

    for (var i = 0; i < userArr.length; i++) {
      if (
        userEmail.value === userArr[i].email &&
        userPass.value == userArr[i].pass
      ) {
        console.log('correct')
        currentUser = {
            currentUserID : userArr[i].id,
            currentUserName : userArr[i].name,
            currentUserEmail : userArr[i].email,
            currentUserPass: userArr[i].pass,
        };
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location.href = "./index.html";
        return;
      }
}
invalid.setAttribute(
    "style",
    "display:block;text-align:center; color: red; font-weight: bold; margin-top:15px"
  );
  userEmail.addEventListener("focus", function () {
    invalid.setAttribute("style", "display:none");
  });
 userPass.addEventListener("focus", function () {
    invalid.setAttribute("style", "display:none");
  });


}
   
  signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signIn();
  });


userPass.addEventListener('input',function(){
    console.log(userPass.value)
})
