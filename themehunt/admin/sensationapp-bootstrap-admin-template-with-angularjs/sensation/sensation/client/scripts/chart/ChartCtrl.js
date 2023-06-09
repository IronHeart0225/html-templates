/***********************************
 :: Angular Easy Pie Chart 
 ***********************************/

"use strict";
angular.module("app.chart.ctrl", [])

.controller("chartCtrl", [
  "$scope", function($scope) {
	  
    $scope.easypiechartxs1 = {
      percent: 45,
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        barColor: $scope.color.danger,
        lineCap: "round",
        size: 80,
        lineWidth: 7
      }
    };
	
    $scope.easypiechartxs2 = {
      percent: 60,
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        barColor: $scope.color.danger,
        lineCap: "round",
        size: 80,
        lineWidth: 7
      }
    };
	
    $scope.easypiechartxs3 = {
      percent: 75,
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        barColor: $scope.color.danger,
        lineCap: "round",
        size: 80,
        lineWidth: 7
      }
    };
	
    $scope.easypiechartxs4 = {
      percent: 80,
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        barColor: $scope.color.danger,
        lineCap: "round",
        size: 80,
        lineWidth: 7
      }
    };
	
    $scope.easypiechart = {
      percent: 65,
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        barColor: $scope.color.danger,
        lineCap: "round",
        size: 140,
        lineWidth: 5
      }
    };
	
    $scope.easypiechart2 = {
      percent: 35,
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        barColor: $scope.color.success,
        lineCap: "round",
        size: 140,
        lineWidth: 10
      }
    };
	
    $scope.easypiechart3 = {
      percent: 68,
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        barColor: $scope.color.info,
        lineCap: "square",
        size: 140,
        lineWidth: 20,
        scaleLength: 0
      }
    };

/***********************************
 :: Angular GaugeChart
 ***********************************/
   
    $scope.gaugeChart1 = {
      data: {
        maxValue: 3000,
        animationSpeed: 40,
        val: 1375
      },
      options: {
        lines: 12,
        angle: 0,
        lineWidth: 0.47,
        pointer: {
          length: 0.6,
          strokeWidth: 0.03,
          color: "#000000"
        },
        limitMax: "true",
        colorStart: "#FF7857",
        colorStop: "#FF7857",
        strokeColor: "#EEEEEE",
        generateGradient: true,
        percentColors: [[0.0, $scope.color.success], [1.0, $scope.color.success]]
      }
    };
  }
])

/***********************************
 :: Angular MorrisChart
 ***********************************/

