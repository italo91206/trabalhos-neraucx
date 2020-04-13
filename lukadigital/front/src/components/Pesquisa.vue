<template>
  	<div class="searchPage">
		<topo/>
		<div class="sectionSearch">
			<b-row class="espa">
				<div class="col-md-5 col-xs-12 mapaSection">
					<!--img style="width: 100%;" src="../skins/imgs/mapa-search.png"/-->
					<l-map :zoom="zoom" :center="center" class="map-search" id="map" :control="control">
						<l-tile-layer :url="url" :attribution="attribution"/>
						<l-marker v-for="item in markers" v-bind:key="item.id" :lat-lng="item.latlng">
						<l-popup :content="item.content"></l-popup>
						</l-marker>
					</l-map>
				</div>

				<div class="col-md-7 col-xs-12 colunaResultado">
					<div class="row searchCampo">
						<input v-model="search" type="text" class="input-text" placeholder="Digite aqui o cep, rua, bairro ou cidade que deseja morar" name="nomeCompletoAlugar" id="nomeCompletoAlugar" value>
						<p class="campoButton">
							<a v-on:click="defineBusca()" id="botaoPesquisar" class="button botaoPadrao">Pesquisar</a>
						</p>
					</div>

					<div class="row">
						<ul class="paginas">
							<li v-for="paginacao in controle_paginas" v-bind:key="paginacao.id">
								<span v-on:click="switchPage(paginacao)" v-bind:class="{active: paginacao == $route.params.pagina}">
									{{paginacao}}
								</span>
							</li>
						</ul>
					</div>

					<div class="row resultCampo">
						<div v-if="results == null">
							<div  class="alert alert-danger"> 
								NÃO HÁ RESULTADOS DISPONIVEIS
							</div>
						</div>

						<div v-for="imob in results.results" class="col-md-6 espacamentoLinha" v-bind:key="imob.id">
							<div class="listing-item">

								<a v-on:click="gotoImovel(imob.rotulo)" class="listing-img-container" style="height: auto;" >
									<div class="listing-badges" style="display: none;">
										<span class="featured">Recomendado</span>
										<span>{{imob.type}}</span>
									</div>
										
									<div class="listing-img-content">
										<span class="listing-price">
											R$ {{imob.value}}
											<i>+ R${{imob.value_data.condominio}}</i>
										</span>

										<span class="like-icon with-tip" data-tip-content="Lista de interesse">
											<div class="tip-content">Lista de interesse</div>
										</span>

										<span class="compare-button with-tip" data-tip-content="Comparar">
											<div class="tip-content">Comparar</div>
										</span>
									</div>

									<div class="listing-carousel owl-carousel owl-theme" style="opacity: 1; display: block;" >
										<div class="owl-wrapper-outer">
											<div class="owl-wrapper" style="width: 638px; left: 0px; display: block; transition: all 0ms ease; transform: translate3d(0px, 0px, 0px);" >
												<div class="owl-item" style="width: 100%;">
													<div class="sobrepoePesquisaImg"></div>
													<div>
														<img v-bind:src="urlApi+imob.imagens[0]" alt style="height: auto; width:100%">
													</div>
												</div>
											</div>
										</div>

										<div class="owl-controls clickable" style="display: none;">
											<div class="owl-pagination">
												<div class="owl-page active">
													<span class></span>
												</div>
											</div>

											<div class="owl-buttons">
												<div class="owl-prev"></div>
												<div class="owl-next"></div>
											</div>
										</div>
									</div>
								</a>

								<div class="listing-content">
									<div class="listing-title">
										<h4>
											<a href="https://lukadigital.desenvolvendo.site/imovel/apartamento-jardim-paris-presidente-prudente-sp-154" >
												{{consomeJSON.getTipo_nome(imob.type)}} em {{imob.neighbor}}
											</a>
										</h4>

										<a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
											<i class="fa fa-map-marker"></i>
											{{imob.address.logradouro}}, {{imob.address.numero}}, {{imob.neighbor}}
										</a>

										<a href="https://lukadigital.desenvolvendo.site/imovel/apartamento-jardim-paris-presidente-prudente-sp-154" class="details button border">
											Detalhes
										</a>
									</div>

									<ul class="listing-details">
										<li>{{imob.basic_data.areaterreno}} m²</li>
										<li>{{imob.rooms.quartos}} Quarto(s)</li>
										<li>{{imob.rooms.suites}} Suite(s)</li>
									</ul>
								</div>

							</div>
						</div>

						<div class="col-md-6"></div>
					</div>
					
					<div class="row">
						<ul class="paginas">
							<li v-for="paginacao in controle_paginas" v-bind:key="paginacao.id">
								<span v-on:click="switchPage(paginacao)" v-bind:class="{active: paginacao == $route.params.pagina}">
									{{paginacao}}
								</span>
							</li>
						</ul>
					</div>

				</div>
			</b-row>
		</div>

		<rodape/>
  	</div>
