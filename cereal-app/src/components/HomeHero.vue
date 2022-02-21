<template>
    <v-container fluid fill-height class='cereal-home-hero'>
        <v-row justify='center' align-content='center'>
            <v-col>
                <div class='text-h1 font-weight-bold yellow--text text-lighten-5 text-center'>Pocket Apple Jacks</div>
                <div class='text-h1 font-weight-bold yellow--text text-lighten-5 text-center'>Anytime, Anywhere</div>
                <div class='text-h4 font-weight-bold white--text text-center'>Safe from Josh's pocket. Items do not contain any lint. Note the image is not to scale</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero',
}
</script>

<style scoped>
.cereal-home-hero {
    background-image: url('../assets/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    max-height: 100 vh;
}
</style>