.controller("morrisChartCtrl", [
  "$scope", function($scope) {
    var barColor, barData, comboColor, comboData, donutColor, donutData, simpleColor, simpleData;
    simpleData = [
      {
        year: "2008",
        value: 10
      }, {
        year: "2009",
        value: 15
      }, {
        year: "2010",
        value: 5
      }, {
        year: "2011",
        value: 15
      }, {
        year: "2012",
        value: 10
      }, {
        year: "2013",
        value: 15
      }
    ];
    simpleColor = [$scope.color.info];
    $scope.simple1 = {
      data: simpleData,
      type: "line",
      options: {
        xkey: "year",
        ykeys: ["value"],
        labels: ["Value"],
        lineWidth: "3",
        lineColors: simpleColor
      }
    };
	
    $scope.simple2 = {
      data: simpleData,
      type: "area",
      options: {
        xkey: "year",
        ykeys: ["value"],
        labels: ["Value"],
        lineWidth: "3",
        lineColors: simpleColor
      }
    };

/********** Combo Chart ***********/

    comboData = [
      {
        month: "1",
        a: 400,
        b: 130
      }, {
        month: "2",
        a: 350,
        b: 180
      }, {
        month: "3",
        a: 400,
        b: 140
      }, {
        month: "4",
        a: 400,
        b: 250
      }, {
        month: "5",
        a: 450,
        b: 230
      }, {
        month: "6",
        a: 550,
        b: 170
      }, {
        month: "7",
        a: 480,
        b: 200
      }, {
        month: "8",
        a: 550,
        b: 260
      }, {
        month: "9",
        a: 500,
        b: 240
      }, {
        month: "10",
        a: 610,
        b: 350
      }, {
        month: "11",
        a: 520,
        b: 320
      }, {
        month: "12",
        a: 570,
        b: 370
      }
    ];
    comboColor = [$scope.color.success, $scope.color.danger, $scope.color.info];
    $scope.combo1 = {
      data: comboData,
      type: "line",
      options: {
        xkey: "month",
        ykeys: ["a", "b"],
        labels: ["Value A", "Value B"],
        lineWidth: "3",
        lineColors: comboColor
      }
    };
	
    $scope.combo2 = {
      data: comboData,
      type: "area",
      options: {
        xkey: "month",
        ykeys: ["a", "b"],
        labels: ["Value A", "Value B"],
        lineWidth: "2",
        lineColors: comboColor
      }
    };

/********** Bar Chart ***********/

    barData = [
      {
        year: "2009",
        a: 20,
        b: 16,
        c: 12
      }, {
        year: "2010",
        a: 10,
        b: 22,
        c: 30
      }, {
        year: "2011",
        a: 5,
        b: 14,
        c: 20
      }, {
        year: "2012",
        a: 5,
        b: 12,
        c: 19
      }, {
        year: "2013",
        a: 20,
        b: 19,
        c: 13
      }, {
        year: "2014",
        a: 28,
        b: 22,
        c: 20
      }
    ];
	
    barColor = [$scope.color.danger, $scope.color.warning, $scope.color.success];
	
    $scope.bar1 = {
      data: barData,
      type: "bar",
      options: {
        xkey: "year",
        ykeys: ["a", "b", "c"],
        labels: ["Value A", "Value B", "Value C"],
        barColors: barColor
      }
    };
	
    $scope.bar2 = {
      data: barData,
      type: "bar",
      options: {
        xkey: "year",
        ykeys: ["a", "b", "c"],
        labels: ["Value A", "Value B", "Value C"],
        barColors: barColor,
        stacked: true
      }
    };

/********** Donut Chart ***********/
	
    donutColor = [$scope.color.danger, $scope.color.warning, $scope.color.success, $scope.color.info];
    donutData = [
      {
        label: "Download Sales",
        value: 12
      }, {
        label: "In-Store Sales",
        value: 30
      }, {
        label: "Mail-Order Sales",
        value: 20
      }, {
        label: "Online Sales",
        value: 19
      }
    ];
	
    $scope.donut1 = {
      data: donutData,
      type: "donut",
      options: {
        xkey: "year"
      }
    };
	
    $scope.donut2 = {
      data: donutData,
      type: "donut",
      options: {
        xkey: "year",
        colors: donutColor
      }
    };
	
    $scope.donut3 = {
      data: donutData,
      type: "donut",
      options: {
        xkey: "year",
        formatter: "return '$' + y;"
      }
    };
  }
])

/***********************************
 :: Angular FlotChart
 ***********************************/

