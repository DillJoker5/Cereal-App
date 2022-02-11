<template>
  <v-app>
    <app-nav />
    <v-content>
      <router-view>

      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppNav from './components/AppNav.vue';
export default {
  name: 'App',
  components: {
    AppNav,
  }
};
</script>

<style>

</style>
