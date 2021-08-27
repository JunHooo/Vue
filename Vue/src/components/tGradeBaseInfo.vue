<template>
  <el-card style="width: 100% ;height:100%;color: white" >
    <div>
      <el-form :inline="true" style="width: 80%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="学年" prop="studyyear">
          <el-select v-model="ruleForm.studyyear" placeholder="请选择学年">
            <el-option label="2017-2018" value="2017-2018"></el-option>
            <el-option label="2018-2019" value="2018-2019"></el-option>
            <el-option label="2019-2020" value="2019-2020"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="学期" prop="term">
          <el-select v-model="ruleForm.term" placeholder="请选择学期">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="开课学院" prop="college">
          <el-select v-model="ruleForm.college" placeholder="请选择学院">
            <el-option label="计算机学院" value="计算机学院"></el-option>
            <el-option label="外语学院" value="外语学院"></el-option>
            <el-option label="文学院" value="文学院"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="课程性质" prop="classtype">
          <el-select v-model="ruleForm.classtype" placeholder="请选择课程性质">
            <el-option label="必修课" value="必修课"></el-option>
            <el-option label="选修课" value="选修课"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="考试科目" prop="classname">
          <el-input v-model="ruleForm.classname"></el-input>
        </el-form-item>

        <el-form-item label="学生姓名" prop="name">
          <el-input v-model.number="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="学生学号" prop="studentid">
          <el-input v-model.number="ruleForm.studentid"></el-input>
        </el-form-item>

        <el-form-item label="学生成绩" prop="grade">
          <el-input v-model.number="ruleForm.grade"></el-input>
        </el-form-item>

        <el-form-item label="卷面分" prop="papergrade">
          <el-input v-model.number="ruleForm.papergrade"></el-input>
        </el-form-item>

        <el-form-item label="平时分" prop="performgrade">
          <el-input v-model.number="ruleForm.performgrade"></el-input>
        </el-form-item>

        <el-form-item label="学分" prop="credit">
          <el-input v-model.number="ruleForm.credit"></el-input>
        </el-form-item>

        <el-form-item label="绩点" prop="gradepoint">
          <el-input v-model.number="ruleForm.gradepoint"></el-input>
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
    var checkStudentid = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('学号不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          // if ((value/100000000)>10||(value/100000000)==0) {
          if (value<100000000||value>999999999) {
            callback(new Error('学号必须为9位数'));
          } else {
            callback();
          }
        }
      }, );
    };
    var checkGrade = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('成绩不能为空'));
      }
      setTimeout(() => {
        if (!Number(value)) {
          callback(new Error('请输入数字值'));
        } else {
          // if ((value/100000000)>10||(value/100000000)==0) {
          if (value<0||value>100) {
            callback(new Error('成绩在1-100以内'));
          } else {
            callback();
          }
        }
      }, );
    };
    return {
      ruleForm: {
        name: '',
        classname: '',
        studentid: '',
        grade: '',
        college:'',
        papergrade: '',
        performgrade:'',
        credit:'',
        gradepoint:'',
        classtype:'',

      },
      rules: {
        classname: [
          {required: true, message: '考试科目不能为空', trigger: 'blur'}
        ],
        studentid: [
          {validator: checkStudentid, trigger: 'blur'},
          { type: 'number', message: '学号必须为数字值'}
        ],
        grade: [
          {validator:checkGrade, trigger: 'blur'},
          { type: 'number', message: '成绩必须为数字值'}
        ],
        studyyear: [
          {required: true, message: '学年不能为空', trigger: 'change'}
        ],
        term: [
          {required: true, message: '学期不能为空', trigger: 'change'}
        ],
        name: [
          {required: true, message: '学生姓名不能为空', trigger: 'blur'}
        ],
        classtype: [
          {required: true, message: '科目类型不能为空', trigger: 'blur'}
        ],
        college: [
          {required: true, message: '考试科目不能为空', trigger: 'blur'}
        ],
        papergrade: [
          {validator: checkGrade, trigger: 'blur'},
          { type: 'number', message: '成绩必须为数字值'}
        ],
        performgrade: [
          {validator: checkGrade, trigger: 'blur'},
          { type: 'number', message: '成绩必须为数字值'}
        ],
        credit: [
          {required: true, message: '学分不能为空', trigger: 'blur'},
          { type: 'number', message: '学分必须为数字值'}
        ],
        gradepoint: [
          {required: true, message: '绩点不能为空', trigger: 'blur'},
          { type: 'number', message: '绩点必须为数字值'}
        ],

      }
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('http://localhost:8181/grade/save', this.ruleForm).then(function (resp) {
            console.log(resp)
            if (resp.data == 'success') {
              _this.$alert( '成绩添加成功！', '消息', {
                confirmButtonText: '确定',
                callback: action => {
                  _this.$router.push('/tGradeInfo')
                }
              })
            }
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

