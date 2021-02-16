
const main = require('../async/skillPostsDelAsync')
module.exports = (req, res) => {
  main(req).then((result) => {
    res.json(result)
  })
}