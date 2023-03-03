
const AWS = require("aws-sdk")
const middy = require("@middy/core")
const httpJsonBodyParser = require("@middy/http-json-body-parser")
const updateTodo = async (event) => {

  const dynamodb = AWS.DynamoDB.DocumentClient() 
  const {completed}= event.body
  const { id } = event.pathParameters
 

 const newTodo = {
  id,
  todo,
  createdAt,
  completedAt: false
 }
 await dynamodb.update({
  TableName:"TodoTable",
  key:{ id },
  updateExpression : 'set completed = :completed',
  ExpressionAttributeValues :{
    ':completed' : completed
  },
  ReturnValues : "ALL_NEW"
  
 }).promise() 

  return {
    statusCode: 200,
    msg: "Todo Updated"
  };
};
 
module.exports = {
  handler : middy(updateTodo).use(httpJsonBodyParser())
}
