'use strict';
// store the data in a JS array- not the DOM
const STORE = [
  {name:'apple',id:1,checked:true},
  {name:'banana',id:2,checked:false},
  {name:'peach',id:'x',checked:true}
];
// objects with properties: ID, name, checked

// create HTML for a single li within the ul
function newItemHtml(item) {
  let checkedClass = item.checked === true ? 'shopping-item__checked' : '';
  let newHtml =
    `
    <li data-list-item="${item.id}">
    <span class="shopping-item ${checkedClass}">${item.name}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label ${checkedClass}">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
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
    console.log(htmlString);
    //$('.shopping-list').html(htmlString);
}


// add items to the list *****
function addListItems(id) {
  // read the user-submitted text (text box in the form)
  // add that text with an ID and with a status to STORE
  // ********* ID will be the id of the last item in STORE
  let id = STORE.length === 0 ? 1 : STORE[STORE.length-1].ID+1 ;
  // ask TA about where / how to do id generation
}


// check items off the list *****
function checkListItems(id) {
  // get the ID # of which item to check off
  // apply a checked class to the item 
  // update the status property in STORE to 'checked' to true
}


// delete items from the list *****
function deleteListItems(id) {
  // get the ID # of which item to delete
  // ******* filter that ID from the array (return array without that item)
  let filteredArr = STORE.filter(item => item.id !== id);
  // look at splice instead of ^
  // delete that item from STORE
}


// add event listener to Submit function
function handleAddListItems() {
  // use jQuery to find the Submit button in the DOM
  // assign addListItems to the Submit button .on('click')
}


// add event listener to Check button
function handleCheckListItems() {
  // use jQuery to find the Check button in the DOM
  // assign checkListItems to the Check button .on('click')
}


// add event listener to Delete button
function handleDeleteListItems() {
  // use jQuery to find the Delete button in the DOM
  // assign deleteListItems to the Delete button .on('click')
}


// on Document Ready, render the shopping list and add event listeners to DOM
function handleShoppingList() {
  renderShoppingList();
  //handleAddListItems();
  //handleCheckListItems();
  //handleDeleteListItems();
}

//wrap in $() later
handleShoppingList();