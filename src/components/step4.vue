<template>
    <div class="step4__container">
        <div class="input-form">
            <div class="has-background-info has-text-white is-pulled-left is-size-7">step4</div>
            <div class="top">
                以下内容をご確認ください
            </div>
            <div class="p-10 has-text-left">
                <div class="gender">
                    <div class="has-text-info is-size-7">-性別-</div>
                    <div class="mg-15">
                        {{ gender }}
                    </div>
                </div>
                <div class="birthday">
                    <div class="has-text-info is-size-7">-生年月日-</div>
                    <div class="mg-15">
                        {{ year }}年{{ month }}月{{ day }}日
                    </div>
                </div>
                <div class="seimeihoken">
                    <div class="has-text-info is-size-7">-現在生命保険に加入されていますか？-</div>
                     <div class="mg-15">
                        {{ insurance }}
                    </div>
                </div>
                <div class="nyuuinn">
                    <div class="has-text-info is-size-7">-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</div>
                     <div class="mg-15">
                        {{ hospitalization }}
                    </div>
                </div>
                <div class="nyuuinn2">
                    <div class="has-text-info is-size-7">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</div>
                     <div class="mg-15">
                        {{ hospitalization2 }}
                    </div>
                </div>
                <div class="soudann">
                    <div>-相談内容-</div>
                     <div class="mg-15">
                        {{ textarea }}
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/step3" class="is-primary button">前へ戻る</router-link>
        <router-link to="#" class="is-primary button">送信</router-link>
    </div>
</template>
<script>
    export default {
        computed: {
            gender: {
                get() {
                    return this.$store.state.gender
                },
                set(value) {
                    this.$store.commit('mutateVal', value)
                }
            },
            year: {
                get() {
                    return this.$store.state.Year
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
            },
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
            },
            textarea: {
                get() {
                    return this.$store.state.textarea
                },
                set(value) {
                    this.$store.commit('mutateTextarea', value)
                }
            }
        }
    }
</script>
