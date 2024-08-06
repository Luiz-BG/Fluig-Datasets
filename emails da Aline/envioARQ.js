        var nomeempresa = hAPI.getCardValue('razao');
        var categoria = hAPI.getCardValue('categoria');
        var subcategoria = hAPI.getCardValue('subcat');
        var infoReuni = hAPI.getCardValue('diaehora');
        var briefing = hAPI.getCardValue("briefing");
        var telCliente = hAPI.getCardValue("wpp")
        var cnpj = hAPI.getCardValue("cnpj")
        var segmento = hAPI.getCardValue("atv")
        var contato = hAPI.getCardValue("contato")
        var email = hAPI.getCardValue("emailClient")
    try {       
        var parametros = new java.util.HashMap();
        parametros.put("NOME_EMPRESA", "nomeempresa");
        parametros.put("CATEGORIA", "categoria");
        parametros.put("SUBCATEG", "subcategoria");
        parametros.put("INFO_REUNIAO", "infoReuni");
        parametros.put("BRIEFING", "briefing");
        parametros.put("TEL_CLIENTE", "telCliente");
        parametros.put("EMAIL", "email");
        parametros.put("CNPJ", "cnpj");
        parametros.put("SEGMENTO", "segmento");
        parametros.put("CONTATO_CLIENTE", contato);      
        var destinatarios = new java.util.ArrayList();
        var emails = emails.split(';') // adicionar emails dos convidados
        for (var i = 0; i < emails.length; i++) {
            destinatarios.add(emails[i]);
        }
        notifier.notify("matheus.alves", "EnvioEmailARQ", parametros, destinatarios, "text/html");
    } catch (TESTEPARAVERCADEOERRO) {
        log.info(TESTEPARAVERCADEOERRO);
    }