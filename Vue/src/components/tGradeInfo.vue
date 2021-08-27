<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.classname.toLowerCase().includes(search.toLowerCase())||data.name.toLowerCase().includes(search.toLowerCase()))"
      :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column
        align="left" width="150px">
        <template slot="header" slot-scope="scope">
          <el-input
            fixed
            v-model="search"
            size="mini"
            placeholder="课程名或学生姓名"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="studentid"
        label="学号"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="120">
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
        prop="papergrade"
        label="平时成绩"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="performgrade"
        label="表现分"
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
      <el-table-column
        prop="teacherid"
        label="教师编号"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="change(scope.row)" type="text" size="small">修改</el-button>
          <el-button  @click="deleteGrade(scope.row)" type="text" size="small">删除</el-button>
        </template>
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
      id:this.$route.query.id,
    }
  },
  methods: {
    // deleteGrade(row){
    //   const _this = this
    //   this.$axios.delete('http://localhost:8181/grade/deleteById/'+row.id).then(function(resp){
    //     _this.$alert('学号为'+row.studentid+'的同学《'+row.classname+'》成绩已删除！', '消息', {
    //       confirmButtonText: '确定',
    //       callback: action => {
    //         window.location.reload()
    //         // _this.$router.push('/tGradeInfo')
    //       }
    //     })
    //   })
    // },
    deleteGrade(row) {
      this.$confirm('此操作将永久删除该成绩, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const _this = this
          this.$axios.delete('http://localhost:8181/grade/deleteById/'+row.id).then(function(resp){
            _this.$alert('学号为'+row.studentid+'的同学《'+row.classname+'》成绩已删除！', '消息', {
              confirmButtonText: '确定',
              callback: action => {
                window.location.reload()
                // _this.$router.push('/tGradeInfo')
              }
            })
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    change(row) {
      this.$router.push({
        path: '/tChangeGrade',
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
          teacher:row.teacher,
          teacherid:row.teacherid,
          teachway:row.teachway,
          teachquality:row.teachquality,
          teachcontent:row.teachcontent,
        }
      })

    },
  },
  created() {
    const _this = this
    this.$axios.get('http://localhost:8181/grade/findById3/'+_this.$route.query.id).then(function (resp) {
      console.log(_this.$route.query.id)
      _this.tableData = resp.data
    })
  }
}
</script>
