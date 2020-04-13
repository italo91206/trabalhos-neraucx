<template>
    <div v-if="view == 0" class="col-md-6 col-xs-12 cadastre loginCampo">
        <h3>Login</h3>
        <div class="form-linha">
            <i class="sl sl-icon-user"></i>
            <label for="username">Email:</label>
            <input v-model="dadosLogin.email" v-bind:class="{'erroInput': dadosErro.email}" type="email" class="input-text" name="email" id="username" value >
        </div>
        <div class="form-linha">
            <i class="sl sl-icon-key"></i>
            <label for="username">Senha:</label>
            <input v-model="dadosLogin.password" v-bind:class="{'erroInput': dadosErro.password}" type="password" class="input-text" name="password" id="password" value>
        </div>
        <a v-on:click="enviaForm()" id="botaoLogin" class="button botaoPadrao">Login</a>
        <a v-on:click="trocaView()" id="botaoQueroMeCadastrar" class="button botaoPadrao">Quero me cadastrar</a>
        <p v-if="invalidLogin">{{invalidLogin}}</p>
        <load v-if="loading"></load>
    </div>
    <div v-else class="col-md-12 col-xs-12 cadastre loginCampo">
        
        <h3>Cadastrar-se</h3>
        <!-- Inserir nome -->
        <div class="form-linha">
            <div class="row">
                <div class="form-linha" style="width: 100%">
                    <label for="nomeCompletoAlugar">Nome Completo:</label>
                    <i class="sl sl-icon-user"></i>
                    <input v-model="globalForm.name" type="text" class="input-text" v-bind:class="{'erroInput': erro.name}" name="nomeCompletoAlugar" id="nomeCompletoAlugar" value="">
			    </div>  
            </div>            
        </div>

        <div class="form-linha">
            <div class="row">
                <!-- Inserir e-mail -->
                <div class="form-linha">
                    <label for="emailAlugar">Email:</label>
                    <i class="sl sl-icon-envelope-open"></i>
                    <input v-on:blur="verificacoes('email')" v-model="globalForm.email" type="text" class="input-text" name="emailAlugar" v-bind:class="{'erroInput': erro.email}" id="emailAlugar" value="">
                </div>

                <!-- Inserir CPF -->
                <div class="form-linha">
                    <label for="cpfAlugar">CPF:</label>
                    <i class="sl sl-icon-doc"></i>
                    <input v-on:keyup="mascaraCpf()" v-on:blur="verificacoes('cpf')" v-bind:class="{'erroInput': erro.documents.cpf}" v-model="globalForm.documents.cpf" type="text" class="input-text" name="cpfAlugar" id="cpfAlugar" value="" maxlength="14">
                </div>

                <!-- Inserir celular/whatsapp -->
                <div class="form-linha">
                    <label for="whatsAlugar">Celular/Whatsapp:</label>
                    <i class="fa fa-whatsapp"></i>
                    <input  v-on:keyup="mascaraTELEFONE('whats')" v-bind:class="{'erroInput': erro.telephones.whats}" v-model="globalForm.telephones.whats" type="text" class="input-text" name="whatsAlugar" id="whatsAlugar" value="" maxlength="13"> 
                </div>
            </div>
            <div class="row">
                <a v-on:click="enviaCadastro()" id="Cadastrar" class="button botaoPadrao">Cadastrar-se</a>
                <a v-on:click="trocaView()" id="botaoQueroMeCadastrar" class="button botaoPadrao">Voltar</a>
            </div>
        </div>

    </div>
</template>

<script>
import load from "../globais/Load.vue";

export default {
    components: { load },
    props: [
        'loading'
    ],
    name: "LoginPanel",
    data(){
        return {
            view: 0,
            dadosLogin: { email: "", password: "" },
            dadosErro: { email: "", password: "" },
            invalidLogin: "",
            globalForm: this.validForm.getFormUser_global(),
            erro: this.validForm.getFormUser_global(),
        }
    },
    methods:{
        enviaForm: function() {
            var main = this;
            var query = {};
            var projectionQuery = {};
            var validacao = this.validForm.validacaoForm_login(this.dadosLogin);
            this.dadosErro = validacao;
            main.$emit('controlaCarregarTrue');
            if (validacao.qtd_error == 0) {
                query.email = this.dadosLogin.email;
                query.password = this.dadosLogin.password;                                
                this.mainAxios.post('/user', { where: query, flag: 'login' }).then(function (response)
                {
                    main.$emit('controlaCarregarFalse');
                    if (response.data.login == 'OK') {
                        main.setUserLocalSt(response.data.dados, response.data.dados._id.$oid, response.data.key);
                        main.setCookieData();
                        console.log('Loggin efetuado com sucesso');
                        // location.reload();
                        main.$emit('loginEfetuado');
                        agendar_agora_etapa1();
                    }
                    else 
                    {
                        main.invalidLogin = 'Tente novamente!'
                    }
                }).catch(function (error) {
                    main.$emit('controlaCarregarFalse');
                    main.main.invalidLogin = error.response.data.login;
                });
            }
        },
        enviaCadastro: function(){
            this.globalForm.foto = this.file;
				this.triggered = true;
				var validacaoForm = this.validForm.validacaoForm_userGlobal(
					this.globalForm,
					this.erro.email,
					this.erro.documents.cpf
				);
            this.erro = validacaoForm;
			if (validacaoForm.qtd_error == 0)
                this.formValid("cadastroUser", this.globalForm, true);
        },
        trocaView: function(){
            this.view = !this.view;
        },
        verificacoes(tipo){
			switch(tipo){
				case 'email': this.formValid('email',this.globalForm.email);        break;
				case 'cpf': this.formValid('cpf',this.globalForm.documents.cpf);    break;
			}
        },
        mascaraCpf(){
			this.globalForm.documents.cpf = this.validForm.mascaraCPF(this.globalForm.documents.cpf);
		},
		mascaraTELEFONE(type){
			if(type == 'whats')
				this.globalForm.telephones.whats = this.validForm.mascaraTel(this.globalForm.telephones.whats);
			else
				this.globalForm.telephones.telefone = this.validForm.mascaraTel(this.globalForm.telephones.telefone);
		}
    }
}
</script>