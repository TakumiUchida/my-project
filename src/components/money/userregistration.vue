<template>
    <div>
        <div id="title">
            <p class="is-size-3 has-text-centered">新規登録画面</p>
        </div>
        <table>
            <tr>
                <td class="has-text-centered">ユーザー名</td>
                <td><input type="text" v-model="username"></td>
            </tr>
            <tr>
                <td>メールアドレス</td>
                <td><input type="text" v-model="email"></td>
            </tr>
            <tr>
                <td class="has-text-centered">パスワード</td>
                <td><input type="text" v-model="password"></td>
            </tr>
        </table>
        <div>
            <div>
                <button v-on:click="signUp" class="button is-info is-outlined trans">新規登録</button>
            </div>
            <div>
                <router-link to="money/login">ログインはこちらから</router-link>
            </div>      
        </div>
    </div>
</template>
<style>
    table {
        margin-right: auto;
        margin-left: auto;
    }
    .trans:hover {
        transition: 0.5s;
    }
</style>
<script>
    export default {
        data() {
            return {
                username: '',
                email: '',
                password: ''
            };
        },
        methods: {
            signUp() {
                this.$store.dispatch('registerUser', {username: this.username, email: this.email, password: this.password});
            }
        }
    }
</script>