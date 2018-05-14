<template>
  <div class="nav">
    <router-link class="item" v-for="item in list" :key="item.id" :to="{path: item.link}">{{item.name}}</router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          {name: '首页', link: '/'},
          {name: '借款', link: '/xx'},
          {name: '账户', link: '/account'}
        ]
      }
    }
  }
</script>
<style rel="stylesheet" lang="stylus" scoped>
  @import "~common/stylus/mixin.styl"

  .nav
    display: flex
    justify-content space-between
    height: 120px
    .item
      flex 1
      font-size(32)
      color red
</style>
