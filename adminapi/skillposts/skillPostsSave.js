
const main = require('../async/skillPostsSaveAsync')
module.exports = (req,res)=>{
  main(req).then((result)=>{
    res.json(result)
  })
}