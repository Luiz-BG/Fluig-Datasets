function defineStructure() {
	addColumn("DIA");
	addColumn("HORA");
	addColumn("MINUTO");
	addColumn("EMAIL");
	addColumn("MEIAHORA");

	setKey(["DIA", "HORA"]);
	addIndex(["DIA", "HORA", "MINUTO", "EMAIL", "MEIAHORA"]);
}
function onSync(lastSyncDate) {
	clearDataset();
	return calculodata();

}
function calculodata() {

	var ds = DatasetBuilder.newDataset();
	var ds1 = DatasetFactory.getDataset("dsFORMPRIN", null, null, null);
	log.info("valor de ds1" + ds1.rowsCount);
	for (var i = 0; i < ds1.rowsCount; i++) {
		var nome = ds1.getValue(i, "nome");
		var unidade = ds1.getValue(i, "segmentos");
		var modalidade = ds1.getValue(i, "modalidade");
		var briefing = ds1.getValue(i, "briefing");
		var razao = ds1.getValue(i, "razao");
		var contato = ds1.getValue(i, "contato");
		var datasemtratamento = ds1.getValue(i, "diaehora");
		log.info("Data sem tratamento" + datasemtratamento);
		var partes = datasemtratamento.split('/');
		var dia = partes[0];
		var mes = partes[1];
		var ano = partes[2];
		var reuniao = mes + "/" + dia + "/" + ano;
		var da = new Date();
		var dr = new Date(reuniao);
		var diferenca = new Date(dr - da).getTime();
		var posdr = 10800000;
		var posdro = 1800000;
		var posdrfinal = new Date(diferenca + posdr).getTime();
		var posdrfinalo = new Date(diferenca + posdro).getTime();
		var totalSegundos = diferenca / 1000;
		var totalSegundodr = posdrfinal / 1000;
		var totalSegundodro = posdrfinalo / 1000;
		var totalMinutos = Math.floor(totalSegundos / 60);
		var totalMinutosdr = Math.floor(totalSegundodr / 60);
		var totalMinutosdro = Math.floor(totalSegundodro / 60);
		// Calcular o total de horas
		var totalHoras = Math.floor(totalMinutos / 60);
		var totalHorasdr = Math.floor(totalMinutosdr / 60);
		var totalHorasdro = Math.floor(totalMinutosdro / 60);
		// Calcular o total de dias
		var totalDias = Math.floor(totalHoras / 24);
		var totalDiasdr = Math.floor(totalHorasdr / 24);
		var totalDiasdro = Math.floor(totalHorasdro / 24);
		// Calcular o número de horas restantes após remover os dias
		var horasRestantes = totalHoras % 24;
		var horasRestantesdr = totalHorasdr % 24;
		var horasRestantesdro = totalHorasdro % 24;
		// Calcular o número de minutos restantes após remover as horas
		var minutosRestantes = totalMinutos % 60;
		var minutosRestantesdr = totalMinutosdr % 60;
		var minutosRestantesdro = totalMinutosdro % 60;

		log.info(totalDias + ":" + horasRestantes + ":" + minutosRestantes);
		if (!isNaN(totalDias)) {

			ds.addOrUpdateRow(new Array(totalDias, horasRestantes,
				minutosRestantes, totalDiasdr + ":" + horasRestantesdr
				+ ":" + minutosRestantesdr, totalDiasdro + ":" + horasRestantesdro
				+ ":" + minutosRestantesdro));
		}
		if (totalDias == 1 && horasRestantes === 0 && minutosRestantes === 0) {
			// Email lembrete 1 dia e 15 min
			DatasetFactory.getDataset("dsEnvioEmailLembrete", null, null, null);
			console.log('Enviado email lembrete 1 dia e 15 min')
		}
		if (totalDias === 0 && horasRestantes === 0 && minutosRestantes == 15) {
			// Email lembrete 1 dia e 15 min
			DatasetFactory.getDataset("dsEnvioEmailLembrete", null, null, null);
			console.log('Enviado email lembrete 1 dia e 15 min')
		}
		if (totalDiasdr === 0 && horasRestantesdr === 0
			&& minutosRestantesdr === 0 && modalidade === "Presencial") {
			// Email Satifacao pos presencial
			DatasetFactory.getDataset("dsEnvioEmailSatisfacao", null, null,
				null);
			console.log('Enviado email Satifacao pos presencial')
		}
		if (totalDiasdro === 0 && horasRestantesdro === 0
			&& minutosRestantesdro === 0 && modalidade === "Online") {
			// Email Satifacao pos presencial
			DatasetFactory.getDataset("dsEnvioEmailSatisfacao", null, null,
				null);
			console.log('Enviado email Satifacao pos online')
		}
	}
	return ds;

}

function clearDataset() {


	var dataset = DatasetFactory.getDataset("dsVerificar", null, null, null); // busca
	// o
	// dataset
	// completo

	if (dataset !== null && dataset.rowsCount > 0) { // se o dataset tem
		// registros
		var values = dataset.getValues();
		for (var row in values) { // para cada coluna retornada no seu dataset
			dataset.deleteRow([values[row][0], values[row][1], values[row][2],
			values[row][3]]); // apaga a linha
		}
	}
}

// function defineStructure() {
// addColumn("NOME1");
// addColumn("NOME2");

// setKey(["NOME1","NOME2"]);
// addIndex(["NOME1","NOME2"]);
// }

// function getDados() {
// var newDataset = DatasetBuilder.newDataset();

// newDataset.addOrUpdateRow();

// return newDataset;
// }

// function onSync(lastSyncDate) {
// clearDataset("NOME_DATASET");
// return getDados();
// }

// function clearDataset(codDataset) {
// log.info("#### limpando dataset " + codDataset);

// var dataset = DatasetFactory.getDataset(codDataset, null, null, null); //
// busca o dataset completo

// if (dataset != null && dataset.rowsCount > 0) { //se o dataset tem registros
// var values = dataset.getValues();
// for (var row in values) { // para cada coluna retornada no seu dataset
// dataset.deleteRow([values[row][0],values[row][1]]); // apaga a linha
// }
// }
// }
