<template>
<div>
 <div class="first" @click="jump">
       首页
   </div>

<el-menu
      default-active="2"
      class="el-menu-vertical-demo" style="background:#34508A;">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span style="color:white">资讯管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">专题管理</el-menu-item>
          <el-menu-item index="1-2">资讯列表</el-menu-item>
          <el-menu-item index="1-3">评论列表</el-menu-item>
        </el-menu-item-group>


      </el-submenu>

     <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span style="color:white">商场管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">商品分类</el-menu-item>
          <el-menu-item index="2-2">商家列表</el-menu-item>
          <el-menu-item index="2-2">商家列表</el-menu-item>
          <el-menu-item index="2-2">商家审核</el-menu-item>
          <el-menu-item index="2-2">订单列表</el-menu-item>
        </el-menu-item-group>


      </el-submenu>

           <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span style="color:white">会员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">会员列表</el-menu-item>
        </el-menu-item-group>


      </el-submenu>

        <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span style="color:white">广告管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">轮播图</el-menu-item>
          <el-menu-item index="4-2">广告列表</el-menu-item>
        </el-menu-item-group>


      </el-submenu>


        <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span style="color:white">系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">推荐关键词</el-menu-item>
        </el-menu-item-group>


      </el-submenu>


        <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span style="color:white">数据统计</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">综合数据</el-menu-item>
        </el-menu-item-group>


      </el-submenu>


    </el-menu>

</div>
  
  
   



</template>

<script>
 import Homepage from "../Aside-page/Homepage.vue";
    export default {
        data () {
            return {
                
            }
        },
        methods: {
            jump(){
                this.$router.push("/");
            }
        },
         components: {
   Homepage
  }
    }
</script>

<style scoped>
div{
    height: 100%;
    background: #34508A;
}
.first{
        height: 56px;
    line-height: 56px;
    cursor: pointer;
    /* line-height: 2rem; */
    color: white;
    background: #34508A;
}
.el-menu-vertical-demo el-menu{
    background:  #34508A;
}
</style>