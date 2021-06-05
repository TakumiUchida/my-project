<template>
    <div>
        <h1>{{ username }}さんようこそ！</h1>
    </div>
</template>
<script>
    export default {
        computed: {
            username: {
                get() {
                    return this.$store.getters.username
                },
                set(value) {
                    this.$store.commit('setUserName', value)
                }
            }
        } 
    } 
</script>