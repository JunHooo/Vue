<template>
<!--  联系方式包括：寝室号，电子邮箱，手机号码，家庭地址-->
  <el-table
    :data="tableData"
    style="width: 100%;height:50%">
    <el-table-column >
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand" >
          <el-form-item label="寝室号">
            <span>{{infos.roomnumber }}</span>
          </el-form-item>
          <el-form-item label="电子邮箱">
            <span>{{infos.email  }}</span>
          </el-form-item>
          <el-form-item label="手机号码">
            <span>{{ infos.phone }}</span>
          </el-form-item>
          <el-form-item label="家庭住址">
            <span>{{ infos.adress }}</span>
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
