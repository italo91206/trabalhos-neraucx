<template>
  	<div class="meusImoveis">
    	<topo></topo>
    	<div class="myAccount">
      		<div class="container">
        		<div class="row">
          			<div class="col-md-12">
            			<h2>Meus agendamentos</h2>
				            <!-- Breadcrumbs 
                		 		<nav id="breadcrumbs">
                     			<ul>
                       			<li><a href="#">Home</a></li>
                       			<li>Meus agendamentos</li>
                      			</ul>
                   				</nav>
             				</div>
            				!-->
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
							<h3><i class="fa fa-home"></i> Imóvel</h3>
						</div>
						<br>
            			<div class="row">
              				<ul class="paginas">
								<li v-for="paginacao in controle_paginas" v-bind:key="paginacao.id">
								<span v-on:click="switchPage(paginacao)" v-bind:class="{active: paginacao == $route.params.pagina}" >{{paginacao}}</span>
								</li>
              				</ul>
            			</div>
            			
						<div class="agendamentos">
							<content-placeholders v-if="loading" :rounded="true">
								<content-placeholders-text :lines="3"/>
								<content-placeholders-img/>
								<content-placeholders-text/>
							</content-placeholders>
              				
							<div v-for="imovel in results.results" v-else class="row agendaEspaco" v-bind:key="imovel.id">
                				<div class="col-md-3 col-xs-4">
									<img :src="urlPadrao + imovel.imagens[1]" style="width: 100%; border-radius: 30px"/>
								</div>
								
								
								<div class="col-md-7 col-xs-2">
                  					<p>
										<strong>{{mascaraNome(imovel)}}</strong><br/>
										Aluguel: R$ {{imovel.value}}<br/>
										Condomínio: R$ {{imovel.value_data.condominio}}
									</p>
                  					<!--<a target="_blank" :href="urlMain+'imovel/'+imovel.rotulo" class="centraliza">
                    				<p class="imovelProperty redirect">Imovel: {{imovel.rotulo}}</p>
        							</a-->
                  					<p v-on:click="redireciona('Imovel', imovel.rotulo)" class="imovelProperty redirect">Visitar link</p>
									
                				</div>
                				
								<div class="col-md-2 col-xs-4">
                  					<p class="redirect" v-on:click="excluiImovel(imovel._id.$oid)">
            						<i class="fa fa-pencil"></i> Excluir
                					</p>
                  					<p class="redirect" v-on:click="editaImovel(imovel._id.$oid)">
                    				<i class="fa fa-pencil"></i> Editar
                  					</p>
                  					<p class="redirect">
                    				<i class="fa fa-eye-slash"></i> Ocultar
                  					</p>
                				</div>
              				</div>
            			</div>

            			<br>
            			
						<div v-if="!controle_paginas">
              				<p class="text-center">Não há nenhum imóvel.</p>
            			</div>
            			
						<div class="row">
              				<ul class="paginas">
                				<li v-for="paginacao in aux_atual" v-bind:key="paginacao.id">
                  				<span v-on:click="switchPage(paginacao)" v-bind:class="{active: paginacao == pag_atual}">{{paginacao}}</span>
                				</li>
              				</ul>
            			</div>
          			</div>
        		</div>
      		</div>
    	</div>
    <rodape/>
  	</div>
</template>

<script>
import rodape from "../globais/Footer.vue";
import topo from "../globais/Topo.vue";
import sidebarLeft from "./SidebarLeft.vue";
export default {
  	name: "MeusImoveis",
  	components: {
    	rodape,
    	topo,
    	sidebarLeft
  	},
  	data() {
    	return {
			ativo: "meuImovel",
			imoveis: [],
			paginacao_atual: [],
			aux_atual: [],
			pag_atual: 1,
			limite_pag: 5,
			controle_pagina: false,
			results: [],
			loading: false,
			urlPadrao: 'https://api.lukadigital.desenvolvendo.site/'
    	};
  	},
  	methods: {
    	excluiImovel(id) {
      		if (confirm("Tem certeza que deseja excluir?")) {
        		this.imovelAxios("deleteImovel", id);
      		}
    	},
    	editaImovel(id) {
      		this.$router.push({ name: "EditaImovel", params: { id: id } });
    	},
    	redireciona(local, param = "") {
      		this.$router.push({ name: local, params: { rotulo: param } });
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
    	},
    	switchPage(number) {
      		var rua = this.pesquisa("getLocal");
      		var aux = {};
      		aux.pagina = number;
      		aux.limite = this.limite_pag;
      		this.imovelAxios("alimenta_lista", aux);
      		this.$router.push({ name: "meusImoveis", params: { pagina: number } });
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
  	},
  	mounted() {
		jQuery("body").removeClass("indexadmin");
		var aux = {};
		aux.pagina = this.$route.params.pagina;
		aux.limite = this.limite_pag;
		this.imovelAxios("alimenta_lista", aux);
  	}
};
</script>
