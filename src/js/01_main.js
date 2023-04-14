console.log('js work!');

$(document).ready(function () {
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