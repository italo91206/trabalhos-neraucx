<template>
  <div id="app">
    <Menu/>
    <img src="./assets/logo.png">
    <h1>Monitore preços!</h1>
    <p>Conheça nossa plataforma, veja como funciona! Desde sites nacionais até os internacionais!</p>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    Menu
  },
  data () {
    return {
      msg: 'Bem-vindo à sua aplicação VUEJS'
    }
  }
}
</script>

<style lang="scss">
  
</style>
