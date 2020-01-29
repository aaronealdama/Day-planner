

$(".save-9").on("click", function() {
     localStorage.setItem("9AM", $("#9").val());
})
$(".delete-9").on("click", function() {
    localStorage.setItem("9AM", "");
    $("#9").val("");
})

$(".save-10").on("click", function() {
    localStorage.setItem("10AM", $("#10").val());
})
$(".delete-10").on("click", function() {
    localStorage.setItem("10AM", "");
    $("#10").val("");
})

$(".save-11").on("click", function() {
    localStorage.setItem("11AM", $("#11").val());
})
$(".delete-11").on("click", function() {
    localStorage.setItem("11AM", "");
    $("#11").val("");
})

$(".save-12").on("click", function() {
    localStorage.setItem("12PM", $("#12").val());
})
$(".delete-12").on("click", function() {
    localStorage.setItem("12PM", "");
    $("#12").val("");
})

$(".save-1").on("click", function() {
    localStorage.setItem("1PM", $("#13").val());
})
$(".delete-1").on("click", function() {
    localStorage.setItem("1PM", "");
    $("#13").val("");
})

$(".save-2").on("click", function() {
    localStorage.setItem("2PM", $("#14").val());
})
$(".delete-2").on("click", function() {
    localStorage.setItem("2PM", "");
    $("#14").val("");
})

$(".save-3").on("click", function() {
    localStorage.setItem("3PM", $("#15").val());
})
$(".delete-3").on("click", function() {
    localStorage.setItem("3PM", "");
    $("#15").val("");
})

$(".save-4").on("click", function() {
    localStorage.setItem("4PM", $("#16").val());
})
$(".delete-4").on("click", function() {
    localStorage.setItem("4PM", "");
    $("#16").val("");
})

$(".save-5").on("click", function() {
    localStorage.setItem("5PM", $("#17").val());
})
$(".delete-5").on("click", function() {
    localStorage.setItem("5PM", "");
    $("#17").val("");
})

$(document).ready(function() {
    let nineAMGet = localStorage.getItem("9AM");
    if (nineAMGet !== null) {
        $("#9").val(nineAMGet);
    }
    let tenAMGet = localStorage.getItem("10AM");
    if (tenAMGet !== null) {
        $("#10").val(tenAMGet);
    }
    let elevenAMGet = localStorage.getItem("11AM");
    if (elevenAMGet !== null) {
        $("#11").val(elevenAMGet);
    }
    let twelvePMGet = localStorage.getItem("12PM");
    if (twelvePMGet !== null) {
        $("#12").val(twelvePMGet);
    }
    let onePMGet = localStorage.getItem("1PM");
    if (onePMGet !== null) {
        $("#13").val(onePMGet);
    }
    let twoPMGet = localStorage.getItem("2PM");
    if (twoPMGet !== null) {
        $("#14").val(twoPMGet);
    }
    let threePMGet = localStorage.getItem("3PM");
    if (threePMGet !== null) {
        $("#15").val(threePMGet);
    }
    let fourPMGet = localStorage.getItem("4PM");
    if (fourPMGet !== null) {
        $("#16").val(fourPMGet);
    }
    let fivePMGet = localStorage.getItem("5PM");
    if (fivePMGet !== null) {
        $("#17").val(fivePMGet);
    }
    let date = moment().format("MMMM Do YYYY hh:mm A");
    $(".date-container").text(date);
    let present = moment().hour();
    let startTime = 9;
    let endTime = 17;
    if (present >= startTime && present <= endTime) {
        let presentTime = "#" + present;
        $(presentTime).css("background-color", "lime")
        for (let i = startTime; i <= endTime; i++) {
            let timeLoop = "#" + i;
            if (i < present) {
                $(timeLoop).css("background-color","DeepSkyBlue");
            } else if (i > present) {
                $(timeLoop).css("background-color","aquamarine");
            }
        }
    } else {
        $("input").css("background-color","aquamarine")
    }
})

