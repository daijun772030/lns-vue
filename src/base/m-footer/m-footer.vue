<template>
  <div class="nav">
    <div class="item" v-for="(item, index) in list" :key="item.name" :to="{path: item.link}" @click="navClick(item, index)">
      <div class="item-icon"><img :src="active === index ? item.activeIcon : item.icon" alt=""></div>
      <div class="item-title">{{item.name}}</div>
    </div>
  </div>
</template>
<script>
  import IconIndex from './img/icon-index@3x.png'
  import IconIndexC from './img/icon-index-c@3x.png'
  import IconRefund from './img/icon-refund@3x.png'
  import IconRefundC from './img/icon-refund-c@3x.png'
  import IconPofile from './img/icon-profile@3x.png'
  import IconPofileC from './img/icon-profile-c@3x.png'
  export default {
    data() {
      return {
        list: [
          {name: '首页', link: '/', icon: IconIndex, activeIcon: IconIndexC},
          {name: '借款', link: '/xx', icon: IconRefund, activeIcon: IconRefundC},
          {name: '账户', link: '/account', icon: IconPofile, activeIcon: IconPofileC}
        ],
        active: 0
      }
    },
    methods: {
      navClick(item, index) {
        this.active = index
      }
    }
  }
</script>
<style rel="stylesheet" lang="stylus" scoped>
  @import "~common/stylus/mixin.styl"
  .nav
    position fixed
    left: 0
    right: 0
    bottom: 0 
    display: flex
    justify-content space-between
    align-items: center
    height: 106px
    border-top: 1px solid #CCCCCC;
    .item
      display: block
      flex 1
      &-icon
        height: 48px
        text-align: center
        img 
          height: 100%
      &-title
        Font-PF(Regular)
        font-size: 20px;
        padding: 6px 0 4px
        color: #757575;
        letter-spacing: -0.59px;
        text-align: center;

</style>
