var controllers = angular.module('controllers', ['services']);
  controllers.controller('TestController', ['$scope', function($scope) {
    $scope.spices = [{"name":"pasilla", "spiciness":"mild"},
                     {"name":"jalapeno", "spiciness":"hot hot hot!"},
                     {"name":"habanero", "spiciness":"LAVA HOT!!"}];
    $scope.spice = "habanero";
  }]);

  controllers.controller('MainController', ['$scope', function($scope) {
    $scope.timeOfDay = 'morning';
    $scope.name = 'Nikki';
  }]);

  controllers.controller('ChildController', ['$scope', function($scope) {
    $scope.name = 'Mattie';
  }]);

  controllers.controller('GrandChildController', ['$scope', function($scope) {
    $scope.timeOfDay = 'evening';
    $scope.name = 'Gingerbread Baby';
  }]);

  controllers.controller('ArgumentExampleSpicyController', ['$scope', function($scope) {
    $scope.customSpice = "wasabi";
    $scope.spice = 'very';

    $scope.spicy = function(spice) {
        $scope.spice = spice;
    };
  }]);

  controllers.controller('SpicyController', ['$scope', function($scope) {
    $scope.spice = 'very';

    $scope.chiliSpicy = function() {
      $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = function() {
      $scope.spice = 'jalapeño';
    };
  }]);

  controllers.controller('RabbitController', ['$scope', function($scope) {
    $scope.jasper = function() {
      alert("JASPER is a pumpkin");
    };
  }]);

  controllers.controller('InvoiceController', ['currencyConverter', function(currencyConverter) {
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'EUR';
    this.currencies = currencyConverter.currencies;

    this.total = function total(outCurr) {
      return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
    };
    this.pay = function pay() {
      window.alert("Thanks!");
    };
  }]);