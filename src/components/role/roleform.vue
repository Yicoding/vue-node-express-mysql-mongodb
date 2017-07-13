<template>
  <div>
    <mt-field label="角色" placeholder="请输入角色" v-model="role.name"></mt-field>
    <mt-field label="角色名" placeholder="请输入角色名" v-model="role.fullName"></mt-field>
    <mt-button @click.native="send" size="large" type="primary">保存</mt-button>
    <br/>
    <mt-button size="large" @click="back" type="primary" plain>取消</mt-button>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  created () {
    if (this.$route.query.id) {
    	this.method = 'put'
    	this.$http.get('/api/role/findone', {params: {id: this.$route.query.id}}).then((res) => {
    		console.log(JSON.stringify(res.data))
	        this.role = res.data
  		})
    } else {
    	this.method = 'post'
    }
  },
  data () {
    return {
      role: {
        id: '',
        name: '',
        fullName: '',
      },
      method: '',
    }
  },
  methods: {
  	send () {
  		if (this.method == 'post') {
  			this.$http.post('/api/role/add', this.role).then(res => {
	        console.log(JSON.stringify(res.data))
	        this.$router.push('/role/roletable')
    		})
  		} else {
  			this.$http.put('/api/role/put', this.role).then(res => {
	        console.log(JSON.stringify(res.data))
	        this.$router.push('/role/roletable')
  			})
  		}
  	},
    back () {
      this.$router.push('/role/roletable')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
