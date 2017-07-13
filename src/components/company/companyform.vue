<template>
  <div>
    <mt-field label="公司名" placeholder="请输入公司名" v-model="company.name"></mt-field>
    <br/>
    <mt-button size="large" @click="send" type="primary">保存</mt-button>
    <br/>
    <mt-button size="large" @click="back" type="primary" plain>取消</mt-button>
  </div>
</template>

<script>
export default {
  created () {
    if (this.$route.query.id) {
      this.method = 'put'
      this.$http.get('/api/company/findone', {params: {id: this.$route.query.id}}).then((res) => {
        this.company = res.data
      })
    } else {
      this.method = 'post'
    }
  },
  data () {
    return {
      company: {
        id: '',
        name: '',
      },
      method: '',
    }
  },
  methods: {
    send () {
      if (this.method == 'post') {
        this.$http.post('/api/company/add', this.company).then((res) => {
          console.log(JSON.stringify(res.data))
          this.$router.push('/company/companytable')
        })
      } else {
        this.$http.put('/api/company/put', this.company).then((res) => {
          console.log(JSON.stringify(res.data))
          this.$router.push('/company/companytable')
        })
      }
    },
    back () {
      this.$router.push('/company/companytable')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
