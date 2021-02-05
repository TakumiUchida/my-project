<template>
    <div class="step1__container">
        <div class="input-form">
            <div class="has-background-info has-text-white is-pulled-left is-size-7">step1</div>
            <div class="top">
                お客様の情報を入力してください
            </div>
            <div class="p-10 has-text-left">
                <div class="gender">
                    <div class="has-text-info is-size-7">-性別-</div>
                    <div class="radio mg-15">
                        <input type="radio" name="gender" v-model="gender" value="男性">男性
                        <input type="radio" name="gender" v-model="gender" value="女性">女性
                    </div>
                </div>
                <div class="birthday">
                    <div class="has-text-info is-size-7">-生年月日-</div>
                    <form id="selectDate" class="mg-15">
                        <select v-model="year">
                            <option v-for="era in eras" :key="era.year" :value="era.year">
                                {{ era.label }}
                            </option>
                        </select>年
                        <select v-model="month">
                            <option v-for="month in months" :key="month" :value="month">
                                {{ month }}
                            </option>
                        </select>月
                        <select v-model="day">
                            <option v-for="day in days" :key="day" :value="day">
                                {{ day }}
                            </option>
                        </select>日
                    </form>
                </div>
            </div>
        </div>
        <router-link to="/step2" class="is-primary button">次へ進む</router-link>
    </div>
</template>

<script>
    import { generate, month, day } from '@/static/js/definition';
    export default {
        data() {
            return {
                eras: [],
                months: [],
                days: []
            }
        },
        computed: {
            gender: {
                get() {
                    return this.$store.state.value
                },
                set(value) {
                    this.$store.commit('mutateVal', value)
                }
            },
            year: {
                get() {
                    return this.$store.state.year
                },
                set(value) {
                    this.$store.commit('mutateYear', value)
                }
            },
            month: {
                get() {
                    return this.$store.state.month
                },
                set(value) {
                    this.$store.commit('mutateMonth', value)
                }
            },
            day: {
                get() {
                    return this.$store.state.day
                },
                set(value) {
                    this.$store.commit('mutateDay', value)
                }
            }
        },
        mounted() {
            this.eras = generate();
            this.days = day();
            this.months = month();
        }
    }
</script>
<style>
    @import url("https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css");
    .input-form {
        border: medium solid #2793da;
        border-width: thin;
        width: 40%;
        margin: 0 auto;
    }
    .top {
        border-bottom: medium solid #2793da;
        border-width: thin;
        padding: 5px 0 5px 0;
    }
    .p-10 {
        padding: 10px;
    }
    .mg-15 {
        margin: 15px;
    }
    .textarea {
        margin: 10px 0 10px 0;
    }
</style>


