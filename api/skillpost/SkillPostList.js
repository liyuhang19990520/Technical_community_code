const main = require("../async/skillListAsync")
module.exports = (req, res) => {
  main().then((result) => {
    res.send(result)
  })
}