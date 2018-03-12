<template>
  <div>
    <mt-button @click.native="add" size="large">新增</mt-button>
    <br/>
    <el-table
      :data="data"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="角色">
      </el-table-column>
      <el-table-column
        prop="fullName"
        label="角色名" width="140">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="putrole(scope.row.id)">编辑</el-button>
          <el-button type="text" size="small" @click="deleterole(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import qs from 'qs'
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
      this.$http.get('/api/role/findall').then(res => {
        console.log(JSON.stringify(res.data))
        this.data = res.data
      })
    },
    add () {
      this.$router.push('/role/roleform')
    },
    putrole (data) {
      this.$router.push({path: '/role/roleform', query: {id: data}})
    },
    deleterole (data) {
      this.$http.delete('/api/role/' + data).then(res => {
        this.findall()
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
