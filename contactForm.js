function printError(element, msg) {

    document.getElementById(element).innerHTML = msg;
}
function contactForm(){
    var email = document.postForm.email.value;
    console.log("email" + email)

    var content = document.postForm.content.value;

    var emailErr = false;

    if (email == "") {
        printError("emailErr", "Please enter your email")
    } else {
        var regex = /^\S+@\S+\.\S+$/;

        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email")
        } else {
            emailErr = true;
            printError("emailErr", "")
        }
    }
    // //_______________________________




    var contentErr = false;
    if (content == "") {
        printError("contentErr", "Please enter your content")
    } else {
        var regex = /^.+$/;

        if (regex.test(content) === false) {
            printError("contentErr", "Please enter your content")
        } else {
            contentErr = true;
            printError("contentErr", "")
        }
    }


    if ((emailErr &&  contentErr) === true) {

        alert("Submit Successufully");
    }else{
        return false;
    }

}