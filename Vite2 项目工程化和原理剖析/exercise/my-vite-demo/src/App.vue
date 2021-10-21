<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from 'comp/HelloWorld.vue'
import logo from '@/assets/logo.png'

// 导入 Module css
import classes from '@/App.module.css'

// Online JSON
// fetch('/api/users')
//   .then(res => res.json())
//   .then(users => console.log(users))

// Mock Data
fetch('/api-dev/users')
  .then(res => res.json())
  .then(users => console.log(users))
</script>

<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <img alt="Vue logo" :src="logo" />
  <div :class="classes.logo"></div>
  <a href="https://cn.vitejs.dev/">ViteJS</a>
  <input type="text" placeholder="请输入你的用户名">
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style scoped>
  img {
    border: 1px solid #000;
  }
  ::placeholder {
    color: blue;
  }
</style>

<style scoped lang="scss">
  $link-color: #f00;
  a {
    color: $link-color;
  }
</style>
