<template>
    <div class="home-tab">
        <div class="item" v-for="(item, index) in list" :key="item.name" :to="{path: item.link}" @click="navClick(item, index)">
      <div class="item-icon"><img :src="active === index ? item.activeIcon : item.icon" alt=""></div>
      <div class="item-title">{{item.name}}</div>
    </div>
    </div>
</template>
<script>
  import IconIndex from './img/ICON-plan@3x.png'
//   import IconIndexC from './img/ICON-plan@3x.png'
//   import IconRefund from './img/icon-refund@3x.png'
//   import IconRefundC from './img/icon-refund-c@3x.png'
//   import IconPofile from './img/icon-profile@3x.png'
//   import IconPofileC from './img/icon-profile-c@3x.png'
  export default {
    data() {
      return {
        list: [
          {name: '推荐好友', link: '/', icon: IconIndex, activeIcon: IconIndex},
          {name: '我的借款', link: '/xx', icon: IconIndex, activeIcon: IconIndex},
          {name: '我要理财', link: '/account', icon: IconIndex, activeIcon: IconIndex},
          {name: '进度查询', link: '/account', icon: IconIndex, activeIcon: IconIndex}
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
    .home-tab
        display: flex
        justify-content space-between
        align-items: center
        width: 100%
        height 157px
        .item
            display: block
            flex 1
            &-icon
                height: 80px
                text-align: center
                img 
                    height: 100%
                    text-align center 
            &-title
                Font-PF(Regular)
                font-size: 26px;
                color: #333333;
                letter-spacing: 0;
                text-align: center;   
</style>
