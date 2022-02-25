<template>
    <v-container fluid class=''>
        <v-row>
            <v-col class='text-h2 font-weight bold white--text text-center'>
                Favorite Flavors
            </v-col>
        </v-row>
        <v-row>
            <v-col sm='6' md='4' v-for='favoriteFlavor in favoriteFlavors' :key='favoriteFlavor.id'>
                <v-img src=`@/assets/FavoriteFlavors/${favoriteFlavor.image}` height='400' />
                <v-card-title>{{favoriteFlavor.name}}</v-card-title>
                <v-card-text>{{favoriteFlavor.description}}</v-card-text>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import favoriteFlavorJSON from '../data/favoriteFlavors.json';
// 1) fix src
export default {
    name: 'FavoriteFlavorsList',
    data() {
        return {
            favoriteFlavors: favoriteFlavorJSON,
        };
    },
};
</script>