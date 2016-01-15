(function(angular) {
  'use strict';

  var myApp = angular.module('myApp', []);

  myApp.controller('TestController', ['$scope', function($scope) {
    $scope.spices = [{"name":"pasilla", "spiciness":"mild"},
                     {"name":"jalapeno", "spiciness":"hot hot hot!"},
                     {"name":"habanero", "spiciness":"LAVA HOT!!"}];
    $scope.spice = "habanero";
  }]);

  myApp.controller('MainController', ['$scope', function($scope) {
    $scope.timeOfDay = 'morning';
    $scope.name = 'Nikki';
  }]);

  myApp.controller('ChildController', ['$scope', function($scope) {
    $scope.name = 'Mattie';
  }]);

  myApp.controller('GrandChildController', ['$scope', function($scope) {
    $scope.timeOfDay = 'evening';
    $scope.name = 'Gingerbread Baby';
  }]);

  myApp.controller('ArgumentExampleSpicyController', ['$scope', function($scope) {
    $scope.customSpice = "wasabi";
    $scope.spice = 'very';

    $scope.spicy = function(spice) {
        $scope.spice = spice;
    };
  }]);

  myApp.controller('SpicyController', ['$scope', function($scope) {
    $scope.spice = 'very';

    $scope.chiliSpicy = function() {
      $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = function() {
      $scope.spice = 'jalapeño';
    };
  }]);

  myApp.controller('RabbitController', ['$scope', function($scope) {
    $scope.jasper = function() {
      alert("JASPER is a pumpkin");
    };
  }]);

  myApp.controller('InvoiceController', function() {
    this.qty = 1;
    this.cost = 2;
    this.num = 1;
    this.inCurr = 'EUR';
    this.currencies = ['USD', 'EUR', 'CNY'];
    this.usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };

    this.double = function double(value) {
      return value * 2;
    };

    this.total = function total(outCurr) {
      return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
    };
    this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
      return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
    };
    this.pay = function pay() {
      window.alert("Thanks!");
    };
  });
})(window.angular);