const form = document.getElementById("feedbackForm");
const lista = document.getElementById("listaFeedback");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const professor = document.getElementById("professor").value;
    const tipo = document.getElementById("tipo").value;
    const mensagem = document.getElementById("mensagem").value;

    const div = document.createElement("div");
    div.className = `feedback ${tipo}`;

    div.innerHTML = `
        <h3>${tipo}</h3>
        <strong>Professor:</strong> ${professor}<br><br>
        ${mensagem}
    `;

    lista.prepend(div);

    form.reset();
});
