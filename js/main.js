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
                    nextArrow: '<button type="button" class="arrow-next"><img src="../img/arrow-next.png"></button>',
                    autoplay: true,
                    autoplaySpeed: 2000


                 // breakpoint: 425,
                 // settings: {
                 //     arrows: false,
                 //      autoplay: true,
                 //    autoplaySpeed: 2000,
                 // }
                }

            }
                    ]
});
});