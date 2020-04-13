<template>
	<div class="imovelPage">
		<topo :key="logged"/>
		
		<!-- modalBackground serve para acabar deixando o fundo desfocado, dando ênfase-->
		<!-- nos pannels a serem invocados -->
		<div class="modalBackground"></div>	
		
		<agenda-agora-panel 
		v-bind:flag="this.flag"
		v-on:reseta="atualizaFlag()"
		v-bind:logged="this.logged" 
		v-bind:dados_imovel="dados_imovel"
		v-bind:agenda_agora_et2="this.agenda_agora_et2" 
		v-bind:respostaAgendaAgora="respostaAgendaAgora"
		v-on:loginEfetuado="atualizaLogged()"/>

		<agenda-visita-panel 
		v-bind:flag="this.flag"
		v-on:reseta="atualizaFlag()"
		v-bind:logged="this.logged"  
		v-bind:dados_imovel="dados_imovel" 
		v-bind:respostaAgendaAgora="respostaAgendaAgora"
		v-on:loginEfetuado="atualizaLogged()"/>		

		<!-- Carrosel antigo -->
		<div class="imovelImage container container-imgsImovel relative" style="display: flex"> 
			<div class="btn" @click="$refs.siema.prev()">
				<i class="fa fa-caret-left" style="font-size: 80px"></i>
			</div>
			
			<siema ref="siema" class="siema" auto-play :ready="true">
				<div v-for="imagem in dados_imovel.imagens" class="slide" v-bind:key="imagem.id">
					<img class="img-imovelFRONT" v-bind:src="urlApi+imagem" />
				</div>
			</siema>
			
			<div class="btn" @click="$refs.siema.next()">
				<i class="fa fa-caret-right" style="font-size: 80px"></i>
			</div>

			<!-- <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"></a> -->
		</div>

		<div class="imovelSection"> <!-- Descrição do imóvel -->
			<div class="container">
				<div class="row">
					<!-- Dimensões + mapa -->
					<div class="col-md-8">

						<p class="desc-headline">Descrição</p>
						
						<!-- cidade, bairro + cep como header da descrição -->
						<p class="description">
							Rua {{ dados_imovel.address.logradouro}}, {{ dados_imovel.address.numero }} - {{ dados_imovel.neighbor }}<br/>
							{{ dados_imovel.city }}<br/>
							{{ dados_imovel.address.cep }} {{ dados_imovel.state }}
						</p>

						<!-- Agora a descrição de fato -->
						<p class="description">
							{{dados_imovel.descryption}}
						</p>

						<p class="desc-headline detalhes">Detalhes</p>

						<div class="row">
							<div class="col-md-4">Área: {{dados_imovel.basic_data.areaterreno}}m²</div>
							<div class="col-md-4">Quarto(s): {{dados_imovel.rooms.quartos}}</div>
							<div class="col-md-4">Suite(s): {{dados_imovel.rooms.suites}}</div>
						</div>

						<p class="desc-headline mapa">Mapa</p>
						<div class="mapaSection">
							<l-map :zoom="zoom" :center="center" style="height: 400px" id="map">
								<l-tile-layer :url="url" :attribution="attribution" />
								<l-marker v-for="item in markers" :lat-lng="item.latlng" v-bind:key="item.id">
									<l-popup :content="item.content"></l-popup>
								</l-marker>
								<l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color" />
							</l-map>
						</div>
					</div>

					<!-- Panel dos botões -->
					<div class="col-md-4">
						<div class="widget">
							<div class="agent-widget">
								
								<!-- Informações financeiras -->
								<div class="imovel-totals">
									
									<p class="strong">CAPITALIZAÇÃO</p>

									<p>Aluguel<span>R$ {{dados_imovel.value}}</span></p>
									<p>Condomínio<span>R$ {{dados_imovel.value_data.condominio}}</span></p>
									<p>IPTU<span>R$ {{dados_imovel.value_data.iptu}}</span></p>
									<p v-if="dados_imovel.value_data.valorCapitalizacao">Capitalização<span>R$ {{dados_imovel.value_data.valorCapitalizacao}}</span></p>
									<p class="strong">Total<span>R$ {{total_imovel_capitalizacao}}</span></p>
									<div class="clearfix"></div>
									<div class="separator"></div>

									<p class="strong">SEGURO FIANÇA</p>

									<p v-if="dados_imovel.value_data.seguroFianca">Seguro<span>R$ {{ dados_imovel.value_data.seguroFianca }}</span></p>
									<p>Aluguel<span>R$ {{ dados_imovel.value }}</span></p>
									<p class="strong">Total<span>R$ {{total_imovel_seguro}}</span></p>
									<div class="separator"></div>

								</div>

								<div class="botoesAgenda">
									<a v-on:click="showModalAgendaAgora(); agendar_agora_etapa1()" id="botaoPesquisar" class="button botaoPadrao btn-aj">
										Quero visitar agora!
									</a>
									<div class="escapamentoB">
										<a v-on:click="showModalAgendaVisita()" id="botaoPesquisar" class="button botaoPadrao btn-agendaV">
											Agendar visita
										</a>
									</div>
								</div>

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
import load from "./globais/Load.vue";
import rodape from "./globais/Footer.vue";
import topo from "./globais/Topo.vue";
import agendaAgoraPanel from "./panel/agendaAgoraPanel.vue";
import agendaVisitaPanel from "./panel/agendaVisitaPanel.vue";
import indexPanel from "./panel/indexPanel";

