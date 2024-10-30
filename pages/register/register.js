function onChangeEmail() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validEmail(email) ? "none" : "block";
}

function onChangePassword() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";

    form.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";

    validPasswordMatch();
    toggleRegisterButtonDisable();
}

function onChangeConfirmPassword() {
    validPasswordMatch();
    toggleRegisterButtonDisable();
}

function validPasswordMatch() {
    const password = form.password().value;
    const confirmPassword = form.confirmarPassword().value;

    form.passwordDoesntMatchError().style.display =
        password == confirmPassword ? "none" : "block";

}
function toggleRegisterButtonDisable() {
    form.registerButton().disabled = !isFormValid();
}

function isFormValid() {
    const email = form.email().value;
    if (!email || !validEmail(email)) {
        return false
    }
    const password = form.password().value;
    if (!password || password.length >= 6) {
        return false
    }
    const confirmPassword = form.confirmarPassword().value;
    if (password != confirmPassword) {
        return false
    }
    return true;

}

const form = {
    email: () => document.getElementById("email"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    password: () => document.getElementById("password"),
    confirmarPassword: () => document.getElementById("confirmarPassword"),
    passwordDoesntMatchError: () => document.getElementById("password-doesnt-match-error"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    passwordMinLengthError: () => document.getElementById("password-min-length-error"),
    registerButton: () => document.getElementById("register-button")
}