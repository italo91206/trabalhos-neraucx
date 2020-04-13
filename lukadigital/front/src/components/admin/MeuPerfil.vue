<template>
  <div class="painelmeuperfil">
    <topo></topo>
     <div class="w-100">
       <b-row>

        <div class="col-md-2 ajusteColuna" >
             <sidebar></sidebar>
        
        </div> 
        <div v-on:click="showMenu()" class="exibirPainelMob">
            ABRIR MENU

        </div>
              <b-row>
               <div class="content-painel content-visitas">
                <h3 class="text-center titlesAdmin">Meu Perfil</h3>
                <b-container class="ajustContainer">
                    <b-row>
                      <div class="col-md-3">
                          <img style="width: 50%; height: 100%;" v-bind:src="urlApi+globalForm.foto"/>
                      </div>
                      <div class="col-md-6 espacaMobile">
                        <label>Tipo de Perfil</label>
                        <b-row>
                        <input type="checkbox" v-model="globalForm.group_id" class="checkPadrao" name="group_id[]" id="group_Administrador" value="1">Administrador

                        <input type="checkbox" v-model="globalForm.group_id" class="checkPadrao espacaCheckPadrao" name="group_id[]" id="group_Administrador" value="4" > Captador
                      </b-row>
                       <b-row class="espacaCheckPadraoVer"> 
                        <input v-model="globalForm.group_id" type="checkbox" class="checkPadrao" name="group_id[]" id="group_Administrador" value="5">Corretor

                        <input v-model="globalForm.group_id" type="checkbox" class="checkPadrao espacaCheckPadrao" name="group_id[]"  id="group_Administrador" value="6" > Locatário
                      </b-row>
                      <b-row class="espacaCheckPadraoVer"> 
                        <input v-model="globalForm.group_id" type="checkbox"  class="checkPadrao" name="group_id[]" id="group_Administrador" value="3">Proprietário

                      </b-row>                      
                      </div>
                      <div class="col-md-3 espacaMobile">
                        <label for="status">Status</label>
                        <select v-model="globalForm.status" class="selectPadraoAdmin">
                          <option value="1">ATIVO</option>
                          <option value="2">INATIVO</option>
                          <option value="3">PENDENTE</option>
                        </select>
                        <br>

                          <label for="tipoPessoaAlugar">Tipo de Pessoa:</label>
                                  <select  name="tipoPessoaAlugar" v-model="globalForm.person_type" class="selectPadraoAdmin">
                                    <option selected>Selecione um tipo</option>
                                    <option value="F">Física</option>
                                    <option value="J">Juridica</option>
                                    
                                  </select>

                      </div>
                    </b-row>
                    <div class="row">
                           <label for="enviaFotoAlugar">Selecione uma nova foto:</label>

                                   <input type="file" name="enviaFotoAlugar" ref="myFiles" @change="uploadFoto" placeholder="Escolha uma foto"/>

                    </div>
                    <b-row class="espacaNormal">
                      <div class="col-md-12">
                         <label for="name">Nome:</label>
                           <input v-model="globalForm.name" type="text" id="name" name="name" class="inputPadraoAdmin" value="pedro (corretor)">
                      </div>
                    </b-row>
                                                <div v-if="in_array_group(5)">
                                                          <div class="row">
                               
                                <div class="col-md-4 col-xs-12 form-linha">
                                  <label for="creciCorretor">CRECI:</label>
                                
                                  <input  v-model="globalForm.documents.creci"  v-bind:class="{'erroInput': erro.documents.creci}" type="text" class="inputPadraoAdmin" name="creciCorretor" id="creciCorretor" value="">
                                   <span v-if="erro.documents.creci" class="erro">{{erro.documents.creci}}</span>
                                </div>  
                                                        


                            </div>
                    
                            </div>

                     <b-row v-if="globalForm.person_type == 'F'" class="espacaNormal">
                        <div class="col-md-4 espacaMobile">
                            <label for="rg">RG:</label>
                           <input  v-model="globalForm.documents.rg" type="text" id="rg" name="rg" class="inputPadraoAdmin" value="499499">
                        </div>
                         <div class="col-md-4 espacaMobile">
                            <label for="dataexp">Data de Expedição:</label>
                           <input   v-model="globalForm.documents.dataExpedicaoRg" type="date" id="dataexp" name="dataexp" class="inputPadraoAdmin" >
                        </div>       
                          <div class="col-md-4 espacaMobile">
                            <label for="orgexp">Orgão Expedidor:</label>
                           <input type="text" id="orgexp" name="orgexp" class="inputPadraoAdmin" >
                        </div>                                         
                    </b-row>
                          <div v-else class="row">
                                 <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="cnpj">CNPJ:</label>
                                    
                                    <input v-model="globalForm.documents.cnpj"  type="text" class="inputPadraoAdmin" name="cnpj" id="cnpj" value=""/>
                                                               </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="inscEstad">Inscrição estadual:</label>
                                    
                                    <input v-model="globalForm.documents.inscricaoEstadual" type="text" class="inputPadraoAdmin"   name="inscEstad" id="inscEstad" value=""/>
                                   </span>
                                </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="inscMun">Inscrição Municipal:</label>
                                    
                                    <input  v-model="globalForm.documents.inscricaoMunicipal" type="text" class="inputPadraoAdmin" name="inscMun" id="inscMun" value="">
                                </div>                             



                            </div>

                      <b-row v-if="globalForm.person_type == 'F'"  class="espacaNormal">
                        <div class="col-md-6 espacaMobile">
                            <label for="cpf">CPF:</label>
                           <input  v-model="globalForm.documents.cpf"  type="text" id="cpf" name="cpf" class="inputPadraoAdmin" value="499499">
                        </div>
                        
                          <div class="col-md-6 espacaMobile">
                            <label for="cnh">CNH:</label>
                           <input  v-model="globalForm.documents.cnh" type="text" id="cnh" name="cnh" class="inputPadraoAdmin" >
                        </div>                                         
                    </b-row> 
                   <b-row v-if="globalForm.person_type == 'F' "class="espacaNormal">
                        <div class="col-md-4 espacaMobile">
                            <label for="dataNasc">Data de Nascimento:</label>
                           <input  v-model="globalForm.pf_data.dataNascimento" type="date" id="dataNasc" name="dataNasc" class="inputPadraoAdmin" value="">
                        </div>
                        
                          <div class="col-md-4 espacaMobile">
                            <label for="sexo">Sexo:</label>
                               <select v-model="globalForm.pf_data.sexo" class="selectPadraoAdmin" name="sexo">
                                   <option v-for="sex in sexo" :value="sex.id" >{{sex.name}}</option>
                             </select>
                        </div>    

                           <div class="col-md-4 espacaMobile">
                            <label for="profissao">Profissão:</label>
                               <select v-model="globalForm.pf_data.profissaoId" class="selectPadraoAdmin" name="profissao">
                                  <option v-for="prof in profissao" :value="prof.id">{{prof.name}}</option>
                             </select>
                        </div>   
                   </b-row> 
                   <b-row v-if="globalForm.person_type == 'F'"class="espacaNormal">
                        <div class="col-md-6 espacaMobile">
                            <label for="nacionalidade">Nacionalidade:</label>
                               <select v-model="globalForm.pf_data.nacionalidadeId" class="selectPadraoAdmin" name="nacionalidade">
                                  <option  v-for="nac in nacionalidades" :value="nac.id">{{nac.name}}</option>
                             </select>
                        </div>
                        
                          <div class="col-md-6 espacaMobile">
                            <label for="estadC">Estado Civil:</label>
                               <select v-model="globalForm.pf_data.estadoCivilId" class="selectPadraoAdmin" name="estadC">
                                 <option v-for="estC in estadoCivil" :value="estC.id">{{estC.name}}</option>
                             </select>
                        </div>      
                   </b-row>
                       <div v-else class="row">
                                 <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="nomeContato">Nome contato:</label>
                                   
                                    <input  v-model="globalForm.pj_data.nomeContato" type="text" class="inputPadraoAdmin" name="nomeContato" id="nomeContato" value="">
                                                             </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="dataFunda">Data Fundação:</label>
                                  
                                    <input  v-model="globalForm.pj_data.dataFund" type="text" class="inputPadraoAdmin" name="dataFunda" id="dataFunda" value="">
                                                      </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="ramoAtivi">Ramo Atividade:</label>
                                   
                                    <input  v-model="globalForm.pj_data.ramo" type="text" class="inputPadraoAdmin" name="ramoAtivi" id="ramoAtivi" value="">
                                              </div>                             



                            </div>     
                   <hr>    
                    <b-row class="espacaNormal">
                      <div class="col-md-4">
                         <label for="cep">Cep:</label>
                           <input v-model="globalForm.addresses.cep" type="text" id="cep" name="cep" class="inputPadraoAdmin" value="">
                      </div>
                      <div class="col-md-8">
                         <label for="logradouro">Logradouro:</label>
                           <input  v-model="globalForm.addresses.logradouro"  type="text" id="logradouro" name="logradouro" class="inputPadraoAdmin" value="">
                      </div>


                    </b-row>  
                    <b-row class="espacaNormal">
                      <div class="col-md-4">
                         <label for="numero">Numero:</label>
                           <input   v-model="globalForm.addresses.numero"  type="text" id="numero" name="numero" class="inputPadraoAdmin" value="">
                      </div>
                      <div class="col-md-4">
                         <label for="complemento">Complemento:</label>
                           <input   v-model="globalForm.addresses.complemento"  type="text" id="logradouro" name="complemento" class="inputPadraoAdmin" value="">
                      </div>
                      <div class="col-md-4">
                         <label for="bairro">Bairro:</label>
                           <input  v-model="globalForm.addresses.bairro"  type="text" id="bairro" name="bairro" class="inputPadraoAdmin" value="">
                      </div>

                    </b-row>  
                     <b-row class="espacaNormal">
                      <div class="col-md-3">
                         <label for="estado">Estado:</label>
                           <select v-on:change="trocaCity()"  v-model="globalForm.addresses.uf"  id="estado" name="estado" class="inputPadraoAdmin" >
                              <option v-for="state in estados" :value="state.uf">{{state.uf}}</option>
                             

                           </select>
                      </div>
                      <div class="col-md-9">
                         <label for="cidade">Cidade:</label>
                           <select v-model="globalForm.addresses.cidade"  id="cidade" name="cidade" class="inputPadraoAdmin">
                              <option v-for="city in cidades" :value="city.id" >{{city.name}}</option>

                           </select>
                      </div>

                    </b-row>  
                     <b-row class="espacaNormal">
                      <div class="col-md-6">
                         <label for="telefone">Telefone:</label>
                        <input  v-model="globalForm.telephones.telefone"  type="text" id="telefone" name="telefone" class="inputPadraoAdmin" value="">
                      </div>
                      <div class="col-md-6">
                         <label for="whatsapp">Whastapp:</label>
                           <input type="text"  v-model="globalForm.telephones.whats" id="whatsapp" name="whatsapp" class="inputPadraoAdmin" value="">
                      </div>

                    </b-row>  
      
                   


                    <hr>


                    <b-row class="espacaNormal">
                      <div class="col-md-12">
                         <label for="email">Email:</label>
                           <input  v-model="globalForm.email" type="text" id="email" name="email" class="inputPadraoAdmin" value="pedro (corretor)">
                      </div>
                    </b-row>
                    <br><br>
                       <label for="alteraSenha">Alterar senha?</label>
                              <input type="checkbox" id="alteraSenha" v-model="changePass" value="false" />
                     
                     <b-row class="espacaNormal" v-if="changePass">
                      <div class="col-md-6">
                         <label for="senha">Nova Senha:</label>
                           <input  v-model="globalForm.password" type="text" id="senha" name="senha" class="inputPadraoAdmin" value="">
                           <span v-if="erro.password" class="erro">{{erro.password}}</span> 
                      </div>
                      <div class="col-md-6">
                         <label for="consenha">Confirmar Senha:</label>
                           <input v-model="confirma_senha" type="text" id="consenha" name="consenha" class="inputPadraoAdmin" value="">
                      </div>                      
                    </b-row> 

                    <hr>
                <div class="corretorPerfil">
                     <b-row class="espacaNormal">
                      <div class="col-md-6 espacaMobile">
                         <label for="creci">CRECI:</label>
                           <input type="text" id="creci" name="creci" class="inputPadraoAdmin" value="">
                      </div>                     
                    </b-row> 
                     <b-row class="espacaNormal">
                      <div class="col-md-3 espacaMobile">
                         <label for="hora_inicio">Hora Início:</label>
                           <input type="text" id="hora_inicio" name="hora_inicio" class="inputPadraoAdmin" value="">
                      </div>   
                      <div class="col-md-3 espacaMobile">
                         <label for="hora_fim">Hora Fim:</label>
                           <input type="text" id="hora_fim" name="hora_fim" class="inputPadraoAdmin" value="">
                      </div>
                       <div class="col-md-3 espacaMobile">
                         <label for="almoco_inicio">Almoço Início:</label>
                           <input type="text" id="almoco_inicio" name="almoco_inicio" class="inputPadraoAdmin" value="">
                      </div>
                       <div class="col-md-3 espacaMobile">
                         <label for="almoco_fim">Almoço Fim:</label>
                           <input type="text" id="almoco_fim" name="almoco_fim" class="inputPadraoAdmin" value="">
                      </div>                                                                                  
                    </b-row> 

               </div>

               <hr>

               <p class="pull-right">
                  <a id="botaoLoginAdmin"  v-on:click="enviaForm()" class="button botaoPadraoAdmin">Atualizar</a>
               </p>
                         <load v-if="loading"></load>
                     <p v-if="message">Atualizado com sucesso!</p>
                 </b-container>

              


                    
                </div>
             </b-row>
         

       </b-row>


      </div>


 </div>
