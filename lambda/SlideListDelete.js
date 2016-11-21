'use strict';
console.log('Loading function');
var AWS = require("aws-sdk");
var dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

    var params = {
        TableName: "slide_list",
        Key:{
            "env": event.key.env,
            "num": event.key.num
        }
    };
    
    dynamo.delete(params, callback);
};
