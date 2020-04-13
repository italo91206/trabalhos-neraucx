import Vue from 'vue'

Vue.prototype.showModalAgendaVisita = function (flag){
    if (!flag) {
        if (window.matchMedia("(max-width: 800px)").matches) {
            jQuery(".modal-content").css("top", jQuery(window).scrollTop());
        }
        jQuery("body").addClass("modal-opened");
        jQuery(".modalBackground").show("slow");
        jQuery("#agendaVisita").show("slow");
    }
    else 
    {
        jQuery("body").removeClass("modal-opened");
        jQuery(".modalBackground").hide("slow");
        jQuery("#agendaVisita").hide("slow");
        this.$emit('fechou');
        this.reseta();
    }
}
Vue.prototype.showModalAgendaAgora = function (flag) {
    if (!flag) {
        if (window.matchMedia("(max-width: 800px)").matches) {
            jQuery(".modal-content").css("top", jQuery(window).scrollTop());
        }
        jQuery("body").addClass("modal-opened");
        jQuery(".modalBackground").show("slow");
        jQuery("#agendaAgora").show("slow");
    }
    else 
    {
        jQuery("body").removeClass("modal-opened");
        jQuery(".modalBackground").hide("slow");
        jQuery("#agendaAgora").hide("slow");
        this.$emit('fechou');
        this.reseta();
    }
}
Vue.prototype.getHorarios = function(idImovel, dia, diaSem){
    var dados = {
        id: idImovel,
        data: dia,
        semana: diaSem
    }
    var query = {};
    query.rotulo = this.$route.params.rotulo;
    this.agenda("listaHora_imovel", dados, query);
}
Vue.prototype.setSelected = function(value){    
    this.is_selected = value;
    if (value == false) this.dadosAgenda.hora = "";
}
Vue.prototype.agendamento = function(){
    console.log(this.dadosAgenda);
    this.agenda("enviaAgenda", this.dadosAgenda);
}
Vue.prototype.agendar_agora_etapa2 = function (){ // Confirmar agendamento
    
    // console.clear();
    var dados = {
        iduser: this.getIDLocalSt(),
        idimovel: this.dados_imovel._id.$oid,
        data: this.mascaraDate(this.eventoSelecionado.start),
        hora: this.mascaraHora(this.eventoSelecionado.start),
        imovel: this.dados_imovel.address
    };
    // console.log(dados.data);
    var hoje = new Date();
    var dataFrag = dados.data.split('-');
    var hojeFrag = this.mascaraData(hoje.toLocaleDateString()).split('/');
    // console.log(dataFrag[0]);
    // console.log(hojeFrag[2]);
    if(parseInt(dataFrag[0]) < parseInt(hojeFrag[2]))
    {
        // console.log(parseInt(dataFrag[0]) < parseInt(hojeFrag[2]));
        var integer = parseInt(dataFrag[0], 10);
        integer += 7;
        if(integer > 31){
            integer -= 31;
            var mes = parseInt(dataFrag[1], 10);
            mes += 1;
            dataFrag[1] = mes.toString();
        }
        dataFrag[0] = integer.toString();
        dados.data = dataFrag[0]+'-'+dataFrag[1]+'-'+dataFrag[2];
    }
    
    this.agenda("agendaAgora_et2", dados);
    
    
}
Vue.prototype.agendar_agora_etapa1 = function(){  // Para pegar os horários de visita do próprio condomínio
    console.log('Fui chamado!');
    var query = {};
    query.idimovel = this.dados_imovel._id.$oid;
    query.iduser = this.getIDLocalSt();
    
    var atualAux = new Date();
    var atualDia = atualAux.getDay();
    var atualHora = atualAux.getHours();
    var atualMinutos = atualAux.getMinutes();
    // console.log('Hora atual é:' + atualHora)
    // console.log('Dia atual é: ' + atualDia );
    
    var resposta = false;
    var dias = this.dados_imovel.schedule;
    var index = 0;
    var hora = "";
    var minuto = "";
    var horaAux = "";
    var horaAux2 = "";
    while(dias[index]){
        horaAux = dias[index].hora_inicio.toString();
        horaAux2 = horaAux.split(":");

        hora = horaAux2[0];
        minuto = horaAux2[1];
        // console.log('Minutos: '+ minuto);
        if( atualDia.toString() == dias[index].diaSem ){
            if( atualHora == hora)
            {
                if( atualMinutos <= minuto+30)
                // console.log('Tem um horário: dia ' + atualDia + ' às ' + dias[index].hora_inicio);
                resposta = true;
                this.dadosAgenda.data = atualAux.getDate();
                this.dadosAgenda.diaSemana = atualDia;
                this.dadosAgenda.hora = dias[index].hora_inicio;
                this.dadosAgenda.idimovel = this.dados_imovel._id.$oid;
                this.dadosAgenda.iduser = this.getIDLocalSt();
                break;
            }
        }
        index++;
    }
    this.respostaAgendaAgora = resposta;
    //this.agenda("agendaAgora_et1", query);
}
Vue.prototype.setSelected = function(value) {
    this.is_selected = value;
    if (value == false) this.dadosAgenda.hora = "";
},
Vue.prototype.agendamento = function(){
    
    console.log('Agendamento: ' + this.dadosAgenda);
    this.agenda("enviaAgenda", this.dadosAgenda);
    
}
