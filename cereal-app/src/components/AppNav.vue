<template>
    <span>
        <v-app-bar color='light-blue accent-4' dense app dark>
            <v-navigation-drawer app v-model='drawer'>
                <v-list>
                    <template v-for='(item, index) in items'>
                        <v-list-item :key='index'>
                            <v-list-item-content>{{item.title}}</v-list-item-content>
                        </v-list-item>
                        <v-divider :key='`div-${index}`'/>
                    </template>
                </v-list>
            </v-navigation-drawer>
            <v-app-bar-icon @click='drawer = !drawer' class='hidden-md-and-up'></v-app-bar-icon>
            <v-img max-width='40' src='@/assets/cerealLogo.png'> 
            </v-img>
            <router-link to='/'>
                <v-app-bar-title>Cereal with Milk</v-app-bar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn class='hidden-sm-and-down' to='/flavors' depressed>Flavors</v-btn>
            <v-btn class='hidden-sm-and-down' to='/details' depressed>Details</v-btn>
            <v-btn class='hidden-sm-and-down' to='consumptioninstructions' depressed color='cyan darken-3'>Consumption Instructions</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
    export default {
        name: 'AppNavigation',
        data() {
            drawer: true;
            items: [
                { title: 'Flavors', url:'/flavors' },
                { title: 'Details', url:'/details' },
                { title: 'Consumption Instructions', url:'consumptioninstructions' },
            ]
        }
    };
</script>

<style scoped>
a,
a:visited {
    color: white;
    text-decoration: none;
}
</style>
