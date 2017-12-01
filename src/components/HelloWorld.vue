<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="openAutoCloseNotification">Auto Close Notification</el-button>
    <el-button type="primary" @click="openNotification">Notification</el-button>
    <el-button type="primary" @click="openSuccess">Success</el-button>
    <el-button type="primary" @click="openWarning">Warning</el-button>
    <el-button type="primary" @click="openInfo">Info</el-button>
    <el-button type="primary" @click="openError">Error</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    openNotification () {
      this.$notify({
        title: 'Prompt',
        message: 'This is a message that does not automatically close',
        duration: 0
      })
    },
    openAutoCloseNotification () {
      const h = this.$createElement

      this.$notify({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder')
      })
    },
    openSuccess () {
      const h = this.$createElement

      this.$notify({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder'),
        type: 'success'
      })
    },
    openWarning () {
      const h = this.$createElement

      this.$notify({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder'),
        type: 'warning'
      })
    },
    openInfo () {
      const h = this.$createElement

      this.$notify.info({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder')
      })
    },
    openError () {
      const h = this.$createElement

      this.$notify.error({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
