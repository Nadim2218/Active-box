$(function () {

  $(window).on("load", function () {
    $(".preloader").delay(200).fadeOut(500)
  })

  $(".back-to-top").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  })


  




  $('.about-main').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:500,
    arrows:false,
    dots:true,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed:500,
          arrows:false,
          dots: true
        }
      },
      {
        breakpoint: 766.98,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed:500,
          arrows:false,
          dots:true
        }
      },
      {
        breakpoint:  575.98,
        settings: {
          infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:500,
    arrows:false,
    dots:true
        }
      }
    
    ]
  });
      


})



