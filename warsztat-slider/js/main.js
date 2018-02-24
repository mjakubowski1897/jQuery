//sprawdzam czypodpięte jQuery
//var div = $('#slider');
//console.log(div);
var slideShow = $('.slide-show');

var slideCount = $('.single-slide').length;
slideWidth = 100 / slideCount;
//console.log(slideWidth);
var slideIndex = 0;
slideShow.css('width', slideCount * 100 + '%');

slideShow.find('.single-slide').each(function (index, Element) {
    $(this).css({
        'width': slideWidth + '%',
        'margin-left': slideWidth * index + '%'

    })
});

$('.prev-slide').click(function () {
    slide(slideIndex - 1);
});

$('.next-slide').click(function () {
    slide(slideIndex + 1);
});

function slide(newSlideIndex) {
    if (newSlideIndex < 0 || newSlideIndex > slideCount - 1 
////    Operatory Logiczne!!
       )
    {
        return;
    };
    
    var slideCaption = $('.slide-caption').eq(newSlideIndex);
    
    var marginLeft = newSlideIndex * (-100) + '%';

    slideCaption.hide();
    slideShow.animate({
        'margin-left':marginLeft,
    }, 800, function(){
        slideIndex = newSlideIndex;
        slideCaption.fadeIn();
    })
}

