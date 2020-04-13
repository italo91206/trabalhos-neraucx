<template>
  	<div class="editaUser">
    	<topo></topo>

		<div class="myAccount">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2>Meus agendamentos</h2>
					</div>
				</div>
			</div>
		</div>

		<div class="sectionMeio">
			<div class="container">
				<div class="row">
				<div class="col-md-4 col-xs-12 sideLayout">
					<sidebarLeft v-bind:ativo="ativo"></sidebarLeft>
				</div>

				<div class="col-md-8 col-xs-12">
					<div class="topoAgenda">
						<h3><i class="sl sl-icon-notebook"></i> Agendamentos</h3>
					</div>

					<div class="agendamentos">
						<div class="legendas row">
							<div v-bind:class="validForm.getStatus_agenda('4').alert" class="col-md-2">Agendado</div>
							<div v-bind:class="validForm.getStatus_agenda('2').alert" class="col-md-2">Cancelado</div>
							<div v-bind:class="validForm.getStatus_agenda('3').alert" class="col-md-2">Pendente</div>
							<div v-bind:class="validForm.getStatus_agenda('1').alert" class="col-md-2">Concluida</div>
						</div>

						<div class="row">
							<a class="button botaoPadrao" v-on:click="redireciona('rota')">Minha rota</a>
						</div>

						<br/>
						<br/>

						<load v-if="loading"></load>
						<div class="row">
							<ul class="paginas">
								<li v-for="paginacao in controle_paginas" v-bind:key="paginacao.id">
									<span
										v-on:click="switchPage(paginacao)"
										v-bind:class="{active: paginacao == $route.params.pagina}"
										>{{paginacao}}</span>
								</li>
							</ul>
						</div>

						<content-placeholders v-if="loading" :rounded="true">
							<content-placeholders-text :lines="3"/>
							<content-placeholders-img/>
							<content-placeholders-text/>
						</content-placeholders>

						<div v-for="agend in results.results" v-else v-bind:class="getAlert(agend.status)" class="row agendaEspaco" v-bind:key="agend.id">
							<div class="col-md-10 col-xs-8">
								<div class="row">
									
									<!-- Referente aos dados do imóvel -->
									<div class="col-md-6">
										<p>	
											Dia: {{ mascaraData(getData(agend.scheduled_at,0)) }}<br/>
											Hora: {{ mascaraHora(getData(agend.scheduled_at,1)) }}
										</p>
										<img :src="url + pegaImagem(agend.imovel)" style="width: 100%"/>
										<a v-on:click="redireciona(agend.imovel)">
											{{mascaraTipo(agend.imovel)}}, {{ mascaraNome(agend.imovel) }}
										</a>
									</div>

									<!-- Referente aos dados do corretor -->
									<div v-if="agend.corretor != 'Pendente'" class="col-md-6 campo_corretor">

										<h6>Dados do corretor</h6>

										<p class="text-center">
											<img :src="url + agend.corretor_foto" width="80px" class="text-center" style="border-radius: 30px"/>
											<br/>
											<strong>{{agend.visitante}}</strong>
											<br/>
										</p>

										<p>Nome: {{agend.corretor}}<br/>Telefone: {{agend.corretor_telefone}}</p>

										<a :href="'tel:' + mascaraTelefone(agend.visitante_telefone)">
											<i class="sl sl-icon-phone"></i>	
											Ligar 
										</a>

										<br/>

										<a :href="'http://api.whatsapp.com/send?phone=55' + mascaraWhatsapp(agend.corretor_telefone)" target="_blank">
											<i class="fa fa-whatsapp"></i>	
											Whatsapp 
										</a>

									</div>
								</div>
							</div>
						<div class="col-md-2 col-xs-4">
							<p class="redirect" v-if="check_cancela(agend.status)" v-on:click="cancelaAgenda(agend._id.$oid)">
								<i class="fa fa-pencil"></i> Cancelar
							</p>
							<p class="redirect">
								<i class="fa fa-eye-slash"></i> Ocultar
							</p>
						</div>
					</div>
					<div v-if="!controle_paginas">
						<p class="text-center">Não há nenhum agendamento.</p>
					</div>
					<div class="row">
						<ul class="paginas">
						<li v-for="paginacao in aux_atual" v-bind:key="paginacao.id">
							<span
							v-on:click="switchPage(paginacao)"
							v-bind:class="{active: paginacao == pag_atual}"
							>{{paginacao}}</span>
						</li>
						</ul>
					</div>
					</div>
				</div>
				</div>
			</div>
		</div>
    	<rodape></rodape>
  	</div>
