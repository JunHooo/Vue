<template>
  <el-card>
    <div>
      <el-form :inline="true" style="width: 80%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
               class="demo-ruleForm">

        <el-form-item label="姓名" prop="name">
          <el-input v-model.number="ruleForm.name":disabled="true"></el-input>
        </el-form-item>

        <el-form-item label="学号" prop="id" >
          <el-input v-model="ruleForm.id"  :disabled="true" ></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-select v-model="ruleForm.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="民族" prop="national">
          <el-select v-model="ruleForm.national" >
            <el-option label="汉族" value="汉族"></el-option>
            <el-option label="苗族" value="苗族"></el-option>
            <el-option label="满族" value="满族"></el-option>
            <el-option label="蒙古族" value="蒙古族"></el-option>
            <el-option label="回族" value="回族"></el-option>
            <el-option label="藏族" value="藏族"></el-option>
            <el-option label="维吾尔族" value="维吾尔族"></el-option>
            <el-option label="彝族" value="彝族"></el-option>
          </el-select>

        </el-form-item>

        <el-form-item label="政治面貌" prop="politicallandscape">
          <el-select v-model="ruleForm.politicallandscape" >
            <el-option label="共产党员" value="共产党员"></el-option>
            <el-option label="共青团员" value="共青团员"></el-option>
            <el-option label="群众" value="群众"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="证件类型" prop="documenttype">
          <el-select v-model="ruleForm.documenttype" >
            <el-option label="居民身份证" value="居民身份证"></el-option>
            <el-option label="护照" value="护照"></el-option>
            <el-option label="港澳通行证" value="港澳通行证"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="证件号" prop="idcard">
          <el-input v-model="ruleForm.idcard" ></el-input>
        </el-form-item>

        <el-form-item label="年级" prop="grade">
          <el-select v-model="ruleForm.grade" >
            <el-option label="2015" value="2015"></el-option>
            <el-option label="2016" value="2016"></el-option>
            <el-option label="2017" value="2017"></el-option>
            <el-option label="2018" value="2018"></el-option>
            <el-option label="2019" value="2019"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="学院" prop="college">
          <el-select v-model="ruleForm.college" >
            <el-option label="计算机科学学院" value="计算机科学学院"></el-option>
            <el-option label="音乐学院" value="音乐学院"></el-option>
            <el-option label="体育学院" value="体育学院"></el-option>
            <el-option label="外语学院" value="外语学院"></el-option>
            <el-option label="物理学院" value="物理学院"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="专业" prop="professional">
          <el-select v-model="ruleForm.professional" oninput="value=value.replace(/[^0-9.]/g,'')">
            <el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
            <el-option label="网络工程" value="网络工程"></el-option>
            <el-option label="软件工程" value="软件工程"></el-option>
            <el-option label="信息技术" value="信息技术"></el-option>
            <el-option label="大数据" value="大数据"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="班级" prop="classname">
          <el-input v-model="ruleForm.classname" ></el-input>
        </el-form-item>

        <el-form-item label="培养层次" prop="traininglevel">
          <el-select v-model="ruleForm.traininglevel" >
            <el-option label="本科" value="本科"></el-option>
            <el-option label="研究生" value="研究生"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="学制" prop="eductionalsystme">
          <el-select v-model="ruleForm.eductionalsystme" >
            <el-option label="四年" value="四年"></el-option>
            <el-option label="三年" value="三年"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="学籍状态" prop="status">
          <el-select v-model="ruleForm.status" >
            <el-option label="在读" value="在读"></el-option>
            <el-option label="休学" value="休学"></el-option>
            <el-option label="离校" value="离校"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="毕业中学" prop="graduateschool">
          <el-input v-model="ruleForm.graduateschool" ></el-input>
        </el-form-item>

        <el-form-item label="寝室号码" prop="roomnumber">
          <el-input v-model="ruleForm.roomnumber" ></el-input>
        </el-form-item>

        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="ruleForm.email" ></el-input>
        </el-form-item>

        <el-form-item label="电话号码" prop="phone">
          <el-input v-model="ruleForm.phone" oninput="value=value.replace(/[^0-9.]/g,'')"></el-input>
        </el-form-item>

        <el-form-item label="家庭住址" prop="adress">
        <el-input v-model="ruleForm.adress" ></el-input>
      </el-form-item>

        <el-form-item label="出生日期" prop="birthdate" >
          <el-date-picker
            value-format="yyyy-MM-dd"
            v-model="ruleForm.birthdate"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
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
        if (!Number(value)) {
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
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {

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
        id:this.$route.query.id,
        name: this.$route.query.name,
        birthdate:this.$route.query.birthdate,
        national: this.$route.query.national,
        politicallandscape: this.$route.query.politicallandscape,
        documenttype: this.$route.query.documenttype,
        grade: this.$route.query.grade,
        college: this.$route.query.college,
        professional: this.$route.query.professional,
        classname: this.$route.query.classname,
        traininglevel: this.$route.query.traininglevel,
        eductionalsystme: this.$route.query.eductionalsystme,
        graduateschool: this.$route.query.graduateschool,
        roomnumber: this.$route.query.roomnumber,
        email: this.$route.query.email,
        phone: this.$route.query.phone,
        adress: this.$route.query.adress,
        status: this.$route.query.status,
        idcard: this.$route.query.idcard,
        sex:this.$route.query.sex,
      },
      // rules: {
      //   classname: [
      //     {required: true, message: '考试科目不能为空', trigger: 'blur'}
      //   ],
      //   studentid: [
      //     {validator: checkStudentid, trigger: 'blur'},
      //     { type: 'number', message: '学号必须为数字值'}
      //   ],
      //   grade: [
      //     {validator:checkGrade, trigger: 'blur'},
      //     { type: 'number', message: '成绩必须为数字值'}
      //   ],
      //   studyyear: [
      //     {required: true, message: '学年不能为空', trigger: 'change'}
      //   ],
      //   term: [
      //     {required: true, message: '学期不能为空', trigger: 'change'}
      //   ],
      //   name: [
      //     {required: true, message: '学生姓名不能为空', trigger: 'blur'}
      //   ],
      //   classtype: [
      //     {required: true, message: '考试科目不能为空', trigger: 'blur'}
      //   ],
      //   college: [
      //     {required: true, message: '考试科目不能为空', trigger: 'blur'}
      //   ],
      //   papergrade: [
      //     {validator: checkGrade, trigger: 'blur'},
      //     { type: 'number', message: '成绩必须为数字值'}
      //   ],
      //   performgrade: [
      //     {validator: checkGrade, trigger: 'blur'},
      //     { type: 'number', message: '成绩必须为数字值'}
      //   ],
      //   credit: [
      //     {required: true, message: '学分不能为空', trigger: 'blur'},
      //     { type: 'number', message: '学分必须为数字值'}
      //   ],
      //   gradepoint: [
      //     {required: true, message: '绩点不能为空', trigger: 'blur'},
      //     { type: 'number', message: '绩点必须为数字值'}
      //   ],
      //
      // }
    };
  },
  methods: {

    submitForm(formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.put('http://localhost:8181/info/update', this.ruleForm).then(function (resp) {
            console.log(resp)
            if (resp.data == 'success') {
              _this.$alert( '信息修改成功！', '消息', {
                confirmButtonText: '确定',
                callback: action => {
                  _this.$router.push('/tBaseInfo')
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

