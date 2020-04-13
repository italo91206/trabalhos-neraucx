<template>
  	<div class="userLogin">
    	<topo></topo>

		<div class="meioLogin">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-xs-12 cadastre">
						<h3>Cadastre-se</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.
								Duis aute irure dolor in reprehenderit in voluptate velit
								esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim
								id est laborum.
							</p>
						<a v-on:click="cadastrar" id="botaoCadastra" class="button botaoPadrao">Cadastrar</a>
					</div>
					<div class="col-md-6 col-xs-12 cadastre loginCampo">
						<h3>Login</h3>
						<div class="form-linha">
							<i class="sl sl-icon-user"></i>
							<label for="username">Email ou CPF:</label>
							<input v-model="dadosLogin.email" v-bind:class="{'erroInput': dadosErro.email}" type="email" class="input-text" name="email" id="username" value >
						</div>
						<div class="form-linha">
						<i class="sl sl-icon-key"></i>
						<label for="username">Senha:</label>
						<input v-model="dadosLogin.password" v-bind:class="{'erroInput': dadosErro.password}" type="password" class="input-text" name="password" id="password" value>
						</div>
						<a v-on:click="enviaForm()" id="botaoLogin" class="button botaoPadrao">Login</a>
						<p v-if="invalidLogin">{{invalidLogin}}</p>

						<load v-if="loading"></load>
					</div>
				</div>
			</div>
		</div>

		<div class="campoCadastro" style="display: none;">
			<div class="container">
				<div class="row">

					<!-- Cadastrar um dos meus imóveis => Já sou um usuário -->
					<div class="col-md-12 col-xs-12 linhaCadastro linhaAluga">
						<h3 class="pull-left">
							Quero <strong>alugar</strong> um imóvel
						</h3>
						<i class="sl sl-icon-plus rotateAluga" v-on:click="logar()"></i>
					</div>
					<alugar v-if="istoshow"></alugar>

					<!-- Desabilitado à pedido do cliente
					<div v-on:click="showCadastro('anunciarImovel')" class="col-md-12 col-xs-12 linhaCadastro linhaAnunciar">
						<h3 class="pull-left">
							Quero <strong>anunciar</strong> meus imóveis
						</h3>
						<i class="sl sl-icon-plus rotateAnunciar"></i>
					</div>
					<anunciar v-if="istoshow"></anunciar> -->

					<!-- Desabilitado à pedido do cliente
					<div v-on:click="showCadastro('cadastroCorretor')" class="col-md-12 col-xs-12 linhaCadastro linhaCorretor">
						<h3 class="pull-left">
							Quero me cadastrar como <strong>corretor</strong>
						</h3>
						<i class="sl sl-icon-plus rotateCorretor"></i>
					</div>
					<corretor v-if="istoshow"></corretor> -->

				</div>
			</div>
		</div>

    <rodape></rodape>
  </div>
</template>

<script>
import alugar from './cadastroUser/Alugar';
import anunciar from './cadastroUser/Anunciar';
import rodape from "./globais/Footer.vue";
import topo from "./globais/Topo.vue";
import load from "./globais/Load.vue";
// import corretor from './cadastroUser/Corretor'; <- desabilitado À pedido do cliente

