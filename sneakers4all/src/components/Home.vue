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
      HTPP: axios.create({
        baseURL: `http://localhost/sneakers4all/API/controle.php`,
        headers: {
          Authorization: 'Bearer {token}'
        }
      })
    }
  },
  mounted(){
      this.HTTP
      .get('http://localhost/sneakers4all/API/controle.php?fn=listar')
      .then(response => (this.info = response))
  }
}
</script>

<style lang="scss">
</style>
