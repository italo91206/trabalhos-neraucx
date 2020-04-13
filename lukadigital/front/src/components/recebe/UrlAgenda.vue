<template>
  	<div class="UrlAgenda">
    	<topo></topo>
    <br>
    <br>
    	<div class="container">
      		<div class="dados_agendamento">
        		<div class="topo_ag">
          			<h3>Dados do agendamento</h3>
        		</div>
				
				<content-placeholders v-if="loading" :rounded="true">
				<content-placeholders-heading/>
				<content-placeholders-text :lines="3"/>
				<content-placeholders-img/>
				<content-placeholders-text/>
				</content-placeholders>
        		
				<div v-if="message != true"><!-- eu estou logado -->
					
          			<div class="section_ag" v-if="message && message != 'NOT'">
            			
						<div class="row line_hora ajuste_recebeVisitor">
							<p class="col-md-12 text-center">
								<img :src="url + message.foto_visitor" width="30%"/>
							</p>
						</div>

						<div class="row line_hora ajuste_recebeVisitor">
              				<p class="col-md-3">DATA</p>
              				<p class="col-md-9">{{message.data}}</p>            			
						</div>
            			
						<div class="row line_hora ajuste_recebeVisitor">
              				<p class="col-md-3">VISITANTE</p>
              				<p class="col-md-9">{{message.nome_visitor}}</p>
            			</div>
            			
						<div class="row line_hora ajuste_recebeVisitor">
              				<p class="col-md-3">TELEFONE</p>
              				<p class="col-md-9">{{message.telefone_visitor}}</p>
            			</div>
            			
						<div class="row line_hora ajuste_recebeVisitor">
              				<p class="col-md-3" style="padding: 10px">IMOVEL</p>
              				<p class="col-md-9" style="padding: 10px">
								<a class="button botaoPadrao" v-on:click="redireciona('Imovel', message.imovel_rotulo)">
									{{message.imovel_nome}}
								</a>
              				</p>
            			</div>

          			</div>
        		</div>

				<div v-if="message == true && loading == false"><!-- não tô logado -->
					<div class="section_ag">
						<div class="row line_hora ajuste_recebeVisitor">
							<div class="text-center">
								<div class="alert alert-danger">
									Você precisa estar logado para poder confirmar o agendamento!
								</div>
							</div>
							<LoginPanel v-bind:loading="this.loading"/>
						</div>
					</div>
				</div>
        		<div class="alert alert-danger text-center" v-if="message == 'NOT'">
					ESTE HORARIO JA FOI AGENDADO!
				</div>
      		</div>
    	</div>

    	<br>
    	<br>

    <rodape></rodape>
  </div>
</template>
<script>
	import rodape from "../globais/Footer.vue";
	import topo from "../globais/Topo.vue";
	import LoginPanel from "../panel/LoginPanel.vue";
	export default {
		name: "UrlAgenda",
		loading: false,
		components: {
			rodape,
			topo,
			LoginPanel
		},
		data() {
			return {
			msg: "Welcome to Your Vue.js PWA",
			url: "https://api.lukadigital.desenvolvendo.site/",
			key: '',
			dados_envio: { 
				random: "", 
				data: "", 
				idcorretor: "" 
			},
			message: true,
			loading: false
			};
		},
		mounted() {
			jQuery("body").removeClass("indexadmin");
			this.key = this.getUserLocalSt();
			if(this.key){
				console.log('to aqui rsrs');
				this.dados_envio.random = this.$route.params.random;
				this.dados_envio.data = this.$route.params.data;
				this.dados_envio.idcorretor = this.$route.params.idcorretor;
				this.agenda("recebe_corretor", this.dados_envio);
			}
		},
		methods: {
			redireciona(local, param = "") {
				this.$router.push({ name: local, params: { rotulo: param } });
			}
		}
	};
</script>

<style>
	.loader {
		border: 10px solid #f3f3f3;
		border-top: 10px solid #5c2d5e;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		animation: spin 2s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