</template>
<script>
import rodape from "./globais/Footer.vue";
import topo from "./globais/Topo.vue";
import main from "../main.js";

export default {
	name: "Pesquisa",
	components: {
		topo,
		rodape: () => import("./globais/Footer.vue")
	},
	mounted() {
		this.pesquisa("setLocal", "");
		this.$router.push({ name: "Pesquisa", params: { pagina: 1 } });
		jQuery("body").removeClass("indexadmin");
		var rua = this.pesquisa("getLocal");
		this.pesquisa("defineBusca", rua, this.$route.params.pagina);
	},
	data() {
		return {
			msg: "Welcome to Your Vue.js PWA",
			flagAtivo: "",
			results: "",
			search: "",
			zoom: 15,
			positions: [
				[-22.12702, -51.41216],
				[-22.1305, -51.41216],
				[-22.1265, -51.41216]
			],
			center: [-22.12685, -51.38561],
			markers: [],
			polyline: {
				latlngs: [[-22.12703, -51.41188], [-22.1305, -51.41216]],
				color: "green"
			},
			control: {
				waypoints: [
				L.latLng(-22.12702, -51.41216),
				L.latLng(-22.1305, -51.41216)
				]
			},
			url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
			attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
			controle_paginas: false,
			pagina_atual: 1,
			pag_ini: "",
			pag_fim: "",
			limite: 4
		}
	},
	methods: {
		gotoImovel(rotulo) {
			this.$router.push({ name: "Imovel", params: { rotulo: rotulo } });
		},
		defineBusca(world = this.search) {
			this.pesquisa("setLocal", world);
			location.reload();
		},
		zoomUpdate(zoom) {
			this.currentZoom = zoom;
		},
		centerUpdate(center) {
			this.currentCenter = center;
		},
		showLongText() {
			this.showParagraph = !this.showParagraph;
		},
		innerClick() {
			alert("Click!");
		},
		generatePositions() {
			for (var key in this.results.results) {
				var aux = {};
				aux.latlng = L.latLng(
					this.results.results[key].latlon[0],
					this.results.results[key].latlon[1]
				);
				aux.content = this.results.results[key].neighbor;
				this.markers.push(aux);
			}
		},
		generateCenter() {
			var aux = [];
			aux[0] = this.results.results[0].neighbor;
			aux[1] = this.results.results[0].city;
			this.pesquisa("getCenter", aux);
		},
		setCenter(lalon) {
			is.center = L.latLng(lalon[0], lalon[1]);
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
			// apenas para ter o total de páginas para serem exibidas
		},
		limitacaoPaginas(){
			this.pag_ini = this.pagina_atual;
			this.pag_fim = this.pag_ini + this.limite;
		},
		switchPage(number) {
			var rua = this.pesquisa("getLocal");
			this.pesquisa("defineBusca", rua, number);
			this.$router.push({ name: "Pesquisa", params: { pagina: number } });
			this.pagina_atual = number;
			this.limitacaoPaginas();
		}
	}
}
</script>