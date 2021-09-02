
const items = require("../assets/data")
exports.handler = async (event, contex) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items)
  }
}