.controller("flotChartCtrl", [
  "$scope", function($scope) {
    var areaChart, barChart, barChartB, barChartFV, barChartH, barChartV, i, lineChart1, lineChart2, lineChart3, lineChart4, lineChart5, lineChart6, lineChart7;
	
    lineChart1 = {};
    lineChart1.data1 = [[1, 400], [2, 350], [3, 400], [4, 400], [5, 450], [6, 550], [7, 480], [8, 550], [9, 500], [10, 610], [11, 520], [12, 570]];
    lineChart1.data2 = [[1, 130], [2, 180], [3, 140], [4, 250], [5, 230], [6, 170], [7, 200], [8, 260], [9, 240], [10, 270], [11, 320], [12, 370]];
    $scope.line1 = {};
    $scope.line1.data = [
      {
        data: lineChart1.data1,
        label: "Credit Card"
      }, {
        data: lineChart1.data2,
        label: "Paypal"
      }
    ];
    $scope.line1.options = {
      series: {
        lines: {
          show: true,
          fill: true,
          lineWidth: 2,
          fillColor: {
            colors: ["rgba(255,255,255,.0)", "rgba(183,236,240,.8)"]
          }
        },
        points: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: "#ffffff",
          symbol: "circle",
          radius: 5
        }
      },
      colors: [$scope.color.info, $scope.color.danger],
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#eeeeee",
        borderWidth: 1,
        borderColor: "#eeeeee"
      },
      xaxis: {
        ticks: [[1, "Jan."], [2, "Feb."], [3, "Mar."], [4, "Apr."], [5, "May"], [6, "June"], [7, "July"], [8, "Aug."], [9, "Sept."], [10, "Oct."], [11, "Nov."], [12, "Dec."]]
      }
    };
	
/******** Site Statistics **********/

    lineChart2 = {};
    lineChart2.data1 = [['Jan', 6], ['Feb', 10], ['March', 8], ['April', 14], ['May', 8], ['June', 10], ['July', 8], ['Aug', 12], ['Sept', 10], ['Oct', 10], ['Nov', 8], ['Dec', 10]];
    $scope.line2 = {};
    $scope.line2.data = [
      {
        data: lineChart2.data1,
        label: "New Visitors"
      }
    ];
    $scope.line2.options = {
      series: {
        lines: {
          show: true,
          lineWidth: 2,
          color: "#6BCCB4",
          fill: true
        },
        points: {
          show: true,
          lineWidth: 1,
          fill: true,
          fillColor: "#ffffff",
          symbol: "circle",
          radius: 5
        }
      },
      colors: [$scope.color.dark],
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      xaxis: {
        mode: "categories"
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#eee",
        borderWidth: 1,
        borderColor: "#eeeeee"
      }
    };

/******** Order Statistics **********/
	
    lineChart3 = {};
    lineChart3.data1 = [['Jan', 6], ['Feb', 8], ['March', 12], ['April', 10], ['May', 6], ['June', 8], ['July', 12], ['Aug', 10], ['Sept', 8], ['Oct', 10], ['Nov', 8], ['Dec', 10]];
    $scope.line3 = {};
    $scope.line3.data = [
      {
        data: lineChart3.data1,
        label: "New Orders"
      }
    ];
    $scope.line3.options = {
      series: {
        lines: {
          show: true,
          lineWidth: 2,
          fill: true
        },
        points: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: "#ffffff",
          symbol: "circle",
          radius: 5
        }
      },
      colors: [$scope.color.danger],
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      xaxis: {
        mode: "categories"
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#eee",
        borderWidth: 1,
        borderColor: "#eeeeee"
      }
    };

/******** Sales Statistics **********/
	
    lineChart4 = {};
    lineChart4.data1 = [['Jan', 6], ['Feb', 12], ['March', 10], ['April', 8], ['May', 12], ['June', 10], ['July', 8], ['Aug', 12], ['Sept', 6], ['Oct', 8], ['Nov', 6], ['Dec', 10]];
    $scope.line4 = {};
    $scope.line4.data = [
      {
        data: lineChart4.data1,
        label: "Total Sales"
      }
    ];
    $scope.line4.options = {
      series: {
        lines: {
          show: true,
          lineWidth: 2,
          fill: true
        },
        points: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: "#ffffff",
          symbol: "circle",
          radius: 5
        }
      },
      colors: [$scope.color.info],
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      xaxis: {
        mode: "categories"
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#eee",
        borderWidth: 1,
        borderColor: "#eeeeee"
      }
    };

/******** Feedback Statistics **********/
	
    lineChart5 = {};
    lineChart5.data1 = [['Jan', 12], ['Feb', 8], ['March', 6], ['April', 8], ['May', 4], ['June', 6], ['July', 8], ['Aug', 12], ['Sept', 6], ['Oct', 8], ['Nov', 6], ['Dec', 10]];
    $scope.line5 = {};
    $scope.line5.data = [
      {
        data: lineChart5.data1,
        label: "Customer feedback"
      }
    ];
    $scope.line5.options = {
      series: {
        lines: {
          show: true,
          lineWidth: 2,
          fill: false
        },
        points: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: "#ffffff",
          symbol: "circle",
          radius: 5
        }
      },
      colors: [$scope.color.warning],
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      xaxis: {
        mode: "categories"
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#eee",
        borderWidth: 1,
        borderColor: "#eeeeee"
      }
    };

/******** Earning Statistics **********/
	
    lineChart6 = {};
    lineChart6.data1 = [['Jan', 5], ['Feb', 8], ['March', 6], ['April', 9], ['May', 7], ['June', 4], ['July', 8], ['Aug', 12], ['Sept', 6], ['Oct', 8], ['Nov', 6], ['Dec', 10]];
    $scope.line6 = {};
    $scope.line6.data = [
      {
        data: lineChart6.data1,
        label: "Net Earning"
      }
    ];
    $scope.line6.options = {
      series: {
        lines: {
          show: true,
          lineWidth: 2,
          fill: false
        },
        points: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: "#ffffff",
          symbol: "circle",
          radius: 5
        }
      },
      colors: [$scope.color.primary],
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      xaxis: {
        mode: "categories"
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#eee",
        borderWidth: 1,
        borderColor: "#eeeeee"
      }
    };

