<template>
  <div class="loginFrom">
      <div class="logo">
          <img src="" alt="">
      </div>
      <div class="title">xxx健康管理系统</div>
    <el-form ref="loginform" :model="loginform" label-width="80px">
      <el-form-item label="账号">
        <el-input class="userinput" v-model="loginform.username"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input class="pswinput" v-model="loginform.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { homelogin } from '@/api/login.js'
export default {
  data () {
    return {
      loginform: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {},
  methods: {
    onSubmit () {
      homelogin()
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.loginFrom {
  el-form-item{
    width: 420px;
    height: 56px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(233, 234, 236, 1);
    border-radius: 4px;
  }
}
</style>
