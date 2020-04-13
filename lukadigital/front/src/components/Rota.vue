<template>
	<div class="teste">
		<div v-if="istoshow" id="map" style="width: 100%; height: 750px;"></div>
		<div v-if="!istoshow" class="alert alert-danger text-center ajusteRota">
			No momento você não possui nenhuma rota!<br><br>
			<a v-on:click="redireciona('Index')" class="button botaoPadrao">Voltar</a>
		</div>
	</div>
</template>
<script>
import topo from "./globais/Topo.vue";

export default {
	name: "teste",
	components: {
		topo,
		rodape: () => import("./globais/Footer.vue")
	},
	mounted() {
		this.agenda("getRota");

		var vm = this;
		vm.map = L.map("map", {
		center: [-22.12685, -51.38561],
		zoom: 15
		});

		this.mapa = vm.map;

		L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
		attribution:
			'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(vm.map);
	},
	data() {
		return {
			search: "",
			zoom: 15,
			positions: [],
			center: [-22.12685, -51.38561],
			markers: [{ latlng: [-22.12702, -51.41216] }],


			url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
			attribution:
				'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
			controle_paginas: false,
			results: [],
			mapa: "",
			istoshow: true
		};
  },

  methods: {
    redireciona: function(local) {
      this.$router.push({ name: local });
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {},
    generatePositions() {
      var vm = this;

      this.positions = [];
      this.positions.push(L.latLng(this.results.user[0], this.results.user[1]));
      this.positions.push(
        L.latLng(this.results.imovel[0], this.results.imovel[1])
      );
      console.log(this.positions);

      L.Routing.control({
        waypoints: vm.positions,
        routeWhileDragging: true,
        autoRoute: true,
        createMarker: function(i, wp, n) {
          console.log(i, wp, n);
          var latEndMarker = vm.results.imovel[0]; // latitude of currently created marker "END";
          var lngEndMarker = vm.results.imovel[1]; // longitude or currently created marker "END";
          if (wp.latLng.lat == latEndMarker && wp.latLng.lng == lngEndMarker) {
            return false; // don't create marker for currently displayed marker again
          } else {
            return L.marker(wp.latLng); // all other markers in the map
          }
        }
      }).addTo(vm.mapa);
    },
    generateCenter() {
      var aux = [];
      aux[0] = this.results.results[0].neighbor;
      aux[1] = this.results.results[0].city;
      this.pesquisa("getCenter", aux);
    },
    setCenter(lalon) {
      this.center = L.latLng(lalon[0], lalon[1]);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
#map .leaflet-right {
  display: none !important;
}
.ajusteRota .leaflet-map-pane,
.ajusteRota .leaflet-control-container {
  display: none;
}
</style>