'use strict';

$('.thumbnail').on('click', function(event){
  let theSrc = $(this).find('img').attr('src');
  console.log(theSrc);
  $('.hero').find('img').attr('src', theSrc);
});