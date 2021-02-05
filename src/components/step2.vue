<template>
    <div class="step2__container">
        <div class="input-form">
            <div class="has-background-info has-text-white is-pulled-left is-size-7">step2</div>
            <div class="top">
                以下にお答えください
            </div>
            <div class="p-10 has-text-left">
                <div class="insurance">
                    <div class="has-text-info is-size-7">-現在生命保険に加入されていますか？-</div>
                    <div class="radio mg-15">
                        <input type="radio" name="reply" id="yes" v-on:click="onclickOfFirst" v-model="insurance" value="はい">はい
                        <input type="radio" name="reply" id="no" v-on:click="onclickOfFirst" v-model="insurance" value="いいえ">いいえ
                    </div>
                </div>
                <div v-show="showOfFirst" class="hospitalization">
                    <div class="has-text-info is-size-7">-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</div>
                    <div class="radio mg-15">
                        <input type="radio" name="reply2" id="yes" v-on:click="onclickOfSecond" v-model="hospitalization" value="はい">はい
                        <input type="radio" name="reply2" id="no" v-on:click="onclickOfSecond" v-model="hospitalization" value="いいえ">いいえ
                    </div>
                </div>
                <div v-show="showOfSecond" class="hospitalization2">
                    <div class="has-text-info is-size-7">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</div>
                    <div class="radio mg-15">
                        <input type="radio" name="reply3" id="no" v-model="hospitalization2" value="はい">はい
                        <input type="radio" name="reply3" id="no" v-model="hospitalization2" value="いいえ">いいえ
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/inputform" class="is-primary button">前へ戻る</router-link>
        <router-link to="/step3" class="is-primary button">次へ進む</router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showOfFirst: false,
                showOfSecond: false
            }
        },
        computed: {
            insurance: {
                get() {
                    return this.$store.state.insurance
                },
                set(value) {
                    this.$store.commit('mutateInsurance', value)
                }
            },
            hospitalization: {
                get() {
                    return this.$store.state.hospitalization
                },
                set(value) {
                    this.$store.commit('mutateHospitalization', value)
                }
            },
            hospitalization2: {
                get() {
                    return this.$store.state.hospitalization2
                },
                set(value) {
                    this.$store.commit('mutateHospitalization2', value)
                }
            }
        },
        methods: {
            onclickOfFirst() {
                this.showOfFirst = !this.showOfFirst
            },
            onclickOfSecond() {
                this.showOfSecond = !this.showOfSecond
            }
        }
    }
</script>

<style>
    @import url("https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css");
    .nyuuinn {
        animation: fadeIn 0.8s ease;
    }
    .nyuuinn2 {
        animation: fadeIn 0.8s ease;
    }
    @keyframes fadeIn {
        0% {opacity: 0}
        100%{opacity: 1}
    }
</style>
