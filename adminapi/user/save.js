
const main = require('../async/saveAsync')
module.exports = (req,res)=>{
  main(req).then((result)=>{
    res.json(result)
  })
}