<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.classname.toLowerCase().includes(search.toLowerCase()))"
      :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column
        align="left" width="150px">
        <template slot="header" slot-scope="scope">
          <el-input
            fixed
            v-model="search"
            size="mini"
            placeholder="课程名"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="classname"
        label="任课科目"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="teacher"
        label="教师"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="teacherid"
        label="教师编号"
        sortable
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
        width="120">
      </el-table-column>
      <el-table-column
        type="textarea"
        prop="note"
        label="评价"
        width="400"
       >
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  methods: {

  },

  data() {
    return {
      tableData: null,
      search: '',


    }
  },

  created() {
    const _this = this
    this.$axios.get('http://localhost:8181/grade/findById2'+"/"+_this.$route.query.id).then(function(resp){
      console.log(resp)
      _this.tableData = resp.data
    })
  }
}
</script>
