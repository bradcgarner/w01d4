'use strict';


// and hit return or add: $('.js-shopping-list-form button').submit  ...or .on('submit'...)
$('#js-shopping-list-form').on('submit', function (event) {
  event.preventDefault();
  newItem($('.js-shopping-list-entry').val());
  $('.js-shopping-list-entry').val('');
});

// check and uncheck items on the list via check button... in html: $(.'shopping-item-toggle')
$('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
  $(this).children().toggleClass('shopping-item__checked'); // we ONLY want to change the label of the child of the button that was clicked...
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});
// permently remove items from the list... in html: $(.'shopping-item-delete')
$('.shopping-list').on('click', '.shopping-item-delete', function (event) {
  $(this).parent().parent().remove(); // permanently remove the li from the DOM
});

function newItem(item) {
  let newHTML =
    `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
  // add newHTML to the end of .'shopping-list'  
  $('.shopping-list').append(newHTML);
}