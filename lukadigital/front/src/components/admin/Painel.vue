<template>
  <div v-if="istoshow" class="paineladmin">
    <topo></topo>
    <div class="w-100">
      <b-row>
        <div class="col-md-2 ajusteColuna">
          <sidebar></sidebar>
        </div>
        <div v-on:click="showMenu()" class="exibirPainelMob">ABRIR MENU</div>
        <b-row>
          <div
            v-if="permite"
            class="content-painel"
            v-bind:class="{'testeClass': permite}"
          >Bem vindo ao painel</div>
          <div class="container"></div>
        </b-row>
      </b-row>
    </div>
  </div>
</template>
<script>
import topo from "./globais/Topoadmin.vue";
import sidebar from "./globais/Sidebarleftadmin.vue";
export default {
  name: "Paineladmin",
  components: {
    topo,
    sidebar
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js PWA",
      controlMenu: false,
      permite: true,
      istoshow: false
    };
  },

  mounted() {
    var validaForm = this.validForm;
    jQuery("body").removeClass("indexadmin");

    /*  var teste1 = new API();
        if(!this.permite)
          validaForm.getNome()
*/
  },

  beforeCreate() {
    this.admin("validaADMIN", "");
  },
  methods: {
    showMenu: function() {
      if (this.controlMenu == 0) {
        jQuery(".ajusteColuna").show("slow");
        jQuery(".exibirPainelMob").html("FECHAR MENU");
        this.controlMenu = 1;
      } else {
        jQuery(".ajusteColuna").hide("slow");
        jQuery(".exibirPainelMob").html("ABRIR MENU");
        this.controlMenu = 0;
      }
    }
  }
};
</script>

