<template>
  <b-container>
    <splash-screen v-if="isLoading" />
    <transition
      name="main"
      enter-active-class="animate__animated animate__fadeInDown"
    >
      <div v-if="!isLoading" class="container d-flex flex-column vh-100">
        <TheNavbar />
        <router-view class="flex-fill" />
        <TheFooter />
      </div>
    </transition>
  </b-container>
</template>

<script>
import TheNavbar from './components/Navbar.vue';
import TheFooter from './components/Footer.vue';
import SplashScreen from './components/SplashScreen.vue';

export default {
  name: 'App',
  components: { TheNavbar, TheFooter, SplashScreen },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3500);
  },
};
</script>

<style></style>
