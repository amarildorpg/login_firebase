function onChangeEmail() {
    toogleButtonDisable();
    toogleEmailErrors();
}
function onChangePassword() {
    toogleButtonDisable();
    tooglePasswordError()
}
function login() {
    showLoading();
    firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response => {
        hideLoading();
        window.location.href = "pages/home/home.html";
    }).catch(error => {
        hideLoading();
        alert(getErroMessage(error));
    });
}
function getErroMessage(error) {
    if (error.code == "auth/invalid-credential") {
        return "Usuário não encontrado"
    }
    if (error.code == 'auth/wrong-password') {
        return "Senha inválida"
    }
    return error.message;
}
function registrar() {
    window.location.href = "pages/registrar/registrar.html";
}

function recoverPassword() {
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
            hideLoading();
            alert('Email de recuperação senha enviado com sucesso, verifique sua caixa de entrada do email '+form.email().value); 
        })
        .catch(error => {
            hideLoading();
            alert(getErroMessage(error));
        });
}

function toogleButtonDisable() {
    const emailValid = isMailValid();
    form.recoverPasswordButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid
}
function toogleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block"
    form.emailInvalidError().style.display = validaEmail(email) ? "none" : "block"
}
function tooglePasswordError() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block"
}
function isMailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validaEmail(email);
}
function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}
const form = {
    email: () => document.getElementById("email"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById('recover-password-button')
}