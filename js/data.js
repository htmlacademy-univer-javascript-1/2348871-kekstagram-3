import { randomNumber } from './util.js';

const createObject = (number) => ({
  id: number,
  url: `photos/${number}.jpg`,
  description: `This is my ${number} post`,
  likes: randomNumber(15, 200),
  comments: randomNumber(0, 200)
});

function createArrayObjects (number) {
  const arrayOfObjects = [];
  for (let i = 0; i < number; i++) {
    arrayOfObjects.push(createObject(i+1));
  }
  return arrayOfObjects;
}

export {createArrayObjects};
