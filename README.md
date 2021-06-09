# nwt-exper-admin

## 2021.6.9

这两天所实现的功能：
课程实验管理：添加课程基本信息
实验室预约：基于实验课程和实验室进行预约，并在提交预约前进行冲突检测，若上课人数多于机器数量或所预约的实验室在预约时间被占用，则不通过冲突检测，不能进行预约；预约成功后排期表同步更新

## 2021.6.6

实现了以下拉选择实验室，实验室以基于星期的课表样式，显示18周内每星期每1节的占用其情况。

## 2021.6.4

总结一下上传GitHub步骤：
1.git add .
2.git commit -m "nwt-exper-admin"
3.git config --global http.sslVerify "false" //解决SSL报错问题
4.git push -u origin master

## 2021.6.3

实现了基于axios和mock的匹配账号密码登录
实现了显示登录用户的个人信息
写好了修改个人信息和修改密码的ui，还没有实现

## 2021.5.31

实现了管理员端和教师端的分页显示，基于双向绑定+路由传参

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
