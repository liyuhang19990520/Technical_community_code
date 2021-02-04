const USER = require("../../model/USER")
const POST = require("../../model/POST")
const SKILLPOST = require('../../model/SKILLPOST')
const COMMENT = require("../../model/COMMENT")
const COLLECT = require("../../model/COLLECT")
const NOTICE = require("../../model/NOTICE")
module.exports = {
  //用户id查找promise
  userIdFind: function (obj) {
    return new Promise((resolve, reject) => {
      USER.findById(obj, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject('没有该用户')
        }
      })
    })
  },
  //用户表查找promise
  usernameFind: function (obj, newObj = {}) {
    return new Promise((resolve, reject) => {
      USER.find(obj, null, newObj, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject('没有该用户')
        }
      })
    })
  },
  //用户表添加promise
  userAdd: function (obj) {
    return new Promise((resolve, reject) => {
      USER.create(obj, (err) => {
        if (!err) {
          resolve('注册成功')
        } else {
          reject('注册失败')
        }
      })
    })
  },
  //用户表修改信息
  userUpdata: function (obj, newObj) {
    return new Promise((resolve, reject) => {
      USER.update(obj, newObj, (err) => {
        if (!err) {
          resolve('修改成功')
        } else {
          reject('没有该用户')
        }
      })
    })
  },
  //用户表删除信息
  userDel: function (obj) {
    return new Promise((resolve, reject) => {
      USER.remove(obj, (err) => {
        if (!err) {
          resolve('删除成功')
        } else {
          reject('删除失败')
        }
      })
    })
  },
  //删除帖子表内容
  postDel: function (obj) {
    return new Promise((resolve, reject) => {
      POST.remove(obj, (err) => {
        if (!err) {
          resolve('删除成功')
        } else {
          reject('删除失败')
        }
      })
    })
  },
  //添加帖子表内容
  postAdd: function (obj) {
    return new Promise((resolve, reject) => {
      POST.create(obj, (err) => {
        if (!err) {
          resolve('注册成功')
        } else {
          reject('注册失败')
        }
      })
    })
  },
  //帖子其他信息查找
  postUserFind: function (obj) {
    return new Promise((resolve, reject) => {
      POST.find(obj, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject('没有该用户')
        }
      })
    })
  },
  //帖子ID查找
  postIdFind: function (obj) {
    return new Promise((resolve, reject) => {
      POST.findById(obj, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject('没有该用户')
        }
      })
    })
  },
  //技术博客ID查找
  skillIdFind: function (obj) {
    return new Promise((resolve, reject) => {
      SKILLPOST.findById(obj, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject('没有该用户')
        }
      })
    })
  },
  //技术博客信息更新
  skillUpdata: function (obj, newObj) {
    return new Promise((resolve, reject) => {
      SKILLPOST.update(obj, newObj, (err) => {
        if (!err) {
          resolve('修改成功')
        } else {
          reject('没有该用户')
        }
      })
    })
  },
  //技术博客其他信息查找
  skillUserFind: function (obj) {
    return new Promise((resolve, reject) => {
      SKILLPOST.find(obj, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject('没有该用户')
        }
      })
    })
  },
  //添加帖子表内容
  skillAdd: function (obj) {
    return new Promise((resolve, reject) => {
      SKILLPOST.create(obj, (err) => {
        if (!err) {
          resolve('技术博客添加成功')
        } else {
          reject('技术博客添加失败')
        }
      })
    })
  },
  //添加评论
  commentAdd: function (obj) {
    return new Promise((resolve, reject) => {
      COMMENT.create(obj, (err) => {
        if (!err) {
          resolve('评论添加成功')
        } else {
          reject('评论添加失败')
        }
      })
    })
  },
  //查找评论
  commentUserFind: function (obj) {
    return new Promise((resolve, reject) => {
      COMMENT.find(obj, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject('没有该评论')
        }
      })
    })
  },
  //删除评论
  commentDel: function (obj) {
    return new Promise((resolve, reject) => {
      COMMENT.remove(obj, (err) => {
        if (!err) {
          resolve('删除成功')
        } else {
          reject('删除失败')
        }
      })
    })
  },
  //添加收藏
  collectAdd: function (obj) {
    return new Promise((resolve, reject) => {
      COLLECT.create(obj, (err) => {
        if (!err) {
          resolve('收藏成功')
        } else {
          reject('收藏失败')
        }
      })
    })
  },
  //删除收藏
  collectRemove: function (obj) {
    return new Promise((resolve, reject) => {
      COLLECT.remove(obj, (err) => {
        if (!err) {
          resolve('删除收藏成功')
        } else {
          reject('删除收藏失败')
        }
      })
    })
  },
  //查找收藏
  collectUserFind: function (obj) {
    return new Promise((resolve, reject) => {
      COLLECT.find(obj, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject('没有该收藏')
        }
      })
    })
  },
  //添加公告
  noticeAdd: function (obj) {
    return new Promise((resolve, reject) => {
      NOTICE.create(obj, (err) => {
        if (!err) {
          resolve('添加公告成功')
        } else {
          reject('添加公告失败')
        }
      })
    })
  },
  //删除公告
  noticeRemove: function (obj) {
    return new Promise((resolve, reject) => {
      NOTICE.remove(obj, (err) => {
        if (!err) {
          resolve('删除公告成功')
        } else {
          reject('删除公告失败')
        }
      })
    })
  },
  //修改公告
  noticeUpdata: function (obj, newObj) {
    return new Promise((resolve, reject) => {
      NOTICE.update(obj, newObj, (err) => {
        if (!err) {
          resolve('修改公告成功')
        } else {
          reject('修改公告失败')
        }
      })
    })
  },
  //id查找公告
  noticeIdFind: function (obj) {
    return new Promise((resolve, reject) => {
      NOTICE.findById(obj, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject('没有此公告')
        }
      })
    })
  },
  //其他条件查找公告
  noticeFind: function (obj) {
    return new Promise((resolve, reject) => {
      NOTICE.find(obj, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject('没有该用户')
        }
      })
    })
  },

}