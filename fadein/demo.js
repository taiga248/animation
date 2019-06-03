(function(){
  $('#slide_menu').css({ right: '-200px',});
  $('#slide_menu')
  .on('mouseover', function(){
    $(this).stop(true).animate({ right: 0 }, 200, 'easeInOutCubic');
  })
  .on('mouseout', function(){
    $(this).stop(true).animate({ right: '-200px'}, 200, 'easeInOutCubic');
  });
});
