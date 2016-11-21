'use strict';
console.log('Loading function');
var AWS = require("aws-sdk");
var dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

    var params = {
        TableName: "slide_list",
        Item: {
            env: event.item.env,
            num: event.item.num,
            date: event.item.date,
            title: event.item.title,
            description: event.item.description
        }
    };

    dynamo.put(params, callback);
};
