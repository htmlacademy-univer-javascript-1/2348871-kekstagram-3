function randomNumber(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function checkLengthStr(string, maxLength) {
  return string.length <= maxLength;

}

const isEscapeKey = (evt) => evt.key === 'Escape';

export {randomNumber, checkLengthStr, isEscapeKey};
