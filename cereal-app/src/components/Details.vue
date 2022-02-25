<template>
    <span>
    </span>
</template>

<script>
export default {
    name: 'Details',
    data() {
        return {
            users: [],
        };
    },
    methods: {
        async getData() {
            try {
                
            } catch (error) {
                console.log(error)
            }
        },
    },
    created() {
        this.getData();
    }
};

</script>

<style scoped>

</style>