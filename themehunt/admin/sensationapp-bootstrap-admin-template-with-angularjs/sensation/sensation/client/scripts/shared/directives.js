"use strict";
angular.module("app.directives", [])

.directive("imgHolder", [
  function() {
    return {
      restrict: "A",
      link: function(scope, ele, attrs) {
        return Holder.run({
          images: ele[0]
        });
      }
    };
  }
])

.directive("panelToggle", [
  function() {
    return {
      restrict: "A",
      link: function(scope, element) {
        element.click(function() {
           $(this).parent().parent().next().slideToggle("fast"), $(this).toggleClass("fa-chevron-down fa-chevron-up")
        });
      }
    };
  }
])

.directive("widgetClose", [
  function() {
    return {
      restrict: "A",
      link: function(scope, element) {
        element.click(function() {
          $(this).parent().parent().parent().fadeOut();
        });
      }
    };
  }
])

.directive("toggleProfile", [
  function() {
    return {
      restrict: 'A',
      template: '<a href="javascript:void(0)" ng-click="toggleProfile()"> <i class="fa fa-user"></i> </a>',
      controller: function($scope, $element) {
        $scope.toggleProfile = function() {
          $('#settings').slideToggle();
        };
      }
    };
  }
])
  
.directive("customPage", function() {
  return {
    restrict: "A",
    controller: [
      "$scope", "$element", "$location", function($scope, $element, $location) {
        var addBg, path;
        path = function() {
          return $location.path();
        };
        addBg = function(path) {
          $element.removeClass("body-wide body-lock");
          switch (path) {
            case "/404":
            case "/pages/404":
            case "/pages/500":
            case "/pages/signin":
            case "/pages/signup":
            case "/pages/forgot-password":
              return $element.addClass("body-wide");
            case "/pages/lock-screen":
              return $element.addClass("body-wide body-lock");
          }
        };
        addBg($location.path());
        return $scope.$watch(path, function(newVal, oldVal) {
          if (newVal === oldVal) {
            return;
          }
          return addBg($location.path());
        });
      }
    ]
  };
})

.directive("rightSidebar", [
function () {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.click(function() {
                if ($(this).hasClass('open')) {
                    $('.rsidebar').animate({
                        "right": "-250px"
                    }, 150);
                    $(this).removeClass('open').addClass('closed');
                } else {
                    $(".rsidebar").animate({
                        "right": "0px"
                    }, 150);
                    $(this).removeClass('closed').addClass('open');
                }
            });
         }
      }
   }
])

.directive("toggleSettings", [
function () {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.click(function() {
                if ($(this).hasClass('open')) {
                    $('#config').animate({
                        "right": "-300px"
                    }, 150);
                    $(this).removeClass('open').addClass('closed');
                } else {
                    $("#config").animate({
                        "right": "0px"
                    }, 150);
                    $(this).removeClass('closed').addClass('open');
                }
            });
        }
    }
  }
])

.directive("goBack", [
  function() {
    return {
      restrict: "A",
      controller: [
        "$scope", "$element", "$window", function($scope, $element, $window) {
          return $element.on("click", function() {
            return $window.history.back();
          });
        }
      ]
    };
  }
]);