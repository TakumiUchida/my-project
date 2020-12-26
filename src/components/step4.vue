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
                        {{ $store.state.value }}
                    </div>
                </div>
                <div class="birthday">
                    <div class="has-text-info is-size-7">-生年月日-</div>
                    <div class="mg-15">
                        {{ $store.state.year }}年{{ $store.state.month }}月{{ $store.state.day }}日
                    </div>
                </div>
                <div class="seimeihoken">
                    <div class="has-text-info is-size-7">-現在生命保険に加入されていますか？-</div>
                     <div class="mg-15">
                        {{ $store.state.year }}
                    </div>
                </div>
                <div class="nyuuinn">
                    <div class="has-text-info is-size-7">-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</div>
                     <div class="mg-15">
                        {{ $store.state.year }}
                    </div>
                </div>
                <div class="nyuuinn2">
                    <div class="has-text-info is-size-7">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</div>
                     <div class="mg-15">
                        {{ $store.state.year }}
                    </div>
                </div>
                <div class="soudann">
                    <div>-相談内容-</div>
                     <div class="mg-15">
                        {{ $store.state.textarea }}
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/step3" class="is-primary button">前へ戻る</router-link>
        <router-link to="#" class="is-primary button">送信</router-link>
    </div>
</template>
