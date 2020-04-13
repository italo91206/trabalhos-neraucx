<template>
    <div class="modal-C" id="agendaAgora">
		<div class="modal-content">

			<div class="modal-topo"><!-- Título do box -->
				<b-row class="linhaHEADER" align-h="end">
					<b-col v-if="!agenda_agora_et2" class="titleHeader" cols="10">
						<h3>Agendar agora</h3>
					</b-col>
					<b-col v-else class="titleHeader" cols="10">
						<h3>Agendamento confirmado!</h3>
				    </b-col>
					<b-col cols="2">
						<span v-on:click="showModalAgendaAgora('Close'); reseta()" class="closeModal">X</span>
					</b-col>
				</b-row>
			</div>

			<div class="modal-corpo">
				<div v-if="logged == false"> <!-- Eu não estou logado? -->
					<div class="alert alert-danger text-center">É necessário estar conectado para agendar</div>
					<login-panel v-bind:loading="this.loading" v-on:loginEfetuado="atualizaLogged"/>
				</div>

				<div v-else> <!-- Eu estou logado! -->
					<div v-if="!respostaAgendaAgora"><!-- Não temos horário. Mostrar um calendário Panel -->
						<div class="alert alert-danger text-center">Todos os nossos corretores estão em atendimento ou o condomínio não permite acesso neste horário.</div>
						<vue-cal style="height: 250px" default-view="week" locale="pt-br" :events="events"  :small="true" :time-from="8 * 60" :time-to="24 * 60" :on-event-click="eventoClicado" today-button hide-view-selector hide-title-bar></vue-cal>
						<!-- time-from e time-to indicam o intervalo de hora que será exibido. Multiplicado por 60 porque o calendário -->
						<!-- calcula de minuto em minuto. Por enquanto, sem tratamento de voltar para o dia atual -->
						<div v-if="horaFoiSelecionada" class="campoButtonAgenda">
							<br/>
							<div v-if="ocupado">
								<div class="text-center">
									<p>Já está ocorrendo uma visita nessa hora!<br/>Por favor, selecione outro.</p>
								</div>
							</div>
							<div v-else>
								<p>
									Dia: {{ dias[eventoSelecionado.diaSem] }} <br/>
									Hora: {{ mascaraHora(eventoSelecionado.start) }}
								</p>
								<a id="botaoPesquisar" v-on:click="agendar_agora_etapa2(); " class="button botaoPadrao">
									Confirmar agendamento
								</a>
								<div class="guarda-spinner" v-if="loading">
									<div class="agendamento-spinner"></div>
								</div>
							</div>
						</div>
					</div>

					<div v-else><!-- Temos horário! -->
						<b-row class="text-center">
							<div style="width: 100%">
								<p  v-if="!agenda_agora_et2" class="alert alert-agenda_imovel"  >
									Encontramos corretores disponíveis no momento.<br/>
									Confirmar a visita agora?
								</p>

								<p  v-else class="alert alert-success" >
									Aguarde um corretor confirmar seu agendamento.<br/>
									Você será avisado via e-mail quando o corretor aceitar a visita.
								</p>
							</div>
						</b-row>

						<b-row><load v-if="loading"></load></b-row>

						<b-row v-if="respostaAgendaAgora" class="mod-footer">
							<div v-if="!agenda_agora_et2" class="campoButtonAgenda">
								<a id="botaoPesquisar" v-on:click="agendar_agora_etapa2()" class="button botaoPadrao">
									Confirmar Visita
								</a>
							</div>
						</b-row>
					</div>
				</div>

			</div>

			<div class="for-overlay"></div>
		</div>
	</div>
</template>

<script>
import LoginPanel from "./LoginPanel.vue";
import indexPanel from "./indexPanel.js";
import load from "../globais/Load.vue";
import VueCal from 'vue-cal';
import 'vue-cal/dist/i18n/pt-br';
import 'vue-cal/dist/vuecal.css';

