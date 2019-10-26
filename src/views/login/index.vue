<template>
  <div class="login">
    <!--  -->
    <div class="logo_head">
      <img src="../../assets/images/logo@2x.png" alt />
    </div>
    <!-- 轮播图 -->
    <div class="carousel">
      <el-carousel arrow="never" trigger="click" height="150px" indicator-position="outside">
        <el-carousel-item v-for="(item,index) in carouData" :key="index">
          <p class="carousel-title">{{item.title}}</p>
          <img :src="item.imgUrl" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 主登录 -->
    <div class="logininput">
      <loginFrom ></loginFrom>
    </div>
  </div>
</template>

<script>
import loginFrom from '@/components/login/loginFrom'
export default {
  components: {
    loginFrom
  },
  data () {
    return {
      carouData: [
        {
          title: '数据报表实时更新',
          imgUrl: '../../assets/images/login_banner_01.png'
        },
        {
          title: '移动办公 让管理更智能',
          imgUrl: '../../assets/images/login_banner_02.png'
        },
        {
          title: '一站式解决，紧密联系客户',
          imgUrl: '../../assets/images/login_banner_03.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
.login {
  height: 100vh;
  background: url("../../assets/images/login_bg@2x.png") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  .logo_head {
    padding: 20px;
    img {
      display: block;
      width: 15%;
    }
    .carousel {
      position: absolute;
      left: 30%;
      bottom: 30%;
      .el-carousel__item {
        p {
          color: #fff;
        }
        img {
          height: 100%;
        }
      }
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }
  }
  .logininput {
    position: absolute;
    right: 115px;
    top: 218px;
    width: 550px;
    height: 620px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 17px 32px 8px rgba(22, 117, 118, 0.28);
    border-radius: 8px;
  }
}
</style>