</template>

<script>
import load from "../globais/Load.vue";
import rodape from "../globais/Footer.vue";
import topo from "../globais/Topo.vue";
import sidebarLeft from "./SidebarLeft.vue";
import main from "../../main.js";
export default {
	name: "agendaUser",
	components: {
		rodape,
		topo,
		sidebarLeft,
		load
	},
	data() {
		return {
			ativo: "agendaUser",
			data: {},
			loading: false,
			paginacao_atual: [],
			aux_atual: [],
			pag_atual: 1,
			dadosLog: "",
			logado: true,
			results: [],
			controle_paginas: false,
			limite_pag: 3,
			url: 'https://api.lukadigital.desenvolvendo.site/'
		};
	},
	methods: {
		cancelaAgenda(id) {
			if (confirm("Tem certeza que deseja cancelar?")) {
				console.log('Id imovel a ser cancelado: ' + id);
				this.agenda("cancelaAgenda_visitor", id);
			}
		},
		getAlert(status) {
			return this.validForm.getStatus_agenda(status).alert;
		},
		check_cancela(status) {
			if (status == "1" || status == "2" || status == "5") return false;
			else return true;
		},
		getData(object, pos) {
			var data = object.split(" ");
			return data[pos];
		},
		redireciona(imovel) {
			this.$router.push({ name: 'Imovel', params: { rotulo: imovel.rotulo } });
		},
		resolvePaginacao() {
			var aux = [];
			var count = 1;
			var controle = this.results.qtd_pag;
			while (controle > 0) {
				aux.push(count);
				count++;
				controle--;
			}
			this.controle_paginas = aux;
			console.log(this.controle_paginas);
		},
		switchPage(number) {
			var rua = this.pesquisa("getLocal");
			var aux = {};
			aux.pagina = number;
			aux.limite = this.limite_pag;
			this.agenda("alimenta_lista", aux, this.data);
			this.$router.push({ name: "agendaUser", params: { pagina: number } });
		},
		mascaraTelefone(string){
			string = string.replace('(', '');
			string = string.replace(')', ' ');
			string = string.replace('-', '');
			return string;
		},
		mascaraWhatsapp(string){
			string = string.replace('(', '');
			string = string.replace(')', '');
			string = string.replace('-', '');
			return string;
		},
		mascaraData(string){
			string = string.replace('-', '/');
			string = string.replace('-', '/');
			return string
		},
		mascaraHora(string){
			string = string.replace(':00', '');
			return string
		},
		mascaraNome(elm){
			if(elm){
				var string = elm.address.logradouro;
				string += ', ';
				string += elm.address.numero;
				string += ' - ';
				string += elm.neighbor;
				return string
			}
			else
				return null;
		},
		mascaraTipo(elm){
			if(elm){
				var id = elm.type;
				var string = this.consomeJSON.getTipo_nome(id);
				return string;
			}
			else
				return null;
		},
		tratamentoJSON(elm){
			if(elm)
				return elm.rotulo;
			else
				return null;
		},
		pegaImagem(elm){
			if(elm)
				return elm.imagens[0];
			else
				return null;
		}
	},
	mounted() {
		jQuery("body").removeClass("indexadmin");
		var aux = {};
		aux.pagina = this.$route.params.pagina;
		aux.limite = this.limite_pag;
		this.data.visitor_ID = this.getIDLocalSt();
		this.agenda("alimenta_lista", aux, this.data);

		if (this.getUserLocalSt()) {
			this.dadosLog = this.getUserLocalSt().dados;
			this.logado = true;
		} else this.logado = false;
	},
	beforeCreate() {
		// this.validaUser();
	}
};
</script>
