<template>
  <div class="sidebarleftadmin">
    <div class="sideAdmin">
      <div>
        <a v-on:click="redireciona('Paineladmin')" class="active">
          <i class="fa fa-dashboard"></i>
          <span>Painel</span>
        </a>
      </div>
      <div>
        <a v-on:click="redireciona('Visitas',1)" class="active">
          <i class="fa fa-calendar"></i>
          <span>Visitas</span>
        </a>
      </div>
      <div>
        <a v-on:click="redireciona('ImoveisAdmin',1)" class="active">
          <i class="fa fa-home"></i>
          <span>Imóveis</span>
        </a>
      </div>
      <div>
        <a v-on:click="redireciona('IndexPessoas',1)" class="active">
          <i class="fa fa-users"></i>
          <span>Pessoas</span>
        </a>
      </div>
      <div>
        <a v-on:click="redireciona('indexBlog',1)" class="active">
          <i class="fa fa-rss-square"></i>
          <span>Blog</span>
        </a>
      </div>
      <div>
        <a v-on:click="redireciona('MeuPerfil')" class="active">
          <i class="fa fa-user"></i>
          <span>Meu Perfil</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebarleftadmin",
  components: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js PWA"
    };
  },

  mounted() {
    if (window.matchMedia("(min-width: 814px)").matches) {
      jQuery(window).scroll(function() {
        if (jQuery(".topoadmin").offset().top < jQuery(window).scrollTop()) {
          jQuery(".ajusteColuna").css({ top: "0" });
        }

        if (jQuery(".topoadmin").offset().top >= jQuery(window).scrollTop()) {
          jQuery(".ajusteColuna").css({ top: "" });
        }
      });
    }
  },
  methods: {
    redireciona: function(local, params = false) {
      if (!params) this.$router.push({ name: local });
      else this.$router.push({ name: local, params: { pagina: params } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
