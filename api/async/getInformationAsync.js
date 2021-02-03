const { usernameFind } = require("./promise")
async function main(req) {
  var data = await usernameFind(req.query)
  return data[0]
}
module.exports = main