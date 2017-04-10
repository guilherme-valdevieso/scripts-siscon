// ==UserScript==
// @name         Melhoria tela de SMS
// @namespace    SISCON
// @version      1.0
// @description  Melhora a situação e arranca algumas colunas desnecessárias
// @author       Guilherme Valdevieso
// @match        https://siscon.benner.com.br/siscon/e/*olicitacoes/Consultar.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var ScriptSiscon = {
        removerColunaTabela: function(indiceColuna){
            $('thead th:nth-child('+indiceColuna+')').remove();
            $('tbody td:nth-child('+indiceColuna+')').remove();
        },
        alterarSituacao: function(seletor, conteudo){
             $('td[title*="'+seletor+'"]').html(conteudo);
        },
        inserirBadgeNoTitulo: function(descricao, seletor){
            var quantidade = $(seletor).length;
            
            if(quantidade <= 0) return;
            
            var html = $('#spanTitleCaption').html();
            $('#spanTitleCaption').html(html + ' - ' + descricao + ' <span class="badge badge-primary"> '+ quantidade +' </span>');
        }
    };
    
    /* Removendo colunas desnecessárias */
    ScriptSiscon.removerColunaTabela(9);
    ScriptSiscon.removerColunaTabela(7);
    ScriptSiscon.removerColunaTabela(3);
    
    /* Alterando situações */
    ScriptSiscon.alterarSituacao('código','<span style="color:red;" class="fa fa-eye"></span>Aguardando revisão de código');
    ScriptSiscon.alterarSituacao('Aguardando análise','<span style="color:green;" class="fa fa-sticky-note-o"></span>Aguardando análise');
    
    /* Badges do título */
    ScriptSiscon.inserirBadgeNoTitulo('Revisões de código', 'td[title*="código"]');
    ScriptSiscon.inserirBadgeNoTitulo('Aguardando análise', 'td[title*="Aguardando análise"]');
    ScriptSiscon.inserirBadgeNoTitulo('Programando', 'td[title*="Programando"]');
    ScriptSiscon.inserirBadgeNoTitulo('Aguardando programação', 'td[title*="Aguardando programacao"]');
    ScriptSiscon.inserirBadgeNoTitulo('Liberando artefatos/script', 'td[title*="Liberando"]');
    
})();