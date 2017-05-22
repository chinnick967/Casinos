window.jQuery = window.$ = require("../node_modules/jquery/dist/jquery.min.js");
var angular = require("../node_modules/angular/angular.min.js");
require("../node_modules/bootstrap/dist/js/bootstrap.min.js");
require("../node_modules/bootstrap/dist/css/bootstrap.css");
require("./app/header.js");
require("../node_modules/angular-route/angular-route.min.js");
require("./app/routing.js");
require("./app/top-tabs.js");
require("./app/services.js");
require("./app/side-bar.js");
require("./app/casino-games.js");
require("./app/latest-articles.js");
require("./app/latest-bonuses.js");
require("./app/newest-games.js");
require("./app/top-categories.js");
require("./app/casino-stories.js");
require("./app/home-summary.js");
require("./app/subscription.js");
require("./app/sticky-footer.js");
require("./app/login.js");
require("./app/message.js");
require("./app/admin-panel.js");
require("./app/add-item.js");

// Services
require("./app/services/login-service.js");
require("./app/services/message-service.js");