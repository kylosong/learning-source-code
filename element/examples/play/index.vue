<template>
  <div style="margin: 20px;">
    <!-- test -->
    <el-input prefix-icon="el-icon-search" v-model="input" placeholder="请输入内容">
    </el-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!'
      };
    }
  };
</script>
