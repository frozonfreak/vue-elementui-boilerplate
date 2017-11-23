<template>
  <div class="app">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <img src="./assets/logo.png">
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'app'
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
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
