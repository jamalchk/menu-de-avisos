const botaoAvisos = document.querySelector(".botao-avisos");
const menuDeAvisos = document.querySelector(".menu-avisos");

function exibirMenuDeAvisos(){
    menuDeAvisos.classList.toggle("menu-avisos_minimizado");
    botaoAvisos.classList.toggle("botao-avisos_aberto");
}

botaoAvisos.addEventListener("click", exibirMenuDeAvisos);
