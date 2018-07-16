//导入模块
let express = require("express");
//验证码模块
let svgCaptcha =require("svg-captcha");
//path 路径模板
let path =require("path");
//导入会话模板
let session =require("express-session");

//创建app
let app = express();

//静态托管
app.use(express.static('views'));

//路由no:1
app.get("/login",(req,res)=>{
    //console.log(req.session);
    //req.session.info = '你来登录页啦';
   res.sendFile(path.join(__dirname,"/views/login.html"));
})
//路由2
app.post("/login",(req,res) =>{
    let userName =req.body.userName;
    let userPass =req.body.userPass;
    let code =req.body.code;
    if(code == read.session.captcha){
        //验证码正确
       req.session.userInfo ={
          userName,
          userPass
       }
       res.redirect('/index');
    }else{
      res.setHeader('content-type', 'text/html');
      res.send('<script>alert("验证码")；window.location.href="/login"</script>')
    }
})
//开启监听
app.listen(8888,"127.0.0.1",()=>{
    console.log("开启监听")
})