/******** Server Performance **********/
	
    lineChart7 = {};
    lineChart7.data1 = [['Mon', 4], ['Tue', 8], ['Wed', 10], ['Thu', 8], ['Fri', 9], ['Sat', 7]];
    $scope.line7 = {};
    $scope.line7.data = [
      {
        data: lineChart7.data1,
        label: "Server Performance"
      }
    ];
    $scope.line7.options = {
      series: {
        lines: {
          show: true,
          lineWidth: 2,
          fill: false
        },
        points: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: "#ffffff",
          symbol: "circle",
          radius: 5
        }
      },
      colors: [$scope.color.success],
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      xaxis: {
        mode: "categories"
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#eee",
        borderWidth: 1,
        borderColor: "#eeeeee"
      }
    };

/************** Flot Line and Area Chart *************/	

    areaChart = {};
    areaChart.data1 = [[1, 400], [2, 350], [3, 400], [4, 400], [5, 450], [6, 550], [7, 480], [8, 550], [9, 500], [10, 610], [11, 520], [12, 570]];
    areaChart.data2 = [[1, 200], [2, 250], [3, 240], [4, 280], [5, 230], [6, 250], [7, 200], [8, 300], [9, 240], [10, 300], [11, 320], [12, 370]];
    $scope.area = {};
    $scope.area.data = [
      {
        data: areaChart.data1,
        label: "Value A",
        lines: {
          fill: true
        },
        points: {
          show: true
        }
      }, {
        data: areaChart.data2,
        label: "Value B",
        lines: {
          fill: false
        },
        points: {
          show: true
        },
        yaxis: 2
      }
    ];
    $scope.area.options = {
      series: {
        lines: {
          show: true,
          fill: false
        },
        points: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: "#ffffff",
          symbol: "circle",
          radius: 5
        },
        shadowSize: 0
      },
      grid: {
        hoverable: false,
        clickable: false,
        tickColor: "#eeeeee",
        borderWidth: 1,
        borderColor: "#eeeeee"
      },
      colors: [$scope.color.info, $scope.color.success],
      tooltip: true,
      tooltipOpts: {
        defaultTheme: true
      },
      xaxis: {
        mode: "time"
      },
      yaxes: [
        {}, {
          position: "right"
        }
      ]
    };
	
/************** Flot Stacked Bar Chart *************/	

    barChart = {};
    barChart.data1 = [[1, 20], [2, 10], [3, 5], [4, 5], [5, 20], [6, 28]];
    barChart.data2 = [[1, 16], [2, 22], [3, 14], [4, 12], [5, 19], [6, 22]];
    barChart.data3 = [[1, 12], [2, 30], [3, 20], [4, 19], [5, 13], [6, 20]];
    $scope.barChart = {};
    $scope.barChart.data = [
      {
        label: "Value A",
        data: barChart.data1
      }, {
        label: "Value B",
        data: barChart.data2
      }, {
        label: "Value C",
        data: barChart.data3
      }
    ];
    $scope.barChart.options = {
      series: {
        stack: true,
        bars: {
          show: true,
          fill: 1,
          barWidth: 0.4,
          horizontal: false,
          order: 1
        }
      },
      grid: {
        hoverable: true,
        borderWidth: 1,
        tickColor: "#eeeeee",
        borderColor: "#eeeeee"
      },
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      colors: [$scope.color.success, $scope.color.warning, $scope.color.danger]
    };

/*************** Flot Bar Chart (negative) ****************/
	
    barChartV = {};
    barChartV.data1 = [];
    i = 0;
    while (i < 20) {
      barChartV.data1.push([i, Math.sin(i)]);
      ++i;
    }
    $scope.barChart3 = {};
    $scope.barChart3.data = [
      {
        label: "Value A",
        data: barChartV.data1
      }
    ];
    $scope.barChart3.options = {
      series: {
        stack: true,
        bars: {
          show: true,
          fillColor: {
            colors: [
              {
                opacity: 0.5
              }, {
                opacity: 0.9
              }
            ]
          },
          barWidth: 0.6,
          horizontal: false
        }
      },
      grid: {
        hoverable: true,
        borderWidth: 1,
        tickColor: "#eeeeee",
        borderColor: "#eeeeee"
      },
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      yaxis: {
        font: {
          color: "#ccc"
        },
        min: -2,
        max: 2
      },
      colors: [$scope.color.info]
    };

