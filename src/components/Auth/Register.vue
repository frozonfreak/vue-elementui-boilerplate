<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm signup-container">
    <h3 class="title">System Signup</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="UserName"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="Password"></el-input>
    </el-form-item>
    <el-form-item prop="checkConfirmPass">
      <el-input type="password" v-model="ruleForm2.checkConfirmPass" auto-complete="off" placeholder="Confirm Password"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="loading">Signup</el-button>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button style="width:100%;" @click.native.prevent="handleReset">Reset</el-button>
    </el-form-item>
    <el-row>
      <el-col :span="24">
        <router-link :to="{ name: 'Login' }" class="align-right">Already registered?</router-link>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
  import { requestSignup } from '../../api/api'
  import NProgress from 'nprogress'
  export default {
    data () {
      var checkPasswordConfirmation = (rule, value, callback) => {
        if (value !== this.ruleForm2.checkPass) {
          return callback(new Error('Password not same'))
        } else {
          callback()
        }
      }
      return {
        loading: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456',
          checkConfirmPass: '123456'
        },
        rules2: {
          account: [
            { required: true, message: 'Please input username', trigger: 'blur' },
            { type: 'string', message: 'Please enter a valid email address', trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: 'Please input password', trigger: 'blur' },
            { min: 6, message: 'Your password is too short!' }
          ],
          checkConfirmPass: [
            { required: true, message: 'Please input password', trigger: 'blur' },
            { validator: checkPasswordConfirmation, trigger: 'blur' }
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
            var signupParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass }
            requestSignup(signupParams).then(data => {
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
  .signup-container {
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
    .align-right {
      float: right;
    }
  }
</style>