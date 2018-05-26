<template>
<div>  

<el-container>
  <el-header style="height:100px;"><Header></Header></el-header>
  <el-container style="height:100%;">
    <el-aside width="200px"><Aside></Aside></el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>

  </div>

</template>

<script>
import Header from '../components/common/Header';
import Aside from '../components/common/Aside.vue';


export default {

  data () {
    return {
    }
  },
  components: {
    Header,
    Aside
  }
}
</script>


<style>

 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  .el-aside {
    height: 50rem;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;

  }

</style>
