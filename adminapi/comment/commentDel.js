
const main = require('../async/commentDelAsync')
module.exports = (req, res) => {
  main(req).then((result) => {
    res.json(result)
  })
}