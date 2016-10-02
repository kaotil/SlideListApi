'use strict';
console.log('Loading function');
var AWS = require("aws-sdk");
var dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

    var params = {
        TableName: "slide_list",
        ScanIndexForward:"false"
    };
    
    if (event.num) {
        params.KeyConditionExpression = "env = :env AND num = :num";
        params.ExpressionAttributeValues = {":env": event.env, ":num": event.num};
        
    } else {
        params.KeyConditionExpression = "env = :env";
        params.ExpressionAttributeValues = {":env": event.env};
    }

    dynamo.query(params, callback);
};
