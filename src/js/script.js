$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true,
  dots: true,
  nav: false,
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});
