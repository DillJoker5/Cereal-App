<template>
  <span>
    <home-hero />
    <home-details />
  </span>
</template>

<script>
import HomeHero from '../components/HomeHero.vue';
import HomeDetails from '../components/HomeDetails.vue'

export default {
  components: { HomeHero, HomeDetails },
  name: "Home",
};
</script>
