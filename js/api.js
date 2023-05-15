import { showErrorFetch } from './error.js';
import { closeEditWindow } from './form.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { showPicturesFromObjects } from './picture.js';


function getData () {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => showPicturesFromObjects(response))
    .catch(() => showErrorFetch());
}

const sendData = (evt) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  )
    .then((response) => {
      if (response) {
        showSuccessMessage();
        closeEditWindow(true);
      } else {
        showErrorMessage();
        closeEditWindow(false);
      }
    })
    .catch(() => {
      showErrorMessage();
    });
};

export {sendData, getData};
