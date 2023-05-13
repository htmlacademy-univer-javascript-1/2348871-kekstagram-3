import { createArrayObjects } from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const blockPictures = document.querySelector('.pictures');

const createObjects = createArrayObjects(10);
const pictureElementsList = document.createDocumentFragment();

createObjects.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElementsList.append(pictureElement);
});

blockPictures.appendChild(pictureElementsList);
