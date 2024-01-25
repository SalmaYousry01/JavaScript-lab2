function validateForm(e) {
    e.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    const email = document.querySelector(".username");
    const password = document.querySelector(".password");

    if (emailRegex.test(email.value) && passwordRegex.test(password.value)) {
        console.log("Login successful!");
    } else if ((emailRegex.test(email.value)) && !passwordRegex.test(password.value)) {
        console.log("Invalid Password");
    } else {
        console.log("Invalid Email");
    }

}
const btn = document.querySelector(".login-btn");
btn.addEventListener("click", validateForm);
