<template>
  <div>
    <b-navbar
      class="px-3 my-2"
      :style="{ 'background-color': bgColor }"
      toggleable="lg"
      type="dark"
    >
      <router-link class="navbar-brand" to="/">Quickloc8</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link class="nav-link" to="/">Map</router-link>
          <router-link class="nav-link" to="/messages">Messages</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Colors from '../data/colors';
export default {
  data: () => ({
    image: require('../assets/quickloc8.svg'),
    bgColor: Colors.light.primary,
  }),
};
</script>

<style scoped>
.page-container {
  height: 100%;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, 0.12);
}
img {
  width: 150px;
  height: 150px;
  margin-left: 20px;
}
</style>
