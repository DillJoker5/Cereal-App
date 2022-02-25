<template>
    <span>
        <favorite-flavors-list />
    </span>
</template>

<script>
import FavoriteFlavorsList from '../components/FavoriteFlavorsList.vue';

export default {
    name: 'FavoriteFlavors',
    components: { FavoriteFlavorsList },
};
</script>

<style scoped>

</style>