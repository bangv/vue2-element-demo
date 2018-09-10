<template>
  <div class="hello">
    <h1>按钮演示</h1>
    <el-row>
      <el-button  class="moren">默认按钮</el-button>
      <el-button  class="moren" type="primary">主要按钮</el-button>
      <el-button  class="moren" type="success">成功按钮</el-button>
      <el-button  class="moren" type="info">信息按钮</el-button>
      <el-button  class="moren" type="warning">警告按钮</el-button>
      <el-button  class="moren" type="danger">危险按钮</el-button>
    </el-row>
    <div>
      <el-button @click="show3 = !show3">Click Me</el-button>

      <div style="margin-top: 20px; height: 200px;">
        <el-collapse-transition>
          <div v-show="show3">
            <div class="transition-box">el-collapse-transition</div>
            <div class="transition-box">el-collapse-transition</div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show3: true
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.moren{
  color:red;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
