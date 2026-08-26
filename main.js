const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha_botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentarTamanho;

const campoSenha = document.querySelector('#campo-senha');

const checkMaiusculas = document.querySelector('#maiusculas');
const checkMinusculas = document.querySelector('#minusculas');
const checkNumeros = document.querySelector('#numeros');
const checkSimbolos = document.querySelector('#simbolos');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';

geraSenha();

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentarTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function geraSenha() {
    let caracteresDisponiveis = "";

    if (checkMaiusculas.checked) {
        caracteresDisponiveis += letrasMaiusculas;
    }
    if (checkMinusculas.checked) {
        caracteresDisponiveis += letrasMinusculas;
    }
    if (checkNumeros.checked) {
        caracteresDisponiveis += numeros;
    }
    if (checkSimbolos.checked) {
        caracteresDisponiveis += simbolos;
    }

    if (caracteresDisponiveis === "") {
        campoSenha.value = "";
        return;
    }

    let senha = "";

    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * caracteresDisponiveis.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + caracteresDisponiveis[numeroAleatorio];
    }

    campoSenha.value = senha;
}

checkMaiusculas.addEventListener('change', geraSenha);
checkMinusculas.addEventListener('change', geraSenha);
checkNumeros.addEventListener('change', geraSenha);
checkSimbolos.addEventListener('change', geraSenha);