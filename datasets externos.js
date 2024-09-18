////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////Dados Base de Busca/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var token = {
    'key': '', //key
    'secret': '' //secret
}
var request_data = {
    url: '',//URL
    method: 'POST'//MÉTODO
};
function criaRegistro() {
    var _xml;
    var _xml2;
    var nome = $("#nome").val()
    var email = $("#email").val();
    var ARQ = $("#ARQ").val();
    if (nome === "") {
        alert("O campo 'Nome' é obrigatório. Preencha antes de enviar.");
    }if (email === "") {
        alert("O campo 'Nome' é obrigatório. Preencha antes de enviar.");
    }if (ARQ === "") {
        alert("O campo 'Nome' é obrigatório. Preencha antes de enviar.");
    } else {
        //simulação de construção de um arquivo XML (envelope soap)
        let _xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="URL DE WORKFLOW DA EMPRESA">'
            + '<soapenv:Header/>'
            + '<soapenv:Body>'
            + '<ws:######>' //tipo do envelope
            + '<username>##########</username>' //login de acesso do sistema
            + '<password>##########</password>' //senha de acesso do sistema
            + '<companyId>####</companyId>' //numero da compania
            + '<processId>######</processId>' //nome do processo no sistema
            + '<comments></comments>'
            + '<attachments>'
            + '</attachments>'
            + '<cardData>'
            + '<item>'
            + '<item>ARQ</item>' //id do formulário
            + '<item>' + ARQ + '</item>' //variavel que adquirimos
            + '</item>'
        var linhas = document.getElementsByClassName('table')[1].getElementsByTagName('tr');
        var totalLinhas = linhas.length;
        // adicionamos elementos de uma tabela de um formulário
        for (var i = 1; i < totalLinhas - 1; i++) {
            var nome = $("#nomeConvi___" + i).val();
            var email = $("#emailConvi___" + i).val();
            _xml += '<item>'
                + '<item>nomeConvi___' + i + '</item>'
                + '<item>' + nome + '</item>'
                + '</item>'
            _xml += '<item>'
                + '<item>emailConvi___' + i + '</item>'
                + '<item>' + email + '</item>'
                + '</item>'
        }
        _xml += '</cardData>'
            + '</ws:#####>' //tipo do envelope
            + '</soapenv:Body>'
            + '</soapenv:Envelope>';
        let urlWsEditar = WCMAPI.getServerURL() +
            '#######'//url de serviço
        $.ajax({
            type: "POST", //"MÉTODO DE INICIAR UM PROCESSO/CRIAR UM REGISTRO DE FORMULÁRIO"
            dataType: "xml", //TIPO DE ARQUIVO
            url: urlWsEditar,
            data: _xml,
            crossDomain: true, //requisição que não é de um mesmo domínio
            success: function (data) {
                var oauth = OAuth({
                    consumer: {
                        'key': '###', // chave do aplicativo que você criou
                        'secret': '###' // segredo do aplicativo que você criou
                    },
                    signature_method: 'HMAC-SHA1',
                    hash_function: function (base_string, key) {
                        return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
                    },
                    nonce_length: 6
                });
                // colocar o array do dataset ==== var ds = response.content.values
                var data = {
                    "name": "#####", //nome do dataset
                    "constraints": [
                        { "_field": "ARQ", "_initialValue": ARQ, "_finalValue": ARQ, "_type": 1, "_likeSearch": false },
                        //
                    ]
                }
                // Adicionando os valores dos elementos nome e email às constraints
                for (var i = 1; i < totalLinhas - 1; i++) {
                    var nome = $("#nomeConvi___" + i).val();
                    var email = $("#emailConvi___" + i).val();
                    data.constraints.push(
                        { "_field": "nomeConvi___" + i, "_initialValue": nome, "_finalValue": nome, "_type": 1, "_likeSearch": false }
                    );
                    data.constraints.push(
                        { "_field": "emailConvi___" + i, "_initialValue": email, "_finalValue": email, "_type": 1, "_likeSearch": false }
                    );
                }
                $.ajax({
                    url: request_data.url,
                    contentType: 'application/json',
                    crossDomain: true,
                    type: request_data.method,
                    data: JSON.stringify(data), //transforma a data em json e envia
                    headers: oauth.toHeader(oauth.authorize(request_data, token))
                }).done(function (response) {
                    FLUIGC.toast({
                        title: 'Processo Iniciado!',
                        message: 'Após a reunião, continue o processo',
                        type: 'success'
                    });
                    $("#sucesso").show();
                    $("#formulario").hide();
                    sucesso()
                })
            },
            error: function () {
                FLUIGC.toast({
                    title: 'Aconteceu Algo de errado!',
                    message: 'Tente novamente, ou comunique o suporte!',
                    type: 'danger'
                });
            }
        });
    }
}