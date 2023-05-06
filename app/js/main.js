$(function () {


  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart:function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    
  })

  $(".shop-contentlist__star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });
  
  $(".filter-product__star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });


  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  })

  var mixer = mixitup('.products__items');
  var mixer = mixitup('.design__items');

 

});