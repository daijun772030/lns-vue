<template>
  <div class="home-card">
      <div class="home-card-list">
          <div class="home-card-list">
              <div class="home-card-list-left">
                <img :src="this.chain" alt="">
                <p>消费分期</p>
              </div>
              <div class="home-card-list-right">
                  <img :src="this.consume" alt="">
                  <p>供应链分期</p>
              </div>
          </div>
      </div>
      <div class="home-card-centent">

      </div>
      <div class="home-card-button">
          <cube-button>立即申请</cube-button>
      </div>
  </div>
</template>
<script>
    import Chain from './img/chain@3x.png'
    import Consume from './img/consume@3x.png'
    export default {
      data() {
        return {
          chain: Chain,
          consume: Consume
        }
      }
    }
</script>
<style lang="stylus" scoped>
    .home-card
        height: 500px
        width 100%
        margin-bottom 26px
        background: #FFFFFF
        border-radius 10px
        box-shadow: 0 4px 12px 0 rgba(0,0,0,0.20)
        &-list 
          width 100%
          height 98px
          display flex
          text-align center
          img 
            width 42px
            height 42px
          p 
           height 42px
           font-size 30px
            color #33333
            // letter-spacing 0
            line-height 42px
          &-left 
            width 50%
            height 100%
            display flex
            justify-content center
            align-items center
            text-align center

          &-right
            width 50%
            height 100%
            display flex
            justify-content center
            flex-wrap nowrap
            align-items center
            text-align center
            // display inline-block 
             
            

</style>

