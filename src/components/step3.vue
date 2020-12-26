<template>
    <div class="step3__container">
        <div class="input-form">
            <div class="step3 has-background-info has-text-white is-pulled-left is-size-7">step3</div>
            <div class="top">
                ご相談内容をご記入ください
            </div>
            <div class="p-10 has-text-left">
                <div class="has-text-info is-size-7">-ご相談内容-</div>
                <textarea class="textarea" rows="10" v-model="$store.state.textarea">
                </textarea>
            </div>
        </div>
        <router-link to="/step2" class="is-primary button">前へ戻る</router-link>
        <router-link to="/step4" class="is-primary button">次へ進む</router-link>
    </div>
</template>