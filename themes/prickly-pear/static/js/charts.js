const stepCountHeaderColor = "#0A9396";
const stepCountGraphColor = "#0A9396";
const sleepHourGraphHeaderColor = "#24AB99"
const sleepHourGraphColor = "#24AB99";
const pushUpHeaderColor = "#51C293";
const pushUpGraphColor =  "#51C293";
const fiveAmHeaderColor ="#83D787" ;
const fiveAmGraphColor = "#83D787";
const waterConsumptionHeaderColor =  "#C5ED8E";
const waterConsumptionGraphColor = "#BBEA7A";
const pageStreakHeaderColor ="#FF8847";
const pageStreakGraphColor = "#FF8847";


// Source: https://tailwindcss.com/docs/responsive-design
const screenSmall = 640;
const screenMed   = 768;
const screenLarge = 1024;

function showAxisForScreen() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth) > screenLarge;
}

var baseHeatmapChart = {
    type: 'heatmap',
    height: 160,
    width: "100%",
    fontFamily: '"JetBrains Mono", monospace',
    toolbar: {
        show: false
    },
};

var baseHeatmapPlotOptions = {
        heatmap: {
            distributed: false
        }
    }


var calories = {
    plotOptions: {
        heatmap: {
            distributed: false,
            monochrome: false,
            reverseNegativeShade: false,
            colorScale: {
                ranges: [
                    {
                        from: 0,
                        to: 0,
                        color: "#EBEBEB",
                        name: "No Data"
                    },
                    {
                        from: 1,
                        to: 10,
                        color: "#F5CBCC",
                        name: "0-10% OVER"
                    },
                    {
                        from: 10,
                        to: 19,
                        color: "#EA9999",
                        name: "10-19% OVER"
                    },
                    {
                        from: 20,
                        to: 100,
                        color: "#CC0100",
                        name: ">=20% OVER"
                    },
                    {
                        from: -10,
                        to: -0.9999,
                        color: "#E6F4EA",
                        name: "0-10% UNDER"
                    },
                    {
                        from: -19,
                        to: -10,
                        color: "#A8DAB5",
                        name: "10%-19% UNDER"
                    },
                    {
                        from: -500,
                        to: -19,
                        color: "#178038",
                        name: ">= 20% UNDER"
                    }
                ]
            }
        }
    },
    yaxis: {
        min: 100,
        labels: {
            formatter: function (y) {
                if (typeof y == "number") {
                    plusOrMinus = ""
                    return plusOrMinus + " " + parseFloat(y).toFixed(2) + "%"
                }

                return y
            }
        },
    },
    xaxis: {
        labels: {
            show: showAxisForScreen()
        },
        axisTicks: {
            show: showAxisForScreen()
        }

    },
    chart: {
        type: 'heatmap',
        height: 260,
        fontFamily: '"JetBrains Mono", monospace',
        toolbar: {
            show: false
        }
    },
    theme: {
        monochrome: {
            enabled: true,
            color: "#000000"
        }
    },
    title: {
        text: "Calorie Tracker",
        offsetY: 10,
        style: {
            color: "#000000"
        }
    },
    dataLabels: {
        enabled: false
    },
    noData: {
        text: "Loading..."
    },
    series: []
}

