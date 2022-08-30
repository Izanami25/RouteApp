<template>
  <div>
    <button @click="putMarker">Put marker</button>
    <button @click="drawRoute">Draw route</button>
    <button @click="clearRoute">Clear route</button>
    <p>1 point: {{firstpoint}}</p>
    <p>2 point: {{secondpoint}}</p>
    <p>3 point: {{thirdpoint}}</p>
    <GmapMap
  :center="center"
  :zoom="10"
  map-type-id="terrain"
  style="width: 1500px; height: 700px"
  >
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
  <gmap-polygon :paths="paths"></gmap-polygon>
</GmapMap>
  </div>
</template>

<script>


const firstpoint = {lat: 51.134067, lng: 71.450172};
const secondpoint = {lat: 51.131121, lng: 71.383009};
const thirdpoint = {lat:51.099679, lng:71.424706}

export default {
  name: 'RouteApp',


  data() {
    return {
      markers: [],
      center: firstpoint,
      paths: [],
      firstpoint: firstpoint,
      secondpoint: secondpoint,
      thirdpoint: thirdpoint,
    };
  },


  methods: {
    putMarker() {
      this.markers = [
        {
          position: firstpoint,
        },
        {
          position: secondpoint,
        },
        {
          position: thirdpoint,
        }
      ];
    },
    drawRoute() {
      this.paths = [firstpoint, secondpoint, thirdpoint];
    },
    clearRoute() {
      this.paths = [],
      this.markers = []
    },
    
  },
};
</script>







<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
