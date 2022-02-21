<template>
    <span>
        <span>Flavors Here</span>
        <ul>
            <li v-for='flavor in flavors' :key='flavor.id'>
                <b>{{flavor.name}}</b>
                <br />
                <span>{{ flavor.description }}</span>
            </li>
        </ul>
    </span>
</template>

<script>
import flavors from '../data/flavors.json';

export default {
    name: 'FlavorList',
    data() {
        return {
            flavors: flavors,
        };
    },
};
</script>

<style scoped>

</style>