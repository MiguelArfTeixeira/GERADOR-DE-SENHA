const numeroSenha= document.querySelector('.parametro-_texto');
let tamanhoSenha=12;
numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelectorAll('parametro-senha_botao');
botoes[0].onclick=diminuiTamanho();
botoes[1].onclick=aumentarTamanho();



function diminuiTamanho() {
 if (tamanhoSenha>1) {
tamanhoSenha--;
}
numeroSenha.textContent=tamanhoSenha;
}

function aumentarTamanho(){
   if(tamanhoSenha<20){
 tamanhoSenha++;
}
numeroSenha.textContent=tamanhoSenha;
}

const campoSenha=document.querySelector(#campo-senha);
const letrasMaiusculas='ABCDEFGH';
geraSenha()
function geraSenha(){
    let numeroAleatorio
}