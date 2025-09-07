// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inscricao");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const estado = form.state.value;

    if (nome === "" || email === "") {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    alert(`Obrigado, ${nome}! Sua inscrição para o workshop foi recebida com sucesso.`);

    form.reset();
  });
});
