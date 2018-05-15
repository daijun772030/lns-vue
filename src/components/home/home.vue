<template>
  <div class="home">
    <main>
      <home-header />
      <home-message />  
      <home-tab />
      <div class="home-content">
        <home-card />
        <!-- <home-card />
        <home-card />
        <home-card /> -->
        <div class="home-content-name">— 爱鸿森借款 —</div>
      </div>
    </main>
    <m-footer></m-footer>
  </div>
</template>

<script>
  import MFooter from 'base/m-footer/m-footer'
  import HomeHeader from './home-header'
  import HomeMessage from './home-message'
  import HomeTab from './home-tab'
  import HomeCard from './home-card'

  export default {
    components: {
      MFooter,
      HomeHeader,
      HomeMessage,
      HomeTab,
      HomeCard
    }
  }
</script>

<style ref="stylesheet" lang="stylus" scoped>
  @import "~common/stylus/mixin.styl"
  .home
    height: 100%
    main
      height: calc(100% - 106px)
      overflow: hidden
    &-content
      box-sizing: border-box
      height: calc(100% - 356px - 224px)
      background: #cccccc
      padding 28px 32px
      overflow-x: hidden
      overflow-y: auto
      &-name
        Font-PF(Regular)
        font-size: 24px;
        color: #C0C0C0;
        letter-spacing: 0;
        text-align: center;

</style>

