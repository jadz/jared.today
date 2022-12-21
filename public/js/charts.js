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
            color: "#03A9F4"
        }
    },
    title: {
        text: "5am Streak",
        offsetY: 10,
        style: {
            color: "#03A9F4"
        }
    },
    dataLabels: {
        enabled: false
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
            color: "#03A9F4"
        }
    },
    title: {
        text: "Pages Read",
        offsetY: 10,
        style: {
            color: "#03A9F4"
        }
    },
    dataLabels: {
        enabled: false
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
                    // {
                    //     from: 50,
                    //     to: 25,
                    //     color: "#178038",
                    //     name: "really under"
                    // },
                    // {
                    //     from: 24,
                    //     to: 10,
                    //     color: "#A8DAB5",
                    //     name: "under"
                    // },
                    // {
                    //     from: 9,
                    //     to: 1,
                    //     color: "#A8DAB5",
                    //     name: "sufficient"
                    // },
                    // {
                    //     from: -15,
                    //     to: 0,
                    //     color: "#CC0100",
                    //     name: "really over"
                    // },
                    // {
                    //     from: -16,
                    //     to: -10,
                    //     color: "#EA9999",
                    //     name: "over"
                    // },
                    // {
                    //     from: -11,
                    //     to: -15,
                    //     color: "#EFEFEF",
                    //     name: "sufficient"
                    // },

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
            color: "#03A9F4"
        }
    },
    title: {
        text: "Calorie Tracker",
        offsetY: 10,
        style: {
            color: "#03A9F4"
        }
    },
    dataLabels: {
        enabled: false
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
            color: "#03A9F4"
        }
    },
    series: [{
        data: [
            {
                x: 'Bench',
                y: 40,
                goals: [
                    {
                        name: 'Baseline',
                        value: 60,
                        strokeColor: '#775DD0'
                    },
                    {
                        name: 'Decent',
                        value: 78.75,
                        strokeColor: '#775DD0'
                    },
                    {
                        name: 'Good',
                        value:105, 
                        strokeColor: '#775DD0'
                    },
                ]
            },
            {
                x: 'Deadlift',
                y: 130,
                goals: [
                    {
                        name: 'Expected',
                        value: 160,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: 'Squat',
                y: 110,
                goals: [
                    {
                        name: 'Expected',
                        value: 130,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: 'Push Ups',
                y: 10,
                goals: [
                    {
                        name: 'Decent',
                        value: 10,
                        strokeColor: '#775DD0'
                    },
                    {
                        name: 'Good',
                        value: 25,
                        strokeColor: '#775DD0'
                    },
                    {
                        name: 'Optimal',
                        value: 35,
                        strokeColor: '#775DD0'
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
                        strokeColor: '#775DD0'
                    },
                    {
                        name: 'Good',
                        value: 8,
                        strokeColor: '#775DD0'
                    },
                    {
                        name: 'Optimal',
                        value: 12,
                        strokeColor: '#775DD0'
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
    xaxis: {
        categories: [0,1,2,3,4,5,6,7,8,9,10,11,12]
    },
    colors: ['#00E396'],
    fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.3,
          opacityTo: 0.6,
        }
    },
    series: [
        {
            type: 'area',
            name: 'weight',
            data: [106,105.5,105,104.8,104.6,104.0,103.8,103.5,104.8,103.2,102.8,102.5,102.0],
        },
        {
            type: 'line',
            name: 'goal',
            data: [106,105.8,105.4,104.5,104.6,104.2,103.5,103.2,103.8,102.8,103.0,102.8,102.6],
            color: 'red',
        },
    ]
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
        categories: [0,1,2,3,4,5,6,7,8,9,10,11,12]
    },
    colors: ['#008FFB'],
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


var pushupStreaksChart = new ApexCharts(document.querySelector("#pushup-streaks"), pushupStreaks);
var waterConsumptionChart = new ApexCharts(document.querySelector("#water-consumption"), waterConsumption);
var fiveAMStreakChart = new ApexCharts(document.querySelector("#fiveam-streaks"), fiveAMStreak);
var pageStreakChart = new ApexCharts(document.querySelector("#page-streaks"), pagesReadStreak);
var caloriesChart = new ApexCharts(document.querySelector("#calories"), calories);
var strengthGoalChart = new ApexCharts(document.querySelector("#strength-goal"), strengthGoals);
var bodyWeightChart = new ApexCharts(document.querySelector("#bodyweight-trend"), bodyWeight);
var bodyFatChart = new ApexCharts(document.querySelector("#bodyfat-trend"), bodyFat);

pushupStreaksChart.render()
waterConsumptionChart.render()
fiveAMStreakChart.render()
pageStreakChart.render()
caloriesChart.render()
strengthGoalChart.render()
bodyWeightChart.render()
bodyFatChart.render()

$.getJSON('/chart-data/data.json', function (json) {
    pushupStreaksChart.updateSeries(json["pushup-data"]);
    waterConsumptionChart.updateSeries(json["water-consumption-data"]);
    fiveAMStreakChart.updateSeries(json["fiveam-data"]);
    pageStreakChart.updateSeries(json["pages-read-data"]);
    caloriesChart.updateSeries(json["calories-data"]);
    bodyFatChart.updateSeries([
        {
            name: 'body fat',
            type: 'area',
            data: json["bodyfat-data"]
        },
        {
            type: 'line',
            name: 'BF Goal',
            data: json["bodyfat-goal-data"],
        }
    ])
});