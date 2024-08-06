var datable = document.getElementsByClassName('table'); //pega a tabela
var dadosTabela = []; //cria o array
for (var t = 0; t < datable.length; t++) { // percorre a tabela
    var tabela = datable[t];
    var linhas = tabela.getElementsByTagName('tr'); // pega as linhas da tabela
    for (var i = 1; i < linhas.length; i++) {
        var celulas = linhas[i].getElementsByTagName('td');// pega os dados de cada linha
        var dadosLinha = [];
        for (var j = 0; j < celulas.length; j++) {
            dadosLinha.push(celulas[j].textContent);
        }
        dadosTabela.push(dadosLinha);
    }
}
console.log(dadosTabela);// Imprime o array

//OUTRO METODO (percorre as linhas)
var dadoTabela = [];
var linhas = document.getElementsByClassName('table')[1].getElementsByTagName('tr');
for (var i = 1; i < linhas.length; i++) {
    var celulas = linhas[i].getElementsByTagName('td');
    var dadosLinha = [];
    for (var j = 0; j < celulas.length; j++) {
        dadosLinha.push(celulas[j].textContent);
    }
    dadoTabela.push(dadosLinha);
}
console.log(dadoTabela);

//METODO QUE PEGA VALORES
var dadosTabela = [];
var linhas = document.getElementsByClassName('table')[1].getElementsByTagName('tr');
for (var i = 1; i < linhas.length; i++) {
    var celulas = linhas[i].getElementsByTagName('td');
    for (var j = 0; j < celulas.length; j++) {
        var valorCampo = celulas[j].querySelector('input, select, textarea').value
        dadosTabela.push(valorCampo);
    }
}
console.log(dadosTabela);

//função para alimentar tabela
function alimentarTabela(dadosTabela) {
    var corpoTabela = document.getElementById('tableConvi');
    corpoTabela.innerHTML = '';
    dadosTabela.forEach(function (string, index) {
        var linha = document.createElement('tr');
        var celulaNome = document.createElement('td');
        celulaNome.textContent = 'Nome ' + index;
        var celulaEmail = document.createElement('td');
        celulaEmail.textContent = string;
        linha.appendChild(celulaNome);
        linha.appendChild(celulaEmail);
        corpoTabela.appendChild(linha);
    });
}

// Exemplo de uso:
var dadosTabela = ['String 1', 'String 2', 'String 3']; // Substitua pelo seu array de strings
alimentarTabela(dadosTabela);


/*
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Alimentar Tabela com JavaScript</title>
</head>
<body>

<table id="tabela">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <!-- Os dados serão inseridos aqui via JavaScript -->
  </tbody>
</table>

<script>
*/
/*
nomesconvidadosstrasdda, adsa
document.addEventListener("DOMContentLoaded", function () {
    // Obtém a referência da tabela
    var tabela = document.getElementById("tableConvi").getElementsByTagName('tbody')[0];
    // Loop através dos dados e cria as linhas da tabela
    for (var i = 0; i < nomesConvidadosstr.length; i++) {
        // Cria uma nova linha na tabela
        var linhanova = tabela.insertRow(tabela.rows.length);
        // Insere os dados nas células da linha
        var coluna1 = linhanova.insertCell(0);
        var coluna2 = linhanova.insertCell(1);
        coluna1.innerHTML = nomesConvidadosstr[i];
        coluna2.innerHTML = emailConvidadosstr[i];
    }
});
*/
// TESTES DE PEGAR VALORES
function insereProduto(Tabela){

    if($("#" + Tabela + " tr").length <= 20) index= wdkAddChild(Tabela); 
    //index = wdkAddChild(Tabela);
    document.getElementById('IndexPRD___'+index).value = index ;
    document.getElementById("nrQuantidade___"+ index).value = "0,00";
    document.getElementById("vlUnitOriginal___"+ index).value = "0,00";
    document.getElementById("nrValorUN___"+ index).value = "0,00";
    document.getElementById("nrValorMoeda___"+ index).value = "0,00";
    document.getElementById("nrValorUNMoeda___"+ index).value = "0,00";
    carregaIcones();
    FormataMascara();



}

function contaItens(Tabela) {

    if($("#" + Tabela + " tr").length == 20) {
        alert("Só é permitido inserir 20 itens, conforme parametrização do ERP");
    }
}