export default {
	name: "agendaAgoraPanel",
	data: function(){
		return {
			loading: false,
			data: this.getUserLocalSt(),
			horaFoiSelecionada: false,
			ocupado: '',
			respostas: [],
			events: [],
			eventoSelecionado: {
				start: '',
				end: '',
				name: '',
				diaSem: ''
			},
			dias:[
				'Domingo',
				'Segunda-feira',
				'Terça-feira',
				'Quarta-feira',
				'Quinta-feira',
				'Sexta-feira',
				'Sábado',
				'Domingo'
			],
			ultimo_evento: -1,	
		}
	},
	props: [
		'logged',
		'agenda_agora_et2',
		'respostaAgendaAgora',		
		'dados_imovel',
		'flag'
	],
    components: {
        LoginPanel, load, VueCal
	},
	mounted() {
		this.horaFoiSelecionada = false;
		var dataAtual = new Date();
		var diaSemAtual = dataAtual.getDay();
		var aux = 0;
		for(var diaDeVisita of this.dados_imovel.schedule){
			var diaSem = diaDeVisita.diaSem;
			var horaComeca = diaDeVisita.hora_inicio;
			var horaTermina = diaDeVisita.hora_fim;
			var diferenca = diaSem - diaSemAtual;
			var agendamentoAux = new Date();
			agendamentoAux.setDate(agendamentoAux.getDate() + diferenca);
			var agendamento = this.tratamentoData(agendamentoAux.toLocaleString());
			
			this.getHorarios(this.dados_imovel._id, agendamento, diaSem);

			this.events.push({
				"start": agendamento + " " + horaComeca,
				"end":agendamento + " " + horaTermina,
				"class":"event",
				"name": aux++,
				"diaSem": diaSem,
				"content": '<i class="fa fa-square"></i>'
			});
		};
	},
	methods: {
		atualizaLogged: function(){
			this.logged = true;
			this.$emit('loginEfetuado');
		},
		eventoClicado: function(event){
			if(this.ultimo_evento != -1)
				this.events[this.ultimo_evento].content = '<i class="fa fa-square"></i>';
			this.events[event.name].content = '<i class="fa fa-check-square"></i>';
			this.ultimo_evento = event.name;
			this.horaFoiSelecionada = true;
			this.eventoSelecionado.name = event.name;
			this.eventoSelecionado.start = event.start
			this.eventoSelecionado.end = event.end;
			this.eventoSelecionado.diaSem = event.diaSem;
			
			if(this.respostas[event.name].status == 0){
				// console.log('O evento ' + event.start + ' não poderá ser agendado! ');	
				this.ocupado = true;
			}
			else{
				// console.log('Evento ' + event.start + ' -> ' + this.respostas[event.name].status);
				this.ocupado = false;
			}
		},
		tratamentoData: function(el){
			var strAux = el.split(" ");
			var str = strAux[0].split("/");
			var string = "";
			string += str[2];
			string += "-";
			string += str[1];
			string += "-";
			string += str[0];
			return string;
		},
		mascaraData: function(el){
			var aux = el.split(" ");
			var novoAux = aux[0].split("-");
			
			return novoAux[2] +"/"+novoAux[1] +"/" +novoAux[0];
		},
		mascaraDate: function(el){
			var aux = el.split(" ");
			var novoAux = aux[0].split("-");
			
			return novoAux[2] +"-"+novoAux[1] +"-" +novoAux[0];
		},
		mascaraHora: function(el){
			var aux = el.split(" ");

			return aux[1];
		},
		reseta: function(){
			this.$emit('reseta');
			this.eventoSelecionado = {
				start: '',
				end: '',
				name: '',
				diaSem: ''
			}
			this.events[this.ultimo_evento].content = '<i class="fa fa-square"></i>';
			this.horaFoiSelecionada = false
		}
	}
}
</script>

<style scoped>
	.botaoPadrao{
		background-color: #3ec185;
	}
	.guarda-spinner{
		position: absolute;
		top: 30%;
		left: 40%;
		z-index: 9999;
	}
	.modal-corpo{
		position: relative;
	}
	.vuecal__bg{
		opacity: 0.3;
	}
	.for-overlay{
		display: none;
		position: absolute;
		background-color: black;
		z-index: 100;
		height: 100%;
		width: 100%;
		opacity: 0.5;
	}
	.aparece{
		display: block;
	}
</style>