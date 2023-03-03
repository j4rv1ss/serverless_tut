
const AWS = require("aws-sdk")
const middy = require("@middy/core")
const httpJsonBodyParser = require("@middy/http-json-body-parser")
const fetchTodo = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient() 
  const { id } = event.pathParameters
  let todo

  try {
    const result = await dynamodb.get({
        TableName:"TodoTable",
        key: { id }
    }).promise()
    todo = result.Item

  } catch (error) {
    console.log(error.message)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};

module.exports = {
  handler : fetchTodo
}
