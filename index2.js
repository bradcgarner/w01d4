'use strict';
// store the data in a JS array- not the DOM
const STORE = [];
// objects with properties: ID, name, checked

// shopping list should be rendered to the page
function renderShoppingList() {
  // read the list from STORE
  // create HTML from that list
    // HTML will include name of item, use index number in array,
    // and the appropriate class for check or not
  // print HTML to the screen
}


// add items to the list
function addListItems() {
  // read the user-submitted text (text box in the form)
  // add that text with an ID and with a status to STORE
  // ID will be the STORE[STORE.length-1].ID+1
}


// check items off the list
function checkListItems() {
  // get the ID # of which item to check off
  // apply a checked class to the item 
  // update the status property in STORE to 'checked' to true
}


// delete items from the list
function deleteListItems() {
  // get the ID # of which item to delete
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
  handleAddListItems();
  handleCheckListItems();
  handleDeleteListItems();
}

