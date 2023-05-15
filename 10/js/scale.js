const scale = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');
// const decreaseButton = document.querySelector('.scale__control--smaller');
// const increaseButton= document.querySelector('.scale__control--bigger');

export const resizeImage = (newScale) => {
  scale.value = `${newScale}%`;
  imagePreview.style.transform = `scale(${newScale/100})`;
};

export const increase = (evt) => {
  evt.preventDefault();
  let currentScale = parseInt(scale.value, 10);
  if (currentScale <= 75) {
    currentScale += 25;
  } else {
    currentScale = 100;
  }
  resizeImage(currentScale);
};

export const decrease = (evt) => {
  evt.preventDefault();
  let currentScale = parseInt(scale.value, 10);
  if (currentScale >= 50) {
    currentScale -= 25;
  } else {
    currentScale = 25;
  }
  resizeImage(currentScale);
};