</template>
<script>
import load from '../globais/Load.vue';
import topo from './globais/Topoadmin.vue';
import sidebar from './globais/Sidebarleftadmin.vue';


export default {
  name: 'MeuPerfil',
   components:{
   topo,sidebar,load
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      controlMenu: 0,
      globalForm: this.validForm.getFormUser_global(),
      erro: this.validForm.getFormUser_global(),
      nacionalidades: this.consomeJSON.nacionalidades(),
      sexo: this.consomeJSON.sexo(),
      profissao : this.consomeJSON.profissao(),
      estadoCivil : this.consomeJSON.estadoCivil(),
      estados: this.consomeJSON.cidades(),
      cidades: '',
      loading: false,
      message : false,
      file: '',
      changePass:false,
      confirma_senha: ""

    }
  },

  mounted(){
    jQuery('.painelPessoas').append('<topo></topo>');
    var jsonDados =  this.getUserLocalSt();
    this.globalForm = jsonDados.dados;
    this.trocaCity();


  
  },
   created(){

   },
  methods:{
        showMenu: function(){
          if(this.controlMenu == 0){
             jQuery('.ajusteColuna').show("slow");
             jQuery('.exibirPainelMob').html('FECHAR MENU')
             this.controlMenu = 1;
          }else{
             jQuery('.ajusteColuna').hide("slow");
             jQuery('.exibirPainelMob').html('ABRIR MENU')
             this.controlMenu = 0;
          }
    },
    trocaCity: function(){
       if(this.globalForm.addresses.uf){
          for(var key in this.estados){
            if(this.estados[key].uf == this.globalForm.addresses.uf){
              this.cidades = this.estados[key].cidades;
              break;
              
            }
          }

        }

    },
    check:function(){
      console.log(this.globalForm.group_id);
    },

    enviaForm: function(){
        if(this.changePass){
             if(this.confirma_senha == this.globalForm.password ){
                  this.requisicao_feita = 1;
                  this.erro.password = false;
                  delete this.globalForm.visited_now;
                  this.formValid('updateUser',this.globalForm);
               }else{
                  this.erro.password = 'As senhas não batem!';
                }
        }else{
              delete this.globalForm.password;
              this.formValid('updateUser',this.globalForm);
        }
    },

      in_array_group: function(needle){
           for(var i in this.globalForm.group_id){
              if(this.globalForm.group_id[i] == needle)  return true;
           }
           return false;
      },
    getBase64_axios(base64){   
               this.globalForm.base64imgs = [];             
             this.globalForm.base64imgs.push( base64 );
             console.log(this.globalForm.base64imgs); // prints the base64 strin
    },

    uploadFoto(){
       this.file = this.$refs.myFiles.files;
       console.log(this.file);
       for(var key in this.file){
        this.getBase64( this.file[key]);
        
       }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
