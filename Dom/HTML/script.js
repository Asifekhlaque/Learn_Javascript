function formAct() {
    var nameInp = document.getElementById("nameInput").value;
    var password = document.getElementById("passwordInput").value;
    var err = document.getElementsByClassName("errorMessage")[0];
    if (nameInp.trim() === "" || password.trim() === "") {
        err.style="display:block";
        return false;
    }
    // if(number.length!=10){
    //     alert("Please enter a valid phone number")
    //     return false
    // }
    // if(isNaN(number)){
    //     alert("Please enter a valid phone number")
    // }
    if(password!=="123"){
        err.style="display:block";
        return false
    }
    if(nameInp!=="abc"){
        err.style="display:block";
        return false
    }
    if(n)
    return true;
}