console.log("hello world");
// let btnRegister = document.getElementById("btnRegister");
let btnRegister = document.querySelector("#btnRegister");
//console.log(btnRegister);
function registerUser(){
    let name = document.querySelector("#txtRegister");
    let email = document.querySelector("#txtemail");
    let password = document.querySelector("#txtPassword");
    let confirmPassword = document.querySelector("#txtConfirmPassword");
    
    let user = {
        name:name.value,
        email:email.value,
        password:password.value,
        confirmPassword:confirmPassword.value
    }
    typeof user;
    console.log("button register is clicked", user);
    
    var form_check = document.getElementById('form-check').value;
    var radioGender;
    if(form-check == 'radioGender1'){
        radioGender = document.getElementById('gender1').value;
    }else if(form-check == 'radioGender2'){
        radioGender = document.getElementById('gender2').value;
    }else if(form-check == 'radioGender3'){
        radioGender = document.getElementById('gender3').value;
    }
    document.getElementById('gender').innerHTML = radioGender;

    function getTextareaValue() {
    var textareaElement = document.getElementById("txtaddress");
    var addressValue = textareaElement.value;
    console.log("The entered address is: " + addressValue);
    }
    function getDateValue() {
        var dateInput = document.getElementById("floatingDate");
        var birthdateValue = dateInput.value;
        console.log("The entered birthdate is: " + birthdateValue);
    }
}

if (!user.email){
    alert("email is required");
}       else if(!user.name){
    return alert("Name is required");
}       else if(user.password || user.password) {
    return alert("password is required");
}       else if(user.password != user.confirmPassword) {
    return alert("password does not match");

    localStorage.setItem("user", JSON.stringify(user));
}

btnRegister.onClick = () => {

    registerUser();
    form_check();
    getTextareaValue();
    getDateValue();
}