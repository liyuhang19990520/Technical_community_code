const { usernameFind } = require("./promise")
async function main(req) {
  const userMessage = await usernameFind({ username: req.body.username })
  if (userMessage.length <= 0) {
    return {
      code: 0
    }
  } else {
    if (userMessage[0].password == req.body.pass) {
      return {
        code: 1,
        information: userMessage[0]
      }
    } else {
      return {
        code: 2
      }
    }
  }
}

module.exports = main