<template>
  <div class="container">
    <div>
      <el-radio-group v-model="radio">
    <el-radio :label="3">备选项</el-radio>
    <el-radio :label="6">备选项</el-radio>
    <el-radio :label="9">备选项</el-radio>
  </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 3
    }
  },
}
</script>

<style lang="scss">

</style>