/*************** Simple Flot Bar Chart ****************/
	
    barChartB = {};
    barChartB.data1 = [[1, 5], [2, 6], [3, 7], [4, 8], [5, 9], [6, 12], [7, 9], [8, 8], [9, 7], [10, 6], [11, 5]];
    $scope.barChart4 = {};
    $scope.barChart4.data = [
      {
        label: "Value A",
        data: barChartB.data1
      }
    ];
    $scope.barChart4.options = {
      series: {
        stack: true,
        bars: {
          show: true,
          fillColor: {
            colors: [
              {
                opacity: 0.5
              }, {
                opacity: 0.9
              }
            ]
          },
          barWidth: 0.6,
          horizontal: false
        }
      },
      grid: {
        hoverable: true,
        borderWidth: 1,
        tickColor: "#eeeeee",
        borderColor: "#eeeeee"
      },
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      xaxis: {
        font: {
          color: "#ccc"
        }
      },
      yaxis: {
        font: {
          color: "#ccc"
        }
      },
      colors: [$scope.color.info]
    };

/**************** Flot Pie Chart *******************/
	
    $scope.pieChart = {};
    $scope.pieChart.data = [
      {
        label: "Download Sales",
        data: 12
      }, {
        label: "In-Store Sales",
        data: 30
      }, {
        label: "Mail-Order Sales",
        data: 20
      }, {
        label: "Online Sales",
        data: 19
      }
    ];
    $scope.pieChart.options = {
      series: {
        pie: {
          show: true
        }
      },
      legend: {
        show: true
      },
      grid: {
        hoverable: true,
        clickable: true
      },
      colors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger],
      tooltip: true,
      tooltipOpts: {
        content: "%p.0%, %s",
        defaultTheme: false
      }
    };

/**************** Flot Donut Chart *******************/
	
    $scope.donutChart = {};
    $scope.donutChart.data = [
      {
        label: "Download Sales",
        data: 12
      }, {
        label: "In-Store Sales",
        data: 30
      }, {
        label: "Mail-Order Sales",
        data: 20
      }, {
        label: "Online Sales",
        data: 19
      }
    ];
    $scope.donutChart.options = {
      series: {
        pie: {
          show: true,
          innerRadius: 0.6
        }
      },
      legend: {
        show: true
      },
      grid: {
        hoverable: true,

        clickable: true
      },
      colors: ["#91C854", "#00B1E1", "#63D3E9", "#FFD66A", "#ED5466", "#6BCCB4"],
      tooltip: true,
      tooltipOpts: {
        content: "%p.0%, %s",
        defaultTheme: false
      }
    };

/**************** Flot Styled Donut Chart *******************/
	
    $scope.donutChart2 = {};
    $scope.donutChart2.data = [
      {
        label: "Download Sales",
        data: 12
      }, {
        label: "In-Store Sales",
        data: 30
      }, {
        label: "Mail-Order Sales",
        data: 20
      }, {
        label: "Online Sales",
        data: 19
      }, {
        label: "Direct Sales",
        data: 15
      }
    ];
    return $scope.donutChart2.options = {
      series: {
        pie: {
          show: true,
          innerRadius: 0.45
        }
      },
      legend: {
        show: false
      },
      grid: {
        hoverable: true,
        clickable: true
      },
      colors: [$scope.color.danger, $scope.color.info, $scope.color.success, $scope.color.warning, $scope.color.primary],
      tooltip: true,
      tooltipOpts: {
        content: "%p.0%, %s",
        defaultTheme: false
      }
    };
  }
])

/***********************************
 :: Angular Sparkline Chart
 ***********************************/

