$(function() {
  $(window).scroll(() => {
    $("#a").each(function() {
      let imgPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5)
        $(this).addClass("fadeIn");
    });
  });
});

$(function() {
  $(window).scroll(() => {
    $("#b").each(function() {
      let imgPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5)
        $(this).addClass("fadeIn");
    });
  });
});

$(function() {
  $(window).scroll(() => {
    $("#c").each(function() {
      let imgPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5)
        $(this).addClass("fadeIn");
    });
  });
});

$(function() {
  $(window).scroll(() => {
    $("#d").each(function() {
      let imgPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5)
        $(this).addClass("fadeIn");
    });
  });
});
