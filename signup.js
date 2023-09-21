import { userArr } from "./index.js";
// alert("hi");
$(document).ready(function(){
var fullName = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;

    // Validate Username
    $("#usercheck").hide();
    let usernameValid = true;
    $("#userName").focusout(function () {
        validateUsername();
    });
 
    function validateUsername() {
        let usernameValue = $("#userName").val();
        var valid = fullName.test(usernameValue);
        if (usernameValue.length == "" || (!valid)) {
            $("#usercheck").show();
            usernameValid = false;
            return false;
        } else if (usernameValue.length < 10 || usernameValue.length > 20) {
            $("#usercheck").show();
            $("#usercheck").html("length of Full name must be between 10 and 20");
            usernameValid = false;
            return false;
        } else {
            $("#usercheck").hide();
        }
    }


    var validEmail = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    $("#emailinvalid").hide();
    let emailValid= true;
    $("#email").focusout(function (){
    var userEmail = $("#email").val();
    if (!validEmail.test(userEmail)) {
        $("#emailinvalid").show();
        emailValid = false;
    } else {
        $("#emailinvalid").hide()
        emailValid = true;
        }
});

// Validate Password

var passCheck= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi;
$("#passcheck").hide();
let passwordValid = true;
$("#password").focusout(function () {
    validatePassword();
});
function validatePassword() {
    let passwordValue = $("#password").val();
    var validPass = passCheck.test(passwordValue);
    if (passwordValue.length == "" || (!validPass)) {
        $("#passcheck").show();
        passwordValid = false;
        return false;
    }
 else {
        $("#passcheck").hide();
    }
}

// Validate Confirm Password
$("#conpasscheck").hide();
let confirmPasswordError = true;
$("#conpassword").focusout(function () {
    validateConfirmPassword();
});
function validateConfirmPassword() {
    let confirmPasswordValue = $("#conpassword").val();
    let passwordValue = $("#password").val();
    if (passwordValue != confirmPasswordValue) {
        $("#conpasscheck").show();
        $("#conpasscheck").html("Passwords don't Match");
        $("#conpasscheck").css("color", "red");
        confirmPasswordError = false;
        return false;
    } else {
        $("#conpasscheck").hide();
    }
}

// Submit button
var newUser;
var signUpBtn = document.getElementById("signUp")
signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // window.location.replace("./index.html");



if(validateUsername && emailValid && validatePassword)
    {    newUser = {
            newUserUserID : userArr.length+1,
            newUserName : $("#userName").val(),
            newUserEmail : $("#email").val(),
            newUserPass:  $("#password").val()
        };
        console.log(newUser);
        localStorage.setItem("newUser", JSON.stringify(newUser));
        userArr.push(newUser);
        console.log(userArr);
        window.location.replace("./index.html");
       


    }
    else{
        return false;
    }
});

//hiding error messages on focus
$("#userName").focus(function (){
    $("#usercheck").hide();
    
});

$("#email").focus(function (){
    $("#emailinvalid").hide()

})

$("#password").focus(function () {
    $("#passcheck").hide();
})

$("#conpassword").focus(function () {
    $("#conpasscheck").hide();

});


});