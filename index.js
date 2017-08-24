'use strict';

// users enter items they need by entering text 
//       in html: '.js-shopping-list-entry'
let itemEntered = $('.js-shopping-list-entry').val();
// and hit return or add
//       add button html: $('.js-shopping-list-form button').submit  ...or .on('submit'...)
$('.js-shopping-list-form button').submit(function(event){  
  newItem();
})
//       return in html: .on('keypress')   ... event.which === 13   ... possibly keydown
$('.js-shopping-list-entry').on('keypress', function(event){
  newItem();
}
// check and uncheck items on the list via check button
//       in html: $(.'shopping-item-toggle')
$('.shopping-item-toggle').on('click', function(event){
  $(this).find('.button-label').text(); // we ONLY want to change the label of the child of the button that was clicked...
})
// permently remove items from the list
//       in html: $(.'shopping-item-delete')
$('.shopping-list').on('click', '.shopping-item-delete', function(event){
  $(this).parent().parent().remove(); // permanently remove the li from the DOM
})


function newItem(){
// example of 1 li to add.
<li>
<span class="shopping-item">bread</span>
<div class="shopping-item-controls">
  <button class="shopping-item-toggle">
    <span class="button-label">check</span>
  </button>
  <button class="shopping-item-delete">
    <span class="button-label">delete</span>
  </button>
</div>
</li>
}