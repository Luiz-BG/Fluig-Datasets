var c1 = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST);
// Obter o dataset especificando as constraints
var ds = DatasetFactory.getDataset('dsFormCadRecurso', null, [c1], null);
// Verificar se o dataset foi obtido corretamente
if (ds && ds.values) {
    if (ds.values.length > 0) {
        // Inicializar o array para armazenar os valores
        var extractedValues = [];
        // Iterar sobre os registros do dataset usando um loop for
        for (var i = 0; i < ds.values.length; i++) {
            var valores = ds.values[i];
            var sobreNmCadRecurso = valores['sobreNmCadRecurso'];
            var nomRecurso = valores['nomRecurso'].replace(new RegExp(sobreNmCadRecurso, 'gi'), '');
            var nomCompleto = nomRecurso.trim() + (sobreNmCadRecurso ? ' ' + sobreNmCadRecurso : '');
            nomCompleto = nomCompleto.replace(/\s+/g, ' '); // remover espaços em branco extras
            // Inicializar o objeto para armazenar os valores extraídos
            var valoresExtraidos = {
                NomCompletoCadRecurso: nomCompleto,
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