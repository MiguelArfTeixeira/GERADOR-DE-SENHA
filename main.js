const numeroSenha= document.querySelector('.parametro-_texto');
let tamanhoSenha=12;
numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelectorAll('parametro-senha_botao');
botoes[0].onclick=diminuiTamanho;
botoes[1].onclick=aumentarTamanho
function diminuiTamanho() {
    tamanhoSenha=tamanhoSenha-1;
    numeroSenha.textContent=tamanhoSenha;
}

function aumentarTamanho(){
    tamanhoSenha=tamanhoSenha+2;
    numeroSenha.textContent=tamanhoSenha;
}