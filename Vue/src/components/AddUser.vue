<template>
  <div id="app">
    <div class="background">
      <img src="../assets/image/bg4.png" width="100%" height="110%" alt=""/>
    </div>
    <el-row type="flex" justify="center">
      <el-col :span="24" style="margin: 0">
        <img src="../assets/image/icon.png" width="50%" height="100%" alt="" style="float:left; "/>
      </el-col>
      <el-col :span="8">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-card class="el-card" shadow="always" style="">
          <h1 style="color: white">账号注册</h1>
          <!--          横线-->
          <el-divider></el-divider>
          <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm"
                   style="margin-top: 80px;margin-right: 40px;color: white">
            <el-form-item label="账号" style="color: blue" prop="id" :rules="[{ required: true, message: '账号不能为空'},{ type: 'number', message: '账号必须为数字值'}]">
              <!--              数字类型的验证需要在 v-model 处加上 .number 的修饰符，这是 Vue 自身提供的用于将绑定值转化为 number 类型的修饰符。-->
              <el-input placeholder="请输入账户" type="text" v-model.number="numberValidateForm.id" autocomplete="off"
                        clearable></el-input>
            </el-form-item>
          </el-form>
          <el-form :model="nameValidateForm" ref="nameValidateForm" label-width="100px" class="demo-ruleForm"
                   style="margin-right: 40px">
            <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '密码不能为空'}, ]">
              <el-input placeholder="请输入密码" v-model="nameValidateForm.password" autocomplete="off" show-password clearable></el-input>
            </el-form-item>
            <el-form-item>
              <el-radio  label="1" value="1">备选项1</el-radio>
              <el-radio  label="2"  value="2">备选项2</el-radio>
            </el-form-item>
            <el-form-item>
              <el-button style="width: 200px;margin-right: 20px;margin-top: 20px" type="primary" round
                         @click="submitForm('numberValidateForm','nameValidateForm')">登&nbsp&nbsp&nbsp&nbsp录
              </el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: '',
      id: '',
      password: '',
      name: '',
      level: '',
      numberValidateForm: {
        id: '',
      },
      nameValidateForm: {
        password: '',
      },
      check: true,
      a: '',
    };
  },
  methods: {
    submitForm(formName) {

      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.get('http://localhost:8181/user/findById' + '/' + this.numberValidateForm.id).then((resp) => {
            console.log(resp)
            _this.infos = resp.data
            _this.a = _this.infos.password
            // if(HttpURLConnection.getResponseCode() == 500){
            //   this.$message.error({message: '账号不存在！'});
            //   return false;
            // }else{
            if (_this.infos.password == this.nameValidateForm.password) {
              this.$message.success({message: '登录成功！'});
              if (_this.infos.level == 1) {
                this.$router.push({
                  path: "/Index",
                  query: {
                    name: _this.infos.name,
                    id: _this.infos.id,
                  }
                })
              } else {
                this.$router.push({
                  path: "/newIndex",
                  query: {
                    name: _this.infos.name,
                    id: _this.infos.id,
                  }
                })
              }
            } else {
              this.$message.error({message: '密码错误！'});
              return false;
            }
            // }
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {

  }
}
</script>


<style scoped>
/*.content{*/
/*  margin: 0 auto;*/
/*}*/
.el-card {
  border-radius: 30px;
  width: 380px;
  height: 500px;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
}

.grid-content {
  border-radius: 4px;
  min-height: 80px;
}


.background {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin: 0;
}

/*消除背景图片边框*/
html, body {
  margin: 0;
  padding: 0;
}

/deep/ .demo-ruleForm {
  color: white;
}
</style>
