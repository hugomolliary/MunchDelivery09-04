document.addEventListener("DOMContentLoaded", () => {
    // SELECIONANDO ELEMENTOS
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email-login");
    const passwordInput = document.getElementById("password-login");

    // BASE DE DADOS PARA SIMULAÇÃO
    const usuarios = [
        { email: "gabriel@gmail.com", senha: "1234A" },
    ];

    function validaLogin(email, senha) {
        return usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    }

    loginForm.onsubmit = (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const senha = passwordInput.value.trim();

        const usuario = validaLogin(email, senha);
        if (usuario) {
            alert("Login bem-sucedido!");
            window.location.href = "perfil.html";
        } else {
            alert("Credenciais incorretas. Tente novamente.");
        }
    };
});
