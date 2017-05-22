var express = require("express");
var path = require('path');
var app = express();
var mongo = require("mongodb");
var assert = require("assert");
var bodyParser = require("body-parser");
var formidable = require("formidable");
var fs = require('fs');

var url = "mongodb://localhost:27017/top-casinos";

app.use(express.static(path.resolve(__dirname, './dist')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));

// Routing
app.get('/', function(req, res) {
    res.sendFile("./dist/index.html");
});

app.get("/get-casinos", function(req, res) {
    var resultArray = [];
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('casinos').find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function() {
            db.close();
            res.send(resultArray);
        });
    });
});

app.post("/post-data", function(req, res) {
    var item = req.body.item;
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        validate(item, function(result, message) {
            message = message || '';
            var response;
            if (result == true) {
                if (item["collection"] != undefined) {
                    db.collection(item["collection"]).insertOne(item, function(err, result) {
                        assert.equal(null, err);
                        logEntry(item["collection"] + " was added to the database");
                        res.json({"status": true, "message": message});
                        db.close();
                    });
                } else {
                    logEntry("Undefined collection, wasn't able to insert it into the database");
                }
            } else {
                res.json({"status": false, "message": message});
                db.close();
            }
        });
    });
});

function validate(item, callback) {
    
    if (item["collection"] == "casinos") {
        if (item["name"].indexOf("+") >= 0) {
            callback(false, "Your casino name cannot contain a + as this is used to replace spaces in the generated URL");
            return;
        }
        if (checkIfExists(item["collection"], "name", item["name"])) {
            callback(false, "This casino name already exists");
            return;
        }
    }
    callback(true);
}

function checkIfExists(collection, title, value) {
    var search = {};
    search[title] = value;
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        db.collection(collection).count(search, function(err, cursor) {
            if (cursor == 0) {
                return true;
            } else {
                return false;
            }
        });
    });
}

app.post("/createAccount", function(req, res) {
    req.body.role = "user";
    console.log(req);
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        //db.collection("accounts").insertOne({"username": req.body.username});
        //db.collection("accounts").remove({username: req.body.username});
        db.collection("accounts").find({username: req.body.username}).toArray(function (err, docs) {
            console.log(req.body);
            if (err) {
                console.log('Error');
                console.log(err);
                res.json({"status": false, "message": "Unable to create account: This username already exists"});
            }
            else {
                console.log(docs.length);
                if (docs.length == 0) {
                    console.log("docs not equal to 0");
                    db.collection("accounts").insertOne({
                        username: req.body.username,
                        password: req.body.password                  
                    }, function(err, result) {
                        console.log("Inserted");
                        if (err) {
                            console.log('Error');
                            console.log(err);
                            res.json({"status": false, "message": "Unable to create account: An error has occured please contact the site owner"});
                        } else {
                            res.json({"status": true, "message": "Your account has been created", "username": req.body.username, "password": req.body.password});
                        }
                    });
                } else {
                    res.json({"status": false, "message": "Unable to create account: This username already exists"});
                }
            }
        });
    });
});

app.post("/validateAccount", function(req, res) {
    var resultArray = [];
    var response = {};
    mongo.connect(url, function(err, db) {
        var cursor = db.collection("accounts").find({username: req.body.username});
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function() {
            if (resultArray.length > 0) {
                if (resultArray[0].password == req.body.password) {
                    response.validation = true;
                    response.user = resultArray[0];
                } else {
                    response.validation = false;
                    response.validationMessage = "The password you have entered is invalid.";
                }
            } else {
                response.validation = false;
                response.validationMessage = "The username you have entered does not exist.";
            }

            db.close();
            res.json(response);
        });
    });
});

function logEntry(message) {
    fs.appendFile('log.txt', message + "\r\n");
}

function createFolder(dir) {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

app.listen(3000);
console.log("Server running on port 3000");