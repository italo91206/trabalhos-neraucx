<template>
  <div class="IndexBlog">
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
                  <a class="button botaoPadrao" v-on:click="redireciona('criaBlog')"> CRIAR POSTAGEM </a>
                <h3 class="text-center titlesAdmin">Postagens no blog</h3>
                   <load v-if="loading"></load>
                             
                       <content-placeholders v-if="loading" :rounded="true">
                        <content-placeholders-heading />
                          <content-placeholders-text :lines="3" />
                          <content-placeholders-img />
                          <content-placeholders-text />
                    </content-placeholders>
              <div v-else>
                  <ul class="paginas">
                              <li v-for="paginacao in controle_paginas">
                                 <span v-on:click="switchPage(paginacao)" v-bind:class="{active: paginacao == $route.params.pagina}" >{{paginacao}}</span>
                              </li>


                      </ul>
               <table class="tabelaADMIN">
                  <thead>
                    <tr>
                      <th aria-colindex="1" class="">Titulo</th>
                      <th aria-colindex="2" class="">Data</th>
                      <th aria-colindex="3" class="">Autor</th>
                       <th aria-colindex="4" class="">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr>
                      <td><input  v-on:keyup="sugestion()"  v-model="filtro.titulo" type="text" name="filtro" id="filtro" value="" class="inputPadraoAdmin"></td>
                       <td><input  v-on:keyup="sugestion()"  v-model="filtro.data" type="text" name="filtro" id="filtro" value="" class="inputPadraoAdmin"></td>
                      <td><input  v-on:keyup="sugestion()"  v-model="filtro.owner_id" type="text" name="filtro" id="filtro" value="" class="inputPadraoAdmin"></td>         
                    </tr>
                    <tr  v-for="post in results.results" >
                      <td>{{post.titulo}}</td>
                      <td>{{post.data}}</td>
                      <td>{{post.autor}}</td>


                      <td>
                         <div class="btn-group">

                          <a v-on:click="editaImovel(post._id.$oid)" class="btn btn-xs btn-info">
                             <i class="fa fa-edit"></i> Editar </a>
                            <a v-on:click="excluiPostagem(post._id.$oid)" class="btn btn-xs btn-danger">
                               <i class="fa fa-times"></i> Excluir
                           </a>
                                 
                              </div>
                      </td>
                    </tr>
                  </tbody>
               </table>
              </div>
                      <div v-if="controle_paginas.length == 0">
                            <p  class="text-center">Não há nenhum cadastro.</p>
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
  name: 'IndexBlog',
   components:{
   topo,sidebar,load
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      imoveis: [],
      controlMenu: 0,
      loading: false,
      limite_pag: 6,
      results: [],
      controle_paginas: false,
      filtro: {"titulo":"","data":"", "owner_id": ""},
      filtrando: false
    }
  },

  mounted(){
     var aux = {};
     aux.pagina = this.$route.params.pagina;
     aux.limite = this.limite_pag;
     this.blog('alimenta_lista',aux)
      //  this.admin('listaImoveis');


  
  },
  methods:{
      editaImovel(idI) {

          this.$router.push({name: 'editBlog', params:{id:idI}})
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
       recebeImoveis: function(){
        this.resolvePaginacao();

       },

       excluiPostagem(id){
        if(confirm('Tem certeza que deseja excluir?')){
              this.results = [];
              this.blog('deletaPost',id);
        }


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
                var aux = {};
                 aux.pagina = number;
                 aux.limite = this.limite_pag;
                    if(!this.filtrando)
                       this.blog('alimenta_lista',aux)
                 else
                   this.filtroADMIN('Blog',this.filtro, aux)
                 
                this.$router.push({name: 'indexBlog',params:{pagina:number}})

            },
            sugestion(){              
                        if(this.filtro.titulo.length >= 3 || this.filtro.data.length >= 3 || this.filtro.owner_id.length >= 4 ){
                           this.filtrando = true;
                             var aux = {};
                            aux.pagina = 1;
                            aux.limite = this.limite_pag;
                            this.filtroADMIN('Blog',this.filtro, aux)
                            this.$router.push({name: 'indexBlog',params:{pagina:1}})
         

                         }else if(this.filtro.titulo.length == 0 && this.filtro.data.length == 0 && this.filtro.owner_id.length == 0 ){
                              this.filtrando = false;    
                                              var aux = {};
                               aux.pagina = 1;
                               aux.limite = this.limite_pag;
                              this.blog('alimenta_lista',aux)                        
                         }
            }             

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
