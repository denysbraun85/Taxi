/* Car tariffs slider */
$(document).ready(function(){
    $('.car-container-slider').slick({
         arrows: false,
         slidesToShow: 3,
         // centerMode: true,
         responsive: [
             {
                 breakpoint: 992,
                 settings: {
                     arrows: true,
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     // prevArrow: $('.arrow-prev'),
                     // nextArrow: $('.arrow-next'),
                     prevArrow: '<button class="arrow-prev"><img src="./img/arrow-prev.png"></button>',
                     nextArrow: '<button class="arrow-next"><img src="./img/arrow-next.png"></button>',
                     autoplay: true,
                     autoplaySpeed: 2000
                 }
             },
             {
                     breakpoint: 450,
                     settings: {
                         arrows: false,
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         autoplay: true,
                         autoplaySpeed: 2000
                     }
                 }

                    ]

});
});

/* Feedback slider */
$(document).ready(function(){
    $('.feedback-container').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});