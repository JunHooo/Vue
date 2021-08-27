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
<!--      <el-table-column-->
<!--        fixed="right"-->
<!--        label="操作"-->
<!--        width="100">-->
<!--        <template slot-scope="scope">-->
<!--          <el-button @click="change(scope.row)" type="text" size="small">修改</el-button>-->
<!--          <el-button  @click="deleteGrade(scope.row)" type="text" size="small">删除</el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: null,
      search: ''
    }
  },
  methods: {
    deleteGrade(row){
      const _this = this
      this.$axios.delete('http://localhost:8181/grade/deleteById/'+row.id).then(function(resp){
        _this.$alert('学号为'+row.studentid+'的同学《'+row.classname+'》成绩已删除！', '消息', {
          confirmButtonText: '确定',
          callback: action => {
            window.location.reload()
          }
        })
      })
    },
    change(row) {
      this.$router.push({
        path: '/changeGrade',
        query: {
          id:row.id,
          grade: row.grade,
          papergrade: row.papergrade,
          performgrade: row.performgrade,
          studyyear: row.studyyear,
          term: row.term,
          college: row.college,
          classtype: row.classtype,
          classname: row.classname,
          name: row.name,
          studentid: row.studentid,
          credit: row.credit,
          gradepoint: row.gradepoint,
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
