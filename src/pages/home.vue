<template>
  <div>
      <p>{{message}}</p>
      <button @click="change()">点击修改</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '这是一个页面'
    }
  },
  methods: {
    change() {
      var a = '这是第三个页面'
      this.message = a
    }
  },
  created: {
  }
}
</script>