export default {
	name: "Imovel",
	components: {
		rodape, topo, load, agendaAgoraPanel, agendaVisitaPanel
	},
	mounted() {
		console.clear();
		jQuery(document).ready(function() {// Função totalmente visual
			if (window.matchMedia("(min-width: 800px)").matches) {
				jQuery(window).scroll(function() {
				// console.log('MAPA OFFSET = '+ jQuery(".mapa").offset().top);
				// console.log('WINDOWS OFFSET = '+ jQuery(window).scrollTop())
				if ( jQuery(".imovelImage").offset().top + 150 < jQuery(window).scrollTop() ){
					jQuery(".agent-widget").css({
						position: "fixed",
						width: "25%",
						top: "89px"
					});
				}
				if (jQuery(".mapa").offset().top + 10 <= jQuery(window).scrollTop()){
					jQuery(".agent-widget").css({
						position: "relative",
						width: "100%"
					});
				}
				if ( jQuery(".imovelImage").offset().top + 300 > jQuery(window).scrollTop() ){
					jQuery(".agent-widget").css({
						position: "relative",
						width: "100%"
					});
				}
			});
		}
		});
		jQuery("body").removeClass("indexadmin");

		// Carrega 5 dias sequentes ao dia atual
		this.agenda("diasSemana"); 
		var query = {};
		query.rotulo = this.$route.params.rotulo;

		// Carrega o imóvel da página (já pega os dados_imovel)
		this.imovelAxios("selectImovel", query); 
	},
	beforeUpdate(){ // Verifica apenas se possui login ( sessão cadastrada )
		var data = this.getUserLocalSt();
		if(data){
			this.logged = true;
		}
	},
	data() {
		return {
			respostaAgendaAgora: false,
			agenda_agora_et2: false,
			diaSelecionado: "",
			confirma_agendamento: false,
			dados_imovel: "",
			total_imovel_seguro: "",
			total_imovel_capitalizacao: "",
			message: false,
			zoom: 18,
			respostaAgendaAgora : false,
			loading : false,
			positions: [
				[-22.12702, -51.41216],
				[-22.1305, -51.41216],
				[-22.1265, -51.41216]
			],
			center: L.latLng(-22.12702, -51.41216),
			markers: [],
			polyline: {
				latlngs: [],
				color: "green"
			},
			url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
			logged: false,
			is_mobile: false,
			flag: 0
		};
	},
    watch: {
		dados_imovel: function() {
			var iptu = this.moedaParaNumero(this.dados_imovel.value_data.iptu);
			var condominio = this.moedaParaNumero(this.dados_imovel.value_data.condominio);
			var valor = this.moedaParaNumero(this.dados_imovel.value);
			var capitalizacao = 0;
			var seguro = 0;

			if(this.dados_imovel.value_data.valorCapitalizacao != null ){
				capitalizacao = this.moedaParaNumero(this.dados_imovel.value_data.valorCapitalizacao);
			}
			if(this.dados_imovel.value_data.seguroFianca != null){
				seguro = this.moedaParaNumero(this.dados_imovel.value_data.seguroFianca);
			} 		
			
			// console.log(capitalizacao);
			// console.log(seguro);
			// console.log(valor);
			// console.log(condominio);
			// console.log(iptu);

			var soma_capitalizacao = parseFloat(iptu) + parseFloat(condominio) + parseFloat(valor) + parseFloat(capitalizacao);
			var soma_seguro = parseFloat(valor) + parseFloat(seguro);
			
			this.total_imovel_capitalizacao = soma_capitalizacao.toLocaleString("pt-BR");
			this.total_imovel_seguro = soma_seguro.toLocaleString("pt-BR");
		}
	},
  	methods: {
		moedaParaNumero(valor) {
			return isNaN(valor) == false ? parseFloat(valor): parseFloat(
				valor.replace("R$", "").replace(".", "").replace(",", ".")
			);
		},		
		generatePosition() {
			var aux = {};
			aux.latlng = L.latLng(
				this.dados_imovel.latlon[0],
				this.dados_imovel.latlon[1]
			);
			aux.content = this.dados_imovel.neighbor;
			this.center = L.latLng(
				this.dados_imovel.latlon[0],
				this.dados_imovel.latlon[1]
			);
			this.markers.push(aux);
		},
		setLoggedOn(){
			this.logged = true;
		},
		mascaraNome(elm){
			if(elm){
				var string = elm.address.logradouro;
				string += ', ';
				string += elm.address.numero;
				return string
			}
			else
				return null;
		},
		mascaraTipo(elm){
			var id = elm.type;
			var string = this.consomeJSON.getTipo_nome(id);
			console.log('Imovel: ' + string);
			return string;
		},
		atualizaLogged(){
			this.logged = true;
		},
		atualizaFlag(){
			this.flag++;
		}
  	}
};
</script>
<style scoped>
.btn{
	z-index: 1;
	margin-top: 200px
}
.fa.fa-caret-left,
.fa.fa-caret-right{
	font-size: 80px;
    color: #0e3175;
}

.fa.fa-caret-left:hover,
.fa.fa-caret-right:hover{
	font-size: 80px;
    color: #4c6ba9;
}
</style>