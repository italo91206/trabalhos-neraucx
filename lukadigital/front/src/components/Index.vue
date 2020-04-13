<template>
  	<div class="index">
		<div class="header">
			<div class="container">
				<div class="row">
				<div class="col-sm navbar">
					<img class="navbar-brand logo" src="../skins/imgs/logo_claro.png">
					<div v-if="logado" class="ajust_mobile_head ajust_mobile_head_index dropdown" v-on:click="showMenu()" style="cursor: pointer;">
							<div class="dropdown-menu" v-if="flagMenu == 0"></div>
							<a class="dropdown-toggle toggle-index" href="#" aria-expanded="false">
							<span class="foto-userSPAN">
							<img class="foto-userIMG" v-bind:src="urlApi+dadosLog.foto">
							</span>
							<a style="color: white" class="sign-in">Olá, {{dadosLog.name}}</a>
							</a>
						<div class="dropdown-menu show" v-if="flagMenu == 1">
							<a class="dropdown-item" v-if="in_array_grupo(dadosLog.group_id,validForm.corretor())" v-on:click="redireciona('agendaCorretor',1)" >
								<i class="sl sl-icon-notebook"></i>
								Agenda Corretor
							</a>
							<a class="dropdown-item" v-on:click="redireciona('agendaUser',1)">
								<i class="sl sl-icon-notebook"></i>
								Agenda
							</a>
							<a class="dropdown-item" v-on:click="redireciona('editarUser')">
								<i class="sl sl-icon-user"></i>
								Minha conta
							</a>
							<a class="dropdown-item" v-on:click="redireciona('meusImoveis',1)">
								<i class="fa fa-home"></i> 
								Meus imóveis
							</a>
							<a class="dropdown-item" v-on:click="redireciona('rota')">
								<i class="sl sl-icon-compass"></i>
								Minha rota
							</a>
							<a class="dropdown-item" v-on:click="redireciona('cadastroImovel')">
								<i class="fa fa-home"></i>
								Novo imóvel
							</a>
							<a id="logout-sair" class="dropdown-item" v-on:click="mataSessao(); redireciona('userLogin')"> 
								<i class="sl sl-icon-power"></i>
								Sair
							</a>
						</div>
					</div>
					<div v-else>
						<div class="header-widget">
							<a v-on:click="redireciona('userLogin')" style="color:white " class="sign-in">
							<i class="fa fa-user"></i>
							Login / Cadastrar
							</a>
							<div class="user-menu">
								<div class="user-name" style="color : black;"></div>
							</div>
						</div>
						<div class="header-widget-min">
							<a v-on:click="redireciona('userLogin')" style="color:white " class="sign-in">
							<i class="fa fa-user" style="font-size:20px;"></i>
							<br>Login ou
							<br>Cadastrar
							</a>
							<div class="user-menu">
								<div class="user-name" style="color: black;"></div>
							</div>
						</div>
					</div>
					<!-- NAV -->
				</div>
				</div>
			</div>
		</div>
		<div class="mainIndex">
		<!-- <div class="parallax-overlay"></div>! -->
			<div class="mainContainerSearch">
				<div class="container">
					<div class="col-sm">
						<h2 class="ajusteTitle">Encontre seu novo lar</h2>
					</div>
					<div class="row">
						<div class="col-sm">
							<input v-on:keyup="sugestion()" v-model="search" class="inputSearchIndex input-text" id="exampleInput1" required placeholder="Digite a região, bairro ou a cidade aqui...">
							<b-button v-on:click="defineBusca()" class="button botaoPadrao ajusteBSEARCH">
								<i class="fa fa-search"></i>
							</b-button>
							<div v-if="sugestao != '' " class="alert alert-success" id="sugestoes" style="z-index: 10;">
								<ul class="sugestoes">
									<li v-for="sugest in sugestao" v-on:click="defineBusca(sugest)" v-bind:key="sugest.id">{{sugest}}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="parallax-overlay" style="background-color: rgb(54, 56, 62); opacity: 0.5;"></div>
		</div>

		<div class="meioIndex">
			<div class="headBox">
				<h3>Luka Digital</h3>
			</div>
		</div>

		<div class="subMeio">
			<div class="container">
				<div class="row ajusteRowSub">
					<div class="col-sm-6 col-md col-lg-3 text-center contentSub">
						<div id="predioI" class="icon-container">
							<i class="fa fa-building"></i>
						</div>
						<h3>Busque seu imóvel</h3>
						<p>Você pode usar nossa ferramenta de filtro avançado ou navegar pelo mapa da região que deseja morar.</p>
						</div>
						<div class="col-sm-6 col-md col-lg-3 text-center contentSub">
							<div id="runI" class="icon-container">
								<i class="fa fa-home"></i>
							</div>
							<h3>Vá visita-lo</h3>
							<p>Nossos corretores estão disponiveis 24 horas para acompanhar sua visita, basta solicitar uma visita a jato ou agendar uma visitar no dia &amp; horario de sua preferência.</p>
						</div>
						<div class="col-sm-6 col-md col-lg-3 text-center contentSub">
							<div id="likeI" class="icon-container">
								<i class="fa fa-thumbs-up"></i>
							</div>
							<h3>Gostou do imóvel?</h3>
							<p>Seu cadastro já foi previamente aprovado, confirme o aluguel e assine o contrato diretamente pelo aplicativo. Sem burocracia &amp; sem papelada.</p>
						</div>
						<div class="col-sm-6 col-md col-lg-3 text-center contentSub">
							<div id="chaveI" class="icon-container">
								<i class="fa fa-key"></i>
							</div>
							<h3>A chave é sua!</h3>
						<p>Agora você ja pode aproveitar seu novo lar. AH! e se precisar de algum suporte basta abrir o aplicativo e solicitar.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="meioIndex">
			<div class="headBox">
				<h3>Estamos onde precisa</h3>
				<!-- teste teste teste -->
			</div>
		</div>

		<div class="container afterSubIndex">
			<div class="row-fluid">
				<div class="col-md-4 imagesBOX imageFirst">
					<div class="sobrepoeGray"></div>
					<a class></a>
				</div>
				<div class="col-md-8 imagesBOX imageSecond">
					<div class="sobrepoeGray"></div>
				</div>
				<div class="col-md-8 imagesBOX imageTerc">
					<div class="sobrepoeGray"></div>
				</div>
				<div class="col-md-4 imagesBOX imageQuart">
					<div class="sobrepoeGray"></div>
				</div>
			</div>
		</div>

		<div class="meioIndex">
			<div class="headBox">
				<h3>Blog</h3>
			</div>
		</div>

		<div class="FotMeio">
			<div class="container">
				<content-placeholders v-if="loading" :rounded="true" style="margin-top: 2em;">
				<content-placeholders-img/>
				<content-placeholders-heading/>
				</content-placeholders>
				<div class="row ajusteRowSub">
					<div class="col-md-4 col-xs-12 text-center contentSub" v-for="blog in results.results" v-bind:key="blog.id">
						<div class="blog-post">
							<!-- Img -->
							<a v-on:click="redireciona('blogPage',blog._id.$oid)" class="post-img">
								<img :src="urlApi+blog.main_img" alt>
							</a>
							<!-- Content -->
							<div class="post-content">
								<h3>
									<a href="#" class="titleBlog">{{doTruncarStr(blog.titulo,20)}}</a>
								</h3>
								<p>{{ doTruncarStr(blog.descryption,30)}}</p>
								<a v-on:click="redireciona('blogPage',blog._id.$oid)" class="read-more">
								Ler mais
								<i class="fa fa-angle-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="row" style="padding: 26px;">
					<ul class="paginas">
						<li v-for="paginacao in controle_paginas" v-bind:key="paginacao.id">
							<span v-on:click="switchPage(paginacao)" v-bind:class="{active: paginacao == pagina_blog}" >{{paginacao}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="flip-banner-content">
			<div class="parallax-overlayFot"></div>
			<h2 class="flip-visible">Pronto para o aluguel mais rápido de sua vida ?</h2>
			<h2 class="flip-hidden">
				Veja nosso catálogo de imóveis exclusivos
				<i class="sl sl-icon-arrow-right"></i>
			</h2>
		</div>

		<rodape></rodape>
  	</div>
</template>
<script>
import topo from "./globais/Footer.vue";
import rodape from "./globais/Footer.vue";
export default {
	name: "Index",
	components: { rodape },
	data() {
		return {
			msg: "Welcome to Your Vue.js PWA",
			search: "",
			sugestao: "",
			logado: false,
			dadosLog: false,
			flagMenu: 0,
			created: false,
			results: [],
			limite_pag: 3,
			controle_paginas: false,
			pagina_blog: 1,
			loading: false
		};
	},
	created() {
		this.created = false;
	},
	mounted() {
		var aux = {};
		aux.pagina = 1;
		aux.limite = 3;
		this.blog("alimenta_lista", aux);

		if (!this.getCookie("username"))
			this.update_dataUser();
		else
			this.setdatas();
		jQuery("body").removeClass("indexadmin");
		this.created = true;
		// console.log(results);
		console.log("Último release: 23/01 - v1.1.0");
	},
  	methods: {
    	sugestion() {
      		if (this.search.length >= 3) {
        		this.pesquisa("pesquisa", this.search);
      		} else if (this.search.length == 0) {
        		this.search = "";
        		this.sugestao = "";
      		}
      	console.log(this.search.length);
    },
	defineBusca(world = this.search) {
      	this.pesquisa("setLocal", world);
      	this.$router.push({ name: "Pesquisa", params: { pagina: 1 } });
    },
    redireciona: function(local, params = false) {
      	if (!params) this.$router.push({ name: local });
      	else this.$router.push({ name: local, params: { pagina: params } });
    },
    showMenu() {
      	if (this.flagMenu == 0) this.flagMenu = 1;
      	else this.flagMenu = 0;
	},
	doTruncarStr(str, size) {
      	if ( str == undefined || str == "undefined" || str == "" || size == undefined || size == "undefined" || size == "" )
        	return str;
      	var shortText = str;
      	if (str.length >= size + 3){
	        shortText = str.substring(0, size).concat("...");
      	}
      	return shortText;
    },
    setdatas() {
      if (this.getUserLocalSt()) {
        this.dadosLog = this.getUserLocalSt().dados;
        this.dadosLog.name = this.doTruncarStr(this.dadosLog.name, 50);

        this.logado = true;
      } else this.logado = false;
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
		this.pagina_blog = number;
		var aux = {};

		aux.pagina = number;
		aux.limite = 3;
		this.blog("alimenta_lista", aux);
		}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.carregamento {
	width: 100%;
	height: 100%;
	background: black;
	position: fixed;
	z-index: 900;
}
</style>