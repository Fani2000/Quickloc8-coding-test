<template>
  <div
    :style="{ 'background-color': Colors.light.primary }"
    class="d-flex vh-100 justify-content-center align-items-center"
  >
    <transition
      name="pulse"
      appear
      enter-active-class="animate__animated animate__pulse animate__infinite"
      class="animate__animated animate__pulse animate__infinite"
      leave-active-class="animate__animated animate__fadeOutDown"
    >
      <img :src="quickloc8Svg" />
    </transition>
  </div>
</template>

<script>
import Colors from '../data/colors';
export default {
  name: 'splashScreen',
  data() {
    return {
      quickloc8Svg: require('../assets/quickloc8.svg'),
      Colors,
    };
  },
  components: {},
};
</script>

<style scoped></style>
