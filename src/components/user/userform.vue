<template>
  <div>
    <mt-field label="登录名" placeholder="请输入登录名" v-model="user.name"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="user.password"></mt-field>
    <mt-field label="姓名" placeholder="请输入姓名" v-model="user.fullName"></mt-field>
    <mt-cell title="角色">
      <el-select v-model="user.role" filterable placeholder="请选择角色">
        <el-option
          v-for="item in roles"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </mt-cell>
    <mt-cell title="公司">
      <el-select v-model="user.company" filterable placeholder="请选择公司">
        <el-option
          v-for="item in companys"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </mt-cell>
    <mt-field label="电话" placeholder="请输入电话" v-model="user.phone"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" v-model="user.mail"></mt-field>
    <br/>
    <mt-button size="large" @click="send" type="primary">保存</mt-button>
    <br/>
    <mt-button size="large" @click="back" type="primary" plain>取消</mt-button>
  </div>
</template>

<script>
export default {
  created () {
  	if (this.$route.query._id) {
  		this.method = 'put'
  		this.$http.get('/api/user/findone', {params: {_id: this.$route.query._id}}).then((res) => {
	        this.user = res.data
  		})
  	} else {
  		this.method = 'post'
  	}
    this.findrole()
    this.findcompany()
  },
  data () {
    return {
      user: {
        _id: '',
        name: '',
        password: '',
        fullName: '',
        role: '',
        company: '',
        phone: '',
        mail: ''
      },
      roles: [],
      companys: [],
      method: '',
    }
  },
  methods: {
    findrole () {
      this.$http.get('/api/role/findall').then(res => {
        console.log(JSON.stringify(res.data))
        for (var k in res.data) {
          this.roles.push({value: res.data[k].fullName, label: res.data[k].fullName})
        }
      })
    },
    findcompany () {
      this.$http.get('/api/company/findall').then(res => {
        console.log(JSON.stringify(res.data))
        for (var k in res.data) {
          this.companys.push({value: res.data[k].name, label: res.data[k].name})
        }
      })
    },
    send () {
      if (this.method == 'post') {
	      this.$http.post('/api/user/add', this.user).then((res) => {
	        console.log(JSON.stringify(res.data))
	        this.$router.push('/user/usertable')
	      })
      } else {
      	this.$http.put('/api/user/put', this.user).then(() => {
      		this.$router.push('/user/usertable')
  		  })
      }
    },
    back () {
      this.$router.push('/user/usertable')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
