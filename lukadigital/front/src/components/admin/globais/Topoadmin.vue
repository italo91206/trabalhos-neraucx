<template>
  <div class="topoadmin">
    <b-container fluid class="headerconfigAdmin">
      <b-row align-h="between">
        <div class="col-md-2 centraImagem">
          <img src="../../../skins/imgs/logo_claro.png">
        </div>
        <div v-on:click="showAdminData()" class="redirect col-md-2 centradrop col-xs-12">
          <div class="dropdownAdmin">
            <div class="down_top_closed" v-if="flagMenu == 0"></div>
            <div class="down_top_opened" v-if="flagMenu == 1"></div>
            <i class="pull-left user fa fa-user"></i>
            <p class="nameADMIN">{{dadosLog.name}}</p>
          </div>

          <ul class="dropMenuAdmin" v-if="flagMenu == 1">
            <li v-on:click="redireciona('MeuPerfil')">Meus dados</li>
            <li v-on:click="mataSessao();redireciona('Indexadmin')">Sair</li>
          </ul>
        </div>
      </b-row>

      <!-- Content here -->
    </b-container>
  </div>
</template>
<script>
export default {
  name: "topoadmin",
  components: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js PWA",
      logado: false,
      dadosLog: false,
      flagMenu: 0
    };
  },

  beforeCreate() {
    this.admin("validaADMIN", "");
  },
  methods: {
    showAdminData() {
      if (this.flagMenu == 0) {
        this.flagMenu = 1;
      } else {
        this.flagMenu = 0;
      }
    },
    redireciona: function(local) {
      this.$router.push({ name: local });
    },
    doTruncarStr(str, size) {
      if (
        str == undefined ||
        str == "undefined" ||
        str == "" ||
        size == undefined ||
        size == "undefined" ||
        size == ""
      ) {
        return str;
      }

      var shortText = str;
      if (str.length >= size + 3) {
        shortText = str.substring(0, size).concat("...");
      }
      return shortText;
    }
  },
  mounted() {
    if (this.getUserLocalSt()) {
      this.dadosLog = this.getUserLocalSt().dados;
      this.dadosLog.name = this.doTruncarStr(this.dadosLog.name, 30);
      this.logado = true;
    } else this.logado = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
