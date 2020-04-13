<template>
  <div class="admin">
         <b-container class="formLoginAdmin" >
           <!-- Content here -->
            <div class="content-login">
           
               <h2 class="form-headerAdmin">
                <img src="../../skins/imgs/iajato.png"/>

              </h2>

              <div class="login-campos">
                <div class="user-login-info">
                  <div class="form-linha">
                    <i class="fa fa-user"></i>
                       <input  v-model="dadosLogin.email" v-bind:class="{'erroInput': dadosErro.email}" type="text" class="input-text" name="email" placeholder="Seu e-mail" id="password" value="">
                    </div>

                    <div class="form-linha">
                      <i class="fa fa-unlock-alt"></i>
                          <input  v-bind:class="{'erroInput': dadosErro.password}" v-model="dadosLogin.password" type="password" class="input-text" placeholder="Sua senha" name="password" id="password" value="">
                      </div>

                </div>

                   <p>
                            <a  v-on:click="enviaForm()" id="botaoLoginAdmin" class="button botaoPadraoAdmin">Login</a>
                              </p>
                                <p v-if="invalidLogin">{{invalidLogin}}</p>

                          <load v-if="loading"></load>

              </div>
            </div>
        </b-container>
 </div>
</template>
<script>
import load from '../globais/Load'
export default {
  name: 'Indexadmin',
   components:{
    load
  },  
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      login: true,
      dadosLogin: {'email': '', 'password': ''},
      dadosErro: {'email': '', 'password': ''},
       invalidLogin: '',
       istoshow: false
    }
  },

  mounted(){
     jQuery('body').addClass('indexadmin');

     this.formValid('getJSON');
 
  },
  methods:{
      enviaForm: function(){
      var validacao = this.validForm.validacaoForm_login(this.dadosLogin);
      this.dadosErro = validacao;
         if(validacao.qtd_error == 0){
              this.formValid('login',this.dadosLogin, 'admin');
         }
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
