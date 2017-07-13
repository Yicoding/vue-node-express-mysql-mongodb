<template>
  <div>
    <mt-button @click.native="add" size="large">新增</mt-button>
    <br/>
    <el-table
      :data="data"
      border
      style="width: 100%">
      <el-table-column
        fixed type="index"
        label="序号" width="65">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template scope="scope">
          <el-button type="text" size="small" @click="putcompany(scope.row.id)">编辑</el-button>
          <el-button type="text" size="small" @click="delcompany(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
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
      this.$http.get('/api/company/findall').then(res => {
        console.log(JSON.stringify(res.data))
        this.data = res.data
      })
    },
    add () {
      this.$router.push('/company/companyform')
    },
    putcompany (data) {
      this.$router.push({path: '/company/companyform', query: {id: data}})
    },
    delcompany (data) {
      this.$http.delete('/api/company/' + data).then(() => {
        this.findall()
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
