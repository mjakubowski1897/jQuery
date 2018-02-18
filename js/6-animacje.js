'use strict'

$(function () {
    $("#first").slideUp(2000).slideDown(2000);
})

function callbackZwrotny() {
    $("#first").animate({
        "font-size": "1em",
        "margin-left": "0px"
    }, 3000);
    console.log("Animacja !! :)");
};

callbackZwrotny();

$("#first").animate({
    "font-size": "54px",
    "margin-left": "250px"
}, 3000, callbackZwrotny)