strengthGoals = {
    chart: {
        height: 200,
        type: 'bar',
        fontFamily: '"JetBrains Mono", monospace',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    title: {
        text: "Strength Goals",
        offsetY: 10,
        style: {
            color: '#12437C'
        }
    },
    fill: {
        colors: ['#12437C']
    },
    xaxis: {
        title: {
            text: "KG",
            offsetY: 0
        }
    },
    series: [{
        data: [
            {
                x: 'Bench',
                y: 65,
                goals: [
                    {
                        name: 'Decent',
                        value: 78.75,
                        strokeColor: '#92D2F9'
                    },
                    {
                        name: 'Good',
                        value:105, 
                        strokeColor: '#92D2F9'
                    },
                    {
                        name: 'Optimal',
                        value:136.5, 
                        strokeColor: '#92D2F9'
                    },
                ]
            },
            {
                x: 'Deadlift',
                y: 130,
                goals: [
                    {
                        name: 'Decent',
                        value: 105,
                        strokeColor: '#92D2F9'
                    },
                    {
                        name: 'Good',
                        value: 136.5, 
                        strokeColor: '#92D2F9'
                    },
                    {
                        name: 'Optimal',
                        value: 173.25 ,
                        strokeColor: '#92D2F9'
                    },
                ]
            },
            {
                x: 'Squat',
                y: 110,
                goals: [
                    {
                        name: 'Decent',
                        value: 130,
                        strokeColor: '#92D2F9'
                    },
                    {
                        name: 'Good',
                        value: 126,
                        strokeColor: '#92D2F9'
                    },
                    {
                        name: 'Decent',
                        value: 157.5,
                        strokeColor: '#92D2F9'
                    },
                ]
            },
        ]
    }],
}

bodyStrengthGoals = {
    chart: {
        height: 200,
        type: 'bar',
        fontFamily: '"JetBrains Mono", monospace',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    title: {
        text: "Body Strength Goals",
        offsetY: 10,
        style: {
            colors: ['#12437C']
        }
    },
    fill: {
        colors: ['#12437C']
    },
    xaxis: {
        title: {
            text: "Number",
            offsetY: 0
        }
    },
    series: [{
        data: [
            {
                x: 'Push Ups',
                y: 20,
                goals: [
                    {
                        name: 'Decent',
                        value: 10,
                        strokeColor: '#92D2F9'
                    },
                    {
                        name: 'Good',
                        value: 25,
                        strokeColor: '#92D2F9'
                    },
                    {
                        name: 'Optimal',
                        value: 35,
                        strokeColor: '#92D2F9'
                    },

                ]
            },
            {
                x: 'Pull Ups',
                y: 0,
                goals: [
                    {
                        name: 'Decent',
                        value: 3,
                        strokeColor: '#92D2F9'
                    },
                    {
                        name: 'Good',
                        value: 8,
                        strokeColor: '#92D2F9'
                    },
                    {
                        name: 'Optimal',
                        value: 12,
                        strokeColor: '#92D2F9'
                    },

                ]
            },
        ]
    }],
}

bodyWeight = {
    chart: {
        id: 'bodyWeight',
        group: 'bodyMeasures',
        height: 260,
        fontFamily: '"JetBrains Mono", monospace',
        toolbar: {
            show: false
        }
    },
    title: {
        text: 'Body Weight (kg)'
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        dashArray: [0,5],
        width: [3,2]
    },
    yaxis: {
        min: 90,
        labels: {
            formatter: function (y) {
                return parseFloat(y).toFixed(2)
            }
        },
        title: {
            text: "KG",
            offsetY: 0
        }
    },
    colors: ['#08C095'],
    fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.3,
          opacityTo: 0.6,
        }
    },
    noData: {
        text: "Loading..."
    },
    series: []
}

bodyFat = {
    chart: {
        id: 'bodyFat',
        group: 'bodyMeasures',
        type: 'line',
        height: 260,
        fontFamily: '"JetBrains Mono", monospace',
        toolbar: {
            show: false
        }
    },
    title: {
        text: 'Body Fat %'
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        dashArray: [0,5],
        width: [3,2]
    },
    xaxis: {
    },
    yaxis: {
        min: 25,
        labels: {
            formatter: function (y) {
                return parseFloat(y).toFixed(2)
            }
        },
        title: {
            text: "Percentage",
            offsetY: 0
        }
    },
    colors: ['#FF906C'],
    fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.3,
          opacityTo: 0.6,
        }
    },
    noData: {
        text: "Loading..."
    },
    series: []
}

