<template>
  <div class="ma_tables">
    <el-tag style="margin:10px 0;">行合并</el-tag>
    <el-table
      :show-header="true"
      :data="tableData"
      :span-method="objectSpanMethod"
      border
    >
      <el-table-column prop="type" label="ID">
       
      </el-table-column>
      <el-table-column width="180" prop="name"></el-table-column>
      <el-table-column  :label="item.name" v-for="(item,i) in list" :key="i"  width="60px">
           <template slot-scope="scope" >
             <div>
                {{returndata(scope.row,item)}}
             </div>
            
          </template>
      </el-table-column>
    </el-table>
  <el-tag style="margin:10px 0;">普通表格</el-tag>
   <el-button
                    type="primary"
                    icon="el-icon-delete"
                    class="handle-del mr10"
                    @click="delAllSelection"
                >批量删除</el-button>
     <el-table
                :data="tableData2"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >

              
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                <el-table-column prop="name" label="用户名"></el-table-column>
                <el-table-column label="账户余额">
                    <template slot-scope="scope">￥{{scope.row.money}}</template>
                </el-table-column>
                <el-table-column label="头像(查看大图)" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.thumb"
                            :preview-src-list="[scope.row.thumb]"
                        ></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column label="状态" align="center">
                    <template slot-scope="scope">
                        <el-tag
                            :type="scope.row.state==='成功'?'success':(scope.row.state==='失败'?'danger':'')"
                        >{{scope.row.state}}</el-tag>
                    </template>
                </el-table-column>

                <el-table-column prop="date" label="注册时间"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="pageIndex"
                    :page-size="pageSize"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>

             <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
  </div>
</template>

<script>
export default {
  name: "tables",
  data() {
    return {
      tableData: [],
      tableData2:[],
      list:[],
       delList: [],
      pageIndex:1,
      pageTotal:0,
      pageSize:10,
      editVisible:false,
      form:{},
      multipleSelection:[]
    };
  },

  created() {
    this.getdata();//第一个表格
    this.getdata2()
  },
  methods: {
    handlePageChange(){

    },
    getdata2(){
      this.tableData2= [{
            "id": 1,
            "name": "张三",
            "money": 123,
            "address": "广东省东莞市长安镇",
            "state": "成功",
            "date": "2019-11-1",
            "thumb": "https://lin-xin.gitee.io/images/post/wms.png"
        },
        {
            "id": 2,
            "name": "李四",
            "money": 456,
            "address": "广东省广州市白云区",
            "state": "成功",
            "date": "2019-10-11",
            "thumb": "https://lin-xin.gitee.io/images/post/node3.png"
        },
        {
            "id": 3,
            "name": "王五",
            "money": 789,
            "address": "湖南省长沙市",
            "state": "失败",
            "date": "2019-11-11",
            "thumb": "https://lin-xin.gitee.io/images/post/parcel.png"
        },
        {
            "id": 4,
            "name": "赵六",
            "money": 1011,
            "address": "福建省厦门市鼓浪屿",
            "state": "成功",
            "date": "2019-10-20",
            "thumb": "https://lin-xin.gitee.io/images/post/notice.png"
        }
    ]
    this.pageTotal = 4
    },
    //多选操作
    handleSelectionChange(val){
       this.multipleSelection = val;
    },
     // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.tableData2.splice(index, 1);
                    this.pageTotal --
                })
                .catch(() => {});
        },
         // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        // 保存编辑
        saveEdit() {
            this.editVisible = false;
            this.$message.success(`修改第 ${this.idx + 1} 行成功`);
            this.$set(this.tableData, this.idx, this.form);
        },
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
            this.tableData2=[]
            this.pageTotal = 0
        },
    getdata() {
      this.list =[
        {
            name:'1',
            dayu:30,
            xiaoyu:-10
          },
          {
            name:'2',
            dayu:555,
            xiaoyu:-111
          },
          {
            name:"3",
            dayu:5460,
            xiaoyu:-64646
          },
          {
            name:"4",
            dayu:5460,
            xiaoyu:-64646
          },
          {
            name:"5",
            dayu:5460,
            xiaoyu:-64646
          },
          {
            name:"6",
            dayu:5460,
            xiaoyu:-64646
          },
          {
            name:"7",
            dayu:5460,
            xiaoyu:-64646
          },
          {
            name:"8",
            dayu:5460,
            xiaoyu:-64646
          },
          {
            name:"9",
            dayu:5460,
            xiaoyu:-64646
          },
          {
            name:"10",
            dayu:60,
            xiaoyu:-6426
          }
      ]
      
      this.tableData = [

        {
          name: "10-30",
          type: "a",
        },
        {
          name: ">30",
          type: "",
        },
        {
          name: "总计",
          type: "",
        },
        {
          name: "-1-0",
          type: "b",
        },
        {
          name: "-1--10",
          type: "打包情况",
        },
        {
          name: "<-10",
          type: "负损",
        },
        {
          name: "总计",
          type: "",
        },
     
      ];
    },
    returndata(row,data){
      // console.log(row,data)
      if(row.name=="<-10"){
        return data.xiaoyu
      }else if(row.name==">30"){
        return data.dayu
      }

    },
    // 和并列
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // console.log( row, column, rowIndex, columnIndex )
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return [3,1];
        } else if (rowIndex === 3) {
          return [4,1];
        }else{
            return [0,0]
        }
      }
    },
  },
};
</script>

<style lang="scss">
.ma_tables{
  .table-td-thumb{
    width: 50px;
  }
}
</style>
