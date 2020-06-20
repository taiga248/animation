(function() {
  const curve = document.getElementById("curve");
  /* 曲がり具合の初期値 */
  const defaultCurveValue = 350;
  /* どんくらいぐにゃーんてするか */
  const curveRate = 3;
  /* スクロールの位置を記憶する用 */
  let scroll_position = 0;
  let curveValue;
  let ticking = false;

  function scrollEvent(scrollPos) {
    if (scrollPos >= 0 && scrollPos < defaultCurveValue) {
      curveValue = defaultCurveValue - parseFloat(scrollPos / curveRate);
      curve.setAttribute(
        "d",
        "M 800 300 Q 400 " + curveValue + " 0 300 L 0 0 L 800 0 L 800 300 Z"
      );
    }
  }

  window.addEventListener("scroll", function(e) {
    scroll_position = window.scrollY;

    if (!ticking) {
      /* ブラウザにアニメーションの再描画を知らせて実行させる */
      window.requestAnimationFrame(function() {
        scrollEvent(scroll_position);
        ticking = false;
      });
    }
    ticking = true;
  });
})();
