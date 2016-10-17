# SlideListApi

- The Lambda functions written by node.js.
- DynamoDB is renewed.

## Usage
0. Under the /lambda directory sorces make a Lambda function.
0. Make a API Gateway and setting method.
0. Call to API.

### SAMPLES

#### GET
```
curl -X GET https://api.kaotil.com/v1/slide

- set number
curl -X GET https://api.kaotil.com/v1/slide/1
```

#### POST
```
curl -H "x-api-key: XXXXXXXXX" -X POST -d '{ "item": { "env": "prd", "num": 1, "date": "2016/01/01", "title": "test", "description": "test" } }' https://api.kaotil.com/stg/slide

- data json
{ 
  "item":{
		"env": "prd",
		"num": 1,
		"date": "2016/01/01",
		"title": "test",
		"description": "test"
	}
}
```

#### PUT
```
curl -H "x-api-key: XXXXXXXXX" -X PUT -d '{ "key": {"env": "prd", "num": 1}, "item": { "date": "2016/01/01", "title": "test1", "description": "test1" } }' https://api.kaotil.com/stg/slide

- data json
{ 
    "key": {
        "env": "prd",
        "num": 1
    },
    "item":{
        "date": "2016/01/01",
        "title": "test1",
        "description": "test1"
    }
}
```

#### DELETE
```
curl -H "x-api-key: XXXXXXXXX" -X DELETE -d '{ "key": {"env": "prd", "num": 1} }' https://api.kaotil.com/stg/slide

- data json
{ 
    "key": {
        "env": "prd",
        "num": 1
    }
}
```
