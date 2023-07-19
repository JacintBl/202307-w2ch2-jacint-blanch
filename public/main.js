const strictEquals = (valueA, valueB) => {
  const stringValueA = valueA.toString();
  const stringValueB = valueB.toString();

  if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    return false;
  }
  if (Object.is(valueA, -0) && Object.is(0, valueB)) {
    return true;
  }
  if (Object.is(valueA, 0) && Object.is(-0, valueB)) {
    return true;
  }

  return Object.is(valueA, valueB);
};

console.log(strictEquals(1, 1), "Case 1");
console.log(strictEquals(NaN, NaN), "Case 2");
console.log(strictEquals(0, -0), "Case 3");
console.log(strictEquals(-0, 0), "Case 4");
console.log(strictEquals(1, "1"), "Case 5");
console.log(strictEquals(true, false), "Case 6");
console.log(strictEquals(false, false), "Case 7");
console.log(strictEquals("Water", "oil"), "Case 8");
