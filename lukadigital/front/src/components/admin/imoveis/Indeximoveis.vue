<template>
  <div class="painelimoveis">
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
            <a class="button botaoPadrao" v-on:click="redireciona('Criaimovel')"> CRIAR IMÓVEL </a>
            <h3 class="text-center titlesAdmin">Imóveis</h3>
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
                  <th aria-colindex="1" class="">Endereco</th>
                  <th aria-colindex="2" class="">Bairro</th>
                  <th aria-colindex="3" class="">Cidade</th>
                  <th aria-colindex="4" class="">Estado</th>
                  <th aria-colindex="5" class="">Status</th>
                  <th aria-colindex="6" class="">Valor</th>
                  <th aria-colindex="7" class="">Tipo</th>
                  <th aria-colindex=" 8" class="">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input  v-on:keyup="sugestion()"  v-model="filtro.address.logradouro" type="text" name="filtro" id="filtro" value="" class="inputPadraoAdmin"></td>
                  <td><input  v-on:keyup="sugestion()" v-model="filtro.neighbor" type="text" name="filtro" id="filtro" value="" class="inputPadraoAdmin"></td>
                  <td><input  v-on:keyup="sugestion()" type="text" v-model="filtro.city" name="filtro" id="filtro" value="" class="inputPadraoAdmin"></td> 
                  <td><input  v-on:keyup="sugestion()" type="text" v-model="filtro.state" name="filtro" id="filtro" value="" class="inputPadraoAdmin"></td> 
                  <td><select v-on:change="sugestion()" v-model="filtro.status" class="selectPadraoAdmin">
                    <option value="0">Selecione</option>
                    <option value="1">ATIVO</option>
                    <option value="2">INATIVO</option>
                    <option value="3">PENDENTE</option>
                  </select></td>                
                  <td><input  v-on:keyup="sugestion()" type="text" v-model="filtro.value" name="filtro" id="filtro" value="" class="inputPadraoAdmin"></td> 
                  <td>
                      <select v-on:change="sugestion()" v-model="filtro.type" class="selectPadraoAdmin">
                        <option value="" selected>Selecione</option>
                        <option v-for="tipo in tiposImoveis" v-bind:value="tipo.id" selected >{{tipo.nome}}</option>
                      </select>
                  </td>
                </tr>
                <tr  v-for="imovel in results.results" >
                  <td>{{imovel.address.logradouro}}</td>
                  <td>{{imovel.neighbor}}</td>
                  <td>{{imovel.city}}</td>
                  <td>{{imovel.state}}</td>
                  <td>{{validForm.getLabel_status(imovel.status)}}</td>
                  <td>{{imovel.value}}</td>
                  <td>{{consomeJSON.getTipo_nome(imovel.type)}}</td>
                  <td>
                    <div class="btn-group">
                      <a v-on:click="editaImovel(imovel._id.$oid)" class="btn btn-xs btn-info">
                      <i class="fa fa-edit"></i> Editar </a>
                      <a v-on:click="excluiImovel(imovel._id.$oid)" class="btn btn-xs btn-danger">
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
  name: 'ImoveisAdmin',
   components:{
   topo,sidebar,load
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      imoveis: [],
      controlMenu: 0,
       fields: [ 'Endereço', 'Bairro', 'Cidade', 'Estado', 'Status', 'Valor', 'Tipo' ],
      items: [
        { isActive: true, ID: 40, Endereço: 'Dickerson', 'Bairro': 'Macdonald', Cidade: 'teste', Estado: 'testeV', 'Status': 1, Valor: 100, Tipo: 'Imóvel' },
        { isActive: false, ID: 21, Endereço: 'Larsen', 'Bairro': 'Shaw' , Cidade: 'teste', Estado: 'testeV', 'Status': 1, Valor: 100, Tipo: 'Imóvel'},
        { isActive: false, ID: 89, Endereço: 'Geneva', 'Bairro': 'Wilson' , Cidade: 'teste', Estado: 'testeV', 'Status': 1, Valor: 100, Tipo: 'Imóvel'},
        { isActive: true, ID: 38, Endereço: 'Jami', 'Bairro': 'Carney', Cidade: 'teste', Estado: 'testeV', 'Status': 1, Valor: 100, Tipo: 'Imóvel'  }
      ],
      loading: false,
      limite_pag: 10,
      results: [],
      controle_paginas: false,
      filtro: {"address":{"logradouro":""},
              "neighbor":"",
              "city":"",
              "state": "",
              "status":"",
              "value":"", 
              "type": ""         


            },
      filtrando: false,
      tiposImoveis : this.consomeJSON.getTipos_imovel(),
    }
  },

  mounted(){
     var aux = {};
     aux.pagina = this.$route.params.pagina;
     aux.limite = this.limite_pag;
     console.log(this.$route.params.pagina)
     this.admin('alimenta_lista',aux,'Imovel')
      //  this.admin('listaImoveis');


  
  },
  methods:{
      editaImovel(idI) {

          this.$router.push({name: 'EditaImovelAdmin', params:{id:idI}})
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

       excluiImovel(id){
        if(confirm('Tem certeza que deseja excluir?')){
          this.imoveis = [];
          this.paginacao_atual = [];
          this.admin('deletaImovel',id);
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
                    this.admin('alimenta_lista',aux,'Imovel')
                 else
                   this.filtroADMIN('Imovel',this.filtro, aux)


                this.$router.push({name: 'ImoveisAdmin',params:{pagina:number}})

            },
            sugestion(){
                        if(this.filtro.address.logradouro.length >= 3 || this.filtro.neighbor.length >= 3 || this.filtro.city.length >= 3 || this.filtro.state.length >= 2  || this.filtro.status >= 1 || this.filtro.value.length >= 3 || this.filtro.type >= 1){
                           this.filtrando = true;


                             var aux = {};
                            aux.pagina = 1;
                            aux.limite = this.limite_pag;

                            this.filtroADMIN('Imovel',this.filtro, aux);
                               this.$router.push({name: 'ImoveisAdmin',params:{pagina:1}})
         

                         }else if(this.filtro.address.logradouro == 0 && this.filtro.neighbor == 0 && this.filtro.city == 0 && this.filtro.state == 0  && this.filtro.status == 0 && this.filtro.value == 0 && this.filtro.type == 0 ){
                              this.filtrando = false;
                                var aux = {};
                               aux.pagina = this.$route.params.pagina;
                               aux.limite = this.limite_pag;
                               this.admin('alimenta_lista',aux,'Imovel')                        
                         }
            }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
