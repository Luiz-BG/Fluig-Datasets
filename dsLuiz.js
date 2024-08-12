function defineStructure() { }

function onSync(lastSyncDate) { }

function createDataset(fields, constraints, sortFields) {
	var ds = DatasetBuilder.newDataset();
	try {
		ds.addColumn("Numero");

		var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
		var filtro = [c1];

		// Campos do dataset 'cadastro'
		var camposCadastro = ["documentid"];

		// Buscar datasets internos
		var dsCadastro = DatasetFactory.getDataset('dsFormCadRecursoH', camposCadastro, filtro, null);
		var dsMatriz = DatasetFactory.getDataset('formMatrizCapacitacao', camposMatriz, filtro, null);

		var unidadeMap = {
			"01": "TSM",
			"03": "TSul",
			"04": "TVale"
		};

		var vinculoMap = {
			'pj': 'PJ',
			'coop': 'Cooperado(a)',
			'clt': 'CLT'
		};

		// Criação de um mapa para facilitar a busca no dataset 'matriz'
		var mapaMatriz = {};
		if (dsMatriz && dsMatriz.rowsCount > 0) {
			for (var j = 0; j < dsMatriz.rowsCount; j++) {
				var nomeMatriz = dsMatriz.getValue(j, "nomSolic");
				nomeMatriz = normalizeString(nomeMatriz); // Normalizar para comparação
				mapaMatriz[nomeMatriz] = {
					id: dsMatriz.getValue(j, "documentid"),
					unidade: unidadeMap[dsMatriz.getValue(j, "unidade")] || dsMatriz.getValue(j, "unidade"),
					sistema: buildSistemaString(dsMatriz, j),
					dtSolicit: formatarData(dsMatriz.getValue(j, "dtSolicit"))
				};
			}
		}
	} catch (e) {
		log.error("ERRO==================>" + e.message);
	}

	return ds;
}

function onMobileSync(user) { }
