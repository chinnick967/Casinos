var express = require("express");
var path = require('path');
var app = express();
app.use(require('prerender-node').set('prerenderServiceUrl', 'http://127.0.0.1:1337/').set('prerenderToken', 'QhomDSDyXK2kyX9CMcls').set('host', '46.101.43.153:3000'));
var shell = require('shelljs');
var mongo = require("mongodb");
var assert = require("assert");
var bodyParser = require("body-parser");
var formidable = require("formidable");
var fs = require('fs');
var countries = require('./setup/countries.js');
var payment = require('./setup/payments.js');
var urls = require('./setup/urls.js');
var dot = require('mongo-dot-notation');
var environment;
// Launch variables
process.argv.forEach((val, index) => {
    environment = val;
});

if (environment == "development") {
    var url = "mongodb://localhost:27017/top-casinos"; // "mongodb://localhost:27017/top-casinos" for local, mongodb://admin:chinnick967@127.0.0.1:27017/top-casinos for server
} else {
    var url = "mongodb://admin:chinnick967@127.0.0.1:27017/top-casinos";
    environment = "production";
}

// Password Encryption
var bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;

var db;
mongo.connect(url, function(err, mydb) {
    if (!err) {
        db = mydb;
        console.log("Connected to Mongodb");
        setup();
    } else {
        console.log("Connection to Mongodb failed: " + err);
        process.exit(1);
    }
});

app.use(express.static(path.resolve(__dirname, './dist')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));

// Routing
app.get('/sitemap.txt', function(req, res) {
    console.log("sitemap");
    res.sendFile("./dist/sitemap.txt");
});

app.get('/', function(req, res) {
    res.sendFile("./dist/index.html");
});

app.get("/get-casinos", function(req, res) {
    var resultArray = [];
    var cursor = db.collection('casinos').find();
    cursor.forEach(function(doc, err) {
        resultArray.push(doc);
    }, function() {
        res.send(resultArray);
    });
});

app.post("/get-data", function(req, res) {
    var resultArray = [];
    var collection = req.body.collection;
        var cursor = db.collection(collection).find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function() {
            res.send(resultArray);
        });
});

app.post("/remove-data", function(req, res) {
    var collection = req.body.collection;
    var title = req.body.title;
    var value = req.body.value;
    var query = {};
    query[title] = value;
    db.collection(collection).remove(query);
    res.send("success");
    generate_sitemap();
});

app.post("/post-data", function(req, res) {
    var item = req.body.item;
    console.log(item.name);
    item.date = new Date();
    checkIfExists(item["collection"], "name", item["name"], function(result, message) {
        message = message || '';
        var response;
        if (result == true) {
            item = checkForImages(item);
            if (item["collection"] != undefined) {
                db.collection(item["collection"]).insertOne(item, function(err, result) {
                    assert.equal(null, err);
                    logEntry(item["collection"] + " was added to the database");
                    res.json({"status": true, "message": message, "id": result.ops[0]['_id']});
                    generate_sitemap();
                });
            } else {
                res.json({"status": false, "message": "Undefined collection, wasn't able to insert it into the database"});
                logEntry("Undefined collection, wasn't able to insert it into the database");
            }
        } else {
            res.json({"status": false, "message": message});
        }
    });
});

app.post("/update-data", function(req, res) {
    var item = req.body.item;
    var collection = req.body.collection;
    var name = req.body.name;
    item = checkForImages(item);
    db.collection(collection).update({name: name}, dot.flatten(item), {upsert : true}, function(err, result) {
        console.log("update");
        console.log(err);
        logEntry(collection + " was updated in the database");
    });
     res.json({"status": true, "message": "Item updated"});
     generate_sitemap();
});

function checkForImages(json) {
    var obj = json;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          var val = obj[key];
          if (typeof val == "string") {
              if (isDataURL(val)) {
                  var ext = getExtension(val);
                  var filename = obj['collection'] + '-' + obj['name'] + '-' + key;
                  filename = filename.replace(/ /g,"_");
                  val = val.replace(/^data:image\/(png|gif|jpeg|jpg|tiff);base64,/,'');
                  fs.writeFile(__dirname + "/dist/assets/admin/" + filename + '.' + ext, val, 'base64', function(err) {

                  });
                  obj[key] = "/assets/admin/" + filename + '.' + ext;
              }
          }
        }
    }
    return obj;
}

function replaceImages(collection) {
    var resultArray = [];
        var cursor = db.collection(collection).find();
        cursor.forEach(function(doc, err) {
            var item = checkForImages(doc);
            var name = doc.name;
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        var update = {};
                        update[key] = item[key];
                        db.collection(collection).update({name: name},{$set : update}, {upsert : true}, function(err, result) {
                            logEntry(collection + " was updated in the database");
                        });
                    }
                }
        }, function() {
           
        });
}

function isDataURL(s) {
    var reg = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
    return !!s.match(reg);
}

