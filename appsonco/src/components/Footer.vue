<template>
  <div id="Footer">
    <v-list class="pt-0" dense>
      <v-divider light></v-divider>
      <v-list-tile>
        <v-list-tile-content>
          <v-btn outline small class="rounded-btn" @click="switchPage('stores')">Find a store</v-btn>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Responsibility</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Privacy Policy</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Terms of Use</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title class="copyright">&copy; 2019 Sonco Crowd Control</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-btn color="success" large class="order-button" @click="switchPage('order')">Start an order</v-btn>
  </div>
</template>

<script>

  export default {
    name: 'Footer',
    components: {

    },
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
    },
    computed: {

    },

    watch: {

    }
  }
</script>

<style>
  body{
    overflow-x:hidden;
  }
  #Footer .v-list__tile__title {
    font-size: 16px;
  }
  #Footer .order-button {
    position: fixed !important;
    bottom: 15px;
    right: 15px;
    border-radius: 22px;
  }
  #Footer .v-list--dense .v-list__tile:not(.v-list__tile--avatar) {
    height: 30px !important;
  }
  #Footer .copyright {
    font-size: 14px !important;
  }

  #Footer .rounded-btn {
    border-radius: 12px;
    margin: 5px 14px;
  }
</style>