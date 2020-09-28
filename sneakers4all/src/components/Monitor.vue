<template>
    <div id="monitor">
        <Menu/>
        <div class="container">
            <pre>{{msg}}</pre>
        </div>
    </div>
</template>

<script>
import Menu from './Menu.vue'
import API from './../api.js'
import {teste, guadalupe_listar} from './../functions.js'

export default {
  name: 'monitor',
  components: {
    Menu
  },
  data () {
    return {
      msg: 'Bem-vindo à sua aplicação VUEJS'
    }
  },
  mounted(){
    API
        .get('/controle.php?fn=listar')
        .then(response => (this.msg = response))
        .catch(error => console.log(error))
    }
}
</script>
<style></style>