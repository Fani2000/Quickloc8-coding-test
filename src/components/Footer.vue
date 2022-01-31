<template>
  <div class="d-flex justify-content-evenly align-items-center p-3">
    <div>
      <p class="text-muted">&copy; 2022, Created By fani Keorapetse</p>
    </div>
    <div>
      <b-icon-facebook />
      <b-icon-twitter />
    </div>
  </div>
</template>
<script>
import { BIconFacebook, BIconTwitter } from 'bootstrap-vue';
export default {
  components: {
    BIconTwitter,
    BIconFacebook,
  },
};
</script>
<style></style>
