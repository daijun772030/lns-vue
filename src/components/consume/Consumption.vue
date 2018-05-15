<template>
  <div class="consume">
      <div class="consume-nav">
          <div class="consume-nav-goback">
              <img :src="this.arrows" alt="">
              <span>返回</span>
          </div>
          <div class="consume-nav-title">
              <p>消费分期</p>
          </div>
          <div class="consume-nav-icon">
              <img :src="this.warm" alt="">
          </div>
      </div>
  </div>
</template>
<script>
import Arrows from './img/arrows@3x.png'
import Warm from './img/warn@3x.png'
export default {
  data () {
    return {
      arrows: Arrows,
      warm: Warm

    }
  }
}
</script>
<style lang="stylus" scoped>
    .consume
      height 100%
      &-nav
        height 90px
        margin-top 40px
        display flex
        justify-content space-around
        &-goback
            height 42px
            font-size: 30px;
            color: #666666;
            letter-spacing: -0.72px;
            img
              width 16px 
              height 29px
              display inline-block
              margin-left 26px
        &-title
            width 133px
            height 48px
            p
              font-size: 34px;
              color: #333333;
              letter-spacing: -0.82px;
              text-align: center;
        &icon
          width 36px
          height 36px 
          img 
            width 100%
            height 100%

            
</style>

