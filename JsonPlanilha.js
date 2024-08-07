function generateExcel() {
    // JSON fixo para testes
    const data = [{ "Recursos": "AGENOR FARIA JUNIOR", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "AIRTON FERNANDES LIMA", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "ALBERTO URSINI FILHO", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "ALEXANDRE MONTANI DE OLIVEIRA", "Sistema(s)": "PROTHEUS", "Vinculo": "", "Unidade": "TSM" }, { "Recursos": "ALEXANDRE NUNES GOMES", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TVale" }, { "Recursos": "ALISSON FERNANDES ELIAS", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "ANDRE DA SILVA RODRIGUES", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "ANDRE HYODO JUHEI", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "ANDRESSA AREM", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "ANDREZA SUELEM DUARTE ROCHA", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "AUGUSTO MEIRELLES", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TVale" }, { "Recursos": "CAMILA THAMIRES MARTINS DE SOUZA", "Sistema(s)": "PROTHEUS", "Vinculo": "CLT", "Unidade": "TSM" }, { "Recursos": "CARLOS ALBERTO LOPES DA SILVA", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "CESAR AUGUSTO BRANDAO", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "CLAITON ANDRADE", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "CLEBER CINTRA BARBOSA", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "CRISTIAN EDUARDO HIDALGO CERDA", "Sistema(s)": "", "Vinculo": "", "Unidade": "TSM" }, { "Recursos": "DANIELA CANHAMEIRO", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "DAVID DE OLIVEIRA SOBRINHO", "Sistema(s)": "Protheus", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "DJALMA BORGES NETO", "Sistema(s)": "Protheus", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "DOUGLAS GONCALVES DE SOUZA", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "EDUARDO BERTAIA", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TVale" }, { "Recursos": "EDUARDO SANCHEZ CIDRON", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "ELIVELTON DE OLIVEIRA CANEDO", "Sistema(s)": "PROTHEUS", "Vinculo": "CLT", "Unidade": "TSM" }, { "Recursos": "EMILY SILVA DE SOUZA", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "CLT", "Unidade": "TSM" }, { "Recursos": "EVALDO VAGNER BATISTA", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "FABIO VERALDI ALVES", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "FELIPE DOS ANJOS DENTELLO", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "FERNANDA AMORIM SILVA", "Sistema(s)": "PROTHEUS", "Vinculo": "CLT", "Unidade": "TSM" }, { "Recursos": "FERNANDO EUGENIO DA SILVA", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "FERNANDO LOURENCONI BARRETO ALMEIDA", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "GABRIEL ALVES DE SOUZA", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "CLT", "Unidade": "TVale" }, { "Recursos": "GABRIEL SANTOS", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "GERSON APARECIDO DE JESUS BELINI", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TVale" }, { "Recursos": "GIOVANNA ANICETO POPOLILE", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "GIOVANNI FERNANDES DE SOUZA", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "GISELE BRANDAO GENUINO", "Sistema(s)": "", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "GUILHERME AUGUSTO DE LIMA SILVA", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "HENRIQUE GARCIA  DE SOUZA", "Sistema(s)": "Protheus", "Vinculo": "CLT", "Unidade": "TSM" }, { "Recursos": "HEVERSON CARLOS GOMES DE ARAUJO", "Sistema(s)": "Protheus", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "ISRAEL MACHADO VITAL", "Sistema(s)": "PROTHEUS", "Vinculo": "CLT", "Unidade": "TVale" }, { "Recursos": "JANAINA GOMES DOS REIS", "Sistema(s)": "FLUIG, PROTHEUS, RM", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "JEAN INACIO SILVA", "Sistema(s)": "FLUIG, JAVA, PROTHEUS, RM", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "JOAO PAULO PIRES", "Sistema(s)": "Protheus", "Vinculo": "CLT", "Unidade": "TSul" }, { "Recursos": "JOAO VITOR PLAZA", "Sistema(s)": "PROTHEUS", "Vinculo": "CLT", "Unidade": "TSM" }, { "Recursos": "JOSE ROBERTO DA SILVA", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "JUAREZ CARVALHO DE LIMA", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "JUAREZ CORDEIRO", "Sistema(s)": "RM", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "KAREN CRISTHINE COELHO", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "KARINA OLIVEIRA DE LIRA BARBOSA MOURA", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "LARISSA DA SILVA LIMA", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "LARISSA MARCOS CAMPAGNA", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "LEANDRO DOS ANJOS DENTELLO", "Sistema(s)": "PROTHEUS", "Vinculo": "CLT", "Unidade": "TSM" }, { "Recursos": "LEONARDO CLEMENTE CEZAR", "Sistema(s)": "Protheus", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "LEONARDO MACEDO DOS SANTOS", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "LIARA BONIFACIO CRUZ", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "LUCAS MENDONCA DE SOUZA GONCALVES", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TVale" }, { "Recursos": "LUCIANO MARABINI MARINS", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "LUIZ EDUARDO BRITO GOMES", "Sistema(s)": "FLUIG", "Vinculo": "CLT", "Unidade": "TSM" }, { "Recursos": "LUIZ GUSTAVO RIBEIRO DE OLIVEIRA", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "LUIZ NATALINO LOLO", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "MARCOS GEORGE MARICATO", "Sistema(s)": "Protheus", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "MARIANA BORGES ARAUJO", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "MATHEUS ALVES DA SILVA", "Sistema(s)": "FLUIG", "Vinculo": "CLT", "Unidade": "TSM" }, { "Recursos": "MATHEUS FERNANDES DA SILVA", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "MURILO MENDONCA TAVARES", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "MYCHEL NATAL", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "NORBERTO M DE MELO", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "PAULA DE CASSIA VALERIO CONTI", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "PAULO VILAS BOAS", "Sistema(s)": "FLUIG, JAVA, PROTHEUS, RM", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "PEDRO FAVA", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "CLT", "Unidade": "TVale" }, { "Recursos": "PEDRO IVO LEONEL BARBOSA", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TVale" }, { "Recursos": "RAFAEL DOMINGUES DE OLIVEIRA", "Sistema(s)": "Protheus", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "RAFAEL GOMES DO AMARAL", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "RAFAEL TURRINI CEGANTINI", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "RAFAEL VICTORIO BEZERRA", "Sistema(s)": "", "Vinculo": "CLT", "Unidade": "TSM" }, { "Recursos": "RENAN GONCALVES", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "PJ", "Unidade": "TVale" }, { "Recursos": "RENATO FREIRE JUNIOR", "Sistema(s)": "Protheus, RM", "Vinculo": "Cooperado(a)", "Unidade": "TVale" }, { "Recursos": "RODOLFO FERREIRA DA SILVA", "Sistema(s)": "", "Vinculo": "", "Unidade": "TSM" }, { "Recursos": "ROLANDO LINDBERG", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TVale" }, { "Recursos": "RONALDO TADEU ROBES", "Sistema(s)": "", "Vinculo": "PJ", "Unidade": "TVale" }, { "Recursos": "ROSELI LEANDRO DO PRADO", "Sistema(s)": "RM", "Vinculo": "", "Unidade": "TSM" }, { "Recursos": "SAMUEL RENAN", "Sistema(s)": "PROTHEUS", "Vinculo": "CLT", "Unidade": "TSM" }, { "Recursos": "SERGIO NORIO KANASHIRO", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "STANKO ZLATKOVIC C. DE MIRANDA", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "TATIANA ABRANCHES", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "TATIANA MAIA LUSITANO", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "THAIS GOES", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "THALYS AUGUSTO", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "THIAGO FERNANDES GIDZINSKI", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "PJ", "Unidade": "TVale" }, { "Recursos": "VALDIRENE MAGALHAES PINHEIRO", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "VANDERLEI PIASSE", "Sistema(s)": "FLUIG, PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TVale" }, { "Recursos": "VINICIUS DAVI CHWALENSKY", "Sistema(s)": "PROTHEUS", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "VINICIUS TEIXEIRA VENANCIO DA CUNHA", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "VITOR EDUARDO DE JESUS", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "VITOR GUILHERME ALVES VICTOR", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }, { "Recursos": "WALBER SOBRINHO MENEZES", "Sistema(s)": "Protheus", "Vinculo": "Cooperado(a)", "Unidade": "TVale" }, { "Recursos": "WALLACE RODRIGUES", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TVale" }, { "Recursos": "WESLEY ADELAIDE ROSA", "Sistema(s)": "Protheus", "Vinculo": "Cooperado(a)", "Unidade": "TSul" }, { "Recursos": "YURI MILAN PORTO", "Sistema(s)": "Protheus", "Vinculo": "PJ", "Unidade": "TSM" }, { "Recursos": "YURI ROMAN", "Sistema(s)": "PROTHEUS", "Vinculo": "Cooperado(a)", "Unidade": "TSM" }]
    // Cria uma nova planilha
    const ws = XLSX.utils.json_to_sheet(data);

    // Cria um novo workbook e adiciona a planilha
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Relatório');

    // Cria um arquivo Excel e faz o download
    XLSX.writeFile(wb, 'aaa.xlsx');
}

