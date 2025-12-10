$(document).ready(function () {
  var $carousel = $(".custom-carousel");

  if (!$carousel.hasClass("owl-loaded")) {
    $carousel.owlCarousel({
      autoWidth: true,
      loop: true,
      dots: true,
      nav: false,
      center: true,
      smartSpeed: 700,
      navSpeed: 700,
      autoplaySpeed: 700,
    });
  }

  $carousel.on(
    "initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel",
    function (e) {
      $carousel.find(".owl-item .item").removeClass("active");

      $carousel.find(".owl-item.center .item").addClass("active");
    }
  );

  $(document).on("click", ".custom-carousel .owl-item .item", function (e) {
    var $item = $(this);
    var $owlItem = $item.closest(".owl-item");
    var $nonCloned = $carousel.find(".owl-item").not(".cloned");
    var targetIndex = $nonCloned.index($owlItem);

    if (targetIndex === -1) {
      var html = $item.prop("outerHTML");
      var $match = $nonCloned
        .find(".item")
        .filter(function () {
          return $(this).prop("outerHTML") === html;
        })
        .first();
      if ($match.length) {
        targetIndex = $match.closest(".owl-item").index();
      } else {
        targetIndex = $owlItem.index();
      }
    }

    if (targetIndex >= 0) {
      var gotoSpeed = 700;
      $carousel.trigger("to.owl.carousel", [targetIndex, gotoSpeed]);
    }
  });
});
