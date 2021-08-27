<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.classname.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%" height="400"
      :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column
        align="left" width="150px">
        <template slot="header" slot-scope="scope">
          <el-input
            fixed
            v-model="search"
            size="mini"
            placeholder="输入课程名搜索"/>
        </template>
      </el-table-column>
      <el-table-column >
        <template slot-scope="scope">
        <el-button type="text" @click="edit(scope.row),dialogTableVisible = true" >成绩详情</el-button>
        <el-dialog title="成绩详情" :visible.sync="dialogTableVisible" style="width: 70%" width="450" >
          <el-table :data="tableData" height="100" width="450">
            <el-table-column  label="成绩总分" width="150">
              {{$route.query.grade}}
            </el-table-column>
            <el-table-column  label="卷面分" width="150">
                {{$route.query.papergrade}}
            </el-table-column>
            <el-table-column  label="平时分" width="120">
                {{$route.query.performgrade}}
            </el-table-column>
          </el-table>
        </el-dialog>
        </template>
      </el-table-column>
      <el-table-column
        prop="studyyear"
        label="学年"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="term"
        label="学期"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="classname"
        label="课程名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="成绩"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="classtype"
        label="课程类型"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="credit"
        label="学分"
        width="120">
      </el-table-column>
      <el-table-column
        prop="college"
        label="学院"
        width="120">
      </el-table-column>
      <el-table-column
        prop="teacher"
        label="教师"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: null,
      search: '',
      dialogTableVisible: false,
      gradetableData:null,
      id:this.$route.query.id,
    }
  },
  methods: {
    edit(row) {
      this.$router.push({
        query:{
          grade:row.grade,
          papergrade:row.papergrade,
          performgrade:row.performgrade
        }
      })
    },
  },
  created() {
    const _this = this
    this.$axios.get('http://localhost:8181/grade/findById2'+"/"+_this.$route.query.id).then(function (resp) {
      _this.tableData = resp.data
    })
  }
}
</script>
