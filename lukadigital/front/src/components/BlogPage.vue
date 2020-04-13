<template>
  <div class="blogPage">
    <topo></topo>
    <div class="myAccount">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Blog</h2>
            <!-- Breadcrumbs 
            <nav id="breadcrumbs">
              <ul>
                <li><a href="#">Home</a></li>
                <li>Meus agendamentos</li>
              </ul>
            </nav>-->
          </div>
        </div>
      </div>
    </div>

    <div class="sectionMeio">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-xs-12">
            <div class="topoAgenda">
              <h3>
                <i class="fa fa-rss-square"></i>
                {{blogData.titulo}}
              </h3>
            </div>
            <br>
            <div class="agendamentos">
              <content-placeholders v-if="loading" :rounded="true">
                <content-placeholders-text :lines="3"/>
                <content-placeholders-img/>
                <content-placeholders-text/>
              </content-placeholders>
              <div class="row">
                <div class="col-md-12 text-center">
                  <img class="img-fluid" :src="urlApi+blogData.main_img">
                </div>
              </div>
              <div class="row agendaEspaco">{{blogData.descryption}}</div>
              <div class="row agendaEspaco" v-html="blogData.content"></div>
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
    <rodape></rodape>
  </div>
</template>

  <script>
import rodape from "./globais/Footer.vue";
import topo from "./globais/Topo.vue";
export default {
  name: "blogPage",
  components: {
    rodape,
    topo
  },
  data() {
    return {
      ativo: "meuImovel",
      blogData: false,
      loading: false
    };
  },
  methods: {
    redireciona(local, param = "") {
      this.$router.push({ name: local, params: { rotulo: param } });
    },
    resolvePaginacao() {
      var aux = [];
      var count = 1;
      var controle = this.results.qtd_pag;
      while (controle > 0) {
        aux.push(count);
        count++;
        controle--;
      }
      this.controle_paginas = aux;
    },
    switchPage(number) {}
  },

  mounted() {
    this.blog("select", this.$route.params.pagina);
  },
  beforeCreate() {}
};
</script>
