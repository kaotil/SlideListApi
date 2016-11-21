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
        },
        ReturnValues:"UPDATED_NEW"
    };

    var update_set = 'set ';
    var update_val = {};

    if (event.item.date) {
        update_set += '#dt = :d ';
        update_val[":d"] = event.item.date;
        params.ExpressionAttributeNames  = {"#dt": 'date'};
    }

    if (event.item.title) {
        if (update_set != 'set ') {
            update_set += ', ';
        }
        update_set += 'title = :t ';
        update_val[":t"] = event.item.title;
    }

    if (event.item.description) {
        if (update_set != 'set ') {
            update_set += ', ';
        }
        update_set += 'description = :desc ';
        update_val[":desc"] = event.item.description;
    }

    params.UpdateExpression = update_set;
    params.ExpressionAttributeValues = update_val;

    dynamo.update(params, callback);
};
