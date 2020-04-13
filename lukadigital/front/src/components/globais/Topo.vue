<template>	
  	<div class="headerLogin">
		
    	<div class="top-bar">
      		<div class="container">
        		<div class="row">
					
          			<div class="col-sm col-md">
            			<ul class="top-bar-menu">
              				<li><i class="fa fa-phone"></i> (18) 3199-1500</li>
              				<li><i class="fa fa-envelope"></i><a href="mailto:contato@lukaimoveis.com.br" class="email">contato@lukaimoveis.com.br</a></li>
            			</ul>
          			</div>		
          			
					<div class="col-sm col-md" style="padding:0;">
            			<ul class="social-icons" style="padding:0;">
              				<li class="contato"><a href="tel:(18) 3199-1500"><i class="fa fa-phone"></i></a></li>
              				<li class="contato"><a href="mailto:contato@lukaimoveis.com.br"><i class="fa fa-envelope"></i></a></li>
              				<li><a class="facebook" href="#"><i class="fa fa-facebook-f"></i></a></li>
              				<li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              				<li><a class="gplus" href="#"><i class="fa fa-google-plus"></i></a></li>
              				<li><a class="pinterest" href="#"><i class="fa fa-pinterest-p"></i></a></li>
            			</ul>
          			</div>

        		</div>
      		</div>
    	</div>
    	
		<div class="loginHeader">
      		<div class="container">
        		<div class="row">
          			<nav class="navbar col-sm">
            			<a id="logo" class="navbar-brand" v-on:click="redireciona('Index')">
              				<img src="../../skins/imgs/logo_claro.png" alt="Luka Digital" class>
            			</a>

            			<div class="ajust_mobile_head dropdown" v-if="logado" v-on:click="showMenu()">
              				<div class="dropdown-menu" v-if="flagMenu == 0"></div>
              				<a class="dropdown-toggle" href="#" aria-expanded="false">
                				<span class="foto-userSPAN"><img class="foto-userIMG" v-bind:src="urlApi+dadosLog.foto"></span>
                				<a style="color:black " class="sign-in">Olá, {{dadosLog.name}}</a>
							</a>
              				<div class="dropdown-menu show" v-if="flagMenu == 1">
                				<a class="dropdown-item" v-on:click="redireciona('cadastroImovel')">
									<i class="fa fa-home"></i> Novo imóvel
								</a>
                				<a class="dropdown-item" v-if="in_array_grupo(dadosLog.group_id,validForm.corretor())" v-on:click="redireciona('agendaCorretor',1)">
                					<i class="sl sl-icon-notebook"></i> Agenda Corretor
            					</a>
            					<a class="dropdown-item" v-on:click="redireciona('agendaUser',1)">
              						<i class="sl sl-icon-notebook"></i> Agenda
                				</a>
                				<a class="dropdown-item" v-on:click="redireciona('editarUser')">
                  					<i class="sl sl-icon-user"></i> Minha conta
                				</a>
                				<a class="dropdown-item" v-on:click="redireciona('meusImoveis',1)">
              						<i class="fa fa-home"></i> Meus imóveis
            					</a>
            					<a class="dropdown-item" v-on:click="redireciona('rota')">
              						<i class="sl sl-icon-compass"></i> Minha rota
                				</a>
                				<a id="logout-sair" class="dropdown-item" v-on:click="mataSessao(); redireciona('userLogin')">
                  					<i class="sl sl-icon-power"></i> Sair
                				</a>
              				</div>
            			</div>

            			<div v-else>
              				<div class="header-widget">
                				<a v-on:click="redireciona('userLogin')" style="color:black " class="sign-in">
                  					<i class="fa fa-user"></i> Login / Cadastrar
                				</a>
                				
								<div class="user-menu">
                  					<div class="user-name" style="color : black;"></div>
                				</div>
              				</div>
              				
							<div class="header-widget-min">
                				<a v-on:click="redireciona('userLogin')" style="color:black " class="sign-in">
                  					<i class="fa fa-user" style="font-size:20px;"></i>
                  					<br>Login ou
                  					<br>Cadastrar
                				</a>
                			
								<div class="user-menu">
                  					<div class="user-name" style="color : black;"></div>
                				</div>
              				</div>
            			</div>
          			</nav>
        		</div>
      		</div>
    	</div>
  	</div>
</template>

<script>
	export default {
  		name: "topo",
  		data() {
			return {
				logado: false,
				dadosLog: false,
				flagMenu: 0
			};
  		},
  		mounted() {
			if (!this.getCookie("username"))
				this.update_dataUser();
			else 
				this.setdatas();
  		},
  		methods: {
			redireciona: function(local, params = false) {
				if (!params) this.$router.push({ name: local });
				else this.$router.push({ name: local, params: { pagina: params } });
			},
			showMenu() {
				if (this.flagMenu == 0) this.flagMenu = 1;
				else this.flagMenu = 0;
			},
   	 		doTruncarStr(str, size) {
				if (
					str == undefined ||
					str == "undefined" ||
					str == "" ||
					size == undefined ||
					size == "undefined" ||
					size == ""
				){
					return str;
				}
				var shortText = str;
				if (str.length >= size + 3) {
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
    		}
 		}
	};
</script>