/*
var c1 = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST);

// Obter o dataset especificando as constraints
var ds = DatasetFactory.getDataset('formMatrizCapacitacao', null, [c1], null);

// Verificar se o dataset foi obtido corretamente
if (ds && ds.values) {
    if (ds.values.length > 0) {
        // Inicializar o array para armazenar os valores
        var extractedValues = [];

        // Iterar sobre os registros do dataset usando um loop for
        for (var i = 0; i < ds.values.length; i++) {
            var valores = ds.values[i];
            
            // Inicializar uma string para armazenar os valores da especialidade
            var especialidade = '';
            
            // Inicializar o objeto para armazenar os valores extraídos
            var valoresExtraidos = {
                nomSolic: valores['nomSolic'],
                unidade: transformUnidade(valores['unidade']),
                tpSistFluig: valores['tpSistFluig'],
                tpSistJava: valores['tpSistJava'],
                tpSistProtheus: valores['tpSistProtheus'],
                tpSistRM: valores['tpSistRm'],
                tipServico: valores['tipServico']
            };
            
            // Iterar sobre as chaves do registro para encontrar as chaves que começam com "tpSist"
            for (var key in valores) {
                if (key.startsWith('tpSist') && valores[key] === 'on') {
                    // Extrair o tipo de sistema do nome da chave
                    var tipoDeSistema = key.substring(6); // Remove "tpSist" do início da chave
                    valoresExtraidos.TipoDeSistema = tipoDeSistema;
                }
                
                // Verificar se a chave tem o valor 4 e adicioná-la à especialidade
                if (valores[key] === '4') {
                    if (especialidade) {
                        especialidade += '; ' + key;
                    } else {
                        especialidade = key;
                    }
                }
            }
            
            // Adicionar a especialidade ao objeto valoresExtraidos
            valoresExtraidos.Especialidade = especialidade;
            
            // Adicionar o objeto ao array
            extractedValues.push(valoresExtraidos);
        }

        // Exibir os valores extraídos
        console.log('Valores extraídos:', extractedValues);
    } else {
        console.log('Nenhum dado encontrado no dataset.');
    }
} else {
    console.log('Erro ao obter o dataset. Dataset:', ds);
}

// Função para transformar os valores da unidade
function transformUnidade(valor) {
    switch (valor) {
        case '01':
            return 'TSM';
        case '03':
            return 'TSUL';
        case '04':
            return 'TVAL';
        default:
            return valor; // Retorna o valor original se não corresponder a nenhum caso
    }
}
//////////////////////////////
// Seleciona todos os elementos <input> do tipo checkbox ou radio
let inputs = document.querySelectorAll('label > input');

// Array para armazenar os textos dos <strong> correspondentes
let strongTexts = [];

// Itera sobre os inputs e filtra os que estão "checked" e têm valor 4
inputs.forEach(input => {
    if (input.checked && input.value === '4') {
        // Encontra o <strong> correspondente ao <input>
        let strong = input.closest('div').querySelector('strong');
        if (strong) {
            // Remove espaços em branco, quebras de linha, tabulações e asterisco
            let cleanedText = strong.textContent
                .replace(/\s+/g, ' ') // Substitui múltiplos espaços por um único espaço
                .replace(/\*$/, '')  // Remove o asterisco no final
                .trim();             // Remove espaços em branco no início e no final

            // Adiciona o texto limpo ao array
            strongTexts.push(cleanedText);
        }
    }
});

// Remove duplicatas do array
strongTexts = [...new Set(strongTexts)];

// Exibe o array com os textos limpos no console
console.log(strongTexts);



GUSTAVO MARZANATTI:  (MAIOR NIVEL)NIVEL 2: OK
'RM - CONSULTAS SQL + RM BIS', 'RM - PROGR. EM SQL SERVER - AMB CORPORE'


David de Oliveira Sobrinho: OK
'INFRA-ESTRUTURA', 'TOTVS MONITOR', 'REPLICA DE DADOS', 'CONFIGURADOR', 'TOTVS DBACCESS', 'TOTVS DBAUDIT TRAIL', 'ASSISTENTE DE CONFIGURAÇÕES DO SERVIDOR', 'INTEGRAÇÃO REPORTS', 'INTEGRAÇÃO CRYSTAL', 'CONSULTA RELACIONAL', 'PADRÃO DE OPERAÇÃO', 'PROTHEUS REPORT(FUNCIONALIDADE)', PROTHEUS REPORT(DESENVOLVIMENTO)


Rodrigo Plaza: 
'INSTALAÇÃO FLUIG', 'CRIAÇÃO DE BASE DE DADOS FLUIG', 'CONFIGURAÇÃO DO ECM', 'CONFIGURAÇÃO DO BPM', 'DESENVOLVIMENTO DE FORMULÁRIOS HTML COMPLEXOS(IMPLATANÇÃO - WCM E BPM), DESENVOLVIMENTO DE FORMULÁRIOS HTML COMPLEXOS(DESENVOLVIMENTO MOBILE)', 'LAYOUTS WCM CUSTOMIZADOS EM HTML E JAVA SCRIPT', 'WIDGETS WCM CUSTOMIMZADOS HTML E JAVA SCRIPT', 'ACESSO AO WEB SERVICES SOAP/REST'


HENRIQUE GARCIA  DE SOUZA: (MAIOR NIVEL) NIVEL 1
'INFRA-ESTRUTURA', 'TOTVS MONITOR', 'REPLICA DE DADOS', 'MCS MOBLIE CONNECTIVITY STUDIO', 'CONFIGURADOR', 'TOTVS DBACCESS', 'TOTVS DBAUDIT TRAIL', 'COMPRAS', 'FATURAMENTO', 'ESTOQUE/CUSTOS', 'CONTROLE DE PRODUÇÃO', 'CONTROLE DE CUSTOS', 'PLANEJAMENTO E CONTROLE DE PRODUÇÃO -PCP', 'GESTÃO DE CONTRATOS', 'MANUTENÇÃO DE ATIVOS (MNT)', 'MANUTENÇÃO DE FROTA', 'GESTÃO AGRÍCOLA', 'SPED FISCAL', 'SPED CONTáBIL', 'NF-E', 'CONTABILIDADE GERENCIAL', 'ATIVO FIXO', 'FISCAL (LIVROS FISCAIS)', 'PLANEJAMENTO E CONTROLE ORÇAMENTÁRIO', 'CONTAS A PAGAR', 'CONTAS A RECEBER', 'MOVIMENTAÇÃO BANCÁRIA', 'CNAB', 'GESTÃO DE PROJETOS - PMS', 'GESTÃO DE ARMAZENAGEM - WMS', 'GESTÃO DE TRANSPORTE - TMS', 'GESTÃO DE DISTRIBUIÇÃO - OMS', 'GESTÃO DE FRETE EMBARCADOR - GFE', 'CALL CENTER', 'GESTÃO DE PESQUISA E RESULTADO', 'FIELD SERVICE - (ASSIST. TÉCNICA)', 'GESTÃO PESSOAL', 'PONTO ELETRÔNICO', 'RECRUTAMENTO E SELEÇÃO DE PESSOAL', 'TREINAMENTO', 'CARGOS E SALÁRIOS', 'AVALIAÇÃO E PESQUISA DE DESEMPENHO', 'PROCESSOS TRABALHISTAS', 'MEDICINA E SEGURANÇA DO TRABALHO', 'E - SOCIAL', 'GESTÃO PESSOAL METROLOGIA (QMT)', 'PONTO ELETRÔNICO CONTROLE DE NÃO-CONFORMIDADES (QNC)', 'RECRUTAMENTO E SELEÇÃO DE PESSOAL INSPEÇÃO DE PROCESSOS (QIP)', 'METROLOGIA (QMT)', 'CONTROLE DE NÃO-CONFORMIDADES (QNC)', 'INSPEÇÃO DE PROCESSOS (QIP)', 'INSPEÇÃO DE ENTRADA (QIE)', 'GESTÃO AMBIENTAL', 'GESTÃO DE RISCO', 'CONTROLE DE AUDITORIAS', 'CONTROLE DE DOCUMENTOS (QDO)', 'PPAP - MEDIÇÃO DE PEÇAS', 'CONTROLE DE LOJA (SIGALOJA)', 'FIDELIZAÇÃO E ANALISE DE CREDITO', 'FRONT LOJA (FLJ)', 'OFICINAS', 'VEÍCULOS', 'PEÇAS', 'BPM', 'GESTÃO DE INDICADORES', 'WORKFLOW', 'BALANCED SCORECARD', 'DATAWEREHOUSE', 'GESTÃO HOSPITALAR', 'DIREITOS AUTORAIS', 'AUTOMAÇÃO DA FORÇA DE VENDAS (SFA)', 'AUTOMAÇÃO DA ENTREGA RAPIDA', 'GESTÃO EDUCACIONAL', 'GESTÃO ACERVOS', 'ASSISTENTE DE CONFIGURAÇÕES DO SERVIDOR', 'INTEGRAÇÃO REPORTS', 'INTEGRAÇÃO CRYSTAL', 'CONSULTA RELACIONAL', 'PADRÃO DE OPERAÇÃO', 'PROTHEUS REPORT', 'PAINEIS ONLINNE', 'TOII TOTVS OFFICE INTERFACE', 'PROTHEUS SEARCH', 'INDICADORES DW NATIVOS', 'PAINEIS OFFLINNE'



YURI MILAN PORTO
'INFRA-ESTRUTURA', 'TOTVS MONITOR', 'REPLICA DE DADOS', 'CONFIGURADOR', 'TOTVS DBACCESS', 'TOTVS DBAUDIT TRAIL', 'COMPRAS', 'FATURAMENTO', 'ESTOQUE/CUSTOS', 'CONTROLE DE PRODUÇÃO', 'CONTROLE DE CUSTOS', 'PLANEJAMENTO E CONTROLE DE PRODUÇÃO -PCP', 'GESTÃO DE CONTRATOS', 'ATIVO FIXO', 'CONTAS A PAGAR', 'CONTAS A RECEBER', 'MOVIMENTAÇÃO BANCÁRIA', 'CNAB', 'CALL CENTER', 'GESTÃO DE PESQUISA E RESULTADO', 'FIELD SERVICE - (ASSIST. TÉCNICA)', 'GESTÃO PESSOAL METROLOGIA (QMT)', 'PONTO ELETRÔNICO CONTROLE DE NÃO-CONFORMIDADES (QNC)', 'METROLOGIA (QMT)', 'INSPEÇÃO DE ENTRADA (QIE)', 'CONTROLE DE LOJA (SIGALOJA)', 'FIDELIZAÇÃO E ANALISE DE CREDITO', 'FRONT LOJA (FLJ)', 'ASSISTENTE DE CONFIGURAÇÕES DO SERVIDOR', 'INTEGRAÇÃO REPORTS', 'INTEGRAÇÃO CRYSTAL', 'CONSULTA RELACIONAL', 'PROTHEUS REPORT'


Leonardo Clemente Cezar
'INFRA-ESTRUTURA', 'REPLICA DE DADOS', 'CONFIGURADOR', 'TOTVS DBACCESS', 'TOTVS DBAUDIT TRAIL', 'COMPRAS', 'FATURAMENTO', 'ESTOQUE/CUSTOS', 'CONTROLE DE PRODUÇÃO', 'CONTROLE DE CUSTOS', 'PLANEJAMENTO E CONTROLE DE PRODUÇÃO -PCP', 'GESTÃO DE CONTRATOS', 'MANUTENÇÃO DE ATIVOS (MNT)', 'MANUTENÇÃO DE FROTA', 'SPED FISCAL', 'SPED CONTáBIL', 'NF-E', 'CONTABILIDADE GERENCIAL', 'ATIVO FIXO', 'FISCAL (LIVROS FISCAIS)', 'PLANEJAMENTO E CONTROLE ORÇAMENTÁRIO', 'CONTAS A PAGAR', 'CONTAS A RECEBER', 'MOVIMENTAÇÃO BANCÁRIA', 'CNAB', 'GESTÃO DE PROJETOS - PMS', 'GESTÃO DE DISTRIBUIÇÃO - OMS', 'GESTÃO DE RISCO', 'CONTROLE DE AUDITORIAS', 'CONTROLE DE DOCUMENTOS (QDO)', 'CONTROLE DE LOJA (SIGALOJA)', 'FIDELIZAÇÃO E ANALISE DE CREDITO', 'FRONT LOJA (FLJ)', 'BPM', 'GESTÃO DE INDICADORES', 'WORKFLOW', 'BALANCED SCORECARD', 'DATAWEREHOUSE', 'DIREITOS AUTORAIS', 'AUTOMAÇÃO DA FORÇA DE VENDAS (SFA)', 'AUTOMAÇÃO DA ENTREGA RAPIDA', 'ASSISTENTE DE CONFIGURAÇÕES DO SERVIDOR', 'INTEGRAÇÃO REPORTS', 'INTEGRAÇÃO CRYSTAL', 'CONSULTA RELACIONAL', 'PADRÃO DE OPERAÇÃO', 'PROTHEUS REPORT', 'PAINEIS ONLINNE', 'TOII TOTVS OFFICE INTERFACE', 'PROTHEUS SEARCH', 'INDICADORES DW NATIVOS', 'PAINEIS OFFLINNE'

DJALMA BORGES NETO
'CONFIGURADOR', 'TOTVS DBACCESS'


HEVERSON CARLOS GOMES DE ARAUJO
'CONFIGURADOR', 'COMPRAS', 'FATURAMENTO', 'ESTOQUE/CUSTOS', 'CONTROLE DE PRODUÇÃO', 'CONTROLE DE CUSTOS', 'PLANEJAMENTO E CONTROLE DE PRODUÇÃO -PCP', 'SPED CONTáBIL', 'NF-E', 'CONTABILIDADE GERENCIAL', 'ATIVO FIXO', 'FISCAL (LIVROS FISCAIS)', 'CONTAS A PAGAR', 'CONTAS A RECEBER', 'MOVIMENTAÇÃO BANCÁRIA', 'CNAB'

RAFAEL DOMINGUES DE OLIVEIRA
'CONFIGURADOR', 'PROTHEUS REPORT'

WESLEY ADELAIDE ROSA
'GESTÃO PESSOAL', 'PONTO ELETRÔNICO', 'RECRUTAMENTO E SELEÇÃO DE PESSOAL', 'TREINAMENTO', 'CARGOS E SALÁRIOS', 'MEDICINA E SEGURANÇA DO TRABALHO', 'E - SOCIAL'

JOÃO PAULO PIRES: (maior nivel) NÍVEL 3
'TOTVS MONITOR', 'REPLICA DE DADOS', 'CONFIGURADOR', 'NF-E'


DANIELLE BRAGA DA FONSECA
'SPED FISCAL', 'SPED CONTáBIL', 'ATIVO FIXO', 'CONTAS A PAGAR', 'CONTAS A RECEBER', 'MOVIMENTAÇÃO BANCÁRIA', 'PONTO ELETRÔNICO', 'MEDICINA E SEGURANÇA DO TRABALHO', 'E - SOCIAL'


MARCOS GEORGE MARICATO
'CONFIGURADOR', 'MANUTENÇÃO DE ATIVOS (MNT)', 'MANUTENÇÃO DE FROTA'

RENATO FREIRE JUNIOR
'CONFIGURADOR', 'GESTÃO PESSOAL', 'PONTO ELETRÔNICO', 'RECRUTAMENTO E SELEÇÃO DE PESSOAL', 'TREINAMENTO', 'CARGOS E SALÁRIOS', 'MEDICINA E SEGURANÇA DO TRABALHO', 'E - SOCIAL', 'RM - VITAE - TREINAMENTO', 'RM - VITAE - RECRUTAMENTO', 'RM - VITAE - SEGURANÇA E MEDICINA', 'RM - CHRONUS - PONTO ELETRONICO', 'RM - LABORE - FOLHA', 'RM - LABORE - FORMULAS', 'RM - GERADOR RELATÓRIOS - LABORE'

WALBER SOBRINHO MENEZES
'INFRA-ESTRUTURA', 'TOTVS MONITOR', 'REPLICA DE DADOS', 'CONFIGURADOR', 'TOTVS DBACCESS', 'TOTVS DBAUDIT TRAIL', 'COMPRAS', 'FATURAMENTO', 'ESTOQUE/CUSTOS', 'CONTROLE DE PRODUÇÃO', 'CONTROLE DE CUSTOS', 'PLANEJAMENTO E CONTROLE DE PRODUÇÃO -PCP', 'SPED FISCAL', 'SPED CONTáBIL', 'CONTABILIDADE GERENCIAL', 'ATIVO FIXO', 'FISCAL (LIVROS FISCAIS)', 'CONTAS A PAGAR', 'CONTAS A RECEBER', 'MOVIMENTAÇÃO BANCÁRIA', 'CNAB', 'ASSISTENTE DE CONFIGURAÇÕES DO SERVIDOR', 'INTEGRAÇÃO REPORTS', 'CONSULTA RELACIONAL', 'PADRÃO DE OPERAÇÃO', 'PROTHEUS REPORT', 'PAINEIS ONLINE', 'TOII TOTVS OFFICE INTERFACE', 'PROTHEUS SEARCH', 'INDICADORES DW NATIVOS', 'PAINEIS OFFLINNE'

TSUL TVALE TSM = 				            unidade
CONSULTOR PROTHEUS = 				        tipServico
CLT ESTAGIO CLT COOPERADO PJ = 			    rdTipVinc (class="rdTipVinc")
TIPO DE SISTEMA FLUIG PROTHEUS RM JAVA = 	tpSistFluig(class="tpSist")
                                            tpSistJava
                                            tpSistProtheus
                                            tpSistRM
SE É COLABORADOR OU NÃO                     gruposCadRecurso
NOME=						                nomRecurso
SOBRENOME=					                sobreNmCadRecurso


unidade
tipServico
rdTipVinc
tpSistFluig
tpSistJava
tpSistProtheus
tpSistRM
gruposCadRecurso
nomRecurso
sobreNmCadRecurso
*/


