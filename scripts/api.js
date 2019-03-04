'use strict';

const api = (function() {
  let BASE_URL = 'https://thinkful-list-api.herokuapp.com/AlexVarghese';

  const getItems = function() {
    return fetch(`${BASE_URL}/items`)
  };

  const createItem = function(name) {
    let newItem = {
      name,
    };
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json'
      }
    });

  };

  const updateItem = function(id, updateData) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };


  return {
    BASE_URL,
    getItems,
    createItem,
    updateItem
  };
}());