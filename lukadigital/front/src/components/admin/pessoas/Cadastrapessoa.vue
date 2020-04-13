<template>
  <div class="cadastraPessoa">
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
                 
                <h3 class="text-center titlesAdmin">Cadastro de pessoa</h3>
                  <div class="ajustContainer container">
                   <div class="row">
                              <div class="col-md-6 col-xs-12 form-linha">
                                <label for="enviaFotoAlugar">Selecione uma foto:</label>

                               <input type="file" name="enviaFotoAlugar" ref="myFiles" @change="uploadFoto" placeholder="Escolha uma foto"/>

                              </div>
                      <div class="col-md-6 espacaMobile">
                        <label>Tipo de Perfil</label>
                             <Multiselect v-model="tipoCadastro" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true"></Multiselect>                     
                      </div>

                            </div>
                             <br>
                             <div class="row">
                              <div class="col-md-4">
                                  <label for="status">Status</label>
                                  <select v-model="globalForm.status" class="selectPadraoAdmin">
                                    <option value="1">ATIVO</option>
                                    <option value="2">INATIVO</option>
                                    <option value="3">PENDENTE</option>
                                  </select>
                                  <br>
                               </div>
                             </div>
                            <div class="row">
                          
                              <div class="col-md-12 col-xs-12 form-linha">
                                  <label  for="nomeCompletoAlugar">Nome Completo:</label>
                                                          <input v-model="globalForm.name" type="text" class="inputPadraoAdmin" v-bind:class="{'erroInput': erro.name}" name="nomeCompletoAlugar" id="nomeCompletoAlugar" value="">
                                   <span v-if="erro.name" class="erro">{{erro.name}}</span>
                              </div>

                            </div>
                            <div v-if="in_array('Corretor')">
                                                          <div class="row">
                               
                                <div class="col-md-4 col-xs-12 form-linha">
                                  <label for="creciCorretor">CRECI:</label>
                                
                                  <input  v-model="globalForm.documents.creci"  v-bind:class="{'erroInput': erro.documents.creci}" type="text" class="inputPadraoAdmin" name="creciCorretor" id="creciCorretor" value="">
                                   <span v-if="erro.documents.creci" class="erro">{{erro.documents.creci}}</span>
                                </div>  
                                                        


                            </div>
                    
                            </div>
                            <br>
                         
                            <div class="row">
                                <div class="col-md-4 col-xs-12 form-linha">
                                  <label for="emailAlugar">Email:</label>
                                                         <input v-on:blur="verificacoes('email')" v-model="globalForm.email" type="text" class="inputPadraoAdmin" name="emailAlugar" v-bind:class="{'erroInput': erro.email}" id="emailAlugar" value="">
                                   <span v-if="erro.email" class="erro">{{erro.email}}</span>

                                </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                  <label for="tipoPessoaAlugar">Tipo de Pessoa:</label>
                                  <select @change="alteraTipo()"  name="tipoPessoaAlugar" v-model="globalForm.person_type" class="selectPadraoAdmin">
                                    <option selected>Selecione um tipo</option>
                                    <option value="F">Física</option>
                                    <option value="J">Juridica</option>
                                    
                                  </select>
                                </div>
                       
                                <div v-if="globalForm.person_type == 'F'" class="col-md-4 col-xs-12 form-linha">
                                   <label for="sexoAlugar">Sexo:</label>
                                  <select v-bind:class="{'erroInput': erro.pf_data.sexo}"  v-model="globalForm.pf_data.sexo" name="sexoAlugar" class="selectPadraoAdmin">
                                     <option v-for="sex in sexo" :value="sex.id" v-bind:key="sex.id" >{{sex.name}}</option>
                                    
                                  </select>
                                    <span v-if="erro.pf_data.sexo" class="erro">{{erro.pf_data.sexo}}</span>
                                </div> 
                                                  


                            </div>
                     <br>
                            <div  v-if="globalForm.person_type == 'F'" class="row">
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="rgAlugar">RG:</label>
                                                                <input v-on:keyup="mascaraRg()" v-model="globalForm.documents.rg" type="text" class="inputPadraoAdmin" name="rgAlugar" v-bind:class="{'erroInput': erro.documents.rg}" id="rgAlugar" value="">
                                     <span v-if="erro.documents.rg" class="erro">{{erro.documents.rg}}</span>

                                </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="datargAlugar">Data de expedição do RG:</label>
                                                                <input v-bind:class="{'erroInput': erro.documents.dataExpedicaoRg}" v-model="globalForm.documents.dataExpedicaoRg" type="date" class="inputPadraoAdmin" name="datargAlugar" id="datargAlugar" value="">
                                         <span v-if="erro.documents.dataExpedicaoRg" class="erro">{{erro.documents.dataExpedicaoRg}}</span>
                                </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="cpfAlugar">CPF:</label>
                                                                <input v-on:keyup="mascaraCpf()" v-on:blur="verificacoes('cpf')" v-bind:class="{'erroInput': erro.documents.cpf}" v-model="globalForm.documents.cpf" type="text" class="inputPadraoAdmin" name="cpfAlugar" id="cpfAlugar" value="">
                                      <span v-if="erro.documents.cpf" class="erro">{{erro.documents.cpf}}</span>
                                </div>


                            </div>

                            <div v-else class="row">
                                 <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="cnpj">CNPJ:</label>
                                                                <input v-on:keyup="mascaraCnpj()" v-model="globalForm.documents.cnpj"  type="text" class="inputPadraoAdmin" name="cnpj" id="cnpj" value=""/>
                                    <span v-if="erro.documents.cnpj" class="erro">{{erro.documents.cnpj}}</span>

                                </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="inscEstad">Inscrição estadual:</label>
                                                                <input v-model="globalForm.documents.inscricaoEstadual" type="text" class="inputPadraoAdmin"   name="inscEstad" id="inscEstad" value=""/>
                                    <span v-if="erro.documents.inscricaoEstadual">{{erro.documents.inscricaoEstadual}}</span>
                                </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="inscMun">Inscrição Municipal:</label>
                                                                <input v-bind:class="{'erroInput': erro.documents.inscricaoMunicipal}" v-model="globalForm.documents.inscricaoMunicipal" type="text" class="inputPadraoAdmin" name="inscMun" id="inscMun" value="">
                                </div>                             



                            </div>
                               <br>
                            <div  v-if="globalForm.person_type == 'F'" class="row">
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="cnAlugar">CNH:</label>
                                                                <input v-bind:class="{'erroInput': erro.documents.cnh}" v-model="globalForm.documents.cnh" type="text" class="inputPadraoAdmin" name="cnAlugar" id="cnhAlugar" value="">
                                     <span v-if="erro.documents.cnh">{{erro.documents.cnh}}</span>

                                </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="nascimentoAlugar">Data de Nascimento:</label>
                                                                <input v-bind:class="{'erroInput': erro.pf_data.dataNascimento}" v-model="globalForm.pf_data.dataNascimento" type="date" class="inputPadraoAdmin" name="nascimentoAlugar" id="nascimentoAlugar" value="">
                                     <span v-if="erro.pf_data.dataNascimento">{{erro.pf_data.dataNascimento}}</span>
                                </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="nacionaAlugar">Nacionalidade:</label>
                                  <select v-bind:class="{'erroInput': erro.pf_data.nacionalidadeId}" v-model="globalForm.pf_data.nacionalidadeId" name="nacionaAlugar" class="selectPadraoAdmin">
                                       <option  v-for="nac in nacionalidades" :value="nac.id" v-bind:key="nac.id" :selected="nac.name == 'BRASILEIRO' ? 'selected' : ''">{{nac.name}}</option>
                                    
                                  </select>
                                   <span v-if="erro.pf_data.nacionalidadeId">{{erro.pf_data.nacionalidadeId}}</span>
                                </div>


                            </div>

                            <div v-else class="row">
                                 <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="nomeContato">Nome contato:</label>
                                                                <input v-bind:class="{'erroInput': erro.pj_data.nomeContato}" v-model="globalForm.pj_data.nomeContato" type="text" class="inputPadraoAdmin" name="nomeContato" id="nomeContato" value="">
                                     <span v-if="erro.pj_data.nomeContato">{{erro.pj_data.nomeContato}}</span>

                                </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="dataFunda">Data Fundação:</label>
                                                                <input v-bind:class="{'erroInput': erro.pj_data.dataFund}" v-model="globalForm.pj_data.dataFund" type="date" class="inputPadraoAdmin" name="dataFunda" id="dataFunda" value="">
                                     <span v-if="erro.pj_data.dataFund">{{erro.pj_data.dataFund}}</span>
                                </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="ramoAtivi">Ramo Atividade:</label>
                                                                <input v-bind:class="{'erroInput': erro.pj_data.ramo}" v-model="globalForm.pj_data.ramo" type="text" class="inputPadraoAdmin" name="ramoAtivi" id="ramoAtivi" value="">
                                     <span v-if="erro.pj_data.ramo">{{erro.pj_data.ramo}}</span>
                                </div>                             



                            </div>
                                 <br>
                       <div  v-if="globalForm.person_type == 'F'" class="row">
                                <div class="col-md-8 col-xs-12 form-linha">
                                    <label for="profissaoAlugar">Profissão:</label>
                                     <multiselect v-model="profissaoId" :options="profissao" placeholder="Select one" label="name" track-by="name"></multiselect>

                                        <span v-if="erro.pf_data.profissaoId">{{erro.pf_data.profissaoId}}</span>
                                </div>
                                <div class="col-md-4 col-xs-12 form-linha">
                                    <label for="estadocivilAlugar">Estado Civil:</label>
                                  <select v-bind:class="{'erroInput': erro.pf_data.estadoCivilId}" v-model="globalForm.pf_data.estadoCivilId" name="estadocivilAlugar" class="selectPadraoAdmin">
                                  <option v-for="estC in estadoCivil" v-bind:key="estC.id" :value="estC.id">{{estC.name}}</option>
                                    
                                  </select>
                                     <span v-if="erro.pf_data.estadoCivilId">{{erro.pf_data.estadoCivilId}}</span>
                                </div>


                            </div>
                            <div v-if="in_array('Corretor')">
                                        <br>
                                                     <p>
                                          <h3 class="titleCadastro">
                                            Horários de agendamento
                                            
                                          </h3>
                                        </p>


                                        <div class="row" >
                                          <div class="col-md-3">
                                            <label for="">Inicio</label>
                                              <select v-model="globalForm.schedule.hora_inicio" type="text" class="selectPadraoAdmin" name="ramoAtivi" value="">
                                                   <option v-for="hour in consomeJSON.horarios()" v-bind:key="hour.id" v-bind:value="hour">{{hour}}</option>
                                                
                                              </select>
                                          </div>
                                             <div class="col-md-3">
                                              <label for="">Fim</label>
                                                <select v-model="globalForm.schedule.hora_fim" type="text" class="selectPadraoAdmin" name="ramoAtivi" value="">
                                                 <option v-for="hour in consomeJSON.horarios()" v-bind:key="hour.id" v-bind:value="hour">{{hour}}</option>        
                                                </select>
                                          </div>
                                          <div class="col-md-3">
                                            <label for="">Almoço inicio</label>
                                              <select v-model="globalForm.schedule.almoco_inicio" type="text" class="selectPadraoAdmin" name="ramoAtivi"  value="">
                                                
                                       <option v-for="hour in consomeJSON.horarios()" v-bind:key="hour.id" v-bind:value="hour">{{hour}}</option>
                                              </select>
                                          </div>
                                          <div class="col-md-3">
                                            <label for="">Almoço fim</label>
                                              <select v-model="globalForm.schedule.almoco_fim" type="text" class="selectPadraoAdmin" name="ramoAtivi"  value="">>
                                                <option v-for="hour in consomeJSON.horarios()" v-bind:key="hour.id" v-bind:value="hour">{{hour}}</option>
                                              </select>
                                          </div>
                                        </div>
                                        <br><br>
                              <repeat v-for="hour in dias" v-bind:key="hour.id" style="margin-left: 1em;">
                                <input v-model="globalForm.schedule.diaSemana" type="checkbox" v-bind:id="hour.name" v-bind:value="hour.id"/>
                                <label v-bind:for="hour.name" v-bind:value="hour.id">{{hour.name}}</label>
                            </repeat>
                          </div>
                            <p>
                              <h3 class="titleCadastro">
                                Informações de endereço
                                
                              </h3>
                            </p>

                            <div class="row">
                              <div class="col-md-4 col-xs-12 form-linha">
                                     <label for="cepAlugar">CEP:</label>
                                                                 <input  v-on:keyup="validaCep();mascaraCep()" v-bind:class="{'erroInput': erro.addresses.cep}" v-model="globalForm.addresses.cep" type="text" class="inputPadraoAdmin" name="cepAlugar" id="cepAlugar" value="">
                                     <span v-if="erro.addresses.cep" class="erro">{{erro.addresses.cep}}</span>                               

                              </div>
                            </div>
                               <br>
                           <div class="row">
                              <div class="col-md-6 col-xs-12 form-linha">
                                     <label for="ruaAlugar">Rua:</label>
                                                                   <input v-bind:class="{'erroInput': erro.addresses.logradouro}" v-model="globalForm.addresses.logradouro" type="text" class="inputPadraoAdmin" name="ruaAlugar" id="ruaAlugar" value="">     
                                      <span v-if="erro.addresses.logradouro" class="erro">{{erro.addresses.logradouro}}</span>                          

                              </div>
                              <div class="col-md-2 col-xs-12 form-linha">
                                     <label for="numAlugar">Nº:</label>
                                                                   <input   v-bind:class="{'erroInput': erro.addresses.numero}" v-model="globalForm.addresses.numero" type="text" class="inputPadraoAdmin" name="numAlugar" id="numAlugar" value="">        
                                      <span v-if="erro.addresses.numero" class="erro">{{erro.addresses.numero}}</span>                       

                              </div>
                              <div class="col-md-4 col-xs-12 form-linha">
                                     <label for="compleAlugar">Complemento:</label>
                                                                   <input  v-model="globalForm.addresses.complemento" type="text" class="inputPadraoAdmin" name="compleAlugar" id="compleAlugar" value="">
                                                                   

                              </div>
                          </div>    
                             <br> 
                            <div class="row">
                              <div class="col-md-4 col-xs-12 form-linha">
                                     <label for="bairroAlugar">Bairro:</label>
                                                                   <input  v-bind:class="{'erroInput': erro.bairro}" v-model="globalForm.addresses.bairro" type="text" class="inputPadraoAdmin" name="bairroAlugar" id="bairroAlugar" value="">   
                                     <span v-if="erro.addresses.bairro" class="erro">{{erro.addresses.bairro}}</span>                            

                              </div>
                              <div class="col-md-4 col-xs-12 form-linha">
                                     <label for="estAlugar">Estado:</label>
                                  <select v-on:change="trocaCity()" v-model="globalForm.addresses.uf" name="estAlugar" class="selectPadraoAdmin">
                                     <option v-for="state in estados" v-bind:key="state.id" :value="state.uf">{{state.uf}}</option>
                                    
                                  </select> 
                                     <span v-if="erro.addresses.uf" class="erro">{{erro.addresses.uf}}</span>                    

                              </div>
                              <div class="col-md-4 col-xs-12 form-linha">
                                     <label for="cidaAlugar">Cidade:</label>
                                        <multiselect v-model="cidadeId" :options="cidades"  placeholder="Selecione um" label="name" track-by="name"></multiselect>
                                        <br>
                                <span v-if="!globalForm.addresses.uf">Selecione um estado</span>                        
                                <span v-if="erro.addresses.cidade" class="erro">{{erro.addresses.cidade}}</span>  
                              </div>
                          </div>  
                             <br> 

                             <p>
                              <h3 class="titleCadastro">
                                Informações de contato
                                
                              </h3>
                            </p>

                            <div class="row">
                              <div class="col-md-6 col-xs-12 form-linha">
                                     <label for="whatsAlugar">Celular/Whatsapp:</label>
                                                            <input v-on:keyup="mascaraTELEFONE('whats')" v-bind:class="{'erroInput': erro.telephones.whats}" v-model="globalForm.telephones.whats" type="text" class="inputPadraoAdmin" name="whatsAlugar" id="whatsAlugar" value=""> 
                                     <span v-if="erro.telephones.whats" class="erro">{{erro.telephones.whats}}</span>
                              </div>
                              <div class="col-md-6 col-xs-12 form-linha">
                                     <label for="telAlugar">Telefone (opcional):</label>
                                                                     <input   v-on:keyup="mascaraTELEFONE('tel')" v-model="globalForm.telephones.telefone" type="text" class="inputPadraoAdmin" name="telAlugar" id="telAlugar" value=""> 
                                     
                              </div>

                            </div>
                             <p>
                              <h3 class="titleCadastro">
                                Acesso
                                
                              </h3>
                            </p>

                           <div class="row">
                              <div class="col-md-6 col-xs-12 form-linha">
                                     <label for="passAlugar">Senha:</label>
                                                               <input  v-bind:class="{'erroInput': erro.password}" v-model="globalForm.password" type="text" class="inputPadraoAdmin" name="passAlugar" id="passAlugar" value="">
                                     <span v-if="erro.password" class="erro">{{erro.password}}</span> 
                              </div>
                              <div class="col-md-6 col-xs-12 form-linha">
                                     <label for="confirmpassAlugar">Confirma a senha:</label>
                                                             <input type="text" class="inputPadraoAdmin" name="confirmpassAlugar" id="confirmpassAlugar" value=""> 
                              </div>

                           </div>

                           
                           
                           <p class="pull-right">
                           <a v-if="requisicao_feita == 0" v-on:click="enviaForm()" id="botaoLoginAdmin" class="button botaoPadraoAdmin">Cadastrar</a>
                         </p>
                      <load v-if="loading"></load>
                      <p v-if="message">Cadastrado com sucesso!</p>
                                  
                            </div>


                    
                </div>
             </b-row>
         

       </b-row>


      </div>


 </div>