/* CÓDIGO QUE LE TODOS OS REGISTROS, TRANSFORMA unidade = 01 para TSM, tpSistFuig = on para FLUIG e valores // Constraint para obter registros ativos
var c1 = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST);

// Obter o dataset especificando as constraints
var ds = DatasetFactory.getDataset('dsFormCadRecurso', null, [c1], null);

// Mapeamento manual dos IDs para textos legíveis
var idToTextMap = {
    'instFluig': 'INSTALAÇÃO FLUIG',
    'instFlIdentFluig': 'INSTALAÇÃO DO FLUIG IDENTITY',
    'instFlIdentADFluig': 'CONFIGURAÇÃO DO FLUIG IDENTITY (AD E PROD. TOTVS)',
    'crBaseDadosFluig': 'CRIAÇÃO DE BASE DE DADOS FLUIG',
    'confRedeFluig': 'CONFIGURAÇÃO REDE (DMZ DNS SSL)',
    'altDispFluig': 'ALTA DISPONIBILIDADE(TOMCAT BIGIP)',
    'confECM': 'CONFIGURAÇÃO DO ECM',
    'confBPM': 'CONFIGURAÇÃO DO BPM',
    'confWCM': 'CONFIGURAÇÃO DO WCM',
    'confSocial': 'CONFIGURAÇÃO DO SOCIAL',
    'devFormHtmlCompl': 'DESENVOLVIMENTO DE FORMULÁRIOS HTML COMPLEXOS',
    'layWcmCustHtmlJS': 'LAYOUTS WCM CUSTOMIZADOS EM HTML E JAVA SCRIPT',
    'widWcmCustHtmlJS': 'WIDGETS WCM CUSTOMIMZADOS HTML E JAVA SCRIPT',
    'acWebService': 'ACESSO AO WEB SERVICES SOAP/REST',
    'devCompEspIntSist': 'DESENVOLVIMENTO DE COMPONENTES ESPECÍFICOS DE INTEGRAÇÃO COM SISTEMAS',
    'devCompIntSist': 'DESENVOLVIMENTO DE COMPONENTES DE INTEGRAÇÃO COM SISTEMAS',
    'devMobFormHtmlCompl': 'DESENVOLVIMENTO DE FORMULÁRIOS HTML COMPLEXOS',
    'flAnalytEvent': 'FLUIG ANALYTICS E EVENTOS',
    'devProjViaCloudConn': 'DESENVOLVIMENTO DE PROJETOS VIA CLOUD CONNECT (MODELAGEM E CARGAS)',
    'devRelatDashb': 'DESENVOLVIMENTO DE RELATÓRIOS E DASHBOARDS VIA PLATAFORMA SAAS',
    'devMetUtil': 'DESENVOLVIMENTO DE MÉTRICAS UTILIZANDO MAQL',
    'admPlatViaSaas': 'ADMINISTRADOR DA PLATAFORMA VIA SAAS',
    'funcProthReport': 'PROTHEUS REPORT',
    'painOnLine': 'PAINEIS ON-LINE',
    'totvsOffInterface': 'TOII TOTVS OFFICE INTERFACE',
    'protheusSearch': 'PROTHEUS SEARCH',
    'indDwNativos': 'INDICADORES DW NATIVOS',
    'painOffLine': 'PAINEIS OFF-LINE',
    'jsfRichFaces': 'JSF/RICH FACES',
    'jsfPrimeFaces': 'JSF/PRIMEFACES',
    'jsfIceFaces': 'JSF/ICE FACES',
    'jsfMyFaces': 'JSF/MY FACES',
    'struts': 'STRUTS ',
    'struts': 'STRUTS ',
    'springMvc': 'SPRING MVC',
    'servlets': 'SERVLETS',
    'jsp': 'JSP',
    'mvcOutros': 'OUTROS',
    'hibernate': 'HIBERNATE',
    'jpa': 'JPA',
    'eclipseLink': 'ECLIPSE LINK',
    'topLink': 'TOP LINK',
    'ibatis': 'IBATIS',
    'jdbc': 'JDBC',
    'jdo': 'JDO',
    'framPersOutros': 'OUTROS',
    'ejb': 'EJB .',
    'ejb': 'EJB .0',
    'ejb': 'EJB .',
    'spring': 'SPRING ',
    'spring': 'SPRING ',
    'jms': 'JMS ',
    'jms': 'JMS ',
    'WebServiceSoap': 'WEBSERVICES SOAP',
    'WebServiceRest': 'WEBSERVICES REST',
    'ferrIntOutros': 'OUTROS',
    'html': 'HTML ',
    'JavaScript': 'JAVASCRIPT',
    'json': 'JSON',
    'css': 'CSS',
    'ajax': 'AJAX',
    'conGerWebOutros': 'OUTROS',
    'jUnit': 'JUNIT',
    'selenium': 'SELENIUM',
    'arquilian': 'ARQUILIAN',
    'cactus': 'CACTUS',
    'ferraTestOutros': 'OUTROS',
    'jQuery': 'JQUERY',
    'nodeJS': 'NODE JS',
    'extJS': 'EXT JS',
    'javaScriptMvc': 'JAVACRIPT MVC',
    'gooWebToolKit': 'GOOGLE WEB TOOLKIT',
    'dojo': 'DOJO',
    'yui': 'YUI',
    'fraWorJavScrOutros': 'OUTROS',
    'svn': 'SVN',
    'git': 'GIT',
    'cvs': 'CVS',
    'mercurial': 'MERCURIAL',
    'ferVersOutros': 'OUTROS',
    'maven': 'MAVEN',
    'ant': 'ANT',
    'ivy': 'IVY',
    'autBuildOutros': 'OUTROS',
    'oracle': 'ORACLE',
    'sqlServer': 'SQL SERVER',
    'postgree': 'POSTGREE',
    'db': 'DB2',
    'mySql': 'MYSQL',
    'banDadosOutros': 'OUTROS',
    'eclipse': 'ECLIPSE',
    'netbeans': 'NETBEANS',
    'jDeveloper': 'JDEVELOPER',
    'ambProgOutros': 'OUTROS',
    'scrum': 'SCRUM',
    'xp': 'XP',
    'lean': 'LEAN',
    'agile': 'AGILE',
    'metTrabOutros': 'OUTROS',
    'tomCat': 'TOMCAT',
    'jBoss': 'JBOSS',
    'webSphere': 'WEBSPHERE',
    'webLogic': 'WEBLOGIC',
    'glassFish': 'GLASSFISH',
    'servApliOutros': 'OUTROS',
    'aspectj': 'ASPECTJ',
    'jBossAop': 'JBOSS AOP',
    'jSpringAop': 'SPRING AOP',
    'aopOutros': 'OUTROS',
    'mobAndroid': 'MOBILE / ANDROID',
    'platafWeb': 'PLATAFORMA WEB',
    'desktopSwing': 'DESKTOP / SWING',
    'reflection': 'REFLECTION',
    'lingJava': 'LINGUAGEM JAVA',
    'infraEstrut': 'INFRA-ESTRUTURA',
    'totvsMon': 'TOTVS MONITOR',
    'replDados': 'REPLICA DE DADOS',
    'mcsMobConnStudio': 'MCS MOBLIE CONNECTIVITY STUDIO',
    'configurador': 'CONFIGURADOR',
    'totvsDBAccess': 'TOTVS DBACCESS',
    'totvsDBAuditTrail': 'TOTVS DBAUDIT TRAIL',
    'compras': 'COMPRAS',
    'faturamento': 'FATURAMENTO',
    'estoqCusto': 'ESTOQUE/CUSTOS',
    'contrProducao': 'CONTROLE DE PRODUÇÃO',
    'contrCustos': 'CONTROLE DE CUSTOS',
    'planContrProd': 'PLANEJAMENTO E CONTROLE DE PRODUÇÃO -PCP',
    'gestContrato': 'GESTÃO DE CONTRATOS',
    'manutAtivosMnt': 'MANUTENÇÃO DE ATIVOS (MNT)',
    'manutFrota': 'MANUTENÇÃO DE FROTA',
    'gestAgricola': 'GESTÃO AGRÍCOLA',
    'spedFiscal': 'SPED FISCAL',
    'spedContabil': 'SPED CONTáBIL',
    'nfe': 'NF-E',
    'contabGerencial': 'CONTABILIDADE GERENCIAL',
    'ativoFixo': 'ATIVO FIXO',
    'fiscLivrFiscal': 'FISCAL (LIVROS FISCAIS)',
    'planContrOrcam': 'PLANEJAMENTO E CONTROLE ORÇAMENTÁRIO',
    'contPagar': 'CONTAS A PAGAR',
    'contReceber': 'CONTAS A RECEBER',
    'movtoBancario': 'MOVIMENTAÇÃO BANCÃRIA',
    'cnab': 'CNAB',
    'gestProjetosPms': 'GESTÃO DE PROJETOS - PMS',
    'prothGesArmWms': 'GESTÃO DE ARMAZENAGEM - WMS',
    'prothGesTranTms': 'GESTÃO DE TRANSPORTE - TMS',
    'distDistrOms': 'GESTÃO DE DISTRIBUIÇÃO - OMS',
    'gestFretEmbGfe': 'GESTÃO DE FRETE EMBARCADOR - GFE',
    'crmCalCen': 'CALL CENTER',
    'crmGesPesRes': 'GESTÃO DE PESQUISA E RESULTADO',
    'fieldServAssTec': 'FIELD SERVICE - (ASSIST. TÉCNICA)',
    'prothGesPes': 'GESTÃO PESSOAL',
    'prothPonElet': 'PONTO ELETRÔNICO',
    'prothRecSelPes': 'RECRUTAMENTO E SELEÇÃO DE PESSOAL',
    'prothTrein': 'TREINAMENTO',
    'prothCarSal': 'CARGOS E SALÁRIOS',
    'prothAvaPesDes': 'AVALIAÇÃO E PESQUISA DE DESEMPENHO',
    'prothProcTrab': 'PROCESSOS TRABALHISTAS',
    'prothMedSegTrab': 'MEDICINA E SEGURANÇA DO TRABALHO',
    'prothEsoc': 'E - SOCIAL',
    'prothGesPesMetro': 'GESTÃO PESSOAL METROLOGIA (QMT)',
    'prothPonEleCon': 'PONTO ELETRÔNICO CONTROLE   DE  NÃO-CONFORMIDADES (QNC)',
    'prothRecSelPesIns': 'RECRUTAMENTO E SELEÇÃO DE PESSOAL INSPEÇÃO DE PROCESSOS (QIP)',
    'prothMetrol': 'METROLOGIA (QMT)',
    'prothConNaoConfQnc': 'CONTROLE DE NÃO-CONFORMIDADES (QNC)',
    'prothInsPro': 'INSPEÇÃO DE PROCESSOS (QIP)',
    'prothInsEnt': 'INSPEÇÃO DE ENTRADA (QIE)',
    'prothGesAmb': 'GESTÃO AMBIENTAL',
    'prothGesRis': 'GESTÃO DE RISCO',
    'prothContAud': 'CONTROLE DE AUDITORIAS',
    'prothContDocQdo': 'CONTROLE DE DOCUMENTOS (QDO)',
    'prothPpaMedPec': 'PPAP - MEDIÇÃO DE PEÇAS',
    'prothContLojSig': 'CONTROLE DE LOJA (SIGALOJA)',
    'prothFidAnaCred': 'FIDELIZAÇÃO E ANALISE DE CREDITO',
    'prothFroLojFlj': 'FRONT LOJA (FLJ)',
    'prothOficinas': 'OFICINAS',
    'prothVeiculos': 'VEÍCULOS',
    'prothPecas': 'PEÇAS',
    'prothBiBpm': 'BPM',
    'prothBiGesInd': 'GESTÃO DE INDICADORES',
    'prothBiWorFlo': 'WORKFLOW',
    'prothBiBalSco': 'BALANCED SCORECARD',
    'prothBiDatWerHou': 'DATAWEREHOUSE',
    'prothComExtBpm': 'BPM',
    'prothComExtGesInd': 'GESTÃO DE INDICADORES',
    'prothComExtWorflo': 'WORKFLOW',
    'prothComExtBalSco': 'BALANCED SCORECARD',
    'prothComExtDatWer': 'DATAWEREHOUSE',
    'prothGesHospitalar': 'GESTÃO HOSPITALAR',
    'prothDirAutorais': 'DIREITOS AUTORAIS',
    'prothAutForVen': 'AUTOMAÇÃO DA FORÇA DE VENDAS (SFA)',
    'prothAutEntRap': 'AUTOMAÇÃO DA ENTREGA RAPIDA',
    'prothGesEduc': 'GESTÃO EDUCACIONAL',
    'prothGesAcerv': 'GESTÃO ACERVOS',
    'prothAssConfServ': 'ASSISTENTE DE CONFIGURAÇÕES DO SERVIDOR',
    'prothIntRep': 'INTEGRAÇÃO REPORTS',
    'prothIntCry': 'INTEGRAÇÃO CRYSTAL',
    'prothConRel': 'CONSULTA RELACIONAL',
    'prothPadOpe': 'PADRÃO DE OPERAÇÃO',
    'prothFuncProthReport': 'PROTHEUS REPORT',
    'prothPainOnl': 'PAINEIS ONLINNE',
    'prothTotOffInter': 'TOII TOTVS OFFICE INTERFACE',
    'prothSea': 'PROTHEUS SEARCH',
    'prothIndDwNat': 'INDICADORES DW NATIVOS',
    'prothPainOffli': 'PAINEIS OFFLINNE',
    'desProthReport': 'PROTHEUS REPORT',
    'rmNucCompras': 'RM - NUCLEUS - COMPRAS',
    'rmNucProcess': 'RM - NUCLEUS - PROCESSOS',
    'rmNucFaturam': 'RM - NUCLEUS - FATURAMENTO',
    'rmNucRessuprim': 'RM - NUCLEUS - RESSUPRIMENTOS',
    'rmNucEstoques': 'RM - NUCLEUS - ESTOQUES',
    'rmSalContab': 'RM - SALDUS - CONTABILIDADE',
    'rmSalFecham': 'RM - SALDUS -FECHAMENTOS',
    'rmLibFiscal': 'RM - LIBER - FISCAL',
    'rmLibSpedFis': 'RM - LIBER - SPED FISCAL',
    'rmNfe': 'RM - NFE',
    'rmBonAti': 'RM - BONUM - ATIVO',
    'rmFluContPag': 'RM - FLUXUS - CONTAS A PAGAR',
    'rmFluContRec': 'RM - FLUXUS - CONTAS A RECEBER',
    'rmFluApliEmp': 'RM - FLUXUS - APLICAÇÕES E EMPRESTIMOS',
    'rmFluGesFin': 'RM - FLUXUS - GESTÃO FINANCEIRA',
    'rmVitTreina': 'RM - VITAE - TREINAMENTO',
    'rmVitRec': 'RM - VITAE - RECRUTAMENTO',
    'rmVitSegMed': 'RM - VITAE - SEGURANÇA E MEDICINA',
    'rmChroPonEle': 'RM - CHRONUS - PONTO ELETRONICO',
    'rmLabFolha': 'RM - LABORE - FOLHA',
    'rmLabForm': 'RM - LABORE - FORMULAS',
    'rmTestAval': 'RM - TESTIS - AVALIAÇÕES',
    'rmAgiWork': 'RM - AGILIS - WORKFLOW',
    'rmClasGesEdu': 'RM - CLASSIS - GESTÃO EDUCACIONAL',
    'rmClasNet': 'RM - CLASSIS NET',
    'rmBibGesBib': 'RM - BIBLIOS - GESTÃO DE BIBLIOTECAS',
    'rmSolGesObr': 'RM - SOLUM - GESTÃO DE OBRAS',
    'rmOffGesManu': 'RM - OFFICINA - GESTÃO DE MANUTENÇÃO',
    'rmSgiGesImob': 'RM - SGI - GESTÃO IMOBILIARIA',
    'rmFacGesManu': 'RM - FACTOR - GESTÃO DE MANUFATURA',
    'rmArqInsRm': 'RM - ARQUITETURA E INSTALAÇÃO RM',
    'rmConsSqlBis': 'RM - CONSULTAS SQL + RM BIS',
    'rmProgSqlAmbCorp': 'RM - PROGR. EM SQL  SERVER - AMB CORPORE',
    'rmGerRelLab': 'RM - GERADOR RELATÓRIOS - LABORE',
    'rmGerRelFlux': 'RM - GERADOR RELATÓRIOS - FLUXUS',
    'rmGerRelNuc': 'RM - GERADOR RELATÓRIOS - NUCLEUS'
};
// Mapeamento para "rdTipVinc"
var rdTipVincMap = {
    'coop': 'Cooperado(a)',
    'clt': 'CLT',
    'pj': 'PJ'
};
// Verificar se o dataset foi obtido corretamente
if (ds && ds.values) {
    if (ds.values.length > 0) {
        // Inicializar o array para armazenar os valores
        var extractedValues = [];

        // Função para transformar os valores da unidade
        function transformUnidade(valor) {
            switch (valor) {
                case '01':
                    return 'TSM';
                case '03':
                    return 'TSUL';
                case '04':
                    return 'TVAL';
                default:
                    return valor; // Retorna o valor original se não corresponder a nenhum caso
            }
        }
         // Função para transformar os valores de "rdTipVinc"
         function transformRdTipVinc(valor) {
            return rdTipVincMap[valor] || valor;
        }
        // Iterar sobre os registros do dataset usando um loop for
        for (var i = 0; i < ds.values.length; i++) {
            var valores = ds.values[i];
            var sobreNmCadRecurso = valores['sobreNmCadRecurso'];
            var nomRecurso = valores['nomRecurso'].replace(new RegExp(sobreNmCadRecurso, 'gi'), '');

            var nomCompleto = nomRecurso.trim() + (sobreNmCadRecurso ? ' ' + sobreNmCadRecurso : '');
            nomCompleto = nomCompleto.replace(/\s+/g, ' '); // remover espaços em branco extras



            // Inicializar o objeto para armazenar os valores extraídos
            var valoresExtraidos = {
                unidade: transformUnidade(valores['unidade']), // Transforma o valor da unidade
                tipServico: valores['tipServico'],
                rdTipVinc: transformRdTipVinc(valores['rdTipVinc']),
                valores4: '', // Nova coluna para armazenar os valores que equivalem a 4
                valores3: '', // Nova coluna para armazenar os valores que equivalem a 3
                valores2: '', // Nova coluna para armazenar os valores que equivalem a 2
                valores1: '', // Nova coluna para armazenar os valores que equivalem a 1
                TipoDeSistema: '', // Nova coluna para armazenar o tipo de sistema
                ConhecimentoAdicional: valores['conhecRecurso'], // Nova coluna para armazenar o conhecimento adicional
                NomCompletoCadRecurso: nomCompleto,
            };

            // Iterar sobre as chaves do registro para encontrar as chaves que começam com "tpSist"
            for (var key in valores) {
                if (key.startsWith('tpSist') && valores[key] === 'on') {
                    // Extrair o tipo de sistema do nome da chave
                    var tipoDeSistema = key.substring(6); // Remove "tpSist" do início da chave
                    valoresExtraidos.TipoDeSistema = tipoDeSistema;
                }

                // Verificar se a chave tem o valor 4 e adicionar o texto do mapeamento
                if (valores[key] === '4') {
                    let text = idToTextMap[key] || key; // Usa o texto mapeado ou a própria chave se não houver mapeamento
                    if (valoresExtraidos.valores4) {
                        valoresExtraidos.valores4 += ', ' + text;
                    } else {
                        valoresExtraidos.valores4 = text;
                    }
                }

                // Verificar se a chave tem o valor 3 e adicionar o texto do mapeamento
                if (valores[key] === '3') {
                    let text = idToTextMap[key] || key; // Usa o texto mapeado ou a própria chave se não houver mapeamento
                    if (valoresExtraidos.valores3) {
                        valoresExtraidos.valores3 += ', ' + text;
                    } else {
                        valoresExtraidos.valores3 = text;
                    }
                }

                // Verificar se a chave tem o valor 2 e adicionar o texto do mapeamento
                if (valores[key] === '2') {
                    let text = idToTextMap[key] || key; // Usa o texto mapeado ou a própria chave se não houver mapeamento
                    if (valoresExtraidos.valores2) {
                        valoresExtraidos.valores2 += ', ' + text;
                    } else {
                        valoresExtraidos.valores2 = text;
                    }
                }

                // Verificar se a chave tem o valor 1 e adicionar o texto do mapeamento
                if (valores[key] === '1') {
                    if (key !== 'compId') { // Ignorar o compId
                        let text = idToTextMap[key] || key; // Usa o texto mapeado ou a própria chave se não houver mapeamento
                        if (valoresExtraidos.valores1) {
                            valoresExtraidos.valores1 += ', ' + text;
                        } else {
                            valoresExtraidos.valores1 = text;
                        }
                    }
                }
            }

            // Adicionar o objeto ao array
            extractedValues.push(valoresExtraidos);
        }

        // Exibir os valores extraídos
        console.log('Valores extraídos:', extractedValues);
    }
}
*/
/*
ARRAY DO FORM ANTIGO DE VALOR 1 ATÉ 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
CÓDIGO DA FORMMATRIZCAPACITACAO
var c1 = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST);

// Obter o dataset especificando as constraints
var ds = DatasetFactory.getDataset('formMatrizCapacitacao', null, [c1], null);

// Mapeamento manual dos IDs para textos legíveis
var idToTextMap = {
    'instFluig': 'INSTALAÇÃO FLUIG',
    'instFlIdentFluig': 'INSTALAÇÃO DO FLUIG IDENTITY',
    'instFlIdentADFluig': 'CONFIGURAÇÃO DO FLUIG IDENTITY (AD E PROD. TOTVS)',
    'crBaseDadosFluig': 'CRIAÇÃO DE BASE DE DADOS FLUIG',
    'confRedeFluig': 'CONFIGURAÇÃO REDE (DMZ DNS SSL)',
    'altDispFluig': 'ALTA DISPONIBILIDADE(TOMCAT BIGIP)',
    'confECM': 'CONFIGURAÇÃO DO ECM',
    'confBPM': 'CONFIGURAÇÃO DO BPM',
    'confWCM': 'CONFIGURAÇÃO DO WCM',
    'confSocial': 'CONFIGURAÇÃO DO SOCIAL',
    'devFormHtmlCompl': 'DESENVOLVIMENTO DE FORMULÁRIOS HTML COMPLEXOS',
    'layWcmCustHtmlJS': 'LAYOUTS WCM CUSTOMIZADOS EM HTML E JAVA SCRIPT',
    'widWcmCustHtmlJS': 'WIDGETS WCM CUSTOMIMZADOS HTML E JAVA SCRIPT',
    'acWebService': 'ACESSO AO WEB SERVICES SOAP/REST',
    'devCompEspIntSist': 'DESENVOLVIMENTO DE COMPONENTES ESPECÍFICOS DE INTEGRAÇÃO COM SISTEMAS',
    'devCompIntSist': 'DESENVOLVIMENTO DE COMPONENTES DE INTEGRAÇÃO COM SISTEMAS',
    'devMobFormHtmlCompl': 'DESENVOLVIMENTO DE FORMULÁRIOS HTML COMPLEXOS',
    'flAnalytEvent': 'FLUIG ANALYTICS E EVENTOS',
    'devProjViaCloudConn': 'DESENVOLVIMENTO DE PROJETOS VIA CLOUD CONNECT (MODELAGEM E CARGAS)',
    'devRelatDashb': 'DESENVOLVIMENTO DE RELATÓRIOS E DASHBOARDS VIA PLATAFORMA SAAS',
    'devMetUtil': 'DESENVOLVIMENTO DE MÉTRICAS UTILIZANDO MAQL',
    'admPlatViaSaas': 'ADMINISTRADOR DA PLATAFORMA VIA SAAS',
    'funcProthReport': 'PROTHEUS REPORT',
    'painOnLine': 'PAINEIS ON-LINE',
    'totvsOffInterface': 'TOII TOTVS OFFICE INTERFACE',
    'protheusSearch': 'PROTHEUS SEARCH',
    'indDwNativos': 'INDICADORES DW NATIVOS',
    'painOffLine': 'PAINEIS OFF-LINE',
    'jsfRichFaces': 'JSF/RICH FACES',
    'jsfPrimeFaces': 'JSF/PRIMEFACES',
    'jsfIceFaces': 'JSF/ICE FACES',
    'jsfMyFaces': 'JSF/MY FACES',
    'struts': 'STRUTS ',
    'struts': 'STRUTS ',
    'springMvc': 'SPRING MVC',
    'servlets': 'SERVLETS',
    'jsp': 'JSP',
    'mvcOutros': 'OUTROS',
    'hibernate': 'HIBERNATE',
    'jpa': 'JPA',
    'eclipseLink': 'ECLIPSE LINK',
    'topLink': 'TOP LINK',
    'ibatis': 'IBATIS',
    'jdbc': 'JDBC',
    'jdo': 'JDO',
    'framPersOutros': 'OUTROS',
    'ejb': 'EJB .',
    'ejb': 'EJB .0',
    'ejb': 'EJB .',
    'spring': 'SPRING ',
    'spring': 'SPRING ',
    'jms': 'JMS ',
    'jms': 'JMS ',
    'WebServiceSoap': 'WEBSERVICES SOAP',
    'WebServiceRest': 'WEBSERVICES REST',
    'ferrIntOutros': 'OUTROS',
    'html': 'HTML ',
    'JavaScript': 'JAVASCRIPT',
    'json': 'JSON',
    'css': 'CSS',
    'ajax': 'AJAX',
    'conGerWebOutros': 'OUTROS',
    'jUnit': 'JUNIT',
    'selenium': 'SELENIUM',
    'arquilian': 'ARQUILIAN',
    'cactus': 'CACTUS',
    'ferraTestOutros': 'OUTROS',
    'jQuery': 'JQUERY',
    'nodeJS': 'NODE JS',
    'extJS': 'EXT JS',
    'javaScriptMvc': 'JAVACRIPT MVC',
    'gooWebToolKit': 'GOOGLE WEB TOOLKIT',
    'dojo': 'DOJO',
    'yui': 'YUI',
    'fraWorJavScrOutros': 'OUTROS',
    'svn': 'SVN',
    'git': 'GIT',
    'cvs': 'CVS',
    'mercurial': 'MERCURIAL',
    'ferVersOutros': 'OUTROS',
    'maven': 'MAVEN',
    'ant': 'ANT',
    'ivy': 'IVY',
    'autBuildOutros': 'OUTROS',
    'oracle': 'ORACLE',
    'sqlServer': 'SQL SERVER',
    'postgree': 'POSTGREE',
    'db': 'DB2',
    'mySql': 'MYSQL',
    'banDadosOutros': 'OUTROS',
    'eclipse': 'ECLIPSE',
    'netbeans': 'NETBEANS',
    'jDeveloper': 'JDEVELOPER',
    'ambProgOutros': 'OUTROS',
    'scrum': 'SCRUM',
    'xp': 'XP',
    'lean': 'LEAN',
    'agile': 'AGILE',
    'metTrabOutros': 'OUTROS',
    'tomCat': 'TOMCAT',
    'jBoss': 'JBOSS',
    'webSphere': 'WEBSPHERE',
    'webLogic': 'WEBLOGIC',
    'glassFish': 'GLASSFISH',
    'servApliOutros': 'OUTROS',
    'aspectj': 'ASPECTJ',
    'jBossAop': 'JBOSS AOP',
    'jSpringAop': 'SPRING AOP',
    'aopOutros': 'OUTROS',
    'mobAndroid': 'MOBILE / ANDROID',
    'platafWeb': 'PLATAFORMA WEB',
    'desktopSwing': 'DESKTOP / SWING',
    'reflection': 'REFLECTION',
    'lingJava': 'LINGUAGEM JAVA',
    'infraEstrut': 'INFRA-ESTRUTURA',
    'totvsMon': 'TOTVS MONITOR',
    'replDados': 'REPLICA DE DADOS',
    'mcsMobConnStudio': 'MCS MOBLIE CONNECTIVITY STUDIO',
    'configurador': 'CONFIGURADOR',
    'totvsDBAccess': 'TOTVS DBACCESS',
    'totvsDBAuditTrail': 'TOTVS DBAUDIT TRAIL',
    'compras': 'COMPRAS',
    'faturamento': 'FATURAMENTO',
    'estoqCusto': 'ESTOQUE/CUSTOS',
    'contrProducao': 'CONTROLE DE PRODUÇÃO',
    'contrCustos': 'CONTROLE DE CUSTOS',
    'planContrProd': 'PLANEJAMENTO E CONTROLE DE PRODUÇÃO -PCP',
    'gestContrato': 'GESTÃO DE CONTRATOS',
    'manutAtivosMnt': 'MANUTENÇÃO DE ATIVOS (MNT)',
    'manutFrota': 'MANUTENÇÃO DE FROTA',
    'gestAgricola': 'GESTÃO AGRÍCOLA',
    'spedFiscal': 'SPED FISCAL',
    'spedContabil': 'SPED CONTáBIL',
    'nfe': 'NF-E',
    'contabGerencial': 'CONTABILIDADE GERENCIAL',
    'ativoFixo': 'ATIVO FIXO',
    'fiscLivrFiscal': 'FISCAL (LIVROS FISCAIS)',
    'planContrOrcam': 'PLANEJAMENTO E CONTROLE ORÇAMENTÁRIO',
    'contPagar': 'CONTAS A PAGAR',
    'contReceber': 'CONTAS A RECEBER',
    'movtoBancario': 'MOVIMENTAÇÃO BANCÃRIA',
    'cnab': 'CNAB',
    'gestProjetosPms': 'GESTÃO DE PROJETOS - PMS',
    'prothGesArmWms': 'GESTÃO DE ARMAZENAGEM - WMS',
    'prothGesTranTms': 'GESTÃO DE TRANSPORTE - TMS',
    'distDistrOms': 'GESTÃO DE DISTRIBUIÇÃO - OMS',
    'gestFretEmbGfe': 'GESTÃO DE FRETE EMBARCADOR - GFE',
    'crmCalCen': 'CALL CENTER',
    'crmGesPesRes': 'GESTÃO DE PESQUISA E RESULTADO',
    'fieldServAssTec': 'FIELD SERVICE - (ASSIST. TÉCNICA)',
    'prothGesPes': 'GESTÃO PESSOAL',
    'prothPonElet': 'PONTO ELETRÔNICO',
    'prothRecSelPes': 'RECRUTAMENTO E SELEÇÃO DE PESSOAL',
    'prothTrein': 'TREINAMENTO',
    'prothCarSal': 'CARGOS E SALÁRIOS',
    'prothAvaPesDes': 'AVALIAÇÃO E PESQUISA DE DESEMPENHO',
    'prothProcTrab': 'PROCESSOS TRABALHISTAS',
    'prothMedSegTrab': 'MEDICINA E SEGURANÇA DO TRABALHO',
    'prothEsoc': 'E - SOCIAL',
    'prothGesPesMetro': 'GESTÃO PESSOAL METROLOGIA (QMT)',
    'prothPonEleCon': 'PONTO ELETRÔNICO CONTROLE   DE  NÃO-CONFORMIDADES (QNC)',
    'prothRecSelPesIns': 'RECRUTAMENTO E SELEÇÃO DE PESSOAL INSPEÇÃO DE PROCESSOS (QIP)',
    'prothMetrol': 'METROLOGIA (QMT)',
    'prothConNaoConfQnc': 'CONTROLE DE NÃO-CONFORMIDADES (QNC)',
    'prothInsPro': 'INSPEÇÃO DE PROCESSOS (QIP)',
    'prothInsEnt': 'INSPEÇÃO DE ENTRADA (QIE)',
    'prothGesAmb': 'GESTÃO AMBIENTAL',
    'prothGesRis': 'GESTÃO DE RISCO',
    'prothContAud': 'CONTROLE DE AUDITORIAS',
    'prothContDocQdo': 'CONTROLE DE DOCUMENTOS (QDO)',
    'prothPpaMedPec': 'PPAP - MEDIÇÃO DE PEÇAS',
    'prothContLojSig': 'CONTROLE DE LOJA (SIGALOJA)',
    'prothFidAnaCred': 'FIDELIZAÇÃO E ANALISE DE CREDITO',
    'prothFroLojFlj': 'FRONT LOJA (FLJ)',
    'prothOficinas': 'OFICINAS',
    'prothVeiculos': 'VEÍCULOS',
    'prothPecas': 'PEÇAS',
    'prothBiBpm': 'BPM',
    'prothBiGesInd': 'GESTÃO DE INDICADORES',
    'prothBiWorFlo': 'WORKFLOW',
    'prothBiBalSco': 'BALANCED SCORECARD',
    'prothBiDatWerHou': 'DATAWEREHOUSE',
    'prothComExtBpm': 'BPM',
    'prothComExtGesInd': 'GESTÃO DE INDICADORES',
    'prothComExtWorflo': 'WORKFLOW',
    'prothComExtBalSco': 'BALANCED SCORECARD',
    'prothComExtDatWer': 'DATAWEREHOUSE',
    'prothGesHospitalar': 'GESTÃO HOSPITALAR',
    'prothDirAutorais': 'DIREITOS AUTORAIS',
    'prothAutForVen': 'AUTOMAÇÃO DA FORÇA DE VENDAS (SFA)',
    'prothAutEntRap': 'AUTOMAÇÃO DA ENTREGA RAPIDA',
    'prothGesEduc': 'GESTÃO EDUCACIONAL',
    'prothGesAcerv': 'GESTÃO ACERVOS',
    'prothAssConfServ': 'ASSISTENTE DE CONFIGURAÇÕES DO SERVIDOR',
    'prothIntRep': 'INTEGRAÇÃO REPORTS',
    'prothIntCry': 'INTEGRAÇÃO CRYSTAL',
    'prothConRel': 'CONSULTA RELACIONAL',
    'prothPadOpe': 'PADRÃO DE OPERAÇÃO',
    'prothFuncProthReport': 'PROTHEUS REPORT',
    'prothPainOnl': 'PAINEIS ONLINNE',
    'prothTotOffInter': 'TOII TOTVS OFFICE INTERFACE',
    'prothSea': 'PROTHEUS SEARCH',
    'prothIndDwNat': 'INDICADORES DW NATIVOS',
    'prothPainOffli': 'PAINEIS OFFLINNE',
    'desProthReport': 'PROTHEUS REPORT',
    'rmNucCompras': 'RM - NUCLEUS - COMPRAS',
    'rmNucProcess': 'RM - NUCLEUS - PROCESSOS',
    'rmNucFaturam': 'RM - NUCLEUS - FATURAMENTO',
    'rmNucRessuprim': 'RM - NUCLEUS - RESSUPRIMENTOS',
    'rmNucEstoques': 'RM - NUCLEUS - ESTOQUES',
    'rmSalContab': 'RM - SALDUS - CONTABILIDADE',
    'rmSalFecham': 'RM - SALDUS -FECHAMENTOS',
    'rmLibFiscal': 'RM - LIBER - FISCAL',
    'rmLibSpedFis': 'RM - LIBER - SPED FISCAL',
    'rmNfe': 'RM - NFE',
    'rmBonAti': 'RM - BONUM - ATIVO',
    'rmFluContPag': 'RM - FLUXUS - CONTAS A PAGAR',
    'rmFluContRec': 'RM - FLUXUS - CONTAS A RECEBER',
    'rmFluApliEmp': 'RM - FLUXUS - APLICAÇÕES E EMPRESTIMOS',
    'rmFluGesFin': 'RM - FLUXUS - GESTÃO FINANCEIRA',
    'rmVitTreina': 'RM - VITAE - TREINAMENTO',
    'rmVitRec': 'RM - VITAE - RECRUTAMENTO',
    'rmVitSegMed': 'RM - VITAE - SEGURANÇA E MEDICINA',
    'rmChroPonEle': 'RM - CHRONUS - PONTO ELETRONICO',
    'rmLabFolha': 'RM - LABORE - FOLHA',
    'rmLabForm': 'RM - LABORE - FORMULAS',
    'rmTestAval': 'RM - TESTIS - AVALIAÇÕES',
    'rmAgiWork': 'RM - AGILIS - WORKFLOW',
    'rmClasGesEdu': 'RM - CLASSIS - GESTÃO EDUCACIONAL',
    'rmClasNet': 'RM - CLASSIS NET',
    'rmBibGesBib': 'RM - BIBLIOS - GESTÃO DE BIBLIOTECAS',
    'rmSolGesObr': 'RM - SOLUM - GESTÃO DE OBRAS',
    'rmOffGesManu': 'RM - OFFICINA - GESTÃO DE MANUTENÇÃO',
    'rmSgiGesImob': 'RM - SGI - GESTÃO IMOBILIARIA',
    'rmFacGesManu': 'RM - FACTOR - GESTÃO DE MANUFATURA',
    'rmArqInsRm': 'RM - ARQUITETURA E INSTALAÇÃO RM',
    'rmConsSqlBis': 'RM - CONSULTAS SQL + RM BIS',
    'rmProgSqlAmbCorp': 'RM - PROGR. EM SQL  SERVER - AMB CORPORE',
    'rmGerRelLab': 'RM - GERADOR RELATÓRIOS - LABORE',
    'rmGerRelFlux': 'RM - GERADOR RELATÓRIOS - FLUXUS',
    'rmGerRelNuc': 'RM - GERADOR RELATÓRIOS - NUCLEUS'
};
// Verificar se o dataset foi obtido corretamente
if (ds && ds.values) {
    if (ds.values.length > 0) {
        // Inicializar o array para armazenar os valores
        var extractedValues = [];

        // Função para transformar os valores da unidade
        function transformUnidade(valor) {
            switch (valor) {
                case '01':
                    return 'TSM';
                case '03':
                    return 'TSUL';
                case '04':
                    return 'TVAL';
                default:
                    return valor; // Retorna o valor original se não corresponder a nenhum caso
            }
        }
        // Iterar sobre os registros do dataset usando um loop for
        for (var i = 0; i < ds.values.length; i++) {
            var valores = ds.values[i];
            // Inicializar o objeto para armazenar os valores extraídos
            var valoresExtraidos = {
                NomCompletoCadRecurso: valores['nomSolic'],
                valores4: '', // Nova coluna para armazenar os valores que equivalem a 4
                valores3: '', // Nova coluna para armazenar os valores que equivalem a 3
                valores2: '', // Nova coluna para armazenar os valores que equivalem a 2
                valores1: '', // Nova coluna para armazenar os valores que equivalem a 1
            };

            // Iterar sobre as chaves do registro para encontrar as chaves que começam com "tpSist"
            for (var key in valores) {
                if (key.startsWith('tpSist') && valores[key] === 'on') {
                    // Extrair o tipo de sistema do nome da chave
                    var tipoDeSistema = key.substring(6); // Remove "tpSist" do início da chave
                    valoresExtraidos.TipoDeSistema = tipoDeSistema;
                }

                // Verificar se a chave tem o valor 4 e adicionar o texto do mapeamento
                if (valores[key] === '4') {
                    let text = idToTextMap[key] || key; // Usa o texto mapeado ou a própria chave se não houver mapeamento
                    if (valoresExtraidos.valores4) {
                        valoresExtraidos.valores4 += ', ' + text;
                    } else {
                        valoresExtraidos.valores4 = text;
                    }
                }

                // Verificar se a chave tem o valor 3 e adicionar o texto do mapeamento
                if (valores[key] === '3') {
                    let text = idToTextMap[key] || key; // Usa o texto mapeado ou a própria chave se não houver mapeamento
                    if (valoresExtraidos.valores3) {
                        valoresExtraidos.valores3 += ', ' + text;
                    } else {
                        valoresExtraidos.valores3 = text;
                    }
                }

                // Verificar se a chave tem o valor 2 e adicionar o texto do mapeamento
                if (valores[key] === '2') {
                    let text = idToTextMap[key] || key; // Usa o texto mapeado ou a própria chave se não houver mapeamento
                    if (valoresExtraidos.valores2) {
                        valoresExtraidos.valores2 += ', ' + text;
                    } else {
                        valoresExtraidos.valores2 = text;
                    }
                }

                // Verificar se a chave tem o valor 1 e adicionar o texto do mapeamento
                if (valores[key] === '1') {
                    if (key !== 'compId') { // Ignorar o compId
                        let text = idToTextMap[key] || key; // Usa o texto mapeado ou a própria chave se não houver mapeamento
                        if (valoresExtraidos.valores1) {
                            valoresExtraidos.valores1 += ', ' + text;
                        } else {
                            valoresExtraidos.valores1 = text;
                        }
                    }
                }
            }

            // Adicionar o objeto ao array
            extractedValues.push(valoresExtraidos);
        }

        // Exibir os valores extraídos
        console.log('Valores extraídos:', extractedValues);
        JSON.stringify(extractedValues)
    }
}
    */
