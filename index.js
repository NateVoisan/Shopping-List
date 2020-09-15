/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */
/* eslint-disable quotes */


$(function() {
  $('#js-shopping-list-form').submit( event => {

    event.preventDefault();

    let addedItem = $('#shopping-list-entry').val();
    console.log(addedItem);

    let newItem = `<li><span class="shopping-item">${addedItem}</span>
                    <div class="shopping-item-controls"><button class="shopping-item-toggle">
                    <span class="button-label">check</span></button>
                    <button class="shopping-item-delete><span class="button-label">delete
                    </span></button></div></li>`;
    
    $('.shopping-list').append(newItem);
  });

  // Check and uncheck items on the list by clicking on the "Check" button

  $('.shopping-list').on('click', '.shopping-item-toggle', (event) => {
    let toggledButton = $(event.currentTarget).parent().siblings('span');
    toggledButton.toggleClass('shopping-item__checked');
  });

  // Permanently remove items from the list

  $('.shopping-list').on('click', '.shopping-item-delete', (event) => {
    $(event.currentTarget).parent().parent().remove();
  });
});