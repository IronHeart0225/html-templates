"use strict";

angular.module("FullscreenApp", [])

.directive("fullscreenMode", [
  function() {
    return {
      restrict: 'A',
      template: '<a href="javascript:void(0)" ng-click="toggleFullscreen()" class="expand" id="toggle-fullscreen"> <i class="fa fa-expand"></i> </a>',
      controller: function($scope, $element) {
        $scope.toggleFullscreen = function() {
			$(document).toggleFullScreen()
            $('#toggle-fullscreen .fa').toggleClass('fa-expand fa-compress');
        };
      }
    };
  }
])

.directive("fullscreenWidget", [
  function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
            element.click(function() {
                var panel = $(this).closest('.panel');
                panel.toggleClass('widget-fullscreen');
                $(this).toggleClass('fa-expand fa-compress');
                $('body').toggleClass('fullscreen-widget-active')

            });
        }
    };
  }
])