<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/store">Store Example</router-link></li>
      <li><router-link to="/bar">Bar</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>
