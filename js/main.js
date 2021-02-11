$(document).ready(function(){

    $('.header_area .main-menu .navbar button').on('click', function(){
        $(".header_area .main-menu .navbar").toggleClass('clickeds');
    });

    $('.header_area .main-menu .navbar .navbar-collapse .navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
    let $btns = $('.projects-area .button-group button');
    $btns.click(function(e){

        $('.projects-area .button-group button').removeClass('active')
        e.target.classList.add('active');

        let selector =$(e.target).attr('data-filter');

        $('.projects-area .grid').isotope({
            filter:selector
        });

        return false;
    })

    $('projects-area .button-group #btn1').trigger('click');

    //Owl-carousel
    $('.site-main .qual-area .owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })

    //sticky navigation

    let nav_offset_top = $('.header_area').height() + 60;

    function navbarFixed(){
        if($('.header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $('.header_area .main-menu').addClass('navbar_fixed');    
                }else{
                    $('.header_area .main-menu').removeClass('navbar_fixed');    
                }
            })
        }
    }

    navbarFixed();
    //3.06sec responsive
})