<template>
  <main id="home">
    <div id="opcoes" class="container">
        <div class="flex">
            <a href="/sneakers4all/API/controle.php?fn=forcar" target="_blank"><button>Forçar monitoramento</button></a>
            <a href=""><button>Recarregar</button></a>
        </div>
    </div>

    <div id="tabela-resultado" class="container">
      <table>
          <tr class="table-headers">
              <th>Site</th>
              <th>Produto</th>
              <th>Situação</th>
              <th>Preço</th>
              <th>Link</th>
              <th>Opções</th>
          </tr>
      </table>
      <p>
        {{info}}
      </p>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      info: ''
    }
  },
  mounted(){
    this.listar();
  },
  methods: {
    listar: function(){
      axios
      .get(`http://localhost/sneakers4all/API/controle.php?fn=listar`, {'Access-Control-Allow-Origin':'*'})
      .then(response => (this.info = response))
      .catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss">
</style>
