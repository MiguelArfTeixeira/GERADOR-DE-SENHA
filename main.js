const numeroSenha= document.querySelector('.parametro-_texto');
let tamanhoSenha=12;
numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelectorAll('parametro-senha_botao');
botoes[0].onclick=diminuiTamanho;
if (tamanhoSenha>1) {
       tamanhoSenha=tamanhoSenha-1;
}
botoes[1].onclick=aumentarTamanho
if(tamanhoSenha<20){
 tamanhoSenha=tamanhoSenha+1;
}
function diminuiTamanho() {
 numeroSenha.textContent=tamanhoSenha;
}

function aumentarTamanho(){
   
    numeroSenha.textContent=tamanhoSenha;
}