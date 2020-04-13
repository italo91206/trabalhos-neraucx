<template>
  <div class="painelpessoas">
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
                  <a class="button botaoPadrao" v-on:click="redireciona('Cadastrapessoa')"> CADASTRAR PESSOA </a>
                <h3 class="text-center titlesAdmin">Pessoas</h3>
           <load v-if="loading"></load>
                <div class="row">
                            <ul class="paginas">
                              <li v-for="paginacao in controle_paginas">
                                 <span v-on:click="switchPage(paginacao)" v-bind:class="{active: paginacao == $route.params.pagina}" >{{paginacao}}</span>
                              </li>


                            </ul>
                     </div>
                       <content-placeholders v-if="loading" :rounded="true">
                        <content-placeholders-heading />
                          <content-placeholders-text :lines="3" />
                          <content-placeholders-img />
                          <content-placeholders-text />
                    </content-placeholders>

               <table class="tabelaADMIN" v-else>
                  <thead>
                    <tr>
                      <th aria-colindex="1" class="">Nome</th>
                      <th aria-colindex="2" class="">Tipo</th>
                      <th aria-colindex="3" class="">Status</th>
                      <th aria-colindex="4" class="">Ações</th>
                    </tr>
                  </thead>

                  <tbody>
                     <tr>
                      <td><input  v-on:keyup="sugestion()"  v-model="filtro.name" type="text" name="filtro" id="filtro" value="" class="inputPadraoAdmin"></td>
                      <td><select v-on:change="sugestion()" v-model="filtro.group_id" class="selectPadraoAdmin">
                                    <option value="" selected>Selecione</option>
                                    <option v-bind:value="validForm.admin()">Admin</option>
                                    <option v-bind:value="validForm.captador()">Captador</option>
                                    <option v-bind:value="validForm.anunciar()">Proprietário</option>
                                    <option v-bind:value="validForm.corretor()">Corretor</option>
                                    <option v-bind:value="validForm.alugar()">Locatário</option>
                           </select>
                      </td>
                      <td><select v-on:change="sugestion()" v-model="filtro.status" class="selectPadraoAdmin">
                                    <option value="" selected>Selecione</option>
                                    <option value="1">ATIVO</option>
                                    <option value="2">INATIVO</option>
                                    <option value="3">PENDENTE</option>
                           </select></td>   
                    </tr>
                    <tr v-for="user in results.results" >
                      <td>{{user.name}}</td>
                      <td>{{validForm.getType_labels(user.group_id)}}</td>
                      <td>{{validForm.getLabel_status(user.status)}}</td>
                      <td>
                         <div class="btn-group">

                          <a v-on:click="editaUser(user._id.$oid)" class="btn btn-xs btn-info">
                             <i class="fa fa-edit"></i> Editar </a>
                            <a v-on:click="excluiUser(user._id.$oid)" class="btn btn-xs btn-danger">
                               <i class="fa fa-times"></i> Excluir
                           </a>
                                 
                              </div>
                      </td>
                    </tr>
                  </tbody>
               </table>
                      <div v-if="!controle_paginas">
                            <p  class="text-center">Não há nenhum cadastro.</p>
                         </div>
                <div class="row">
                            <ul class="paginas">
                              <li v-for="paginacao in controle_paginas">
                                 <span v-on:click="switchPage(paginacao)" v-bind:class="{active: paginacao == $route.params.pagina}" >{{paginacao}}</span>
                              </li>


                            </ul>
                     </div>

                    
                </div>
             </b-row>
         

       </b-row>


      </div>


 </div>
</template>
<script>

import topo from '../globais/Topoadmin.vue';
import sidebar from '../globais/Sidebarleftadmin.vue';
import load from '../../globais/Load.vue';

export default {
  name: 'IndexPessoas',
   components:{
   topo,sidebar,load
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      controlMenu: 0,
      users: [],
       fields: ['Nome', 'Tipo', 'Status' ],
      items: [],
     loading: false,
      paginacao_atual: [],
      aux_atual: [],
      pag_atual: 1,
      limite_pag: 10,
      results: [],
      controle_paginas: false,
      filtro: {"name":"","status":"", "group_id": ""},
      filtrando: false
    }
  },

  mounted(){
    jQuery('.painelPessoas').append('<topo></topo>');
     this.admin('alimenta_lista',this.$route.params.pagina,'User')
   // this.admin('listaUsers');

  
  },
  methods:{
          editaUser(item) {
            
            this.$router.push({name: 'EditaPessoasAdmin', params:{id:item}})
         //  alert('Index: ' + index + '\n\nItem: ' + JSON.stringify(item));
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
      redireciona: function(local){
           this.$router.push({name: local})
       },
       excluiUser(id){
           if(confirm('Tem certeza que deseja excluir?')){
                 this.users = [];
                 this.paginacao_atual = [];
                 this.admin('deletaUser',id);

            }


       },
      recebeUsers: function(){

        this.paginacao();

      },
        resolvePaginacao(){
              var aux = [];
              var count = 1;
              var controle = this.results.qtd_pag;
              while(controle > 0){
                aux.push(count);
                count++;
                controle--;
              }
            this.controle_paginas = aux;
            console.log(this.controle_paginas);


            },
            switchPage(number){
                var rua = this.pesquisa('getLocal');
               if(!this.filtrando)
                    this.admin('alimenta_lista',number,'User')
                 else
                   this.filtroADMIN('User',this.filtro,number)
           
              this.$router.push({name: 'IndexPessoas',params:{pagina:number}})

            },
            sugestion(){              
                        if(this.filtro.name.length >= 3 || this.filtro.status.length >= 1 || this.filtro.group_id.length >= 1){
                           this.filtrando = true;
                             var aux = {};
                            aux.pagina = 1;
                            aux.limite = this.limite_pag;
                            this.filtroADMIN('User',this.filtro, this.$route.params.pagina)
                            this.$router.push({name: 'IndexPessoas',params:{pagina:1}})
         

                         }else if(this.filtro.name.length == 0  && this.filtro.group_id.length == 0  && this.filtro.status.length == 0){
                              this.filtrando = false;                              
                               this.admin('alimenta_lista',this.$route.params.pagina,'User');                        
                         }
            }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
