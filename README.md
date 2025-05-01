# 🔥 login_firebase

Uma página de login simples utilizando o Firebase para autenticação. 🔒

## 📌 Visão Geral

Este projeto demonstra uma implementação básica de um sistema de login de usuários utilizando os serviços de autenticação do Firebase. Ele fornece uma interface para os usuários criarem novas contas e fazerem login com suas credenciais.

## ✨ Funcionalidades Principais

* **✍️ Criação de Conta:** Permite que novos usuários criem uma conta fornecendo um endereço de e-mail e uma senha.
* **🔑 Login de Usuário:** Permite que usuários existentes façam login com seu e-mail e senha.
* **🛡️ Autenticação com Firebase:** Utiliza os recursos de autenticação do Firebase para gerenciar a criação e o login de usuários de forma segura.
* **🌐 Interface Web:** Uma interface de usuário construída com HTML e estilizada com CSS, com funcionalidades implementadas em JavaScript.
* **✅ (Poderá incluir futuramente)** Persistência de sessão: Manter o usuário logado mesmo após fechar o navegador.
* **📧 (Poderá incluir futuramente)** Recuperação de senha: Funcionalidade para usuários que esqueceram suas senhas.

## 💻 Como Usar

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/amarildorpg/login_firebase.git](https://github.com/amarildorpg/login_firebase.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd login_firebase
    ```
3.  **⚙️ Configuração do Firebase:**
    * Você precisará de uma conta no [Firebase](https://firebase.google.com/).
    * Crie um novo projeto no Firebase Console.
    * Habilite o método de autenticação por e-mail/senha no seu projeto Firebase (vá em "Authentication" -> "Sign-in methods").
    * Obtenha as credenciais de configuração do seu projeto Firebase. Geralmente, você encontrará um objeto de configuração JavaScript na seção "Project settings" (ícone de engrenagem) -> "Your apps" -> selecione o app web (`</>`). Copie o objeto `firebaseConfig`.
    * No seu projeto local, localize o arquivo JavaScript (geralmente algo como `script.js` ou `app.js`) e substitua as informações de configuração de exemplo pelas suas credenciais do Firebase.

4.  **🌐 Abrir no navegador:**
    * Abra o arquivo `index.html` no seu navegador web.

5.  **🚀 Começar a usar:**
    * Utilize os formulários na página para criar uma nova conta ou fazer login com uma conta existente. As interações com o Firebase serão gerenciadas pelo JavaScript.

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver alguma sugestão de melhoria, correção de bugs ou novas funcionalidades, sinta-se à vontade para abrir uma Issue ou enviar um Pull Request.

1.  🍴 Faça um Fork do projeto.
2.  🌿 Crie uma Branch para sua feature (`git checkout -b feature/nova-funcionalidade`).
3.  📝 Faça o Commit das suas alterações (`git commit -am 'Adiciona nova funcionalidade'`).
4.  📤 Faça o Push para a Branch (`git push origin feature/nova-funcionalidade`).
5.  📬 Abra um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## 👨‍💻 Autor

Amarildo Silva ([@amarildorpg](https://github.com/amarildorpg))
