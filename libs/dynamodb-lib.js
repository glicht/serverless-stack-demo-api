import AWS from "aws-sdk";
import XRay from 'aws-xray-sdk';

XRay.captureAWS(AWS); //standard capture code of X-Ray to catch AWS SDK calls

AWS.config.update({ region: "us-east-1" });

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}
