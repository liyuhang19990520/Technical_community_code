
const main = require('../async/userSaveAsync')
module.exports = (req,res)=>{
  main(req).then((result)=>{
    res.json(result)
  })
}