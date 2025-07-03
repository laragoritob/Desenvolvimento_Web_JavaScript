var formEl = document.getElementById('meuForm');

// CHAMA A FUNÇÃO CAPTURA_EVENTOS //
captura_eventos(formEl, 'submit', formValid);

// FUNÇÃO PARA CAPTURAR EVENTOS //
function captura_eventos(objeto, evento, funcao) {
    // Teste addEventListener //
    if (objeto.addEventListener) {
        objeto.addEventListener(evento, funcao, true);
    } 
    // Teste attachEevent //
    else if (objeto.attachEvent) {
        var evento = 'on' + evento;
        objeto.attachEvent(evento, funcao);
    } 
}

// FUNÇÃO PARA CANCELAR EVENTOS //
function cancela_eventos(evento) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        window.event.returnValue = false;
    }
    return false;
}

// FUNÇÃO PARA VERIFICAR OS CAMPOS RADIO E CHECKBOX //
function verificaCampos(campo) {
    // Variável que verifica os radios //
    var checados = false;

    // Verifica os radios //
    for (var i = 0; i < campo.length; i++) {
        if (campo[i].checked) {
            checados = true;
            break;
        }
    }

    if (!checados) {
        alert('Marque o campo ' + campo[0].name);
        cancela_eventos(evento);
        return false;
    }
}

function formValid(evento) {
    // Variável que verifica os campos //
    var campoNome = formEl.textname.value;
    var campoCidade = formEl.cidades;
    var campoRadios = formEl.sexo;
    var campoCheckboxes = formEl.rede;

    // VERIFICA CAMPO DE TEXTO //
    if (campoNome.length == '') {
        alert('O campo nome é obrigatório.');
        return false;
    }

    // LAÇO QUE PERCORRE TODAS AS OPÇÕES //
    for (var i = 0; i < campoCidade.length; i++) {
        // VERIFICA SE A OPÇÃO ESTÁ SELECIONADA //
        if (campoCidade[i].selected) {
            if (campoCidade[i].value == '') {
                alert('Selecione uma cidade.');
                cancela_eventos(evento);
            }
        }
    }

    // CHAMA A FUNÇÃO VERIFICA CAMPOS PARA O RADIO //
    verificaCampos(campoRadios);

    // CHAMA A FUNÇÃO VERIFICA CAMPOS PARA O CHECKBOX //
    verificaCampos(campoCheckboxes);
    alert("O formulário será enviado.")
    return true;
}