.controller("sparklineCtrl", [
  "$scope", function($scope) {
    $scope.demoData1 = {
      data: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7],
      options: {
        type: "line",
        lineColor: "#fff",
        highlightLineColor: "#fff",
        fillColor: $scope.color.success,
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false,
        width: "100%",
        height: "150px"
      }
    };
	
    $scope.datagraph = {
      data: [50.32, 45.23, 47.56, 36.25, 75.85, 40.15, 41.25, 50.15, 57.14, 36.15, 97.26, 50.15, 45.32, 47.19],
      options: {
        type: "line",
        width: "100%",
        height: "65px",
        lineWidth: 3,
        lineColor: "#fff",
        highlightLineColor: "#fff",
        fillColor: "",
        valueSpots: {
          "0:": "#fff"
        },
        spotColor: $scope.color.danger,
        spotRadius: 3,
        minSpotColor: $scope.color.danger,
        maxSpotColor: $scope.color.danger
      }
    };
	
    $scope.datagraphbar = {
      data: [5.6, 6, 7, 8, 7, 8.2, 8.7, 9, 11, 12, 11, 9, 8.7, 8.2, 7, 8, 7, 6, 5.6],
      options: {
        type: "bar",
        width: "100%",
        height: "45px",
        barWidth: 6,
        barSpacing: 6,
        barColor: $scope.color.warning
      }
    };
	
    $scope.analyticschartinfo = {
      data: [5, 6, 7, 10, 12, 16, 11, 9, 8.9, 8.7, 7, 8, 7],
      options: {
        type: "bar",
        width: "100%",
        height: "30px",
        barColor: $scope.color.info
      }
    };
	
    $scope.analyticschartdanger = {
      data: [14, 11, 8.7, 7, 8, 7, 6, 8, 5, 8, 7, 10, 12],
      options: {
        type: "bar",
        width: "100%",
        height: "30px",
        barColor: $scope.color.danger
      }
    };
	
    $scope.analyticschartwarning = {
      data: [5, 6, 7, 10, 12, 14, 11, 9, 8.9, 8.7, 7, 8, 7, 6, 5.6],
      options: {
        type: "bar",
        width: "100%",
        height: "30px",
        barColor: $scope.color.warning
      }
    };
	
    $scope.analyticschartsuccess = {
      data: [5, 6, 7, 10, 12, 14, 11, 9, 8.9, 8.7, 7, 8, 7, 6, 5.6],
      options: {
        type: "bar",
        width: "100%",
        height: "30px",
        barColor: $scope.color.success
      }
    };

/******************** Sparkline Line Chart *********************/
		
    $scope.largeChart1 = {
      data: [50.32, 45.23, 47.56, 36.25, 53.85, 40.15, 41.25, 50.15, 57.14, 36.15, 97.26, 50.15, 45.32, 47.19, 37.75, 25.15, 56.34, 50.35, 47.25, 53.15],
      options: {
        type: "line",
        lineWidth: 3,
        lineColor: $scope.color.info,
        fillColor: $scope.color.info,
        spotColor: $scope.color.danger,
        highlightLineColor: "#fff",
        spotRadius: 2,
        minSpotColor: $scope.color.danger,
        maxSpotColor: $scope.color.danger,
        width: "100%",
        height: "150px"
      }
    };

/******************** Sparkline Bar Chart *********************/
	
    $scope.largeChart2 = {
      data: [5.6, 6, 7, 8, 7, 8.2, 8.7, 9, 11, 12, 11, 9, 8.7, 8.2, 7, 8, 7, 6, 5.6],
      options: {
        type: "bar",
        barColor: $scope.color.success,
        barWidth: 12,
        width: "100%",
        height: "150px"
      }
    };

    $scope.simpleChart2 = {
      data: [5,6,7,10,12,14,11,9,8.9,8.7,7,8,7,6,5.6],
      options: {
        type: 'bar',
		width: "100%",
		height: "30px",
        barColor: $scope.color.info
      }
    };
	
    $scope.simpleChart3 = {
      data: [4, 3, 2],
      options: {
        type: 'pie',
		width: "30px",
		height: "30px",
        sliceColors: [$scope.color.infoAlt, $scope.color.danger, $scope.color.success]
      }
    };
	
/******************** Sparkline Pie Chart *********************/
	
    $scope.largeChart3 = {
      data: [3, 2],
      options: {
        type: "pie",
        sliceColors: [$scope.color.success, $scope.color.infoAlt],
        width: "150px",
        height: "150px"
      }
    };
  }
]);