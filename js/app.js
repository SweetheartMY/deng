//导入模块
let express = require("express");
//验证码模块
let svgCaptcha =require("svg-captcha");
//path 路径模板
let path =require("path");

//创建app
let app = express();

//静态托管
app.use(express.static("static"));

//路由no:1
app.get("/login",(req,res)=>{
   res.sendFile(path.join(__dirname,"../views/login.html"));
})
//开启监听
app.listen(8848,"127.0.0.1",()=>{
    console.log("开启监听")
})