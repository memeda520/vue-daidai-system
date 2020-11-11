<template>
  <div class="theme_page container">
      <div class="theme_row">
          <span>更换主题：</span>
    
    <el-select v-model="value" placeholder="默认" @change="changes"  class="theme_div">
      <el-option v-for="item in themes" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; width:22px;height:12px;" :class="item.value"></span>
          </el-option> 
    </el-select>
      </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      themes: [
        {
          value: "default-theme",
          label: "默认",
        },
        {
          value: "red-theme",
          label: "红色",
        },
         {
          value: "black-theme",
          label: "暗色",
        },
        {
            value: "dark-theme",
            label: "浅色",
        }
      ],
    };
  },
 
  methods: {
    changes(value) {
          window.document.documentElement.setAttribute( "data-theme", value);
    },
  },
};
</script>

<style scoped lang="scss">
.theme_page {
  box-sizing: border-box;
  padding: 12px;

  .theme_row{
      display: flex;
      align-items: center;
  }

}
.el-select-dropdown__item{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>