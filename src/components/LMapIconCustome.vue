<template>
  <LIcon>
    <img
      :style="{ transform: `rotate(${angle}deg)` }"
      class="vehicle-icon"
      :src="image"
  /></LIcon>
</template>
<script>
import { LIcon } from 'vue2-leaflet';
export default {
  props: {
    angle: String,
  },
  data() {
    return {
      image: require('../assets/ic_new_white_taxi.png'),
    };
  },
  components: {
    LIcon,
  },
};
</script>
<style scoped>
.vehicle-icon {
  height: 50px;
  width: auto;
}
</style>
