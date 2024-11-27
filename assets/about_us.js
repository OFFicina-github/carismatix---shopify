
function toggle_inspire()
  {
      $("#about_inspire_challenge_wrapper").toggle("fast");
      $("#about_inspire_challenge_wrapper_splash").toggle("fast");
  }

  
  jQuery(document).ready(function($){



    $('.about_beyond_slider').slick({
        dots: false,
        infinite: true,
        arrows:false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: false,
        fade: true,
        autoplay:true,
        autoplaySpeed: 2000,
    });

    $('.about_chrono_slider').slick({
        dots: false,
        infinite: false,
        arrows:false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        autoplay:true
    });
  
    $('.about_partnership_slider').slick({
        dots: false,
        infinite: false,
        arrows:false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        fade: false,
        autoplay:false,
        autoplaySpeed: 1000,
    });


    

  });




