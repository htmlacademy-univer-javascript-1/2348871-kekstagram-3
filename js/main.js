function randomNumber(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}


function checkLengthStr(string, maxLength) {
  return string.length <= maxLength;

}

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

checkLengthStr('Скоро экзамены', 25);
createArrayObjects(25);
