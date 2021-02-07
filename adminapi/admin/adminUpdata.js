
const main = require('../async/adminUpdataAsync')
module.exports = (req, res) => {
  main(req).then((result) => {
    res.send(result)
  })
}