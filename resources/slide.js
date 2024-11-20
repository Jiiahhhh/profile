$(document).ready(function () {
  var currentIndex = 0;
  var slides = $(".slide");
  var slideCount = slides.length;

  // sembunyikan semua slide kecuali yang pertama
  slides.hide();
  slides.eq(currentIndex).css("z-index", 1).show();

  // auto slide setiap 5 detik
  var autoSlide = setInterval(function () {
    goToNextSlide();
  }, 5000);

  //function berpindah ke slide berikutnya
  function goToNextSlide() {
    isAnimating = true;
    slides
      .eq(currentIndex)
      .css("z-index", 0)
      .fadeOut(500, function () {
        currentIndex = (currentIndex + 1) % slideCount;
        slides
          .eq(currentIndex)
          .css("z-index", 1)
          .fadeIn(500, function () {
            isAnimating = false;
          });
        updateIndicator();
      });
  }

  //function berpindah ke slide sebelumnya
  function goToPreviousSlide() {
    if (isAnimating) return;
    isAnimating = true;
    slides
      .eq(currentIndex)
      .css("z-index", 0)
      .fadeOut(500, function () {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        slides
          .eq(currentIndex)
          .css("z-index", 1)
          .fadeIn(500, function () {
            isAnimating = false;
          });
        updateIndicator();
      });
  }

  //update dots
  function updateIndicator() {
    $(".indicator span").removeClass("active");
    $(".indicator span").eq(currentIndex).addClass("active");
  }

  // Click event for indicators
  $(".indicator span").click(function () {
    var index = $(this).index();
    if (index !== currentIndex) {
      slides
        .eq(currentIndex)
        .css("z-index", 0)
        .fadeOut(500, function () {
          currentIndex = index;
          slides
            .eq(currentIndex)
            .css("z-index", 1)
            .fadeIn(500, function () {
              isAnimating = false;
            });
          updateIndicator();
        });
    }
  });

  // inisiasi untuk next dan prev
  $(".nav-next").click(function (e) {
    e.preventDefault();
    clearInterval(autoSlide); // stop auto slide
    goToNextSlide();
    autoSlide = setInterval(goToNextSlide, 5000); // restart auto slide
  });

  $(".nav-prev").click(function (e) {
    e.preventDefault();
    clearInterval(autoSlide); // stop auto slide
    goToPreviousSlide();
    autoSlide = setInterval(goToNextSlide, 5000); // restart auto slide
  });
});
