<template>
  	<div class="loading">
    	<!-- <div class="loader"></div> -->
  	</div>
</template>

<script>
export default {
	name: "loading",
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
.loader {
	border: 10px solid #f3f3f3;
	border-top: 10px solid #5c2d5e;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
