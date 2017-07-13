import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import user from 'components/user/user'
import usertable from 'components/user/usertable'
import userform from 'components/user/userform'
import company from 'components/company/company'
import companytable from 'components/company/companytable'
import companyform from 'components/company/companyform'
import role from 'components/role/role'
import roletable from 'components/role/roletable'
import roleform from 'components/role/roleform'

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
    	path: '/user',
  		component: user,
      children: [
        {
          path: '/',
          component: usertable
        },
        {
          path: 'usertable',
          component: usertable
        },
        {
          path: 'userform',
          component: userform
        },
      ]
    },
    {
    	path: '/company',
  		component: company,
      children: [
        {
          path: '/',
          component: companytable
        },
        {
          path: 'companytable',
          component: companytable
        },
        {
          path: 'companyform',
          component: companyform
        },
      ]
    },
    {
    	path: '/role',
  		component: role,
      children: [
        {
          path: '/',
          component: roletable
        },
        {
          path: 'roletable',
          component: roletable
        },
        {
          path: 'roleform',
          component: roleform
        },
      ]
    },
    {
      path: '*',
      redirect: '/user/usertable'
    }
  ]
})
