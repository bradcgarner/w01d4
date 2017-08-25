'use strict';
// store the data in a JS array- not the DOM
const STORE = [
  { name: 'apple', id: 1, checked: true, edit: false },
  { name: 'banana', id: 2, checked: false, edit: false },
  { name: 'peach', id: 3, checked: true, edit: false }
];
// objects with properties: ID, name, checked

// create HTML for a single li within the ul
function newItemHtml(item) {
  let checkedClass = item.checked === true ? 'shopping-item__checked' : '';
  let theNameLine = '';
  let editButton = '';
  let checkButton = '';
  if ( item.edit === true ) { 
    theNameLine = `<input type="text" name="shopping-list-edit" class="js-shopping-list-edit" placeholder="${item.name}" value="${item.name}" required>
    <button class="shopping-item-save-edit"><label for="shopping-list-edit">Save Edits</label></button>` ;
  } else {
    theNameLine = `<span class="shopping-item ${checkedClass}">${item.name}</span>`;  
    editButton = `<button class="shopping-item-edit">
    <span class="button-label">edit</span>
    </button>`;
    checkButton = `<button class="shopping-item-toggle">
    <span class="button-label ${checkedClass}">check</span>
    </button>`;
  }
  let newHtml =
    `
    <li data-list-item="${item.id}">
    <div class="shopping-item-controls">
    ${theNameLine}
    ${checkButton}
    <button class="shopping-item-delete">
    <span class="button-label">delete</span>
    </button>
    ${editButton}
    </div>
  </li>`;
  return newHtml;
}

// shopping list should be rendered to the page
function renderShoppingList() {
  // read the list from STORE
  // for each item in the STORE array, run newItemHtml to get the li HTML
  let htmlString = STORE.map(newItemHtml).join('');
  // HTML will include name of item,id number in array,
  // and the appropriate class for check or not
  // convert the array to a string
  // print HTML to the screen
  //$('.shopping-list').html(htmlString);
  $('.shopping-list').html(htmlString);
  $('.js-shopping-list-entry').val('');
}


// add items to the list *****
function addListItems(name) {
  // read the user-submitted text (text box in the form)
  // add that text with an ID and with a status to STORE
  // ********* ID will be the id of the last item in STORE
  let id = STORE.length === 0 ? 1 : STORE[STORE.length - 1].id + 1;
  STORE.push({
    name,
    id,
    checked: false,
    edit: false
  });
  renderShoppingList();
  // ask TA about where / how to do id generation
}


// check items off the list *****
function checkListItems(id) {
  // get the ID # of which item to check off
  // apply a checked class to the item 
  STORE.find(x => x.id === id).checked = STORE.find(x => x.id === id).checked === false ? true : false;
  // update the status property in STORE to 'checked' to true
  renderShoppingList();
}


// delete items from the list *****
function deleteListItems(id) {
  // get the ID # of which item to delete
  // ******* filter that ID from the array (return array without that item)
  let indexToDelete = STORE.findIndex(item => item.id === id);
  STORE.splice(indexToDelete, 1);
  // look at splice instead of ^
  // delete that item from STORE
  renderShoppingList();
}

function editListItems(id) {
  // get the id of the item to edit
  STORE.find(x => x.id === id).edit = true ;
  // change the .edit attribute in the STORE to true
  renderShoppingList();  
}

function saveEditedNames(id, name) {
  console.log(name);
  console.log(id);
  // get the id of the item that needs a new name
  // for today... don't worry with data validation...
  // change the .name attribute in the STORE to the new name
  STORE.find(x => x.id === id).name = name ;
  // change the .edit attibute to false
  STORE.find(x => x.id === id).edit = false ;
  renderShoppingList();    
}


// add event listener to Submit function
function handleAddListItems() {
  // use jQuery to find the Submit button in the DOM
  // assign addListItems to the Submit button .on('click')
  $('#js-shopping-list-form').on('submit', function (event) {
    event.preventDefault();
    addListItems($('.js-shopping-list-entry').val());
  });
}


// add event listener to Check button
function handleCheckListItems() {
  // use jQuery to find the Check button in the DOM
  // assign checkListItems to the Check button .on('click')
  $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
    checkListItems($(this).closest('li').data('list-item'));
  });
}


// add event listener to Delete button
function handleDeleteListItems() {
  // use jQuery to find the Delete button in the DOM
  // assign deleteListItems to the Delete button .on('click')
  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
    deleteListItems($(this).closest('li').data('list-item'));
  });
}

function handleEditListItems() {
  $('.shopping-list').on('click', '.shopping-item-edit', function (event) {
    editListItems($(this).closest('li').data('list-item'));
  });
}
// add event listener to Delete button
function handleSaveListItems() {
  $('.shopping-list').on('click', '.shopping-item-save-edit', function (event) {
    console.log('???');
    saveEditedNames($(this).closest('li').data('list-item'), $('.js-shopping-list-edit').val());
  });
}

// on Document Ready, render the shopping list and add event listeners to DOM
function handleShoppingList() {
  renderShoppingList();
  handleAddListItems();
  handleCheckListItems();
  handleDeleteListItems();
  handleEditListItems();
  handleSaveListItems();
}

$(handleShoppingList());