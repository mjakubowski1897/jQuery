'use strict'
//funkcja document.redy() - wersja skrócona

$(function() {
//    $("body").find("p.paragraf").css({"background-color": "red"});
//    var paragrafy = $(".paragraf")[1];
//    console.log(paragrafy);
//    
//    var paragrafy = $(".paragraf");
    
    //console.log(paragrafy[0]);
//    console.log(paragrafy);
//    console.log(paragrafy.eq(0));
    
    
    $(".paragraf").each(function(index, element) {
        if (index !=0) {
        $(this).css("background-color", "green");
    }
console.log(element, index); 
    

});