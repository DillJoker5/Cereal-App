<template>
    <span>
        <ul>
            <li v-for='user in users' :key='user.id'>{{user.firstName}}</li>
        </ul>
    </span>
</template>

<script>
export default {
    name: 'IdentityTheft',
    data() {
        return {
            users: [],
        };
    },
    methods: {
        async getData() {
            try {
                //let url = 'http://jsonplaceholder.typicode.com/users';
                let url = 'https://dummyapi.io/data/v1/user';
                let appId = '618aefebdcf8bb7ac6da892a'
                const response = await this.$http.get(url, {
                    headers: {
                        'app-id': appId,
                    },
                });
                this.users = response.data.data;
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