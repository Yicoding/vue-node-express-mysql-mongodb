<template>
  <div>
    <mt-header fixed title="固定在顶部" style="z-index: 999;"></mt-header>
    <div class="section">
      <mt-navbar>
        <mt-tab-item><router-link to="/user">用户</router-link></mt-tab-item>
        <mt-tab-item><router-link to="/company">公司</router-link></mt-tab-item>
        <mt-tab-item><router-link to="/role">角色</router-link></mt-tab-item>
      </mt-navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section {
    margin-top: 50px;
  }
  .active {
    color: #26a2ff;
  }
  a {
    text-decoration: none;
    color: black;
  }
</style>
