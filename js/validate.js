import {checkLengthStr} from './util.js';

const imageForm = document.querySelector('.img-upload__form');
const regex = new RegExp('^#[а-яА-ЯA-Za-zёЁ0-9]{1,17}$');

const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

pristine.addValidator(document.querySelector('.text__description'), validateComment, 'Длина комментария не может быть меньше 20 и не может составлять 140 символов.');
pristine.addValidator(document.querySelector('.text__hashtags'), validateHashtag, 'Хэштег обязан начинаться с решётки (#) и не должен превышать 17 символов.');

function validateComment (value) {
  return checkLengthStr(value, 140) && !checkLengthStr(value, 19);
}

function validateHashtag (value) {
  return regex.test(value) || checkLengthStr(value, 0);
}

imageForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
