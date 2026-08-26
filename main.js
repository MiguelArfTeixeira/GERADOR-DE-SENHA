const numeroSenha= document.querySelector('.parametro-_texto');
let tamanhoSenha=12;
numeroSenha.textContent=tamanhoSenha;

const botoes=document.querySelectorAll('parametro-senha_botao');
diminuiTamanho()
aumentarTamanho()
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

  let senha = "";

    for (let i = 0;i < tamanhoSenha;i++) {
     
    
  
    let numeroAleatorio= Math.ramdom()*letrasMaiusculas.lenght;

    numeroAleatorio=Math.floor(numeroAleatorio);

    console.log(letrasMaiusculas[numeroAleatorio]);

    senha = senha + letrasMaiusculas[numeroAleatorio]
    
}
  }
  campoSenha.value=letrasMaiusculas