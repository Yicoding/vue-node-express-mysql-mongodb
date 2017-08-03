# 移动端项目

> 使用vue-cli+node+express+mysql创建了一个简单的项目，包含用户、用户角色、用户所属公司三大块。    
  查看vue-cli+node+express+mongodb项目的，切换到mongodb分支上

## Build Setup

``` bash
# 本地启动mysql(我的系统是windows)
使用MySQL Workbench 打开mysql并连接

# server 目录下有runoob.sql数据库
在数据库runoob中创建user、company、role三张表

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# 查看
打开浏览器8080端口，切换成移动端查看
```
## 添加数据（按图片步骤添加）

### 1.先添加role（角色）里的数据
![image](https://github.com/Yicoding/vue-node-express-mysql-mongod/raw/mongod/src/assets/role.png)

### 2.添加company(公司)数据
![image](https://github.com/Yicoding/vue-node-express-mysql-mongod/raw/mongod/src/assets/company.png)

### 3.最后添加user(用户)数据 （用户里的数据是关联公司和角色的，先添加公司和角色，添加用户的时候对所属公司和角色进行选择）
![image](https://github.com/Yicoding/vue-node-express-mysql-mongod/raw/mongod/src/assets/user.png)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
