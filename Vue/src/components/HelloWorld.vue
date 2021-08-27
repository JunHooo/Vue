<template>
  <div id="app">
    <!--      背景图片-->
    <div class="background">
      <img src="../assets/image/bg2.jpg" width="100%" height="140%"/>
    </div>

    <el-row class="row-header" type="flex">
      <el-col :span="5" style="margin: 0">
        <h1 style="float:left;margin-left: 20px;color: #fff;font-size: 30px;font-weight: 200;">欢迎来到<br>教务管理系统</h1>
      </el-col>
      <el-col :span="10">
        <div class='div1'></div>
        <h3 style="margin-top: -30px;color: white;font-weight: 200;">{{ nowTime }}</h3>
      </el-col>
      <el-col class="info" :span="9">
      </el-col>
      <div>
        <el-tooltip
          effect="light"
          content="退出系统"
          placement="bottom"
        >
          <i class="el-icon-thumb"></i>
        </el-tooltip>
      </div>
    </el-row>
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>

<!--    <el-tree-->
<!--      class="filter-tree"-->
<!--      :data="data"-->
<!--      :props="defaultProps"-->
<!--      default-expand-all-->
<!--      :filter-node-method="filterNode"-->
<!--      ref="tree">-->
<!--    </el-tree>-->


          <el-row class="tac">
            <el-col :span="5" >
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="rgba(143,188,143,0.6)"
                text-color="#fff"
                active-text-color="#ffd04b"
                :filter-node-method="filterNode"
                :data="data"
                :props="defaultProps">


                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-s-custom"></i>
                    <span style="font-size: 18px">个人信息</span>
                  </template>
                  <el-menu @select="handleSelect">
                    <el-menu-item index="1">基本信息</el-menu-item>
                    <el-menu-item index="2">学籍信息</el-menu-item>
                    <el-menu-item index="3">联系方式</el-menu-item>
                    <el-menu-item index="4">成绩信息</el-menu-item>
                  </el-menu>
                </el-submenu>
                <el-menu-item index="3" @select="handleSelect">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span style="font-size: 18px">课程信息</span>
                  </template>
                </el-menu-item>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-document"></i>
                    <span style="font-size: 18px">成绩信息</span>
                  </template>
                  <el-menu @select="handleSelect">
                    <el-menu-item index="6">基本信息</el-menu-item>
                  </el-menu>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-thumb"></i>
                    <span style="font-size: 18px">教师评价</span>
                  </template>
                  <el-menu @select="handleSelect">
                    <el-menu-item index="7"><i class="el-icon-thumb"></i>评价老师</el-menu-item>
                    <el-menu-item index="8">查看评价</el-menu-item>
                  </el-menu>
                </el-submenu>
              </el-menu>
            </el-col>
            <div style="margin-top:10px">
              <router-view></router-view>
            </div>
          </el-row>
  </div>
</template>

<script>
import Vue from 'vue';
import 'font-awesome/css/font-awesome.css'


export default {
  data() {
    return {
      nowTime: '',
    }
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    handleCommand(command) {
      this.$message('click on item ' + command);
    },
    handleSelect(key, keyPath) {
      switch (key) {
        case '1':
          this.$router.push('/Page1');
          break;
        case '2':
          this.$router.push('/Page2')
          break;
        case '3':
          this.$router.push('/Page3')
          break;
        case '4':
          this.$router.push('/Page4')
          break;
        case '5':
          this.$router.push('/Page5');
          break;
        case '6':
          this.$router.push('/Page6')
          break;
        case '7':
          this.$router.push('/Page7')
          break;
        case '8':
          this.$router.push('/Page8')
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
      this.nowTime = year + "年" + month + "月" + date + "日" + "\u3000\u3000\u3000|\u3000" + hh + ":" + mm + ':' + ss + "\u3000\u3000\u3000|\u3000 " + "星期" + '日一二三四五六'.charAt(new Date().getDay());
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
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }

  },
  mounted() {
    this.nowTimes();
  },
  beforeDestroy() {
    this.clear();
  }

}

</script>

<style>

.el-card {
  background: #fbfbfb;
  width: 300px;
  display: inline-block;
  margin: 0.3em;
  border-radius: 20px;
}

.grid-content {
  /* background: rgb(14, 214, 131); */
  border-radius: 4px;
  min-height: 80px;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.header-h2 {
  color: #d1d1d1;
}

.header-h2:hover {
  color: #fff;
}

.row-header {
  height: 140px;
}

.background {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;

}

.header {
  background-color: #242f42;
  height: 70px;
}


/*.logo {*/
/*  width: 70px;*/
/*  height: 70px;*/
/*  float: left;*/
/*  margin-left: 30px;*/
/*}*/

.header-right {
  float: right;
  width: 300px;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.iconfont {
  color: white;
  font-size: 22px;
}

/*.logo img {*/
/*  width: auto;*/
/*  height: auto;*/
/*  max-width: 100%;*/
/*  max-height: 100%;*/
/*}*/

/*.btn-changelan>span{*/
/*  color: white;*/
/*  font-size: 18px;*/
/*}*/

/*.w-text {*/
/*  font-size: 20px;*/
/*  color: white;*/
/*}*/

/*.el-dropdown-link {*/
/*  cursor: pointer;*/
/*  color: white;*/
/*}*/

/*.el-icon-arrow-down {*/
/*  font-size: 12px;*/
/*}*/

.info {
  display: flex;
  align-items: center;
  margin-right: -300px;
  margin-top: -30px;
}

/*消除背景图片边框*/
html, body {
  margin: 0;
  padding: 0;
}

.div1 {
  margin-top: 20px;
  background-color: rgba(7, 73, 146, 0.3);
  width: 560px;
  height: 40px;
  border: 2px solid darkslategray;
  border-radius: 30px;
  text-align: center;
  line-height: 200px;
  z-index: -1;
}
</style>
