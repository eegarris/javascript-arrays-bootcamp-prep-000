var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [1];

function addElementToBeginningOfArray (array, element) {
  return ["foo", ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo");
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, "foo"];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push("foo");
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

var array2 = [1, 2, 3];

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = array2;
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array2;
  array2.slice(0);
  return array2;
}