var nutritionPlan = {
    plotOptions: {
        heatmap: {
            distributed: true,
            radius: 0,
            monochrome: true,
            colorScale: {
                ranges: [
                    {
                        from: 0,
                        to: 1,
                        color: "#DF6060",
                        name: "Bulk"
                    },
                    {
                        from: 2,
                        to: 3,
                        color: "#FBBC07",
                        name: "Maintain"
                    },
                    {
                        from: 3,
                        to: 4,
                        color: "#83D787",
                        name: "Cut"
                    },
                    {
                        from: 4,
                        to: 5,
                        color: "#9EACAE",
                        name: "To Plan"
                    }
                ]
            }
        }
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        labels: {
            show: showAxisForScreen()
        },
        axisTicks: {
            show: showAxisForScreen()
        },
        tooltip: {
            enabled: false
        }

    },
    yaxis: {
        tooltip: {
            enabled: false
        }
    },
    chart: {
        type: 'heatmap',
        height: 260,
        fontFamily: '"JetBrains Mono", monospace',
        toolbar: {
            show: false
        }
    },
    title: {
        text: "Nutrition Plan",
        offsetY: 10,
        style: {
            color: "#000000"
        }
    },
    dataLabels: {
        enabled: false,
    },
    noData: {
        text: "Loading..."
    },
    series: []
}

var caloriesChart = new ApexCharts(document.querySelector("#calories"), calories);
var strengthGoalChart = new ApexCharts(document.querySelector("#strength-goal"), strengthGoals);
var bodyStrengthGoalChart = new ApexCharts(document.querySelector("#body-strength-goal"), bodyStrengthGoals);
var bodyWeightChart = new ApexCharts(document.querySelector("#bodyweight-trend"), bodyWeight);
var bodyFatChart = new ApexCharts(document.querySelector("#bodyfat-trend"), bodyFat);
var nutritionPlanChart = new ApexCharts(document.querySelector("#nutrition-plan"), nutritionPlan);

caloriesChart.render()
strengthGoalChart.render()
bodyStrengthGoalChart.render()
bodyWeightChart.render()
bodyFatChart.render()
nutritionPlanChart.render()


// FIXME -- Dirty hacked together version to get things working
function formatNutritionData(json) {
    json.forEach(function (month, index) {
        month.data.forEach(function(day, dayIndex) {
            switch(month.data[dayIndex].y) {
                case 'Bulk':
                    this.data[dayIndex].y = 1; break;
                case 'Maintain':
                    this.data[dayIndex].y = 2; break;
                case 'Cut':
                    this.data[dayIndex].y = 3; break;
                case 'To Plan':
                    this.data[dayIndex].y = 4; break;
            }
        }, month);
    }, json)
    return json;
}


$.getJSON('/chart-data/data.json', function (json) {
    caloriesChart.updateSeries(json["calories-data"]);
    bodyWeightChart.updateSeries([
        {
            name: 'body weight',
            type: 'area',
            data: json["body-weight-data"]
        },
        {
            type: 'line',
            name: 'body weight goal',
            data: json["body-weight-goal-data"],
        }
    ]);

    healthy_sick = json["healthy-sick-data"]

    annotationPoints = [];

    healthy_sick.forEach(function(data) {
        if (data.y == "") return
        switch(data.y) {
            case 'Sick':
                backgroundColor = '#FF0000';
                break;
            case 'Healthy':
                backgroundColor = '#84D787';
                break;
            case 'Travel':
                backgroundColor = '#FCD052';
                break;
        }

        annotationPoints.push({
            x:data.x,
            fillColor: 'red',
            opacity: 0.2,
            label: {
                borderColor: '#000',
                borderWidth: 1,
                style: {
                    fontSize: '9px',
                    color: '#fff',
                    background: backgroundColor,
                },
                offsetY: -10,
                text: data.y,
            },
            marker: {
                strokeWidth: 2,
                strokeColor: backgroundColor
            }
        })
    }, annotationPoints)

    bodyWeightChart.updateOptions(
        {
            annotations: {
                points: annotationPoints
            },

        }
    )
    bodyFatChart.updateSeries([
        {
            name: 'body fat',
            type: 'area',
            data: json["bodyfat-data"]
        },
        {
            type: 'line',
            name: 'body fat goal',
            data: json["bodyfat-goal-data"],
        }
    ])

    nutritionPlanChart.updateSeries(formatNutritionData(json["nutrition-plan-data"]));
});