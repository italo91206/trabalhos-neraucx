<template>
  <div id="Footer">
    <button class="order-button bkg-red text-white border-rounded" @click="switchPage('order')">Start an order</button>
  </div>
</template>

<script>
  import '@/css/footer_home.css';
  export default {
    name: 'Footer',
    data () {
      return {
      }
    },
    methods: {
      switchPage(op){
        switch (op) {
          case 'home':
            this.$router.push({name: 'Home',params:{}})
            break;

          case 'order':
            this.$router.push({name: 'Order',params:{}})
            break;

          case 'login':
            this.$router.push({name: 'Login',params:{}})
            break;

          case 'stores':
            this.$router.push({name: 'Stores',params:{}})
            break;

          default:
            break;
        }
      },
    }
  }
</script>
