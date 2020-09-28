<template>
  <main id="about">
    <Menu></Menu>
    <div class="container">
      <section>
        <h1>Sobre o projeto</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem magna, ornare eget tincidunt vel, vehicula eu orci. Aliquam a venenatis massa. Morbi sit amet condimentum libero. Pellentesque ut mollis tellus. Suspendisse tempor erat eu tellus tincidunt egestas. Quisque ornare in lacus ut tempor. Proin scelerisque, nibh sit amet hendrerit fermentum, nisl tortor finibus mi, ac tristique diam orci vel sem. Nulla sagittis leo vitae nisi suscipit varius. Ut facilisis dolor non sollicitudin lobortis. Nam convallis euismod mauris. Vivamus elementum aliquam nisl, sagittis sagittis turpis pharetra id. Nulla eget auctor nisi, vitae accumsan lectus. Ut tristique turpis vel libero suscipit vestibulum. Donec ullamcorper id velit a molestie.
        </p>
      </section>

      <section>
        <h1>Contato:</h1>
        <p>italoferreiradjk14@gmail.com</p>
      </section>
    </div>
  </main>
</template>

<script>
import Menu from './Menu.vue'

export default {
  name: 'about',
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