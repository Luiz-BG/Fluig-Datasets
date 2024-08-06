document.addEventListener('DOMContentLoaded', (event) => {
   const data = [
      // Substitua estes dados pelos seus dados provenientes das variáveis JS
      { col1: 'Dado 1', col2: 'Dado 2', col3: 'Dado 3' },
      { col1: 'Dado 4', col2: 'Dado 5', col3: 'Dado 6' },
      { col1: 'Dado 7', col2: 'Dado 8', col3: 'Dado 9' },
      { col1: 'Dado 10', col2: 'Dado 11', col3: 'Dado 12' },
      { col1: 'Dado 13', col2: 'Dado 14', col3: 'Dado 15' },
      { col1: 'Dado 16', col2: 'Dado 17', col3: 'Dado 18' },
      { col1: 'Dado 19', col2: 'Dado 20', col3: 'Dado 21' },
      { col1: 'Dado 21', col2: 'Dado 23', col3: 'Dado 24' },
      { col1: 'Dado 25', col2: 'Dado 26', col3: 'Dado 27' },
      { col1: 'Dado 28', col2: 'Dado 29', col3: 'Dado 30' },
      { col1: 'Dado 31', col2: 'Dado 32', col3: 'Dado 33' },
      { col1: 'Dado 34', col2: 'Dado 35', col3: 'Dado 36' },
      { col1: 'Dado 37', col2: 'Dado 38', col3: 'Dado 39' },
      { col1: 'Dado 40', col2: 'Dado 41', col3: 'Dado 42' },
      { col1: 'Dado 43', col2: 'Dado 44', col3: 'Dado 45' },
      { col1: 'Dado 46', col2: 'Dado 47', col3: 'Dado 48' }
   ];
   var linha1 = "l1"
   var linha2 = "l2"
   var linha3 = "l3"
   const rowsPerPage = 9;
   let currentPage = 1;
   const tabelaBody = document.querySelector('#tabela tbody');
   const btnAnterior = document.querySelector('#anterior');
   const btnProximo = document.querySelector('#proximo');
   function renderTable() {
      tabelaBody.innerHTML = '';
      const startIndex = (currentPage - 1) * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
      const pageData = data.slice(startIndex, endIndex);
      for (const row of pageData) {
         const tr = document.createElement('tr');
         for (const key in row) {
            const td = document.createElement('td');
            td.textContent = row[key];
            tr.appendChild(td);
         }
         tabelaBody.appendChild(tr);
      }
      btnAnterior.disabled = currentPage === 1;
      btnProximo.disabled = endIndex >= data.length;
   }
   btnAnterior.addEventListener('click', () => {
      if (currentPage > 1) {
         currentPage--;
         renderTable();
      }
   });
   btnProximo.addEventListener('click', () => {
      if ((currentPage * rowsPerPage) < data.length) {
         currentPage++;
         renderTable();
      }
   });
   renderTable();
}); //

let destinatarios = []; // Assumindo que você está recebendo os dados de uma resposta de API
let paginaatual = 1;
const linhasporpagina = 9;
// Função para renderizar a tabela
function renderTable(pagina) {
   const comeco = (pagina - 1) * linhasporpagina;
   const final = comeco + linhasporpagina;
   let html = '<thead><tr><th>mits</th></tr></thead><tbody>';
   for (let i = comeco; i < final && i < destinatarios.length; i++) {
      const rcControlemits = destinatarios[i]["mits"].value;
      html += '<tr>';
      html += '<td>' + rcControlemits + '</td>';
      html += '</tr>';
   }
   html += '</tbody>';
   document.getElementById("tbDadosMIT").innerHTML = html;
   // Atualiza o estado dos botões
   document.getElementById('prev').disabled = pagina === 1;
   document.getElementById('next').disabled = final >= destinatarios.length;
}
// Função para carregar dados (simulação de resposta de API)
function loadData() {
   // Simulação de dados recebidos de uma API
   destinatarios = Array.from({ length: 30 }, (_, i) => ({ mits: { value: `MITS ${i + 1}` }, mits: { value: `mits ${i + 1}` } }));
   renderTable(paginaatual);
}
// Funções de navegação
function nextPage() {
   if (paginaatual * linhasporpagina < destinatarios.length) {
      paginaatual++;
      renderTable(paginaatual);
   }
}
function previousPage() {
   if (paginaatual > 1) {
      paginaatual--;
      renderTable(paginaatual);
   }
}
// Carregar dados e inicializar tabela quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', loadData);
