<!--<!DOCTYPE html>-->
<!--<html lang="en">-->
<!--<head>-->
<!--  <meta charset="UTF-8">-->
<!--  <title>Title</title>-->
<!--  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>-->
<!--  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>-->

<!--</head>-->
<!--<body>-->

<!--<div id="div1">-->
<!--  账号：<input v-model="name" />-->
<!--  密码：<input v-model="password" />-->
<!--  <button @click="login">登录</button>-->
<!--</div>-->

<!--</body>-->

<!--<script>-->

<!--  new Vue({-->
<!--    el:'#div1',-->
<!--    data:{-->
<!--      name:null,-->
<!--      password:null-->
<!--    },-->
<!--    methods:{-->
<!--      click:function(){-->
<!--        this.count++;-->
<!--      },-->
<!--      login:function(){-->
<!--        axios.get('http://localhost:8080/user/login', {-->
<!--          params: {-->
<!--            name: this.name,-->
<!--            password:this.password-->
<!--          }-->
<!--        })-->
<!--          .then(function (response) {-->
<!--            console.log(response);-->
<!--          })-->
<!--          .catch(function (error) {-->
<!--            console.log(error);-->
<!--          });-->

<!--      }-->
<!--    }-->
<!--  })-->
<!--</script>-->
<!--</html>-->
