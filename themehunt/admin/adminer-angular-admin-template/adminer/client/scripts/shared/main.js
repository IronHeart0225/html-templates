"use strict";
angular.module("app.controllers", ['angular-loading-bar', 'ngTable'])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])

.controller("AppCtrl", [
  "$scope", "$rootScope", function($scope, $rootScope) {
    var $window;
    $window = $(window);
    $scope.main = {
      brand: "AdminerApp",
      name: "Square Design"
    };
    $scope.admin = {
      layout: false,
      menu: false,
      fixedHeader: true,
      fixedSidebar: true,
	  themeID: "24",
      navbarHeaderColor: 'bg-white',
      logo: 'bg-danger',
      asideColor: 'bg-dark'
    };
    $scope.color = {
      primary: "#248AAF",
      success: "#3CBC8D",
      info: "#29B7D3",
      purple: "#7266ba",
      warning: "#FAC552",
      danger: "#E9422E"
    };
  }
])

.controller("HeaderCtrl", ["$scope", function($scope) {}])
.controller("NavContainerCtrl", ["$scope", function($scope) {}])
.controller("NavCtrl", [
  "$scope", "taskStorage", "filterFilter", function($scope, taskStorage, filterFilter) {
    var tasks;
    tasks = $scope.tasks = taskStorage.get();
    $scope.taskRemainingCount = filterFilter(tasks, {
      completed: false
    }).length;
    return $scope.$on("taskRemaining:changed", function(event, count) {
      return $scope.taskRemainingCount = count;
    });
  }
])