<template>
  <div class="app">    
    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    routeTo (routeName, param) {
      this.$router.push({name: routeName, params: { text: param }})
    }
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header, .el-footer {
    background-color: #efefef;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

.el-footer{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: #efefef;
    text-align: center;
}

.el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
</style>
