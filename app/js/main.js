$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });
  $('.products__inner-btn').on('click', function () {
    $('.products__filter-btn').toggleClass('products__filter-btn--active')
  });

  $('.footer-top__title-navone').on('click', function () {
    $('.footer-top__list-navone').slideToggle();
    $(this).toggleToggle();
  });
  $('.footer-top__title-navtwo').on('click', function () {
    $('.footer-top__list-navtwo').slideToggle();
    $(this).toggleToggle();
  });

  $('.shop-filter__btn').on('click', function () {
    $('.shop__filters').toggleClass('shop__filters--active')
  });



  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  });



  $('.product-one__input').styler({});

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical:true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade:true,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          draggable: true,
        }}
      ]
  });



  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
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
  $(".product-one__star").rateYo({
    starWidth: "18px",
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