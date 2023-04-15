console.log('js work!');

$(document).ready(function () {
  if(window.screen.width >= 1440){
    $(".header__input").focus(() =>{
      console.log('focused')
   $(".header .nav").hide();
    })
    $(".header__input").focusout(() =>{
      console.log('unfocused')
      $(".header .nav").show();
    })
  }
    $(".team-slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      });
      $(".news-slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            }
          ]
      });
      $(".feedbacks-slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      });
  });