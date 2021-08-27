<template>
<!--  学籍信息包括：年级，学院名称，专业名称，班级名称，培养层次（本科），学制（4年）,学籍状态（在读）-->
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column >
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand" >
          <el-form-item label="年级">
            <span>{{infos.grade }}</span>
          </el-form-item>
          <el-form-item label="学院名称">
            <span>{{infos.college  }}</span>
          </el-form-item>
          <el-form-item label="专业名称">
            <span>{{ infos.professional }}</span>
          </el-form-item>
          <el-form-item label="班级名称">
            <span>{{ infos.classname  }}</span>
          </el-form-item>
          <el-form-item label="培养层次">
            <span>{{ infos.traininglevel }}</span>
          </el-form-item>
          <el-form-item label="学制">
            <span>{{infos.eductionalsystme}}</span>
          </el-form-item>
          <el-form-item label="学籍状态">
            <span>{{infos.status}}</span>
          </el-form-item>
          <el-form-item label="毕业中学">
            <span>{{infos.graduateschool}}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
  </el-table>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
  font-size: 16px;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [{},],
      infos:[{}],
      id:this.$route.query.id
    }
  },

  created() {
    const _this=this
    this.$axios.get('http://localhost:8181/info/findById/'+this.id).then(function(resp){
      _this.infos = resp.data
      this.id=this.$route.query.id
    })

  }
}
</script>
