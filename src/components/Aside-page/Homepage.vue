<template>
    <div class="data">   
   <div class="today">
       <div><img src="../../assets/images/bhp_07.png" alt=""></div>
       <span style="padding-left:0.5rem">今日数据</span>
   </div>

  <div class="one">

       <el-col :span="6">
       <span><img src="../../assets/images/bhp_11.png" alt=""></span>
       <div class="comment">
           <span>123</span>
    
       </div>
       
   </el-col>

   <el-col :span="6">
       <span><img src="../../assets/images/bhp_13.png" alt=""></span>
        <div class="comment">
           <span>456</span>
    
       </div>
   </el-col>

   <el-col :span="6">
       <span><img src="../../assets/images/bhp_15.png" alt=""></span>
        <div class="comment">
           <span>789</span>
    
       </div>
   </el-col>


  </div>

    </div>
</template>

<script>
    export default {
        name:'Homepage'
    }
</script>

<style scoped>
 .data{
     width: 100%;
     height: 50%;
     background: #ffffff;
     overflow: hidden;
 }
 .today{
     width: 100%;
     height: 15%;
     display: flex;
     align-items:center;
     flex-wrap:nowrap;
     padding-left:1rem; 
     border-bottom: 1px solid #ececec;
     font-family:"songti";
     }
     .one{
         display: flex;
         height: 45%;
         align-items:center;
     }
     .comment{
         
     }
</style>