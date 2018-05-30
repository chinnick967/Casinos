// http://46.101.43.153:3000, local is http://localhost:3000

angular
    .module('app')
    .service('appData', function (messageService, $routeParams, $rootScope, $http) {
        this.messageService = messageService;
        this.loaded = false;
        this.animations = {stop: false};

        this.getData = function(collection, callback) {
            $http.post('/get-data', {collection: collection})
            .then(function successCallback(response) {
                this[collection] = response.data;
                if (collection == "html") {
                    this.setKeys(collection);
                }
                if (collection == "casinos") {
                    this[collection] = this.prettyLinks(this[collection]);
                    this.refreshCurrentCasino();
                }
                if (callback) {
                    callback();
                }
              }.bind(this), function errorCallback(response) {
                this.messageService.message("Failed to fetch collection data for " + collection + ". Please try again later.");
              }.bind(this));
        }

        this.removeData = function(collection, title, value) {
            $.post("/remove-data", { collection: collection, title: title, value: value }, function(data) {
                this.messageService.message("The item has been removed");
                this.getData(collection);
            }.bind(this));
        }.bind(this);
        
        this.getAllData = function(counter) {
            var self = this;
            var counter = counter || 0;
            var arr = ["casinos", "countries", "games", "software", "licenses", "support", "currency", "languages", "payment", "bonuses", "html", "slots", "game reviews", "articles", "Global CSS", "Page CSS", "Header", "comments", "bans", "ips"];

            this.getData(arr[counter], function() {
                if (arr.length > counter + 1){
                    counter++;
                    this.getAllData(counter);
                } else {
                    this.refreshCurrentCasino();
                    console.log("LOADED");
                    window.dispatchEvent(new Event('data-loaded'));
                    $("#loading").addClass("hide-loading");
                    console.log(this);
                    this.loaded = true;
                    //$rootScope.$apply();
                }
            }.bind(self));

        }.bind(this);

        this.searchCollection = function(collection, field, value) {
            var json = this[collection];
            for (var key in json) {
                if (json.hasOwnProperty(key)) {
                    if (json[key][field] == value) {
                        return json[key];
                    }
                }
            }
            return {};
        }.bind(this);

        // Specific Page Data 

        // Current Casino for Casino Page
        /*window.addEventListener('data-loaded', function() {
            refreshCurrentCasino();
        }.bind(this));*/

        this.refreshCurrentCasino = function() {
            for (var x = 0; x < this.casinos.length; x++) {
                if (this.casinos[x].prettylink == $routeParams.casinoName){
                    this.casino = this.casinos[x];
                }
                //$rootScope.$apply();
            }
        }.bind(this);

        this.prettyLinks = function(array) {
            for (var i = 0; i < array.length; i++) {
                array[i].prettylink = array[i].name.replace(/\s+/g, '-');
            }
            return array;
        }

        //////////////////////////////////////////////////

        this.getAllData();

        this.load = function(callback) {
            if (this.loaded) {
                callback();
            } else {
                window.addEventListener('data-loaded', function() {
                    callback();
                });
            }
        }.bind(this);

        this.setKeys = function(collection) {
            var array = this[collection];
            var newarray = [];
            for (var i = 0; i < array.length; i++) {
                newarray[array[i].name] = array[i];
            }
            this[collection] = newarray;
        }.bind(this);

        this.getCasinoByName = function(name) {
            for (var i = 0; i < this.casinos.length; i++) {
                if (this.casinos[i].name == name) {
                    return this.casinos[i];
                }
            }
            return null;
        }

        this.findMatch = function(collection, name, value) {
            if (this[collection] !== undefined) {
                for (var i = 0; i < this[collection].length; i++) {
                    if (this[collection][i][name] == value) {
                        return this[collection][i];
                    }
                }
            } else {
                return null;
            }
        }

        this.checkIfBanned = function(user) {
            for (var i = 0; i < this.bans.length; i++) {
                if (this.bans[i].name == user) {
                    return true;
                }
            }
            return false;
        }

    });