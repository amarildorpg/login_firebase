firebase.auth().onAuthStateChanged(user => {
    if (!user || localStorage.getItem("liberadoGlobal") == "false") {
        logout();
    }
});

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../../index.html";
        localStorage.setItem("liberadoGlobal", '');
        localStorage.setItem("nomeGlobal", '');
        localStorage.setItem("emailGlobal", '');
    }).catch(() => {
        alert('Erro ao fazer logout.');
    })
}