</template>
<script>

import load from '../../globais/Load.vue';
import topo from '../globais/Topoadmin.vue';
import sidebar from '../globais/Sidebarleftadmin.vue';
import Multiselect from 'vue-multiselect';
export default {
  name: 'Cadastrapessoa',
   components:{
   topo,sidebar,Multiselect,load
  },
  data () {
    return {
       erro: this.validForm.getFormUser_global(),
       globalForm: this.validForm.getFormUser_global(),
       nacionalidades: this.consomeJSON.nacionalidades(),
       sexo: this.consomeJSON.sexo(),
       profissao : this.consomeJSON.profissao(),
       estadoCivil : this.consomeJSON.estadoCivil(),
       estados: this.consomeJSON.cidades(),
       uf: '',
       cidades: [],
       cidadeId: '',
       profissaoId: [],
       tipoCadastro: [],
        options: [
           { name: 'Captador', value: this.validForm.captador()},
           { name: 'Corretor', value: this.validForm.corretor()},
           { name: 'Locatário', value: this.validForm.alugar()},
           { name: 'Proprietário', value: this.validForm.anunciar() },
           { name: 'Administrador', value: this.validForm.admin()},
      ],
      loading: false,
      message : false,
      horarios: {},
      dias : this.consomeJSON.horarios_imovel(),
      file: '',
      requisicao_feita : 0
    }
  },

  mounted(){
    console.log(this.globalForm);
            var main = this;
        document.onkeydown = function(e) {
             if(e.keyCode == 13) {
                main.enviaForm();

              }
        }


  
  },
  watch:{
    'profissaoId': function(){
      this.globalForm.pf_data.profissaoId = this.profissaoId.id;
      console.log(this.globalForm.pf_data.profissaoId);

    },

    'cidadeId': function(){
      this.globalForm.addresses.cidade = this.cidadeId.id;
      console.log(this.globalForm);
    },

    'globalForm.schedule': function(){
      console.log(this.globalForm.schedule)
    }


  },
  methods:{

    enviaForm: function(){
      console.log(JSON.stringify(this.globalForm.schedule))
          var aux = [];
           for(var key in this.tipoCadastro){
                aux.push(this.tipoCadastro[key].value);
          
            }

            this.globalForm.group_id = aux;

          console.log(this.globalForm.group_id);

  
            var validacaoForm = this.validForm.validacaoForm_userGlobal(this.globalForm,this.erro.email, this.erro.documents.cpf);
            this.erro = validacaoForm;
            if(validacaoForm.qtd_error == 0){
              this.requisicao_feita =1;
               this.formValid('cadastroUser',this.globalForm,false);
             }
        



     // this.globalForm = this.validForm.getFormUser_global();
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
    validaCep(){
        var cep = this.globalForm.addresses.cep.replace('-',"");
      console.log(cep);
      if(cep.length == 8){
          this.formValid('cep',cep);          
      }



    },
       mascaraCep(){
        this.globalForm.addresses.cep = this.validForm.mascaraCep(this.globalForm.addresses.cep);
      },

   recebeAjax(tipo){
          if(tipo == 'cep'){
                      console.log(this.resposta);

                        this.globalForm.addresses.logradouro = this.resposta.logradouro;
                        this.globalForm.addresses.bairro = this.resposta.bairro;
                        this.globalForm.addresses.uf = this.resposta.uf;

                        this.trocaCity();
                     for(var key in this.cidades){
                          if(this.cidades[key].name.toLowerCase() == this.resposta.cidade.toLowerCase()){
                             this.globalForm.addresses.cidade = this.cidades[key].id;
                              this.cidadeId = {};
                             this.cidadeId.name = this.cidades[key].name;
                             this.cidadeId.id = this.cidades[key].id;
                             console.log(this.cidadeId);
                            break;

                          }
                     }

                 }

                  this.resposta = '';
    },

    verificacoes(tipo){
      switch(tipo){
        case 'email':
           this.formValid('email',this.globalForm.email);
           break;
        case 'cpf':
           this.formValid('cpf',this.globalForm.documents.cpf);
           break;

      }

    },

      redireciona: function(local){
           this.$router.push({name: local})
       },

      in_array: function(needle){
           for(var i in this.tipoCadastro){
              if(this.tipoCadastro[i].name == needle)  return true;
           }
           return false;
      },
      
    getBase64_axios(base64){              
             this.globalForm.base64imgs.push( base64 );
             console.log(this.globalForm.base64imgs); // prints the base64 strin
    },

    uploadFoto(){
              this.file = this.$refs.myFiles.files;
             console.log(this.file);
           for(var key in this.file){
                 this.getBase64( this.file[key]);
        
               }
      },
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
    mascaraRg(){
      this.globalForm.documents.rg = this.validForm.mascaraRg(this.globalForm.documents.rg)
        
      },
      mascaraCpf(){
        this.globalForm.documents.cpf = this.validForm.mascaraCPF(this.globalForm.documents.cpf);

      },
      mascaraTELEFONE(type){
        if(type == 'whats')
           this.globalForm.telephones.whats = this.validForm.mascaraTel(this.globalForm.telephones.whats);
        else
           this.globalForm.telephones.telefone = this.validForm.mascaraTel(this.globalForm.telephones.telefone);

      },
      mascaraCnpj(){
        this.globalForm.documents.cnpj = this.validForm.mascaraCNPJ(this.globalForm.documents.cnpj)
      }

  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
