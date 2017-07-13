# mongodb mongoose

> 使用vue-cli+node+express+mongod创建了一个简单的项目，包含用户、用户角色、用户所属公司三大块。        
  查看vue-cli+node+express+mysql项目的，切换到mongod分支上

## Build Setup

``` bash
# install dependencies
npm install

# 安装完数据库后，启动mongodb(windows下)
mongod.exe

# 新开一个窗口，连接mongodb
mongo.exe

# serve with hot reload at localhost:3000
npm run dev

# 查看
打开浏览器3000端口，切换成移动端查看
```
## 添加数据（按图片步骤添加）

### 1.先添加role（角色）里的数据
![image](https://github.com/Yicoding/vue-node-express-mysql-mongod/raw/mongod/src/assets/role.png)

### 2.添加company(公司)数据
![image](https://github.com/Yicoding/vue-node-express-mysql-mongod/raw/mongod/src/assets/company.png)

### 3.最后添加user(用户)数据 （用户里的数据是关联公司和角色的，先添加公司和角色，添加用户的时候对所属公司和角色进行选择）
![image](https://github.com/Yicoding/vue-node-express-mysql-mongod/raw/mongod/src/assets/user.png)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
