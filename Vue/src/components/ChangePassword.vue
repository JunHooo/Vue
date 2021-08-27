<template>
  <div id="app">
    <div class="background">
      <img src="../assets/image/bg5.png" width="100%" height="110%" alt=""/>
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
          <h1 style="color: white">修改密码</h1>
          <el-divider></el-divider>
          <el-form>
            <el-form-item label="账号" prop="id">
              <el-input v-model="infos.id" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="id">
              <el-input v-model="infos.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="新的密码" prop="password" >
              <el-input placeholder="请输入密码" autocomplete="off" show-password clearable v-model="infos.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button style="width: 200px;margin-right: 20px;margin-top: 20px" type="primary" round
                         @click="submitForm('ruleForm')">确&nbsp&nbsp&nbsp&nbsp定
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
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('学号不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          // if ((value/100000000)>10||(value/100000000)==0) {
          if (value < 100000000 || value > 999999999) {
            callback(new Error('学号必须为9位数'));
          } else {
            callback();
          }
        }
      },);
    };
    return {
      infos: [{}],
      check: true,
      rules: {
        password: [
          {validator: checkPassword, trigger: 'blur'},
        ],
      },
    }
  },
      methods: {
        submitForm(formName) {
          const _this = this
          // this.$refs[formName].validate((valid) => {
          //   if (valid) {
              this.$axios.put('http://localhost:8181/user/update', this.infos).then(function (resp) {
                // console.log(resp)
                if (resp.data == 'success') {
                  _this.$alert('密码修改成功！请重新登录', '消息', {
                    confirmButtonText: '确定',
                    callback: action => {
                      _this.$router.push('/')
                    }
                  })
                }
              })
          //   } else {
          //     return false;
          //   }
          // });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      },
      created() {
        const __this = this
        this.$axios.get('http://localhost:8181/user/findById' + "/" + this.$route.query.id).then(function (resp) {
          __this.infos = resp.data
          console.log(resp.data)
        });
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
  height: 580px;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
}

.grid-content {
  border-radius: 4px;
  min-height: 80px;
}

/*.el-row{*/
/*  margin-bottom: 20px;*/
/*}*/
.background {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin: 0;
}

html, body {
  margin: 0;
  padding: 0;
}

/deep/ .demo-ruleForm {
  color: white;
}
</style>
