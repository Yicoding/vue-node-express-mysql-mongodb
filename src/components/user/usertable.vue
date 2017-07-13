<template>
  <div>
    <mt-button size="large" @click="add">新增</mt-button>
    <br/>
    <el-table
      :data="data"
      border
      style="width: 100%">
      <el-table-column
        fixed
        label="序号" type="index"
        width="65">
      </el-table-column>
      <el-table-column
        prop="name"
        label="登录名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="fullName"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="role.fullName"
        label="角色"
        width="100">
      </el-table-column>
      <el-table-column
        prop="company.name"
        label="公司"
        width="120">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="200">
      </el-table-column>
      <el-table-column
        prop="mail"
        label="邮箱"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template scope="scope">
          <el-button type="text" size="small" @click="putuser(scope.row.id)">编辑</el-button>
          <el-button type="text" size="small" @click="deluser(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  created () {
    this.findall()
  },
  data () {
    return {
      data: [],
    }
  },
  methods: {
    findall () {
      this.$http.get('/api/user/findall').then((res) => {
        this.data = res.data
      })
    },
    add () {
      this.$router.push('/user/userform')
    },
    putuser (data) {
      this.$router.push({path: '/user/userform', query: {id: data}})
    },
    deluser (data) {
      this.$http.delete('/api/user/' + data).then(() => {
        this.findall()
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
