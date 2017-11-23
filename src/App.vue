<template>
  <div class="app">    
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>Navigator One</span>
                  </template>
                  <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1" @click="routeTo('HelloWorld')">Home</el-menu-item>
                    <el-menu-item index="1-2" @click="routeTo('About')">About</el-menu-item>
                    <el-menu-item index="1-3" @click="routeTo('AboutWithParam','Hello')">About With URL Parameter</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-4" @click="routeTo('RedirectURL')">Redirect via URL</el-menu-item>
                    <el-menu-item index="1-5" @click="routeTo('RedirectName')">Redirect via Name</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="Group Three">
                    <el-submenu index="1-6">
                      <template slot="title" @click="routeTo('Parent')">Parent</template>
                      <el-menu-item index="1-6-1" @click="routeTo('Foo')">Foo</el-menu-item>
                      <el-menu-item index="1-6-2" @click="routeTo('Bar')">Bar</el-menu-item>
                    </el-submenu>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-setting"></i>
                  <span>Navigator Three</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main>
            <img src="./assets/logo.png">
            <transition name="fade" mode="out-in">
              <router-view class="view"></router-view>
            </transition>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
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
