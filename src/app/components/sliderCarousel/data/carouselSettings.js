export default {
  className: "center",
  centerMode: true,
  infinite: true,
  arrows: true,
  centerPadding: "0",
  slidesToShow: 3,
  speed: 500,
  swipeToSlide: true,
  afterChange: function (index) {},
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
