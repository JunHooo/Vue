
<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column >
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand" >
          <el-form-item label="姓名">
            <span>{{infos.name }}</span>
          </el-form-item>
          <el-form-item label="学号">
            <span>{{infos.id  }}</span>
          </el-form-item>
          <el-form-item label="出生日期">
            <span>{{ infos.birthdate }}</span>
          </el-form-item>
          <el-form-item label="民族">
            <span>{{ infos.national  }}</span>
          </el-form-item>
          <el-form-item label="政治面貌">
            <span>{{ infos.politicallandscape }}</span>
          </el-form-item>
          <el-form-item label="性别">
            <span>{{infos.sex}}</span>
          </el-form-item>
          <el-form-item label="证件类型">
            <span>{{infos.documenttype}}</span>
          </el-form-item>
          <el-form-item label="证件号码">
            <span>{{infos.idcard}}</span>
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

