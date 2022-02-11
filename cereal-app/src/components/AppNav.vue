<template>
    <v-app-bar color='light-blue accent-4' dense app dark>
        <v-img max-width='40' src='@/assets/cerealLogo.png'> 
        </v-img>
        <v-app-bar-title>Cereal with Milk</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn depressed>Flavors</v-btn>
        <v-btn depressed>Details</v-btn>
        <v-btn depressed>Consumption Instructions</v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'AppNavigation',
    };
</script>

<style scoped>

</style>
