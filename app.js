const app = require("express")();
const bodyParser = require('body-parser');
const db = require('./model/db')


app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({
  limit: '50mb', extended: true
}))

//跨域
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", "3.2.1");
  if (req.method == "PTIONS") res.send(200);
  else next();
});


//注册
app.post("/register", require('./api/user/register'))
//登录
app.post("/login", require('./api/user/login'))
//添加帖子
app.post("/addpost", require('./api/post/addPost'))
//帖子列表
app.get("/postlist", require('./api/post/postlist'))
// 技术博客列表
app.get("/skillpostList", require('./api/skillpost/SkillPostList'))
// 详情
app.get("/detail", require('./api/post/detail'));
// 评论列表
app.get("/commentlist", require('./api/comment/commentlist'))
// 添加收藏
app.get("/addcollect", require('./api/collect/addCollect'))
// 我的收藏
app.post("/mycollect", require('./api/collect/mycollect'))
// 我的社区贴
app.post("/mycommunity", require('./api/post/mycommunity'))
// 我的技术贴
app.post("/mySkillpost", require('./api/skillpost/mySkillpost'))
// 搜索
app.get("/search", require('./api/skillpost/search'))
// 发评论
app.post("/addcomment", require('./api/comment/addcomment'))
// 修改信息
app.post("/alterMess", require('./api/user/alterMess'))
// 获取当前登录者信息
app.get("/getInformation", require('./api/user/getInformation'))
// 获取当前登录者信息
app.post("/updatainfor", require('./api/user/updatainfor'))
// 我的评论
app.post("/mycomments", require('./api/comment/mycomments'))
// 公告列表
app.get("/noticelist", require('./api/notice/noticelist'))
// 点击查看公告
app.post("/examine", require('./api/notice/examine'))

//查看用户列表
app.post('/userList',require('./adminapi/user/userList'))
//查看用户详情
app.get('/userDetail',require('./adminapi/user/userDetail'))
//保存用户表修改或者添加
app.post('/save',require('./adminapi/user/save'))



app.listen(3000,() => {
  console.log("开启成功")
})