export default {
    name: "UserLogin",
    components: {
        alugar,
        anunciar,
        rodape,
        topo,
        load
        // corretor < - desabilitado à pedido do cliente
    },
    mounted() {
        jQuery("body").removeClass("indexadmin");
        //  this.formValid('login');
        var main = this;
        document.onkeydown = function(e) {
        if (e.keyCode == 13) {
            main.enviaForm();
        }
        };
    },
	beforeCreate() {
		//  this.validaUser();
	},
	data() {
		return {
			flagAtivo: "",
			login: true,
			dadosLogin: { email: "", password: "" },
			dadosErro: { email: "", password: "" },
			invalidLogin: "",
			resposta: "",
			loading: false,
			istoshow: true,
		};
	},
	mounted() {
		this.formValid("getJSON");
		this.showCadastro('alugarImovel');
	},

  	methods: {
		cadastrar: function() {
			jQuery(".meioLogin").hide("slow");
			jQuery(".campoCadastro").show("slow");
		},
		logar: function(){
			jQuery(".campoCadastro").hide("slow");
			jQuery(".meioLogin").show("slow");
			console.log('Clicado!');
		},
    	showCadastro: function(tipo) {
      		if (!this.flagAtivo) {
        		switch (tipo) {
					case "alugarImovel":
						jQuery("." + tipo).show("slow");
						jQuery(".rotateAluga").css(
							"transform",
							"translate3d(0,-50%,0) rotate(45deg)"
						);
						jQuery(".linhaAluga").css("border-bottom", "none");
						break;
					case "anunciarImovel":
						jQuery("." + tipo).show("slow");
						jQuery(".rotateAnunciar").css(
						"transform",
						"translate3d(0,-50%,0) rotate(45deg)"
						);
						jQuery(".linhaAnunciar").css("border-bottom", "none");
						break;
					case "cadastroCorretor":
						jQuery("." + tipo).show("slow");
						jQuery(".rotateCorretor").css(
						"transform",
						"translate3d(0,-50%,0) rotate(45deg)"
						);
						jQuery(".linhaCorretor").css("border-bottom", "none");
						break;
        		}
        		this.flagAtivo = tipo;
      		}else if (this.flagAtivo == tipo){
        		switch (tipo) {
          			case "alugarImovel":
						jQuery("." + tipo).hide("slow");
						jQuery(".rotateAluga").css("transform", "");
						jQuery(".linhaAluga").css("border-bottom", "1px solid #e0e0e0");
						break;
          			case "anunciarImovel":
						jQuery("." + tipo).hide("slow");
						jQuery(".rotateAnunciar").css("transform", "");
						jQuery(".linhaAnunciar").css("border-bottom", "1px solid #e0e0e0");
						break;
					case "cadastroCorretor":
						jQuery("." + tipo).hide("slow");
						jQuery(".rotateCorretor").css("transform", "");
						jQuery(".linhaCorretor").css("border-bottom", "1px solid #e0e0e0");
						break;
        		}
        		this.flagAtivo = "";
      		}else {
				jQuery(".alugarImovel").hide("slow");
				jQuery(".rotateAluga").css("transform", "");
				jQuery(".linhaAluga").css("border-bottom", "1px solid #e0e0e0");

				jQuery(".anunciarImovel").hide("slow");
				jQuery(".rotateAnunciar").css("transform", "");
				jQuery(".linhaAnunciar").css("border-bottom", "1px solid #e0e0e0");

				jQuery(".cadastroCorretor").hide("slow");
				jQuery(".rotateCorretor").css("transform", "");
				jQuery(".linhaCorretor").css("border-bottom", "1px solid #e0e0e0");

				jQuery("." + tipo).show("slow");
				this.flagAtivo = tipo;

        		switch (tipo) {
          			case "alugarImovel":
						jQuery(".rotateAluga").css(
							"transform",
							"translate3d(0,-50%,0) rotate(45deg)"
						);
            			jQuery(".linhaAluga").css("border-bottom", "none");
						break;
          			case "anunciarImovel":
						jQuery(".rotateAnunciar").css(
							"transform",
							"translate3d(0,-50%,0) rotate(45deg)"
						);
            			jQuery(".linhaAnunciar").css("border-bottom", "none");
            			break;

          			case "cadastroCorretor":
						jQuery(".rotateCorretor").css(
							"transform",
							"translate3d(0,-50%,0) rotate(45deg)"
						);
						jQuery(".linhaCorretor").css("border-bottom", "none");
            			break;
        		}
      		}
      		// console.log(this.flagCadastro);
    	},
		recebeAjax: function(tipo) {
			if (tipo == "login") {
			}
			this.reposta = "";
		},
		enviaForm: function() {
			var validacao = this.validForm.validacaoForm_login(this.dadosLogin);
			this.dadosErro = validacao;
			if (validacao.qtd_error == 0) {
				this.formValid("login", this.dadosLogin);
			}
		},
		recebeJSONS() {
			this.istoshow = true;
		}
  	}
};
</script>