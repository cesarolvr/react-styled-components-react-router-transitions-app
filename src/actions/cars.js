import { API_URL } from '../utils/js/consts';

function getCars() {
  fetch(API_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
  });
}

export default getCars;