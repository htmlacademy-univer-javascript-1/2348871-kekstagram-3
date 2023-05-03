function randomNumber(min, max) {
  let minimumNumber = Math.ceil(Math.abs(min));
  let maximumNumber = Math.floor(Math.abs(max));
  if (minimumNumber > maximumNumber) {
    const movement = minimumNumber;
    minimumNumber = maximumNumber;
    maximumNumber = movement;
  }
  return Math.floor(Math.random() * (maximumNumber - minimumNumber + 1) + minimumNumber);
}
function checkLengthStr(string, maxLength) {
  return string.length <= maxLength;

}

randomNumber(8, 1);
checkLengthStr('Скоро экзамены', 25);
