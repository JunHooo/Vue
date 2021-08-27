<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.classname.toLowerCase().includes(search.toLowerCase())||data.teacher.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%" height="400"
      :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column
        align="left" width="150px">
        <template slot="header" slot-scope="scope">
          <el-input
            fixed
            v-model="search"
            size="mini"
            placeholder="课程名或教师姓名"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="studyyear"
        label="学年"
        sortable
        width="120"
      >
<!--       v-if="showClose"-->

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
        prop="teachway"
        label="教学方式"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="teachcontent"
        label="教学内容"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="teachquality"
        label="师德师风"
        sortable
        width="120"
      ></el-table-column>
      <el-table-column
        prop="note"
        label="评价"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="credit"
        label="学分"
        width="120"
        v-if="showClose">
      </el-table-column>
      <el-table-column
        prop="gradepoint"
        label="绩点"
        width="120"
        v-if="showClose">
      </el-table-column>
      <el-table-column
        prop="college"
        label="学院"
        width="120"
        v-if="showClose">
      </el-table-column>
      <el-table-column
        prop="classtype"
        label="课程性质"
        width="120"
        v-if="showClose">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="成绩"
        width="120"
        v-if="showClose">
      </el-table-column>
      <el-table-column
        prop="degree"
        label="学位课程"
        width="120"
        v-if="showClose">
      </el-table-column>
      <el-table-column
        prop="papergrade"
        label="卷面分"
        width="120"
        v-if="showClose">
      </el-table-column>
      <el-table-column
        prop="performgrade"
        label="平时分"
        width="120"
        v-if="showClose">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="change(scope.row)" type="text" size="small">评价/修改评价</el-button>
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
      search: ''
    }
  },
  methods: {
    change(row) {
      this.$router.push({
        path: '/AddEvaluate',
        query: {
          id:row.id,
          classname:row.classname,
          studyyear: row.studyyear,
          term: row.term,
          teacher:row.teacher,
          teacherid:row.teacherid,
          teachway:row.teachway,
          teachcontent:row.teachcontent,
          teachquality:row.teachquality,
          note:row.note,
          name:row.name,
          studentid:row.studentid,
          college:row.college,
          classtype:row.classtype,
          credit:row.credit,
          gradepoint:row.gradepoint,
          grade:row.grade,
          degree:row.degree,
          papergrade:row.papergrade,
          performgrade:row.performgrade,
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
