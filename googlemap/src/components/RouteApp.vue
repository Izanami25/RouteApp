<template>
  <div>
    <button @click="putMarker">Put marker</button>
    <button @click="drawRoute">Draw route</button>
    <button @click="clearRoute">Clear route</button>
    <p>1 point: {{home}}</p>
    <p>2 point: {{work}}</p>
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
const home = { lat: 51.158015, lng: 71.501615 };
const work = { lat: 51.131121, lng: 71.383009 };
export default {
  name: 'RouteApp',


  data() {
    return {
      markers: [],
      center: home,
      paths: [],
      home: home,
      work: work,
    };
  },


  methods: {
    putMarker() {
      this.markers = [
        {
          position: home,
        },
        {
          position: work,
        },
      ];
    },
    drawRoute() {
      this.paths = [home, work];
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
