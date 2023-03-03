
const AWS = require("aws-sdk")
const middy = require("@middy/core")
const httpJsonBodyParser = require("@middy/http-json-body-parser")
const fetchTodos = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient() 
  let todos 

  try {
    const result = await dynamodb.scan({TableName:"TodoTable"}).promise()
    todos = result.Items

  } catch (error) {
    console.log(error.message)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};

module.exports = {
  handler : middy(fetchTodos).use(httpJsonBodyParser())
}
