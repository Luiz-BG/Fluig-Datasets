////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////ESTRUTURA BASICA CONSULTA DE DS///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CONSTRAINTS
/*
var c1 = DatasetFactory.createConstraint(fieldName, initialValue, finalValue, ConstraintType.MUST);
var c1 = DatasetFactory.createConstraint(fieldName, initialValue, finalValue, ConstraintType.SHOULD);
var c1 = DatasetFactory.createConstraint(fieldName, initialValue, finalValue, ConstraintType.MUST_NOT);
fieldName	    =   Nome do campo
initialValue	=   Valor inicial para filtro neste campo
finalValue	    =   Valor final para filtro neste campo
ContraintType	=   Tipo do filtro deste campo, podendo ter os valores abaixo:

                    MUST: O valor informado precisa estar nos resultados

                    SHOULD: O valor informado pode estar ou não nos resultados

                    MUST_NOT: O valor informado não pode estar nos resultados
*/
var x = DatasetFactory.createConstraint('metadata#active', false, false, ConstraintType.MUST_NOT)      //FILTRA QUAIS REGISTROS NÃO DEVEM RETORNAR
var y = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST);           //FILTRA QUAIS REGISTROS DEVEM RETORNAR
//CONSULTAS OU CHAMADAS
var ds = DatasetFactory.getDataset('formMatrizCapacitacao', null, null, null);                         //RETORNA TUDO SEM FILTRO
//ESTRUTURA BASICA
var c1 = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST);
var ds = DatasetFactory.getDataset('nomeDataset', null, c1, null)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////CONSULTAS CHAVE/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var c1 = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST);
var c2 = DatasetFactory.createConstraint("sqlLimit", "10", "10", ConstraintType.MUST);                   //filtra a quantidade de registros desejados (de 1 a 100)
// Obter o dataset especificando as constraints
var ds = DatasetFactory.getDataset('formMatrizCapacitacao', null, [c1, c2], null);                       //chama 10 registros, que estão ativos do dataset
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////CONSULTA COM VARIAS CONSTRAINTS////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//new Array()
var constraints = new Array()
constraints.push(DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST));
constraints.push(DatasetFactory.createConstraint('vlTpSistFluig', "SIM", "SIM", ConstraintType.MUST)); // filtra os registros que tem este campo (vlTpSistFluig) com esse valor (SIM)
var ds = DatasetFactory.getDataset('dsFormCadRecurso', null, constraints, null);
//[c1,c2,c3]

