if (localStorage.getItem("isLoggedIn") === "true") {
      window.location.replace("main.html");
    }

function showHint() {
    Swal.fire({
    title: 'Tiny Hint 💌',
    text: 'The username is marieandheradoptedfather while the password is my password in valorant 💜',
    icon: 'info',
    confirmButtonText: 'Try now baby?'
    });
}

function login() {
    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim().toLowerCase();

    const correctUsername = "marieandheradoptedfather";
    const correctPassword = "cinnamoroll050325";

    if (username === correctUsername && password === correctPassword) {
    localStorage.setItem("isLoggedIn", "true");

    Swal.fire({
        icon: 'success',
        title: 'Welcome, babyyy! 💜',
        text: 'Loading something special just for you... (≧◡≦)',
        showConfirmButton: false,
        timer: 2000
    }).then(() => {
        window.location.href = "main.html";
    });
    } else {
    Swal.fire({
        icon: 'error',
        title: 'Oopsie~',
        text: 'That didn’t seem right, try again babyloves 🥺',
        confirmButtonText: 'I will! 💖'
    });
    }
}