/* ////////////////////////////////////////////////////NOME VALOR//////////////////////////////////////
 var c1 = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST);
 // Obter o dataset especificando as constraints
 var ds = DatasetFactory.getDataset('formMatrizCapacitacao', null, [c1], null);
 // Verificar se o dataset foi obtido corretamente
 if (ds && ds.values) {
     if (ds.values.length > 0) {
         // Inicializar o array para armazenar os valores
         var extractedValues = [];
         // Iterar sobre os registros do dataset usando um loop for
         for (var i = 0; i < ds.values.length; i++) {
             var valores = ds.values[i];
             var valoresExtraidos = {
                 NomCompletoCadRecurso: valores['nomSolic'],
                 'INSTALAÇÃO FLUIG': valores['instFluig'],
                 'INSTALAÇÃO DO FLUIG IDENTITY': valores['instFlIdentFluig'],
                 'CONFIGURAÇÃO DO FLUIG IDENTITY (AD E PROD. TOTVS)': valores['instFlIdentADFluig'],
                 'CRIAÇÃO DE BASE DE DADOS FLUIG': valores['crBaseDadosFluig'],
                 'CONFIGURAÇÃO REDE (DMZ DNS SSL)': valores['confRedeFluig'],
                 'ALTA DISPONIBILIDADE(TOMCAT BIGIP)': valores['altDispFluig'],
                 'CONFIGURAÇÃO DO ECM': valores['confECM'],
                 'CONFIGURAÇÃO DO BPM': valores['confBPM'],
                 'CONFIGURAÇÃO DO WCM': valores['confWCM'],
                 'CONFIGURAÇÃO DO SOCIAL': valores['confSocial'],
                 'DESENVOLVIMENTO DE FORMULÁRIOS HTML COMPLEXOS': valores['devFormHtmlCompl'],
                 'LAYOUTS WCM CUSTOMIZADOS EM HTML E JAVA SCRIPT': valores['layWcmCustHtmlJS'],
                 'WIDGETS WCM CUSTOMIMZADOS HTML E JAVA SCRIPT': valores['widWcmCustHtmlJS'],
                 'ACESSO AO WEB SERVICES SOAP/REST': valores['acWebService'],
                 'DESENVOLVIMENTO DE COMPONENTES ESPECÍFICOS DE INTEGRAÇÃO COM SISTEMAS': valores['devCompEspIntSist'],
                 'DESENVOLVIMENTO DE COMPONENTES DE INTEGRAÇÃO COM SISTEMAS': valores['devCompIntSist'],
                 'DESENVOLVIMENTO DE FORMULÁRIOS HTML COMPLEXOS': valores['devMobFormHtmlCompl'],
                 'FLUIG ANALYTICS E EVENTOS': valores['flAnalytEvent'],
                 'DESENVOLVIMENTO DE PROJETOS VIA CLOUD CONNECT (MODELAGEM E CARGAS)': valores['devProjViaCloudConn'],
                 'DESENVOLVIMENTO DE RELATÓRIOS E DASHBOARDS VIA PLATAFORMA SAAS': valores['devRelatDashb'],
                 'DESENVOLVIMENTO DE MÉTRICAS UTILIZANDO MAQL': valores['devMetUtil'],
                 'ADMINISTRADOR DA PLATAFORMA VIA SAAS': valores['admPlatViaSaas'],
                 'PROTHEUS REPORT': valores['funcProthReport'],
                 'PAINEIS ON-LINE': valores['painOnLine'],
                 'TOII TOTVS OFFICE INTERFACE': valores['totvsOffInterface'],
                 'PROTHEUS SEARCH': valores['protheusSearch'],
                 'INDICADORES DW NATIVOS': valores['indDwNativos'],
                 'PAINEIS OFF-LINE': valores['painOffLine'],
                 'JSF/RICH FACES': valores['jsfRichFaces'],
                 'JSF/PRIMEFACES': valores['jsfPrimeFaces'],
                 'JSF/ICE FACES': valores['jsfIceFaces'],
                 'JSF/MY FACES': valores['jsfMyFaces'],
                 'STRUTS ': valores['struts'],
                 'STRUTS ': valores['struts'],
                 'SPRING MVC': valores['springMvc'],
                 'SERVLETS': valores['servlets'],
                 'JSP': valores['jsp'],
                 'OUTROS': valores['mvcOutros'],
                 'HIBERNATE': valores['hibernate'],
                 'JPA': valores['jpa'],
                 'ECLIPSE LINK': valores['eclipseLink'],
                 'TOP LINK': valores['topLink'],
                 'IBATIS': valores['ibatis'],
                 'JDBC': valores['jdbc'],
                 'JDO': valores['jdo'],
                 'OUTROS': valores['framPersOutros'],
                 'EJB .': valores['ejb'],
                 'EJB .0': valores['ejb'],
                 'EJB .': valores['ejb'],
                 'SPRING ': valores['spring'],
                 'SPRING ': valores['spring'],
                 'JMS ': valores['jms'],
                 'JMS ': valores['jms'],
                 'WEBSERVICES SOAP': valores['WebServiceSoap'],
                 'WEBSERVICES REST': valores['WebServiceRest'],
                 'OUTROS': valores['ferrIntOutros'],
                 'HTML ': valores['html'],
                 'JAVASCRIPT': valores['JavaScript'],
                 'JSON': valores['json'],
                 'CSS': valores['css'],
                 'AJAX': valores['ajax'],
                 'OUTROS': valores['conGerWebOutros'],
                 'JUNIT': valores['jUnit'],
                 'SELENIUM': valores['selenium'],
                 'ARQUILIAN': valores['arquilian'],
                 'CACTUS': valores['cactus'],
                 'OUTROS': valores['ferraTestOutros'],
                 'JQUERY': valores['jQuery'],
                 'NODE JS': valores['nodeJS'],
                 'EXT JS': valores['extJS'],
                 'JAVACRIPT MVC': valores['javaScriptMvc'],
                 'GOOGLE WEB TOOLKIT': valores['gooWebToolKit'],
                 'DOJO': valores['dojo'],
                 'YUI': valores['yui'],
                 'OUTROS': valores['fraWorJavScrOutros'],
                 'SVN': valores['svn'],
                 'GIT': valores['git'],
                 'CVS': valores['cvs'],
                 'MERCURIAL': valores['mercurial'],
                 'OUTROS': valores['ferVersOutros'],
                 'MAVEN': valores['maven'],
                 'ANT': valores['ant'],
                 'IVY': valores['ivy'],
                 'OUTROS': valores['autBuildOutros'],
                 'ORACLE': valores['oracle'],
                 'SQL SERVER': valores['sqlServer'],
                 'POSTGREE': valores['postgree'],
                 'DB2': valores['db'],
                 'MYSQL': valores['mySql'],
                 'OUTROS': valores['banDadosOutros'],
                 'ECLIPSE': valores['eclipse'],
                 'NETBEANS': valores['netbeans'],
                 'JDEVELOPER': valores['jDeveloper'],
                 'OUTROS': valores['ambProgOutros'],
                 'SCRUM': valores['scrum'],
                 'XP': valores['xp'],
                 'LEAN': valores['lean'],
                 'AGILE': valores['agile'],
                 'OUTROS': valores['metTrabOutros'],
                 'TOMCAT': valores['tomCat'],
                 'JBOSS': valores['jBoss'],
                 'WEBSPHERE': valores['webSphere'],
                 'WEBLOGIC': valores['webLogic'],
                 'GLASSFISH': valores['glassFish'],
                 'OUTROS': valores['servApliOutros'],
                 'ASPECTJ': valores['aspectj'],
                 'JBOSS AOP': valores['jBossAop'],
                 'SPRING AOP': valores['jSpringAop'],
                 'OUTROS': valores['aopOutros'],
                 'MOBILE / ANDROID': valores['mobAndroid'],
                 'PLATAFORMA WEB': valores['platafWeb'],
                 'DESKTOP / SWING': valores['desktopSwing'],
                 'REFLECTION': valores['reflection'],
                 'LINGUAGEM JAVA': valores['lingJava'],
                 'INFRA-ESTRUTURA': valores['infraEstrut'],
                 'TOTVS MONITOR': valores['totvsMon'],
                 'REPLICA DE DADOS': valores['replDados'],
                 'MCS MOBLIE CONNECTIVITY STUDIO': valores['mcsMobConnStudio'],
                 'CONFIGURADOR': valores['configurador'],
                 'TOTVS DBACCESS': valores['totvsDBAccess'],
                 'TOTVS DBAUDIT TRAIL': valores['totvsDBAuditTrail'],
                 'COMPRAS': valores['compras'],
                 'FATURAMENTO': valores['faturamento'],
                 'ESTOQUE/CUSTOS': valores['estoqCusto'],
                 'CONTROLE DE PRODUÇÃO': valores['contrProducao'],
                 'CONTROLE DE CUSTOS': valores['contrCustos'],
                 'PLANEJAMENTO E CONTROLE DE PRODUÇÃO -PCP': valores['planContrProd'],
                 'GESTÃO DE CONTRATOS': valores['gestContrato'],
                 'MANUTENÇÃO DE ATIVOS (MNT)': valores['manutAtivosMnt'],
                 'MANUTENÇÃO DE FROTA': valores['manutFrota'],
                 'GESTÃO AGRÍCOLA': valores['gestAgricola'],
                 'SPED FISCAL': valores['spedFiscal'],
                 'SPED CONTáBIL': valores['spedContabil'],
                 'NF-E': valores['nfe'],
                 'CONTABILIDADE GERENCIAL': valores['contabGerencial'],
                 'ATIVO FIXO': valores['ativoFixo'],
                 'FISCAL (LIVROS FISCAIS)': valores['fiscLivrFiscal'],
                 'PLANEJAMENTO E CONTROLE ORÇAMENTÁRIO': valores['planContrOrcam'],
                 'CONTAS A PAGAR': valores['contPagar'],
                 'CONTAS A RECEBER': valores['contReceber'],
                 'MOVIMENTAÇÃO BANCÃRIA': valores['movtoBancario'],
                 'CNAB': valores['cnab'],
                 'GESTÃO DE PROJETOS - PMS': valores['gestProjetosPms'],
                 'GESTÃO DE ARMAZENAGEM - WMS': valores['prothGesArmWms'],
                 'GESTÃO DE TRANSPORTE - TMS': valores['prothGesTranTms'],
                 'GESTÃO DE DISTRIBUIÇÃO - OMS': valores['distDistrOms'],
                 'GESTÃO DE FRETE EMBARCADOR - GFE': valores['gestFretEmbGfe'],
                 'CALL CENTER': valores['crmCalCen'],
                 'GESTÃO DE PESQUISA E RESULTADO': valores['crmGesPesRes'],
                 'FIELD SERVICE - (ASSIST. TÉCNICA)': valores['fieldServAssTec'],
                 'GESTÃO PESSOAL': valores['prothGesPes'],
                 'PONTO ELETRÔNICO': valores['prothPonElet'],
                 'RECRUTAMENTO E SELEÇÃO DE PESSOAL': valores['prothRecSelPes'],
                 'TREINAMENTO': valores['prothTrein'],
                 'CARGOS E SALÁRIOS': valores['prothCarSal'],
                 'AVALIAÇÃO E PESQUISA DE DESEMPENHO': valores['prothAvaPesDes'],
                 'PROCESSOS TRABALHISTAS': valores['prothProcTrab'],
                 'MEDICINA E SEGURANÇA DO TRABALHO': valores['prothMedSegTrab'],
                 'E - SOCIAL': valores['prothEsoc'],
                 'GESTÃO PESSOAL METROLOGIA (QMT)': valores['prothGesPesMetro'],
                 'PONTO ELETRÔNICO CONTROLE   DE  NÃO-CONFORMIDADES (QNC)': valores['prothPonEleCon'],
                 'RECRUTAMENTO E SELEÇÃO DE PESSOAL INSPEÇÃO DE PROCESSOS (QIP)': valores['prothRecSelPesIns'],
                 'METROLOGIA (QMT)': valores['prothMetrol'],
                 'CONTROLE DE NÃO-CONFORMIDADES (QNC)': valores['prothConNaoConfQnc'],
                 'INSPEÇÃO DE PROCESSOS (QIP)': valores['prothInsPro'],
                 'INSPEÇÃO DE ENTRADA (QIE)': valores['prothInsEnt'],
                 'GESTÃO AMBIENTAL': valores['prothGesAmb'],
                 'GESTÃO DE RISCO': valores['prothGesRis'],
                 'CONTROLE DE AUDITORIAS': valores['prothContAud'],
                 'CONTROLE DE DOCUMENTOS (QDO)': valores['prothContDocQdo'],
                 'PPAP - MEDIÇÃO DE PEÇAS': valores['prothPpaMedPec'],
                 'CONTROLE DE LOJA (SIGALOJA)': valores['prothContLojSig'],
                 'FIDELIZAÇÃO E ANALISE DE CREDITO': valores['prothFidAnaCred'],
                 'FRONT LOJA (FLJ)': valores['prothFroLojFlj'],
                 'OFICINAS': valores['prothOficinas'],
                 'VEÍCULOS': valores['prothVeiculos'],
                 'PEÇAS': valores['prothPecas'],
                 'BPM': valores['prothBiBpm'],
                 'GESTÃO DE INDICADORES': valores['prothBiGesInd'],
                 'WORKFLOW': valores['prothBiWorFlo'],
                 'BALANCED SCORECARD': valores['prothBiBalSco'],
                 'DATAWEREHOUSE': valores['prothBiDatWerHou'],
                 'BPM': valores['prothComExtBpm'],
                 'GESTÃO DE INDICADORES': valores['prothComExtGesInd'],
                 'WORKFLOW': valores['prothComExtWorflo'],
                 'BALANCED SCORECARD': valores['prothComExtBalSco'],
                 'DATAWEREHOUSE': valores['prothComExtDatWer'],
                 'GESTÃO HOSPITALAR': valores['prothGesHospitalar'],
                 'DIREITOS AUTORAIS': valores['prothDirAutorais'],
                 'AUTOMAÇÃO DA FORÇA DE VENDAS (SFA)': valores['prothAutForVen'],
                 'AUTOMAÇÃO DA ENTREGA RAPIDA': valores['prothAutEntRap'],
                 'GESTÃO EDUCACIONAL': valores['prothGesEduc'],
                 'GESTÃO ACERVOS': valores['prothGesAcerv'],
                 'ASSISTENTE DE CONFIGURAÇÕES DO SERVIDOR': valores['prothAssConfServ'],
                 'INTEGRAÇÃO REPORTS': valores['prothIntRep'],
                 'INTEGRAÇÃO CRYSTAL': valores['prothIntCry'],
                 'CONSULTA RELACIONAL': valores['prothConRel'],
                 'PADRÃO DE OPERAÇÃO': valores['prothPadOpe'],
                 'PROTHEUS REPORT': valores['prothFuncProthReport'],
                 'PAINEIS ONLINNE': valores['prothPainOnl'],
                 'TOII TOTVS OFFICE INTERFACE': valores['prothTotOffInter'],
                 'PROTHEUS SEARCH': valores['prothSea'],
                 'INDICADORES DW NATIVOS': valores['prothIndDwNat'],
                 'PAINEIS OFFLINNE': valores['prothPainOffli'],
                 'PROTHEUS REPORT': valores['desProthReport'],
                 'RM - NUCLEUS - COMPRAS': valores['rmNucCompras'],
                 'RM - NUCLEUS - PROCESSOS': valores['rmNucProcess'],
                 'RM - NUCLEUS - FATURAMENTO': valores['rmNucFaturam'],
                 'RM - NUCLEUS - RESSUPRIMENTOS': valores['rmNucRessuprim'],
                 'RM - NUCLEUS - ESTOQUES': valores['rmNucEstoques'],
                 'RM - SALDUS - CONTABILIDADE': valores['rmSalContab'],
                 'RM - SALDUS -FECHAMENTOS': valores['rmSalFecham'],
                 'RM - LIBER - FISCAL': valores['rmLibFiscal'],
                 'RM - LIBER - SPED FISCAL': valores['rmLibSpedFis'],
                 'RM - NFE': valores['rmNfe'],
                 'RM - BONUM - ATIVO': valores['rmBonAti'],
                 'RM - FLUXUS - CONTAS A PAGAR': valores['rmFluContPag'],
                 'RM - FLUXUS - CONTAS A RECEBER': valores['rmFluContRec'],
                 'RM - FLUXUS - APLICAÇÕES E EMPRESTIMOS': valores['rmFluApliEmp'],
                 'RM - FLUXUS - GESTÃO FINANCEIRA': valores['rmFluGesFin'],
                 'RM - VITAE - TREINAMENTO': valores['rmVitTreina'],
                 'RM - VITAE - RECRUTAMENTO': valores['rmVitRec'],
                 'RM - VITAE - SEGURANÇA E MEDICINA': valores['rmVitSegMed'],
                 'RM - CHRONUS - PONTO ELETRONICO': valores['rmChroPonEle'],
                 'RM - LABORE - FOLHA': valores['rmLabFolha'],
                 'RM - LABORE - FORMULAS': valores['rmLabForm'],
                 'RM - TESTIS - AVALIAÇÕES': valores['rmTestAval'],
                 'RM - AGILIS - WORKFLOW': valores['rmAgiWork'],
                 'RM - CLASSIS - GESTÃO EDUCACIONAL': valores['rmClasGesEdu'],
                 'RM - CLASSIS NET': valores['rmClasNet'],
                 'RM - BIBLIOS - GESTÃO DE BIBLIOTECAS': valores['rmBibGesBib'],
                 'RM - SOLUM - GESTÃO DE OBRAS': valores['rmSolGesObr'],
                 'RM - OFFICINA - GESTÃO DE MANUTENÇÃO': valores['rmOffGesManu'],
                 'RM - SGI - GESTÃO IMOBILIARIA': valores['rmSgiGesImob'],
                 'RM - FACTOR - GESTÃO DE MANUFATURA': valores['rmFacGesManu'],
                 'RM - ARQUITETURA E INSTALAÇÃO RM': valores['rmArqInsRm'],
                 'RM - CONSULTAS SQL + RM BIS': valores['rmConsSqlBis'],
                 'RM - PROGR. EM SQL  SERVER - AMB CORPORE': valores['rmProgSqlAmbCorp'],
                 'RM - GERADOR RELATÓRIOS - LABORE': valores['rmGerRelLab'],
                 'RM - GERADOR RELATÓRIOS - FLUXUS': valores['rmGerRelFlux'],
                 'RM - GERADOR RELATÓRIOS - NUCLEUS': valores['rmGerRelNuc']
             };
             // Adicionar o objeto ao array
             extractedValues.push(valoresExtraidos);
         }

         // Exibir os valores extraídos
         console.log('Valores extraídos:', extractedValues);
     }
 }
*/
//////////////////////////////////////////////////////////////FORM DE CADASTRO////////////////////////////////////////////////////////
var constraints = [];
constraints.push(DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST));

