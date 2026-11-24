
function register() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (!user || !pass) {
        document.getElementById("message").innerHTML =
            "Enter username and password";
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Registration Successful!");
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (user === savedUser && pass === savedPass) {
        document.getElementById("message").innerHTML =
            "Login Successful!";
    } else {
        document.getElementById("message").innerHTML =
            "Invalid Username or Password!";
    }
}
