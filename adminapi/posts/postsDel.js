
const main = require('../async/postsDelAsync')
module.exports = (req, res) => {
  main(req).then((result) => {
    res.json(result)
  })
}