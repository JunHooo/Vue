<template>
  <el-card>
    <div>
      <el-form :inline="true" style="width: 80%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="学年" prop="studyyear" >
          <el-select v-model="ruleForm.studyyear" placeholder="请选择学年" readonly disabled="disabled">
            <el-option label="2017-2018" value="2017-2018"></el-option>
            <el-option label="2018-2019" value="2018-2019"></el-option>
            <el-option label="2019-2020" value="2019-2020"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="学期" prop="term">
          <el-select v-model="ruleForm.term" placeholder="请选择学期" readonly disabled="disabled">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </el-form-item>


        <el-form-item label="教学科目" prop="classname" >
          <el-input v-model="ruleForm.classname" :disabled="true"></el-input>
        </el-form-item>


        <el-form-item label="任课教师" prop="teacher">
          <el-input v-model="ruleForm.teacher" :disabled="true"></el-input>
        </el-form-item>

        <el-form-item  prop="teacherid" >
          <el-input  v-model="ruleForm.teacherid"  v-if="showClose"></el-input>
        </el-form-item>

        <el-form-item label="教学方式" prop="teachway">
          <el-input v-model="ruleForm.teachway" placeholder="满分100分" oninput="value=value.replace(/[^0-9.]/g,'')"></el-input>
        </el-form-item>

        <el-form-item label="任课内容" prop="teachcontent">
          <el-input v-model="ruleForm.teachcontent" placeholder="满分100分" oninput="value=value.replace(/[^0-9.]/g,'')"></el-input>
        </el-form-item>

        <el-form-item label="师德师风" prop="teachquality" style="margin-left: 70px">
          <el-input v-model="ruleForm.teachquality" placeholder="满分100分" oninput="value=value.replace(/[^0-9.]/g,'')"></el-input>
        </el-form-item>

        <el-form-item label="评价" prop="note" >
          <el-input type="textarea" v-model="ruleForm.note" placeholder="可不填"></el-input>
        </el-form-item>

        <el-form-item  prop="college" >
          <el-input  v-model="ruleForm.college"  v-if="showClose"></el-input>
        </el-form-item>
        <el-form-item  prop="classtype" >
          <el-input  v-model="ruleForm.classtype"  v-if="showClose"></el-input>
        </el-form-item>
        <el-form-item  prop="credit" >
          <el-input  v-model="ruleForm.credit"  v-if="showClose"></el-input>
        </el-form-item>
        <el-form-item  prop="gradepoint" >
          <el-input  v-model="ruleForm.gradepoint"  v-if="showClose"></el-input>
        </el-form-item>
        <el-form-item  prop="degree" >
          <el-input  v-model="ruleForm.degree"  v-if="showClose"></el-input>
        </el-form-item>
        <el-form-item  prop="papergrade" >
          <el-input  v-model="ruleForm.papergrade"  v-if="showClose"></el-input>
        </el-form-item>
        <el-form-item  prop="performgrade" >
          <el-input  v-model="ruleForm.performgrade"  v-if="showClose"></el-input>
        </el-form-item>


        <br/>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    var checkGrade = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('评分不能为空'));
      }
      setTimeout(() => {
        if (!Number(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value<0||value>100) {
            callback(new Error('数值在1-100以内'));
          } else {
            callback();
          }
        }
      }, );
    };
    return {
      ruleForm: {
        id:this.$route.query.id,
        name: this.$route.query.name,
        classname: this.$route.query.classname,
        teacher: this.$route.query.teacher,
        teacherid: this.$route.query.teacherid,
        studyyear: this.$route.query.studyyear,
        term:this.$route.query.term,
        teachway:this.$route.query.teachway,
        teachcontent:this.$route.query.teachcontent,
        note:this.$route.query.note,
        teachquality:this.$route.query.teachquality,
        studentid:this.$route.query.studentid,
        college:this.$route.query.college,
        classtype:this.$route.query.classtype,
        credit:this.$route.query.credit,
        gradepoint:this.$route.query.gradepoint,
        grade:this.$route.query.grade,
        degree:this.$route.query.degree,
        papergrade:this.$route.query.papergrade,
        performgrade:this.$route.query.performgrade,
      },
      rules: {
        teachway: [
          {validator:checkGrade, trigger: 'blur'},
        ],
        teachcontent: [
          {validator:checkGrade, trigger: 'blur'},
        ],
        teachquality: [
          {validator:checkGrade, trigger: 'blur'},
        ],

      }
    };
  },
  methods: {

    submitForm(formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.put('http://localhost:8181/grade/update', this.ruleForm).then(function (resp) {
            console.log(resp)
            if (resp.data == 'success') {
              _this.$alert( '评价成功！', '消息', {
                confirmButtonText: '确定',
                callback: action => {
                  _this.$router.push('/ShowEvaluation')
                  // window.location.reload()
                }
              })
            }
          })
        } else {
          return false;
        }
      });
    },
    created(){
      alert(this.$route.query.grade)
    },
    resetForm(formName){
      this.$refs[formName].resetFields();

    }
  }
}
</script>

