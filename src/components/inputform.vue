<template>
    <div class="step1__container">
        <div class="input-form">
            <div class="step1 has-background-info has-text-white is-pulled-left is-size-7">step1</div>
            <div class="top">
                お客様の情報を入力してください
            </div>
            <div class="p-10 has-text-left">
                <div class="gender">
                    <div class="has-text-info is-size-7">-性別-</div>
                    <div class="radio mg-15">
                        <input type="radio" name="gender" v-model="$store.state.value" value="男性">男性
                        <input type="radio" name="gender" v-model="$store.state.value" value="女性">女性
                    </div>
                </div>
                <div class="birthday">
                    <div class="has-text-info is-size-7">-生年月日-</div>
                    <form id="selectDate" class="mg-15">
                        <select v-model="$store.state.year">
                            <option v-for="era in eras" :key="era.year" :value="era.year">
                                {{ era.label }}
                            </option>
                        </select>年
                        <select v-model="$store.state.month">
                            <option v-for="n in 12" :key="n" :value="n">
                                {{ n }}
                            </option>
                        </select>月
                        <select v-model="$store.state.day">
                            <option v-for="n in 31" :key="n" :value="n">
                                {{ n }}
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
    export default {
        data() {
            return {
                eras:[]
            }
        },
        mounted() {
        this.eras = this.generate();
        },
        methods: {
            generate() {
                const eras = [];
                for (let i = 2020; i > 1920; i--) {
                    if(i > 2018) {
                        eras.push( {"year": i, "label": `${i} (令和${i-2018}年)`} );
                    } else if (i > 1988) {
                        eras.push( {"year": i, "label": `${i} (平成${i-1988}年)`} );
                    } else if (i > 1925) {
                        eras.push( {"year": i, "label": `${i} (昭和${i-1925}年)`} );
                    } else if (i > 1911) {
                        eras.push( {"year": i, "label": `${i} (大正${i-1911}年)`} );
                    } 
                }
            return eras;
            }
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


