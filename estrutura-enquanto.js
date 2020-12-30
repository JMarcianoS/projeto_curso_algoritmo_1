
function acaoBotao() {
    var nome, idade, limite, contador;

    limite = prompt("Escreva a quantidade de vezes que sera verificado a idade")
    contador = 0
    while (contador < limite) {
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt("Digite a idade do " + nome + ": ")
        if ( idade >= 18 )
            document.getElementById("paragrafo").innerText =(nome + " Voce e maior de idade")
        else
            document.getElementById("paragrafo").innerText =(nome + " Voce e menor de idade")
        contador++
    
    
        
    }
}
