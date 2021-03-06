function printError(element, msg) {

    document.getElementById(element).innerHTML = msg;
}


var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var post = document.getElementById("blog-post");
var posts = document.getElementsByClassName("blog-post");
console.log(posts)

var i;
for (i = 0; i < posts.length; i++) {
    var span = document.createElement("div");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";

    span.appendChild(txt);
    posts[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function createPost(title, name, content) {
    var post = document.createElement("div");
    post.className = "blog-post";
    var postTile = document.createElement("h2");
    postTile.className = "blog-post-title";
    var tileValue = document.createTextNode(title);
    postTile.appendChild(tileValue);

    var postContent = document.createElement("p");
    postContent.className = "blog-post-meta";
    var date = new Date();
    var n = month[date.getMonth()];
    var meda = document.createTextNode(n + " " + date.getDate() + ", " + date.getFullYear() + " by " + name)
    postContent.appendChild(meda);

    var postData = document.createElement("p");
    var data = document.createTextNode(content);
    postData.appendChild(data);


    post.appendChild(postTile);
    post.appendChild(postContent);
    post.appendChild(postData)


    return post;
}


function addPost() {
    var email = document.postForm.email.value;
    console.log("email" + email)
    var fname = document.postForm.fname.value;
    var lname = document.postForm.lname.value;
    var title = document.postForm.title.value;
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

    var fnameErr = false;
    if (fname == "") {
        printError("fnameErr", "Please enter your firstname")
    } else {
        var regex = /^[a-zA-Z]+$/;

        if (regex.test(fname) === false) {
            printError("fnameErr", "Please enter a valid name")
        } else {

            fnameErr = true;
            printError("fnameErr", "")
        }
    }
    //_______________________________

    var lnameErr = false;
    if (lname == "") {
        printError("lnameErr", "Please enter your lastname")
    } else {
        var regex = /^[a-zA-Z]+$/;

        if (regex.test(lname) === false) {
            printError("lnameErr", "Please enter a valid name")
        } else {
            lnameErr = true;
            printError("lnameErr", "")
        }
    }



    var titleErr = false;
    if (title == "") {
        printError("titleErr", "Please enter a title")
    } else {
        var regex = /^[a-zA-Z\s]+$/;

        if (regex.test(title) === false) {
            printError("titleErr", "Please enter a valid title")
        } else {
            titleErr = true;
            printError("titleErr", "")
        }
    }

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



    if ((emailErr && fnameErr && lnameErr && titleErr && contentErr) === true) {


        try {

            var p = createPost(title, fname, content);
            post.insertBefore(p, post.childNodes[0]);

            document.getElementById("postForm").removeAttribute("aria-expanded");
            document.getElementById("postForm").setAttribute("aria-expanded", false);
            document.getElementById("postForm").setAttribute("class", "collapsed");
            document.getElementById("navbarHeader").setAttribute("class", "collapse");
            var span = document.createElement("div");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            p.appendChild(span);
        

            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
        } catch (e) {
            console.log(e);
        }

        document.postForm.email.value = "";
        document.postForm.fname.value = "";
        document.postForm.lname.value = "";
        document.postForm.title.value = "";
        document.postForm.content.value = "";

        return false;


    } else {
        return false;
    }






}

