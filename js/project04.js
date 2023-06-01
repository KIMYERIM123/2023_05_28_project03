$(function () {
  $(window).on("scroll", function () {
    // 변수에 스크롤한 양을 담는다
    let sct = $(window).scrollTop();
    console.log(sct);
    if (sct > 0) {
      $("header").addClass("on");
    } else {
      $("header").removeClass("on");
    }
  });

  $(".main_slide").slick({
    autoplay: true,
    arrows: false,
  });

  $(".sec_slide .dots li").on("mouseenter", function () {
    // 내가 클릭한 요소의 번호를 알려줘
    let idx = $(this).index();
    console.log(idx);
    $(".main_slide").slick("slickGoTo", idx, true);
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  $(".mainviual .pause").on("click", function () {
    $(".mainviual video").trigger("pause");
  });

  $(".mainviual .play").on("click", function () {
    $(".mainviual video").trigger("play");
  });
});
