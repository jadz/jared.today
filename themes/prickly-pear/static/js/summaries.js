const WEEKLY_TARGET_AVG_CALORIES = -500;
const WEEKLY_TARGET_BF_PERCENT   = -0.5
const WEEKLY_TARGET_BW_KG        = -0.5;

const FOUR_WEEK_TARGET_AVG_CALORIES = -500;
const FOUR_WEEK_TARGET_BF_PERCENT   = WEEKLY_TARGET_BF_PERCENT * 4;
const FOUR_WEEK_TARGET_BW_KG        = WEEKLY_TARGET_BW_KG      * 4

function r_2dec(num) {
    return Math.round(num * 100) / 100
}

function positive_negative(target, value) {
    // If the target is negative, we expect some kind of loss to have occurred (e.g cut)
    if (target < 0) {
        return (target >= value) ? "positive" : "negative";
    }

    // If the target is positive, we expect there to be some kind of gain (e.g bulk)
    return (value >= target) ? "positive" : "negative"
}

$.getJSON('/summary-data/data.json', function (json) {
    buildLastWeekSummary(json);
    buildFourWeekSummary(json);
});

function buildLastWeekSummary(data) {
    var element_target_calories = document.getElementById("summary-lw-target-calorie-maintenance-data");
    var element_target_body_fat = document.getElementById("summary-lw-target-bf-percent-data");
    var element_target_body_kg  = document.getElementById("summary-lw-target-bw-kg-data");

    element_target_calories.innerHTML = WEEKLY_TARGET_AVG_CALORIES;
    element_target_body_fat.innerHTML = WEEKLY_TARGET_BF_PERCENT + "%";
    element_target_body_kg.innerHTML  = WEEKLY_TARGET_BW_KG;

    var element_label_calories = document.getElementById("summary-lw-calorie-maintenance");
    var element_data_calories  = document.getElementById("summary-lw-calorie-maintenance-data");

    var element_label_body_fat = document.getElementById("summary-lw-bf-percent");
    var element_data_body_fat  = document.getElementById("summary-lw-bf-percent-data");

    var element_label_body_kg  = document.getElementById("summary-lw-bw-kg");
    var element_data_body_kg   = document.getElementById("summary-lw-bw-kg-data");

    data_lw_calories     = r_2dec(data["last-week-calorie-burn-maintenance"]);
    data_lw_body_fat     = r_2dec(data["last-week-body-fat-diff"]);
    data_lw_body_fat_avg = r_2dec(data["last-week-body-fat-avg"]);
    data_lw_body_kg      = r_2dec(data["last-week-body-kg-diff"]);
    data_lw_body_kg_avg  = r_2dec(data["last-week-body-kg-avg"]);

    element_label_calories.className = "summary-label-" + positive_negative(WEEKLY_TARGET_AVG_CALORIES, data_lw_calories)
    element_data_calories.className  = "summary-data-"  + positive_negative(WEEKLY_TARGET_AVG_CALORIES, data_lw_calories)

    element_label_body_fat.className = "summary-label-" + positive_negative(WEEKLY_TARGET_BF_PERCENT, data_lw_body_fat)
    element_data_body_fat.className = "summary-data-" + positive_negative(WEEKLY_TARGET_BF_PERCENT, data_lw_body_fat)

    element_label_body_kg.className = "summary-label-" + positive_negative(WEEKLY_TARGET_BW_KG, data_lw_body_kg)
    element_data_body_kg.className = "summary-data-" + positive_negative(WEEKLY_TARGET_BW_KG, data_lw_body_kg)

    element_data_calories.innerHTML = data_lw_calories;
    element_data_body_fat.innerHTML = data_lw_body_fat + "% (" + data_lw_body_fat_avg + "%)";
    element_data_body_kg.innerHTML = data_lw_body_kg + "kg (" + data_lw_body_kg_avg + ")";
}

function buildFourWeekSummary(data) {
    var element_target_calories = document.getElementById("summary-4w-target-calorie-maintenance-data");
    var element_target_body_fat = document.getElementById("summary-4w-target-bf-percent-data");
    var element_target_body_kg  = document.getElementById("summary-4w-target-bw-kg-data");

    element_target_calories.innerHTML = FOUR_WEEK_TARGET_AVG_CALORIES;
    element_target_body_fat.innerHTML = FOUR_WEEK_TARGET_BF_PERCENT + "%";
    element_target_body_kg.innerHTML  = FOUR_WEEK_TARGET_BW_KG;

    var element_label_calories = document.getElementById("summary-4w-calorie-maintenance");
    var element_data_calories  = document.getElementById("summary-4w-calorie-maintenance-data");

    var element_label_body_fat = document.getElementById("summary-4w-bf-percent");
    var element_data_body_fat  = document.getElementById("summary-4w-bf-percent-data");

    var element_label_body_kg  = document.getElementById("summary-4w-bw-kg");
    var element_data_body_kg   = document.getElementById("summary-4w-bw-kg-data");

    data_lw_calories     = r_2dec(data["last-4-week-calorie-burn-maintenance"]);
    data_lw_body_fat     = r_2dec(data["last-4-week-body-fat-diff"]);
    data_lw_body_kg      = r_2dec(data["last-4-week-body-kg-diff"]);

    element_label_calories.className = "summary-label-" + positive_negative(FOUR_WEEK_TARGET_AVG_CALORIES, data_lw_calories)
    element_data_calories.className  = "summary-data-"  + positive_negative(FOUR_WEEK_TARGET_AVG_CALORIES, data_lw_calories)

    element_label_body_fat.className = "summary-label-" + positive_negative(FOUR_WEEK_TARGET_BF_PERCENT, data_lw_body_fat)
    element_data_body_fat.className = "summary-data-" + positive_negative(FOUR_WEEK_TARGET_BF_PERCENT, data_lw_body_fat)

    element_label_body_kg.className = "summary-label-" + positive_negative(FOUR_WEEK_TARGET_BW_KG, data_lw_body_kg)
    element_data_body_kg.className = "summary-data-" + positive_negative(FOUR_WEEK_TARGET_BW_KG, data_lw_body_kg)

    element_data_calories.innerHTML = data_lw_calories;
    element_data_body_fat.innerHTML = data_lw_body_fat + "%";
    element_data_body_kg.innerHTML = data_lw_body_kg + "kg";
}