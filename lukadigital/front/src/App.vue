<template>
	<div id="app">
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
import nopermition from "./components/globais/Nopermition.vue";

export default {
	name: "app",
	components: {
		nopermition
	}
};
</script>

<style>
body {
  margin: 0;
}
</style>
