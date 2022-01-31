<template>
  <div>
    <LMap :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <LMarker
        v-for="coordinate in coords"
        :lat-lng="coordinate.latLng"
        :key="coordinate.latLng"
        @click="markerClicked(coordinate)"
      >
        <LMapIconCustome :angle="coordinate.heading" />
      </LMarker>
    </LMap>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import coordinates from '../data/vehicleCoordinates.json';
import LMapIconCustome from '@/components/LMapIconCustome.vue';

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LMapIconCustome,
  },
  data() {
    return {
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 9,
      center: ['-33.876115', '18.5008116'],
      coords: coordinates,
    };
  },
  mounted() {
    console.log(this.coords);
  },
  methods: {
    markerClicked(event) {
      // console.log(this.center, event.latLng);
      this.center = event.latLng;
      this.zoom = 18;
    },
  },
};
</script>
<style scoped></style>
