import {isEscapeKey} from './util.js';
import { setupListeners, removeListeners} from './effects.js';
import { increase, decrease } from './scale.js';

const imageForm = document.querySelector('.img-upload__form');
const imageOverlay = imageForm.querySelector('.img-upload__overlay');
const img = document.querySelector('.img-upload__preview > img');
const uploadButton = imageForm.querySelector('#upload-file');
const closeButton = imageForm.querySelector('#upload-cancel');
const decreaseButton = document.querySelector('.scale__control--smaller');
const increaseButton= document.querySelector('.scale__control--bigger');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditWindow();
  }
};

function openEditWindow() {
  img.src = URL.createObjectURL(uploadButton.files[0]);
  imageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  increaseButton.addEventListener('click', (evt) => {
    increase(evt);
  });
  decreaseButton.addEventListener('click', (evt) => {
    decrease(evt);
  });
  setupListeners();
}

export function closeEditWindow() {
  document.body.classList.remove('modal-open');
  imageOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  img.classList.remove(...img.classList);
  img.classList.add('effects__preview--none');
  cleanForm();
  removeListeners();
}

function cleanForm() {
  document.querySelector('#upload-file').value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
}

uploadButton.addEventListener('change', (evt) => {
  evt.preventDefault();
  openEditWindow();
});

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeEditWindow();
});


const cancelButton = document.querySelector('#upload-cancel');

cancelButton.addEventListener('click', () => closeEditWindow());
