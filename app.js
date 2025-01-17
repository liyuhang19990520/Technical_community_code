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
app.post('/userList', require('./adminapi/user/userList'))
//查看用户详情
app.get('/userDetail', require('./adminapi/user/userDetail'))
//保存用户表修改或者添加
app.post('/userSave', require('./adminapi/user/userSave'))
//删除用户以及他所有的帖子以及评论
app.get('/userDel', require('./adminapi/user/userDel'))


//查看公告列表
app.post('/noticesList', require('./adminapi/notices/noticesList'))
//查看公告详情
app.get('/noticesDetail', require('./adminapi/notices/noticesDetail'))
//保存公告表修改或者添加
app.post('/noticesSave', require('./adminapi/notices/noticesSave'))
//删除公告
app.get('/niticesDel', require('./adminapi/notices/niticesDel'))


//查看评论列表
app.post('/commentList', require('./adminapi/comment/commentList'))
//查看评论详情
app.get('/commentDetail', require('./adminapi/comment/commentDetail'))
//删除评论
app.get('/commentDel', require('./adminapi/comment/commentDel'))


//查看公告列表
app.post('/postsList', require('./adminapi/posts/postsList'))
// 查看社区贴详情
app.get('/postsDetail', require('./adminapi/posts/postsDetail'))
//删除社区贴
app.get('/postsDel', require('./adminapi/posts/postsDel'))


//个人中心查看信息
app.post('/adminList', require('./adminapi/admin/adminList'))
//个人中心修改信息
app.post('/adminUpdata', require('./adminapi/admin/adminUpdata'))


//查看技术贴列表
app.post('/SkillPostsList', require('./adminapi/skillposts/skillPostsList'))
// 查看技术贴详情
app.get('/skillPostsDetail', require('./adminapi/skillposts/skillPostsDetail'))
// 技术贴提交表单
app.post('/skillPostsSave', require('./adminapi/skillposts/skillPostsSave'))
//删除社区贴
app.get('/skillPostsDel', require('./adminapi/skillposts/skillPostsDel'))


//管理员登陆
app.post("/adminlogin", require('./adminapi/login/adminlogin'))




app.listen(3000, () => {
  console.log("开启成功")
})