var fields = [
    "nmCadRecurso",
    "sobreNmCadRecurso",
    "nomeParticular",
    "tpContratacao",
    "tpSistFluig",
    "tpSistJava",
    "tpSistProtheus",
    "tpSistRm",
    "unidade"
];

var ds = DatasetFactory.getDataset('dsFormCadRecurso', fields, constraints, null);

if (ds && ds.values) {
    var newFieldNames = {
        "nmCadRecurso": "Nome",
        "sobreNmCadRecurso": "Sobrenome",
        "nomeParticular": "NomeCompleto",
        "tpContratacao": "Vinculo",
        "tpSistFluig": "FLUIG",
        "tpSistJava": "JAVA",
        "tpSistProtheus": "PROTHEUS",
        "tpSistRm": "RM",
        "unidade": "Unidade"
    };

    // Mapear valores de vínculo para suas representações desejadas
    var vinculoMap = {
        'pj': 'PJ',
        'coop': 'Cooperado(a)',
        'clt': 'CLT'
    };

    // Mapear valores de unidade para suas representações desejadas
    var unidadeMap = {
        '01': 'TSM',
        '03': 'TSul',
        '04': 'TVale'
    };

    // Função para normalizar e remover caracteres acentuados repetidos
    function normalizeString(str) {
        if (!str) return '';
        return str.normalize("NFD") // Decompor os caracteres acentuados
            .replace(/[\u0300-\u036f]/g, "") // Remover acentos
            .trim() // Remover espaços em branco no início e no fim
            .toLowerCase(); // Convertendo para minúsculas
    }

    var filteredValues = ds.values.map(function (record) {
        var newRecord = {};

        // Usar um Set para garantir que não haja repetições de palavras
        var uniqueWords = new Set();

        // Processar e limpar os campos antes de adicionar ao Set
        if (record["nmCadRecurso"]) {
            normalizeString(record["nmCadRecurso"]).split(" ").forEach(word => uniqueWords.add(word));
        }
        if (record["sobreNmCadRecurso"]) {
            normalizeString(record["sobreNmCadRecurso"]).split(" ").forEach(word => uniqueWords.add(word));
        }
        if (record["nomeParticular"]) {
            normalizeString(record["nomeParticular"]).split(" ").forEach(word => uniqueWords.add(word));
        }

        // Recriar a string com palavras únicas e formatar a string
        var recursos = Array.from(uniqueWords).join(" ");
        newRecord["Recursos"] = recursos.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ').toUpperCase(); // Converter para maiúsculas

        // Consolidar os sistemas em uma única chave "Sistema(s)"
        var sistemas = [];
        if (record["tpSistFluig"] === "on") sistemas.push("FLUIG");
        if (record["tpSistJava"] === "on") sistemas.push("JAVA");
        if (record["tpSistProtheus"] === "on") sistemas.push("PROTHEUS");
        if (record["tpSistRm"] === "on") sistemas.push("RM");

        newRecord["Sistema(s)"] = sistemas.join(", ");

        // Copiar e renomear outras chaves desejadas, removendo as chaves específicas
        fields.forEach(function (field) {
            if (record.hasOwnProperty(field) && !["nmCadRecurso", "sobreNmCadRecurso", "nomeParticular", "tpSistFluig", "tpSistJava", "tpSistProtheus", "tpSistRm", "metadata#id"].includes(field)) {
                var newFieldName = newFieldNames[field];
                var fieldValue = record[field];
                if (field === "tpContratacao" && vinculoMap[fieldValue]) {
                    newRecord[newFieldName] = vinculoMap[fieldValue];
                } else if (field === "unidade" && unidadeMap[fieldValue]) {
                    newRecord[newFieldName] = unidadeMap[fieldValue];
                } else {
                    newRecord[newFieldName] = fieldValue;
                }
            }
        });

        return newRecord;
    });

    // Ordenar o array filtrado alfabeticamente pelo campo "Recursos"
    filteredValues.sort(function (a, b) {
        var nameA = a.Recursos ? a.Recursos.toUpperCase() : ""; // Ignorar maiúsculas e minúsculas
        var nameB = b.Recursos ? b.Recursos.toUpperCase() : ""; // Ignorar maiúsculas e minúsculas

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    console.log(filteredValues);
} else {
    console.log('Erro ao obter o dataset. Dataset:', ds);
}
////////////////////////////////////////////////////////FORM DE MATRIZ DA CAPACITACAO///////////////////////////////////////////////////
var constraints = [];
constraints.push(DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST));

var fields = [
    "nomSolic",
    "unidade",
    "tpSistFluig",
    "tpSistJava",
    "tpSistProtheus",
    "tpSistRm"
];

var ds = DatasetFactory.getDataset('formMatrizCapacitacao', fields, constraints, null);

if (ds && ds.values) {
    var unidadeMap = {
        "01": "TSM",
        "03": "TSul",
        "04": "TVale"
    };

    var filteredValues = ds.values.map(function (record) {
        var newRecord = {};

        // Adicionar o nome do solicitante como "Recursos" em maiúsculas
        if (record.nomSolic) {
            newRecord.Recursos = record.nomSolic.toUpperCase();
        }

        // Mapear a unidade para os novos valores
        if (record.hasOwnProperty('unidade') && unidadeMap[record.unidade]) {
            newRecord.Unidade = unidadeMap[record.unidade];
        } else {
            newRecord.Unidade = record.unidade; // Manter o valor original se não houver mapeamento
        }

        // Combinar as chaves de sistemas em uma única chave "Sistema(s)"
        var sistemas = [];
        if (record.tpSistFluig === 'on') sistemas.push("Fluig");
        if (record.tpSistJava === 'on') sistemas.push("Java");
        if (record.tpSistProtheus === 'on') sistemas.push("Protheus");
        if (record.tpSistRm === 'on') sistemas.push("RM");
        newRecord["Sistema(s)"] = sistemas.join(', ');

        return newRecord;
    });

    // Ordenar o array filtrado alfabeticamente pelo campo "Recursos"
    filteredValues.sort(function (a, b) {
        var nameA = a.Recursos ? a.Recursos.toUpperCase() : ""; // Ignorar maiúsculas e minúsculas
        var nameB = b.Recursos ? b.Recursos.toUpperCase() : ""; // Ignorar maiúsculas e minúsculas

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    console.log(filteredValues); // Exibir os valores filtrados
} else {
    console.log('Erro ao obter o dataset. Dataset:', ds);
}