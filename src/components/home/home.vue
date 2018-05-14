<template>
  <div>
    <!-- <section>Hello World</section> -->
    <div class="banner">
      <div class="banner-text">
        <!-- <p>小微企业贷</p>
        <p>帮助企业资金周转</p> -->
      </div>  
    </div>
    <div class="message">
      <div class="lb">
        <p>
          爱鸿森借款APP上线啦！
        </p>
      </div>
      <div class="">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <m-footer></m-footer>
  </div>

</template>

<script>
  import MFooter from 'base/m-footer/m-footer'

  export default {
    components: {
      MFooter
    }
  }
</script>

<style ref="stylesheet" lang="stylus" scoped>
  .banner
    width 100%
    height 410px
    background-color blue
  .message
    width 100%
    height 224px
  .lb
    width 90%
    height 32px
    background-color red
    margin auto 5%

</style>

