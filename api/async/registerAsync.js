const { usernameFind, userAdd } = require("./promise")

async function main(req) {
  const userMessage = await usernameFind({ username: req.body.username })
  if (userMessage.length <= 0) {
    await userAdd(req.body)
    return 1
  } else {
    return 0
  }
}


module.exports = main