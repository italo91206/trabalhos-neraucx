<template>
  <div class="nopermition"></div>
</template>
<script>
export default {
  name: "Nopermition",
  components: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js PWA"
    };
  },
  mounted() {
    jQuery("body").removeClass("indexadmin");
  },
  methods: {}
};
</script>

<style>
.nopermition {
  position: fixed;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 50000;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
