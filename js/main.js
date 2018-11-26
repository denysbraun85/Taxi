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
                    prevArrow: '<button type="button" class="arrow-prev"><img src="../img/arrow-prev.png"></button>',
                    nextArrow: '<button type="button" class="arrow-next"><img src="../img/arrow-next.png"></button>'
                    // centerMode: true

                 // breakpoint: 768,
                 // settings: {
                 //     arrows: true,
                 //     centerMode: true,
                 //     // centerPadding: '40px',
                 //     slidesToShow: 1,
                 //     slidesToScroll: 1
                 // }
                }

            }
                    ]
});
});