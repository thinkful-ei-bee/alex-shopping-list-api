'use strict';

const api = (function() {
  let BASE_URL = 'https://thinkful-list-api.herokuapp.com/AlexVarghese';

  /* Private Functions */
  function listApiFetch(...args) {
    let error;

    fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status };
        }

        if (!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }

        return res.json();
      })
      .then(data => {
        // fail! 
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        // success! put data in the store
        return data;
      });
  }
  const getItems = function() {
    return listApiFetch(`${BASE_URL}/items`)
  };

  const createItem = function(name) {
    let newItem = {
      name,
    };
    return listApiFetch(`${BASE_URL}/items`, {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json'
      }
    });

  };

  const updateItem = function(id, updateData) {
    return listApiFetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  const deleteItem = function(id) {
    return listApiFetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
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