<template>
    <div>
        <div id="title">
            <p class="is-size-3 has-text-centered">ログイン画面</p>
        </div>
        <table>
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
                <button v-on:click="logIn" class="button is-info is-outlined trans">ログイン</button>
            </div>
            <div>
                <router-link to="/userregistration">新規登録はこちらから</router-link>
            </div>      
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            };
        },
        methods: {
            logIn() {
                this.$store.dispatch('logIn', {email: this.email, password: this.password});
            }
        }
    }
</script>