var c1 = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST);
var c2 = DatasetFactory.createConstraint('vlTpSistFluig', "SIM", "SIM", ConstraintType.MUST); // filtra os registros que tem este campo (vlTpSistFluig) com esse valor (SIM)
var ds = DatasetFactory.getDataset('dsFormCadRecurso', null, [c1, c2], null);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////MANIPULAÇÃO DE DADOS DELE//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (ds.values.length > 0) {                                                                         //condição do retorno do tamanho de registros
    for (var i = 0; i < ds.values.length; i++) {                                                    //Iterar sobre os registros do dataset usando um loop for
        valores = ds.values[i]                                                                      //valor de cada registro
        campo1 = valores['IDcampo1']                                                                //valor de um campo de cada registro
    }
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////CONSTRUÇÃO DE DATASET/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();                                                      // OBJETO QUE INSTACIA UM NOVO DATASET, TODOS DATASETS TEM QUE TER ESSA VARIAVEL
    dataset.addColumn("DocumentId");
    dataset.addColumn("coluna2");
    dataset.addColumn("coluna3");

    var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST)
    var constraints = new Array(c1);
    var dsInterno = DatasetFactory.getDataset('dsFormulario', null, constraints, null);//Dataset_do_formulario
    var contador = dsInterno.rowsCount;
    for(var i = 0; i < contador; i++){
        var docId = ds.getValue(i, "metadata#id");
		var docVersion = ds.getValue(i, "metadata#version");
        var tabela = "nomeTabela"
        var c1 = DatasetFactory.createConstraint("tablename",tabela, tabela, ConstraintType.MUST);
		// VARIAVEIS CRIADAS ACIMAS COM OS METADADOS DO FORMULARIO
		var c2 = DatasetFactory.createConstraint("metadata#id", docId,docId, ConstraintType.MUST);
		var c3 = DatasetFactory.createConstraint("metadata#version", docVersion, docVersion, ConstraintType.MUST);
        var constraintsTable = new Array(c1,c2,c3);
        var datasetTable = DatasetFactory.getDataset(dsInterno, null, constraintsTable, null);//Dataset_do_formulario
        var contadorTabela = datasetTable.rowsCount;
        for (var j = 0; j < contadorTabela; j++){
            dataset.addRow(
                new Array(
                    docId,
                    datasetTable.getValue(j, "coluna2"),
                    datasetTable.getValue(j, "coluna3")
                )
            )
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////CONSTRUÇÃO DE DATASET QUE CONSULTA OUTRO PARA TABELA PAI FILHO//////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//estrutura base
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();                                                      // OBJETO QUE INSTACIA UM NOVO DATASET, TODOS DATASETS TEM QUE TER ESSA VARIAVEL
    var codigo = ''                                               
    // AQUI É RECEBIDO OS PARAMETROS QUANDO CHAMADO O DATASET COM O INTUITO DE FILTRAR OU COMPLEMENTAR AS INFORMAÇÕES QUE SERÃO RETORNADAS
    if (constraints != null && constraints.length > 0) {
		for (var i = 0; i < constraints.length; i++) {
			if (constraints[i].fieldName == 'codPais') { //idProduto
				codigo = constraints[i].initialValue;
			}
		}
	}
    // INCLUSA CADA LINHA DESSA PARA UMA COLUNA DA TABELA DO FORMULÁRIO, EM OUTROS CASOS, DEVERÁ INSERIR QUANTAS FOREM NECESSÁRIAS
    dataset.addColumn("campo1");
    dataset.addColumn("campo2");
    dataset.addColumn("campo3");
    var cr = new Array(DatasetFactory.createConstraint("metadata#active","true", "true", ConstraintType.MUST));
    var ds = DatasetFactory.getDataset('dsFormulario', null, cr, null);//Dataset_do_formulario
    if (ds.rowsCount > 0) {                                                                         // VERIFICA SE RETORNOU
		for (var i = 0; i < ds.rowsCount; i++) {
			// ESTOU PEGANDO INFORMAÇOES DO FORMULÁRIO, NESSE CASO AINDA SAO METADADOS QUE O USUÁRIO NAO VE, PQ PRECISO DELES PRA CHEGAR NA TABELA PAI E FILHO
			var documentId = ds.getValue(i, "metadata#id");
			var documentVersion = ds.getValue(i, "metadata#version");
			// TABLENAME DA TABELA PAI E FILHO
			var c1 = DatasetFactory.createConstraint("tablename","nomeTabela", "nomeTabela", ConstraintType.MUST);
			// VARIAVEIS CRIADAS ACIMAS COM OS METADADOS DO FORMULARIO
			var c2 = DatasetFactory.createConstraint("metadata#id", documentId,documentId, ConstraintType.MUST);
			var c3 = DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST);
			// NOVAMENTE QUERO SOMENTE REGISTROS ATIVOS
			var c4 = DatasetFactory.createConstraint("metadata#active", "true","true", ConstraintType.MUST);
			var constraintsFilhos = new Array();
			constraintsFilhos.push(c1, c2, c3, c4);
			// DATASET DO FORMULARIO NOVAMENTE, MAS DESSA VEZ ESTOU CONSULTANDO A TABELA PAI E FILHO
			var datasetFilhos = DatasetFactory.getDataset('dsFormulario', null, constraintsFilhos, null);//Dataset_do_formulario
			// VERIFICO SE TROUXE ALGUM RESULTADO
			if (datasetFilhos.rowsCount > 0) {
				for (var j = 0; j < datasetFilhos.rowsCount; j++) {
					// COM O METODO addRow VOU INCLUINDO AS LINHAS NAS COLUNAS
					// QUE CRIEI LA EM CIMA 
					dataset.addRow(new Array(
					//SÃO OS NOMES DOS CAMPOS NA TABELA PAI E FILHO, SEM OS UNDERLINES
					datasetFilhos.getValue(j, 'campo1'),
					datasetFilhos.getValue(j, 'campo2')
					));
				}
			}
		}
	}
    return dataset;
}
//

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////CONSULTA DE DATASET DENTRO DO CONSOLE///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var constraints = [];
constraints.push(DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST));

var fields = [
    "nmCadRecurso","sobreNmCadRecurso","tipServico","tpSistFluig","tpSistJava","tpSistProtheus","tpSistRm" //todos os campos que deseja
];

var ds = DatasetFactory.getDataset('dsFormCadRecurso', fields, constraints, null);

if (ds && ds.values) {                                                                              
    var filteredValues = ds.values.map(function(record) {                                               //apaga os campos não necessários
        var newRecord = {};
        
        // Copiar apenas os campos desejados
        fields.forEach(function(field) {
            if (record.hasOwnProperty(field)) {
                newRecord[field] = record[field];
            }
        });

        return newRecord;
    });

    console.log(filteredValues);
} else {
    console.log('Erro ao obter o dataset. Dataset:', ds);
}