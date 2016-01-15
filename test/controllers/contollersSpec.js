describe('testController function', function() {

  describe('testController', function() {
    var $scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function($injector, $rootScope, $controller) {
      $scope = $rootScope.$new();
      var testController = $injector.get('myApp.TestController');
      $controller('TestController', {$scope: $scope});
    }));

    it('should create "spices" model with 3 spices', function() {
      expect($scope.spices.length).toBe(3);
    });

    it('should set the default value of spice', function() {
      expect($scope.spice).toBe('habanero');
    });
  });
});