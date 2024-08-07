function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	var ds = DatasetBuilder.newDataset();
	ds.addColumn("Recursos")
	ds.addColumn("Unidade")
	ds.addColumn("Sistema(s)")
	ds.addColumn("Vinculo")
	var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST) 
    var filtro = new Array(c1);//crio o filtro para buscar menos dados e gastar menos tempo
	var campos = [
		"nmCadRecurso",						//Primeiro Nome
		"sobreNmCadRecurso",				//Segundo Nome
		"nomeParticular",					//Nome inteiro
		"tpContratacao",					//Tipo de vinculo
		"tpSistFluig",						//Fluig
		"tpSistJava",						//JAVA
		"tpSistProtheus",					//Protheus
		"tpSistRm",							//RM
		"unidade"							//Unidade
	]
    var dsInterno = DatasetFactory.getDataset('dsFormCadRecurso', campos, filtro, null);
    if (dsInterno.rowsCount > 0) {
		//pegar as três variveis de nome sobrenome e nomeparticular, compara-las e construir o nome completo da pessoa "Recursos"
		//pegar as 4 variaveis de fluig java protheus e rm juntar as que se igualam a "on" e junta-las em uma unica coluna "Sistema(s)"
		//transformar 01, 03 e 04 em TVALE TSUL E TSM
		for (var i = 0; i < dsInterno.rowsCount; i++) {							
			ds.addRow(new Array(
				dsInterno.getValue(i, 'nmCadRecurso'),									
				dsInterno.getValue(i, 'tpContratacao')
			));
		}
	}
	return ds;

}function onMobileSync(user) {

}