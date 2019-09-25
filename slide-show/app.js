$(function(){
    let page=0;
    let lastPage =parseInt($("#slide img").length-1);
     $("#slide img").css("display","none");
     $("#slide img").eq(page).css("display","block");
    
    function changePage(){
         $("#slide img").fadeOut(1300);
         $("#slide img").eq(page).fadeIn(1300);
    };
    
    let Timer;
    function startTimer(){
          Timer =setInterval(function(){
               page === lastPage ? page=0 : page++;
               changePage();
          },4000);
    }

    function stopTimer(){
         clearInterval(Timer);
    }
    
    $("#right").click(function() {
          stopTimer();
          startTimer();
          page === lastPage ? page=0 : page++;
          changePage();
     });
    $("#left").click(function() {
          stopTimer();
          startTimer();
          page === 0 ? page=lastPage : page--;
          changePage();
    });

    startTimer();
});
