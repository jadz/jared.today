var pushupStreaks = {
    plotOptions: {
        heatmap: {
            distributed: false
        }
    },
    chart: {
        type: 'heatmap',
        height: 160,
        width: "100%",
        fontFamily: '"JetBrains Mono", monospace',
        toolbar: {
            show: false
        }
    },
    theme: {
        palette: 'palette3',
        monochrome: {
            enabled: true,
            color: "#4CAF50"
        }
    },
    title: {
        text: "Push Up Streak",
        offsetY: 10,
        style: {
            color: "#4CAF50"
        }
    },
    dataLabels: {
        enabled: false
    },
    noData: {
        text: "Loading..."
    },
    legend: {
        fontSize: "8px"
    },
    series: []
}

var waterConsumption = {
    plotOptions: {
        heatmap: {
            distributed: false
        }
    },
    chart: {
        type: 'heatmap',
        height: 160,
        fontFamily: '"JetBrains Mono", monospace',
        toolbar: {
            show: false
        }
    },
    theme: {
        monochrome: {
            enabled: true,
            color: "#03A9F4"
        }
    },
    title: {
        text: "Water Consumption",
        offsetY: 10,
        style: {
            color: "#03A9F4"
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

var fiveAMStreak = {
    plotOptions: {
        heatmap: {
            distributed: false
        }
    },
    chart: {
        type: 'heatmap',
        height: 160,
        fontFamily: '"JetBrains Mono", monospace',
        toolbar: {
            show: false
        }
    },
    theme: {
        monochrome: {
            enabled: true,
            color: "#0C5374"
        }
    },
    title: {
        text: "5am Streak",
        offsetY: 10,
        style: {
            color: "#0C5374"
        }
    },
    dataLabels: {
        enabled: false
    },
    noData: {
        text: "Loading..."
    },
    series: [ ]
}

var pagesReadStreak = {
    plotOptions: {
        heatmap: {
            distributed: false
        }
    },
    chart: {
        type: 'heatmap',
        height: 160,
        fontFamily: '"JetBrains Mono", monospace',
        toolbar: {
            show: false
        }
    },
    theme: {
        monochrome: {
            enabled: true,
            color: "#A01FF1"
        }
    },
    title: {
        text: "Pages Read",
        offsetY: 10,
        style: {
            color: "#A01FF1"
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

var calories = {
    plotOptions: {
        heatmap: {
            distributed: false,
            colorScale: {
                ranges: [
                    {
                        from: 0,
                        to: 0,
                        color: "#FFF",
                        name: "0-10% UNDER"
                    },
                    {
                        from: 0,
                        to: 10,
                        color: "#E6F4EA",
                        name: "0-10% UNDER"
                    },
                    {
                        from: 10,
                        to: 20,
                        color: "#A8DAB5",
                        name: "10-20% UNDER"
                    },
                    {
                        from: 20,
                        to: 100,
                        color: "#178038",
                        name: ">20% UNDER"
                    },
                    {
                        from: -10,
                        to: 0,
                        color: "#F5CBCC",
                        name: "0-10% OVER"
                    },
                    {
                        from: -20,
                        to: -10,
                        color: "#EA9999",
                        name: "10%-20% OVER"
                    },
                    {
                        from: -100,
                        to: -20,
                        color: "#CC0100",
                        name: "> 20% Over"
                    }
                ]
            }

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
            color: '#F44336'
        }
    },
    fill: {
        colors: ['#F44336']
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
                y: 60,
                goals: [
                    {
                        name: 'Decent',
                        value: 78.75,
                        strokeColor: '#E01F27'
                    },
                    {
                        name: 'Good',
                        value:105, 
                        strokeColor: '#E01F27'
                    },
                    {
                        name: 'Optimal',
                        value:136.5, 
                        strokeColor: '#E01F27'
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
                        strokeColor: '#E01F27'
                    },
                    {
                        name: 'Good',
                        value: 136.5, 
                        strokeColor: '#E01F27'
                    },
                    {
                        name: 'Optimal',
                        value: 173.25 ,
                        strokeColor: '#E01F27'
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
                        strokeColor: '#E01F27'
                    },
                    {
                        name: 'Good',
                        value: 126,
                        strokeColor: '#E01F27'
                    },
                    {
                        name: 'Decent',
                        value: 157.5,
                        strokeColor: '#E01F27'
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
            color: "#F44336"
        }
    },
    fill: {
        colors: ['#F44336']
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
                x: 'Push Ups',
                y: 10,
                goals: [
                    {
                        name: 'Decent',
                        value: 10,
                        strokeColor: '#F44336'
                    },
                    {
                        name: 'Good',
                        value: 25,
                        strokeColor: '#F44336'
                    },
                    {
                        name: 'Optimal',
                        value: 35,
                        strokeColor: '#F44336'
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
                        strokeColor: '#F44336'
                    },
                    {
                        name: 'Good',
                        value: 8,
                        strokeColor: '#F44336'
                    },
                    {
                        name: 'Optimal',
                        value: 12,
                        strokeColor: '#F44336'
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
    colors: ['#00E396'],
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
        min: 12,
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
    colors: ['#008FFB'],
    fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0.8,
        }
    },
    noData: {
        text: "Loading..."
    },
    series: []
}


var pushupStreaksChart = new ApexCharts(document.querySelector("#pushup-streaks"), pushupStreaks);
var waterConsumptionChart = new ApexCharts(document.querySelector("#water-consumption"), waterConsumption);
var fiveAMStreakChart = new ApexCharts(document.querySelector("#fiveam-streaks"), fiveAMStreak);
var pageStreakChart = new ApexCharts(document.querySelector("#page-streaks"), pagesReadStreak);
var caloriesChart = new ApexCharts(document.querySelector("#calories"), calories);
var strengthGoalChart = new ApexCharts(document.querySelector("#strength-goal"), strengthGoals);
var bodyStrengthGoalChart = new ApexCharts(document.querySelector("#body-strength-goal"), bodyStrengthGoals);
var bodyWeightChart = new ApexCharts(document.querySelector("#bodyweight-trend"), bodyWeight);
var bodyFatChart = new ApexCharts(document.querySelector("#bodyfat-trend"), bodyFat);

pushupStreaksChart.render()
waterConsumptionChart.render()
fiveAMStreakChart.render()
pageStreakChart.render()
caloriesChart.render()
strengthGoalChart.render()
bodyStrengthGoalChart.render()
bodyWeightChart.render()
bodyFatChart.render()

$.getJSON('/chart-data/data.json', function (json) {
    pushupStreaksChart.updateSeries(json["pushup-data"]);
    waterConsumptionChart.updateSeries(json["water-consumption-data"]);
    fiveAMStreakChart.updateSeries(json["fiveam-data"]);
    pageStreakChart.updateSeries(json["pages-read-data"]);
    caloriesChart.updateSeries(json["calories-data"]);
    bodyWeightChart.updateSeries([
        {
            name: 'Body Weight',
            type: 'area',
            color: '#000000',
            data: json["body-weight-data"]
        },
        {
            type: 'line',
            name: 'Body Weight Goal',
            data: json["body-weight-goal-data"],
        }
    ])
    bodyFatChart.updateSeries([
        {
            name: 'Body Fat',
            type: 'area',
            data: json["bodyfat-data"]
        },
        {
            type: 'line',
            name: 'Body Fat Goal',
            data: json["bodyfat-goal-data"],
        }
    ])
});