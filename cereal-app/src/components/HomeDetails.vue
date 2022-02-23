<template>
    <v-container fluid class='home-details'>
        <v-row>
            <v-col class='text-h3 font-weight-bold white--text text-center'>
                Features Cereal
            </v-col>
        </v-row>
        <v-row>
            <v-col sm='6' md='4'> 
                <v-card>
                    <v-img src='@/assets/captain-crunch.jfif' height='400'></v-img>
                    <v-card-title>Captain Crunch</v-card-title>
                    <v-card-text>Theeeeere great! It's captain crunch! yay! More words here to have more content!!!!</v-card-text>
                </v-card>
            </v-col>
            <v-col sm='6' md='4'>
                <v-card>
                    <v-img src='@/assets/chips-ahoy.jfif' height='400'></v-img>
                    <v-card-title>Chips Ahoy</v-card-title>
                    <v-card-text>That food that says hi back! Chips Ahoy are great! Words words words words words.</v-card-text>
                </v-card>
            </v-col>
            <v-col sm='6' md='4'>
                <v-card>
                    <v-img src='@/assets/reeses-puffs.jfif' height='400'></v-img>
                    <v-card-title>Reeses Puffs</v-card-title>
                    <v-card-text>The best part about waking up is Reeses Puffs in your bowl. words words words words!!!!!!</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HomeDetails'
}

// v-for is on the cols;
</script>

<style scoped>
.home-details {
    background-color: purple;
}
</style>