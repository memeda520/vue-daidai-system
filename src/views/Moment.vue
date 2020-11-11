<template>
  <div class="container moments" >
    <ul>
      <li>
        {{data1}} <span>//当前时间</span>
      </li>
      <li>
         {{data2}} <span>//当前时间的前10天时间</span>
      </li>
      <li>
         {{data3}} <span>//今天周几</span>
      </li>
      <li>
         {{data4}} <span>//明天周几</span>
      </li>
      <li>
         {{data5}}<span>//今天开始</span>
      </li>
      <li>
         {{data6}}<span>//今天日期</span>
      </li>
      <li>
         {{data7}}<span>//两种格式转换 YYYYMMDD  转 YYYY-MM-DD </span>
      </li>
     
    </ul>
  </div>
</template>

<script>
export default {
    name:'moment',
    data() {
        return {
              data1:"",
              data2:"",
              data3:"",
              data4:"",
              data5:"",
              data6:"",
              data7:"",
              data8:"",
              data9:"",
              data10:"",
              data11:"",
        }
    },
    mounted() {
      this.$moment.locale();
      this.data1 = this.$moment().format("YYYY-MM-DD HH:mm:ss"); //当前时间
      this.data2 = this.$moment().subtract(10, "days").format("YYYY-MM-DD"); //当前时间的前10天时间
      this.data3 =this.$moment().day(); //今天周几
      this.data4=this.$moment(new Date()).add(1,'days').format("d"); //明天周几
      this.data5 =this.$moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'); //今天开始和结束
      this.data6 =this.$moment().format('MMMM Do YYYY, h:mm:ss a'); //今天日期
      this.data7 =this.$moment(20301111,'YYYYMMDD').format("YYYY-MM-DD");   //两种格式转换
    },
}
</script>

<style lang="scss">
.moments{
  ul{
    li{
      height: 30px;
      line-height: 30px;
      border-bottom: solid 1px #eee;
      span{
        margin-left: 20px;
        color: rgb(128, 123, 123);
      }
    }
  }
}
</style>