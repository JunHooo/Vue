<template>
  <div id="app">
    <div class="background">
      <img src="../assets/image/bg2.jpg" width="100%" height="100%"/>
    </div>
    <el-container>
      <el-header style="text-align: right; font-size: 12px;height: 130px">
        <el-col :span="5" style="margin: 0">
          <div>
            <h1 style="float:left;margin-left: 20px;color: #fff;font-size: 30px;font-weight: 200;"><i class="fa fa-university" style="font-size:30px;color: white;margin-right: 20px"></i>欢迎来到<br>教务管理系统</h1>
          </div>
        </el-col>
        <el-col :span="10" >
          <div>
            <div class='div1'></div>
            <h2 style="margin-top: -30px;color: white;font-weight: 200;position: absolute;margin-left: 60px"><i class="fa fa-clock-o" style="font-size:20px;color: white;margin-right: 20px"></i>{{ nowTime }}</h2>
          </div>
        </el-col>
        <el-col class="info" :span="9">
        </el-col>
        <span style="font-size: 20px;color: #fff;font-weight: 200;">{{this.$route.query.name}},老师</span>
        <el-dropdown style="margin-top: 30px;font-size: 20px">
          <i class="el-icon-setting" style="margin-left: 12px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item ><el-link  @click="change">修改密码</el-link></el-dropdown-item>
            <el-dropdown-item ><el-link href="http://localhost:8080">退出登录</el-link></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
    </el-container>
    <el-container style="height: 500px;margin-left:40px; border: 1px solid #eee;font-size: 18px;background-color:rgba(51,51,51,0.1);">
      <el-aside width="200px"  >
        <el-menu @select="handleSelect" style="background-color:rgba(51,51,51,0.1);">
          <el-submenu index="1" >
            <template slot="title" ><i class="fa fa-address-book-o" style="font-size:20px;color: white;margin-right: 20px"></i><span style="color: #fff;font-size: 20px;font-weight: 200;">个人信息</span></template>
            <el-menu-item index="1"><i class="fa fa-id-card" style="margin-right: 10px"></i>个人信息修改</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="fa fa-book" style="font-size:20px;color: white;margin-right: 20px"></i><span style="color: #fff;font-size: 20px;font-weight: 200;">课程信息</span></template>
            <el-menu-item index="2"><i class="fa fa-tasks" style="margin-right: 10px"></i>查看课程</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="fa fa-line-chart" style="font-size:20px;color: white;margin-right: 20px"></i><span style="color: #fff;font-size: 20px;font-weight: 200;">成绩信息</span></template>
            <el-menu-item index="3"><i class="fa fa-search" style="margin-right: 10px"></i>查询成绩</el-menu-item>
            <el-menu-item index="4"><i class="fa fa-pencil " style="margin-right: 10px"></i>录入成绩</el-menu-item>

          </el-submenu>
          <el-submenu index="4">
            <template slot="title" ><i class="fa fa-pencil-square-o" style="font-size:20px;color: white;margin-right: 20px"></i><span style="color: #fff;font-size: 20px;font-weight: 200;">教师评价</span></template>
            <el-menu-item index="5"><i class="fa fa-eye" style="margin-right: 10px"></i>查看评价</el-menu-item>

          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style>

/*背景图片*/
.background {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
}
/*消除背景图片边框*/
html, body {
  margin: 0;
  padding: 0;
}
/*椭圆框，用于放置时间*/
.div1 {
  margin-top: 40px;
  background-color: rgba(7, 73, 146, 0.3);
  width: 560px;
  height: 40px;
  border: 2px solid darkslategray;
  border-radius: 30px;
  text-align: center;
  line-height: 200px;
  z-index: -3;
}

</style>

<script>
export default {
  data() {
    return {
      nowTime: '',
      infos:[{}],
      id:this.$route.query.id,
      name:this.$route.query.name,
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      switch (key) {
        case '1':
          this.$router.push({
            path:'/tBaseInfo',
            query:{
              id:this.id,
              name:this.name,
            }
          })
          break;
        case '2':
          this.$router.push({
            path:'/tShowClass',
            query:{
              id:this.id,
              name:this.name,
            }
          })
          break;
        case '3':
          this.$router.push({
            path:'/tGradeInfo',
            query:{
              id:this.id,
              name:this.name,
            }
          })
          break;
        case '4':
          this.$router.push({
            path:'/tAddGrade',
            query:{
              name:this.name,
              id:this.id,
            }
          })
          break;
        case '5':
          this.$router.push({
            path:'/tShowEvaluation',
            query:{
              id:this.id,
              name:this.name,
            }
          })
          break;
      }
    },
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month = new Date(timeStamp).getMonth() + 1 < 10 ? "0" + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1;
      let date = new Date(timeStamp).getDate() < 10 ? "0" + new Date(timeStamp).getDate() : new Date(timeStamp).getDate();
      let hh = new Date(timeStamp).getHours() < 10 ? "0" + new Date(timeStamp).getHours() : new Date(timeStamp).getHours();
      let mm = new Date(timeStamp).getMinutes() < 10 ? "0" + new Date(timeStamp).getMinutes() : new Date(timeStamp).getMinutes();
      let ss = new Date(timeStamp).getSeconds() < 10 ? "0" + new Date(timeStamp).getSeconds() : new Date(timeStamp).getSeconds();
      this.nowTime = year + "年" + month + "月" + date + "日" + "\u3000\u3000|\u3000" + hh + ":" + mm + ':' + ss + "\u3000\u3000\u3000|\u3000 " + "星期" + '日一二三四五六'.charAt(new Date().getDay());
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
      this.clear()
    },
    clear() {
      clearInterval(this.nowTimes)
      this.nowTimes = null;
    },
    change(){
      this.$router.push({
        path: '/ChangePassword',
        query: {
          id:this.id,
          name:this.name,
          level:this.level,
        }
      })
    }
  },
  mounted() {
    this.nowTimes();
  },
  beforeDestroy() {
    this.clear();
  },
  created() {
    const _this=this
    this.$axios.get('http://localhost:8181/info/findAll').then(function(resp){
      _this.infos=resp.data
    })
  }
};
</script>npm

