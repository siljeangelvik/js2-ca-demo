var d = new Date, month = new Array;
month[0] = "Jan", month[1] = "Feb", month[2] = "Mar", month[3] = "Apr", month[4] = "May", month[5] = "Jun", month[6] = "Jul", month[7] = "Aug", month[8] = "Sept", month[9] = "Oct", month[10] = "Nov", month[11] = "Dec";
var month_name = month[d.getMonth()], day_of_month = d.getDate(), current_year = d.getFullYear(),
    dayOfMonthElement = document.getElementById("current_day"),
    currentMonthElement = document.getElementById("current_month"),
    currentYearElement = document.getElementById("current_year");
!function () {
    currentMonthElement.innerHTML = month_name, dayOfMonthElement.innerHTML = day_of_month, currentYearElement.innerHTML = current_year
}();