<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">System Login</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="UserName"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="Password"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">Remember me</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="loading">Login</el-button>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button style="width:100%;" @click.native.prevent="handleReset">Reset</el-button>
    </el-form-item>
    <el-row>
      <el-col :span="24">
        <router-link :to="{ name: 'Register' }" class="align-right">New User?</router-link>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
  import { requestLogin } from '../../api/api'
  import NProgress from 'nprogress'
  export default {
    data () {
      return {
        loading: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
        rules2: {
          account: [
            { required: true, message: 'Please input username', trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: 'Please input password', trigger: 'blur' }
          ]
        },
        checked: true
      }
    },
    methods: {
      handleReset () {
        this.$refs.ruleForm2.resetFields()
      },
      handleSubmit (ev) {
        // var _this = this
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            // _this.$router.replace('/helloworld')
            this.loading = true
            NProgress.start()
            var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass }
            requestLogin(loginParams).then(data => {
              this.loading = false
              NProgress.done()
              let { msg, code, user } = data
              if (code !== 200) {
                this.$message({
                  message: msg,
                  type: 'error'
                })
              } else {
                sessionStorage.setItem('user', JSON.stringify(user))
                this.$router.push({ path: '/helloworld' })
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
    .align-right {
      float: right;
    }
  }
</style>