function getExtension(string) {
    if (string.includes("image/png")) {
        return "png";
    } else if (string.includes("image/jpg")) {
        return "jpg";
    } else if (string.includes("image/jpeg")) {
        return "jpeg";
    } else if (string.includes("image/gif")) {
        return "gif";
    } else if (string.includes("image/tiff")) {
        return "tiff";
    } else {
        return "jpg";
    }
}

function checkIfExists(collection, title, value, callback) {
    var search = {};
    search[title] = value;
    db.collection(collection).count(search, function(err, cursor) {
        if (cursor == 0 || collection == "bonuses") {
            callback(true, "Successfully added!");
        } else {
            callback(false, "This name already exists");
        }
    });
}

app.post("/createAccount", function(req, res) {
    req.body.role = "user";
        db.collection("accounts").find({username: req.body.username}).toArray(function (err, docs) {
            if (err) {
                res.json({"status": false, "message": "Unable to create account: This username already exists"});
            }
            else {
                if (docs.length == 0) {
                    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                        db.collection("accounts").insertOne({
                            username: req.body.username,
                            password: hash                 
                        }, function(err, result) {
                            if (err) {
                                res.json({"status": false, "message": "Unable to create account: An error has occured please contact the site owner"});
                            } else {
                                res.json({"status": true, "message": "Your account has been created", "username": req.body.username, "password": req.body.password});
                            }
                        });
                    });
                } else {
                    res.json({"status": false, "message": "Unable to create account: This username already exists"});
                }
            }
        });
});

app.post("/validateAccount", function(req, res) {
    var resultArray = [];
    var response = {};
    var cursor = db.collection("accounts").find({username: req.body.username});
    cursor.forEach(function(doc, err) {
        assert.equal(null, err);
        resultArray.push(doc);
    }, function() {
        if (resultArray.length > 0) {
            if (req.body.username != "Admin" && req.body.username != "admin") {
                bcrypt.compare(req.body.password, resultArray[0].password, function(err, result) {
                    if (result) {
                        response.validation = true;
                        response.user = resultArray[0];
                    } else {
                        response.validation = false;
                        response.validationMessage = "The password you have entered is invalid.";
                    }
                    res.json(response);
                });
            } else {
                if (req.body.password == resultArray[0].password) {
                    response.validation = true;
                    response.user = resultArray[0];
                } else {
                    response.validation = false;
                    response.validationMessage = "The password you have entered is invalid.";
                }
                res.json(response);
            }
        } else {
            response.validation = false;
            response.validationMessage = "The username you have entered does not exist.";
            res.json(response);
        }
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

function setup() {
        // countries
        db.collection("countries").remove({});
            countries.list.forEach(function(element) {
                db.collection("countries").insertOne(element, function(err, result) {
                    assert.equal(null, err);
                    logEntry("country was added to the database");
                });
            });
        // payment
        db.collection("payment").remove({});
        payment.list.forEach(function(element) {
            db.collection("payment").insertOne(element, function(err, result) {
                assert.equal(null, err);
                logEntry("payment was added to the database");
            });
        });
        generate_sitemap();
}

function generate_sitemap(callback) {
    var sitemapString = '';
    // base urls
    urls.list.forEach(function(element) {
        sitemapString += element + "\r\n";
    });

    /*createSitemapString("/casino/", "casinos", "name", function(resultString) {
        sitemapString += resultString;
    });*/

    createSitemapString([
        {collection: 'casinos', baseurl: 'http://gamblersupdate.com/casino/', identifier: 'name', replacer: "-"},
        {collection: 'game reviews', baseurl: 'http://gamblersupdate.com/gamereviews/', identifier: 'name', replacer: "-"},
        {collection: 'bonuses', baseurl: 'http://gamblersupdate.com/bonus/', identifier: '_id', replacer: "-"},
        {collection: 'articles', baseurl: 'http://gamblersupdate.com/article/', identifier: '_id', replacer: "-"},
        {collection: 'slots', baseurl: 'http://gamblersupdate.com/slots/', identifier: 'name', replacer: "-"}
    ], function(resultString) {
        sitemapString += resultString;
        fs.writeFile(__dirname + '/dist/sitemap.txt', sitemapString, function(err) {

        });
    });
}

function createSitemapString(pages, callback) {
    var loaded = 0;
    var resultString = "";
    pages.forEach(function(object) {
        var cursor = db.collection(object.collection).find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            if (doc[object.indentifier]) {
                resultString += object.baseurl + doc[object.identifier].toString().replace(/\s/g, object.replacer) + "\r\n";
            }
        }, function() {
            loaded++;
            if (loaded == pages.length) {
                callback(resultString);
            }
        });
    });
}

var dir = __dirname + "/dist/assets/admin/";

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

app.get('*', function(req, res) {
    res.sendFile("./dist/index.html", {"root": __dirname});
});

app.listen(3000);
console.log("Server running on port 3000 in " + environment + " mode");