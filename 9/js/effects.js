const imageForm = document.querySelector('.img-upload__form');
const radioButtons = document.querySelectorAll('.effects__radio');
const imagePreview = imageForm.querySelector('.img-upload__preview');

const removeFilter = (evt) => {
  evt.preventDefault();
  imagePreview.classList = [];
};

const addFilter = (evt) => {
  evt.preventDefault();
  removeFilter(evt);
  imagePreview.classList.add(`effects__preview--${evt.target.value}`);
};

const addListener = (element) => {
  if (element.value === 'none') {
    element.addEventListener('click', removeFilter);
  } else {
    element.addEventListener('click', addFilter);
  }
};

const setupListeners = () => {
  radioButtons.forEach((element) => addListener(element));
};

const removeListeners = () => {
  radioButtons.forEach((element) => {
    if (element.value === 'none') {
      element.removeEventListener('click', removeFilter);
    } else {
      element.removeEventListener('click', addFilter);
    }
  });
};

export {setupListeners, removeListeners};
