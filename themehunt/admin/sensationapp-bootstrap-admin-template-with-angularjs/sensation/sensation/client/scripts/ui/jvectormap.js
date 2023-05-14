"use strict";
angular.module("app.ui.jvectormap", []).directive("uiJvectormap", [
  function() {
    return {
      restrict: "A",
      scope: {
        options: "="
      },
      link: function(scope, ele, attrs) {
        var options;
        options = scope.options;
        return ele.vectorMap(options);
      }
    };
  }
]).controller("jvectormapCtrl", [
  "$scope", function($scope) {
    var usa_markers, world_marker_data;
    world_marker_data = [
      {
        latLng: [41.90, 12.45],
        name: 'Vatican City'
      }, {
        latLng: [55.75, 37.61],
        name: 'Moscow'
      }, {
        latLng: [52.52, 13.40],
        name: 'Berlin'
      }, {
        latLng: [37.77, -122.41],
        name: 'San Francisco'
      }, {
        latLng: [3.2, 73.22],
        name: 'Maldives'
      }, {
        latLng: [32.71, -117.16],
        name: 'San Diego'
      }, {
        latLng: [40.71, -74.00],
        name: 'New York'
      }, {
        latLng: [47.60, -122.33],
        name: 'Seattle'
      }, {
        latLng: [1.3, 103.8],
        name: 'Singapore'
      }, {
        latLng: [41.87, -87.62],
        name: 'Chicago'
      }, {
        latLng: [26.02, 50.55],
        name: 'Bahrain'
      }
    ];
    usa_markers = [
      {
        latLng: [40.71, -74.00],
        name: 'New York'
      }, {
        latLng: [47.60, -122.33],
        name: 'Seattle'
      }, {
        latLng: [34.05, -118.24],
        name: 'Los Angeles'
      }, {
        latLng: [37.77, -122.41],
        name: 'San Francisco'
      }, {
        latLng: [41.87, -87.62],
        name: 'Chicago'
      }, {
        latLng: [29.76, -95.36],
        name: 'Houston'
      }, {
        latLng: [39.95, -75.16],
        name: 'Philadelphia'
      }, {
        latLng: [38.90, -77.03],
        name: 'Washington'
      }
    ];
    $scope.Jvusamap = {
      map: 'us_aea_en',
      zoomButtons: false,
      markers: usa_markers,
      normalizeFunction: 'polynomial',
      regionsSelectable: true,
      markersSelectable: true,
      backgroundColor: '#ffffff',
      zoomOnScroll: true,
      selectedRegion: "MO",
      regionStyle: {
        initial: {
          fill: '#00d5e6'
        },
        hover: {
          fill: '#57d016'
        }
      },
      markerStyle: {
        initial: {
          fill: '#FAC552',
          stroke: '#FAC552',
          'fill-opacity': 1,
          'stroke-width': 8,
          'stroke-opacity': 0.3
        }
      },
      series: {
        markers: {
          attribute: 'r',
          scale: [5, 15],
          values: [187.70, 255.16, 310.69, 605.17, 248.31, 107.35, 217.22]
        }
      }
    };
    return $scope.Jvworldmap = {
      map: 'world_mill_en',
      zoomButtons: true,
      markers: world_marker_data,
      normalizeFunction: 'polynomial',
      regionsSelectable: true,
      markersSelectable: true,
      backgroundColor: '#ffffff',
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: '#000000',
          'fill-opacity': 1,
          stroke: 'none',
          "stroke-width": 0,
          "stroke-opacity": 1
        },
        hover: {
          fill: $scope.color.success
        }
      },
      series: {
        regions: {
          scale: ['#C8EEFF', '#0071A4'],
          normalizeFunction: 'polynomial'
        },
        markers: {
          attribute: 'r',
          scale: [5, 15],
          values: [187.70, 255.16, 310.69, 605.17, 248.31, 107.35, 217.22]
        }
      },
      markerStyle: {
        initial: {
          fill: '#E9422E',
          stroke: '#E9422E',
          'fill-opacity': 1,
          'stroke-width': 8,
          'stroke-opacity': 0.3
        },
        hover: {
          stroke: 'black',
          'stroke-width': 2
        }
      }
    };
  }
]);