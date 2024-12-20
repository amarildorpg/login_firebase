firebase.auth().onAuthStateChanged(user => {
    if (user && localStorage.getItem("liberadoGlobal") == true) {
        window.location.href = "pages/home/home.html";
    }
})

function onChangeEmail() {
    toogleButtonDisable();
    toogleEmailErrors();
}
function onChangePassword() {
    toogleButtonDisable();
    tooglePasswordError();
}

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "./index.html";
        localStorage.setItem("liberadoGlobal", '');
        localStorage.setItem("nomeGlobal", '');
        localStorage.setItem("emailGlobal", '');
    }).catch(() => {
        alert('Erro ao fazer logout.');
    })
}

function login() {
    showLoading();
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
            // Realize o login após configurar a persistência
            return firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value);
        })
        .then(response => {
            hideLoading();
            firebase.firestore()
                .collection('login')
                .get()
                .then(snapshot => {
                    localStorage.setItem("emailGlobal",snapshot.docs.map(doc => doc.data().email));
                    localStorage.setItem("nomeGlobal",snapshot.docs.map(doc => doc.data().nome));
                    localStorage.setItem("liberadoGlobal",snapshot.docs.map(doc => doc.data().liberado));
                    const emailExists = localStorage.getItem("emailGlobal").includes(form.email().value); // Verifica se o email existe na lista
                    if (emailExists) {
                        if (localStorage.getItem("liberadoGlobal") == "true") {
                            window.location.href = "pages/home/home.html";
                        } else {
                            alert("Email não liberado!");
                            logout();
                        }
                    } else {
                        alert("Email não encontrado.");
                        logout();
                    }
                })
                .catch(error => {
                    console.error("Erro ao acessar o Firestore:", error);
                })
        })
        .catch(error => {
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
function register() {
    window.location.href = "pages/register/register.html";
}

function recoverPassword() {
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hideLoading();
        alert('Email de recuperação senha enviado com sucesso, verifique sua caixa de entrada do email ' + form.email().value);
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
    form.emailInvalidError().style.display = validEmail(email) ? "none" : "block"
}
function tooglePasswordError() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block"
}
function isMailValid() {
    const email = form.email().value;
    console.log(email);
    if (!email) {
        return false;
    }
    return validEmail(email);
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