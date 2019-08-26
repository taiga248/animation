$(function(){
  $(window).scroll(function (){
    $("#a").each(function(){
      let imgPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5)
        $(this).addClass("fade_on");
    });
  });
});
$(function(){
  $(window).scroll(function (){
    $("#b").each(function(){
      let imgPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5)
        $(this).addClass("fade_on");
    });
  });
});
$(function(){
  $(window).scroll(function (){
    $("#c").each(function(){
      let imgPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5)
        $(this).addClass("fade_on");
    });
  });
});
$(function(){
  $(window).scroll(function (){
    $("#d").each(function(){
      let imgPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5)
        $(this).addClass("fade_on");
    });
  });
});
$(function(){
  $(window).scroll(function (){
    $("#e").each(function(){
      let imgPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5)
        $(this).addClass("fade_on");
    });
  });
});
