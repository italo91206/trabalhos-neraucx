<template>
  <div id="footer" class>
    <!-- Main -->
    <div class="container-footer">
      <div class="row">
        <div class="col-md-4 col-sm">
          <img
            class="footer-logo"
            v-on:click="redireciona('Index')"
            src="../../skins/imgs/iajato.png"
            alt
          >
          <br>
          <br>
          <p>
            Morbi convallis bibendum urna ut viverra.
            Maecenas quis consequat libero, a feugiat eros.
            Nunc ut lacinia tortor morbi ultricies laoreet
            ullamcorper phasellus semper.
          </p>
        </div>

        <div class="col-md-8 col-sm-12">
          <h4>Links úteis</h4>
          <ul class="footer-links">
            <li>
              <a v-on:click="redireciona('userLogin')">Login</a>
            </li>
            <li>
              <a v-on:click="redireciona('userLogin')">Cadastre-se</a>
            </li>
            <li>
              <a v-on:click="redireciona('editarUser')">Minha Conta</a>
            </li>
            <li>
              <a v-on:click="redireciona('cadastroImovel')">Adicionar Imóvel</a>
            </li>
          </ul>

          <ul class="footer-links">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="#">Políticas de Privacidade</a>
            </li>
          </ul>

          <ul class="footer-links">
            <li>
              <a v-on:click="redireciona('pesquisa')">Buscar Imóveis</a>
            </li>
            <li>
              <a href="#">Área do Corretor</a>
            </li>
            <li>
              <a href="#">Área do Locador</a>
            </li>
            <li>
              <a v-on:click="redireciona('admin')">Painel Administrativo</a>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
      </div>
      <!-- style="word-wrap: break-word;" -->
      <div class="row">
        <div class="col-12">
          <ul class="social-icons">
            <li>
              <a class href="#">
                <i class="fa fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a class href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a class href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a class href="#">
                <i class="fa fa-vimeo"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="row">
        <div class="col-12">
          <div class="copyrights">© 2019 Luka Digital. Todos os direitos reservados.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer_rodape",
  methods: {
    redireciona: function(local) {
      this.$router.push({ name: local });
    }
  }
};
</script>
