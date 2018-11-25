<template>
  <div id="app">
    <Header></Header>
    <ul id="nav">
      <li> <router-link to="/recommend">推荐</router-link></li>
      <li> <router-link to="/singer">歌手</router-link></li>
      <li> <router-link to="/rank">排行</router-link></li>
      <li> <router-link to="/search">搜索</router-link></li>
    </ul>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Header from './components/Header/Header'
export default {
  data(){
    return{

    }
  },
  components:{
    Header
  }
}
</script>

<style>
*{padding:0;margin:0;}
ul,ol,li{list-style: none;}
a{text-decoration: none;}
html,body{width: 100%;height:auto;background: #2F2828}
#nav{display: flex;justify-content: space-around;align-items: center;height:30px;}
#nav li a{color: #fff;}
#nav li a.router-link-exact-active{color:#FFCD32;border-bottom: 2px #FFCD32 solid;}
#content{
  width: 100%;
  height: 700px;
  color: #fff;
}
</style>
