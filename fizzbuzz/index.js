// your code here
'use strict';
$(function(){
  
  
  $('#number-chooser').submit(function(event){
    let inputNumber = $("#number-choice").val();
    console.log(inputNumber);
    event.preventDefault();
    let arr = [];
    for ( let i = 1; i <= inputNumber; i++){
      if (i % 15 === 0){
       arr.push("fizzbuzz");
      } else if (i % 3 === 0){
       arr.push("fizz");
      } else if (i % 5 === 0){
       arr.push("buzz");
      } else {
      arr.push(i);
      }
    } // for loop closing
    let newArr = arr.map(function(item){
      let newItem = item;
      let addClass = isNaN(item) ? ` ${item}` : "";
      newItem = `<div class="fizz-buzz-item${addClass}">
        <span>${item}</span>
        </div>`;
      console.log(newItem);
      return newItem;
    }); //closing map
    console.log(newArr.toString());
    $(".js-results").html(newArr.join(" "));
    });// closing submit function
});