<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())||data.classname.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%" height="400"
      :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column
        align="left" width="150px">
        <template slot="header" slot-scope="scope">
          <el-input
            fixed
            v-model="search"
            size="mini"
            placeholder="输入姓名或班级"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="id"
        label="学号"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="birthdate"
        label="出生日期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="national"
        label="民族"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="politicallandscape"
        label="政治面貌"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="documenttype"
        label="证件类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="idcard"
        label="证件号码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="年级"
        width="120">
      </el-table-column>
      <el-table-column
        prop="college"
        label="学院"
        width="120">
      </el-table-column>
      <el-table-column
        prop="professional"
        label="专业"
        width="120">
      </el-table-column>
      <el-table-column
        prop="classname"
        label="班级"
        width="120">
      </el-table-column>
      <el-table-column
        prop="traininglevel"
        label="培养层次"
        width="120">
      </el-table-column>
      <el-table-column
        prop="eductionalsystme"
        label="学制"
        width="120">
      </el-table-column>
      <el-table-column
        prop="status"
        label="学籍状态"
        width="120">
      </el-table-column>
      <el-table-column
        prop="graduateschool"
        label="毕业中学"
        width="120">
      </el-table-column>
      <el-table-column
        prop="roomnumber"
        label="寝室号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="email"
        label="电子邮箱"
        width="120">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="adress"
        label="家庭住址"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="change(scope.row)" type="text" size="small">修改</el-button>
<!--          <el-button  @click="deleteGrade(scope.row)" type="text" size="small">删除</el-button>-->
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
    }
  },
  methods: {
    deleteGrade(row){
      const _this = this
      this.$axios.delete('http://localhost:8181/info/deleteById/'+row.id).then(function(resp){
        _this.$alert('学号为'+row.id+'的同学信息已删除！', '消息', {
          confirmButtonText: '确定',
          callback: action => {
            window.location.reload()
          }
        })
      })
    },
    change(row) {
      this.$router.push({
        path: '/tChangeBaseInfo',
        query: {
          name:row.name,
          id: row.id,
          birthdate: row.birthdate,
          national: row.national,
          politicallandscape: row.politicallandscape,
          documenttype: row.documenttype,
          idcard:row.idcard,
          grade: row.grade,
          college: row.college,
          professional: row.professional,
          classname: row.classname,
          traininglevel: row.traininglevel,
          eductionalsystme: row.eductionalsystme,
          graduateschool: row.graduateschool,
          roomnumber: row.roomnumber,
          email: row.email,
          phone: row.phone,
          adress: row.adress,
          status:row.status,
          sex:row.sex,

        }
      })

    },
  },
  created() {
    const _this = this
    this.$axios.get('http://localhost:8181/info/findAll').then(function (resp) {
      _this.tableData = resp.data

    })
  }
}
</script>
