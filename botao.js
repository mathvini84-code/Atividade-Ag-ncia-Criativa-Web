/* Previnindo o comportamento padrão do formulário */

document.getElementById("send").addEventListener("click", evento => {
    evento.preventDefault();

    console.log("Funcionando perfeitamente!");
})