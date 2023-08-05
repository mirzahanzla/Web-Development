/*Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.*/

function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

console.log(isToday(new Date())); // Output: true (since it's the current date)
console.log(isToday(new Date(2023, 7, 4))); // Output: false (since it's not the current date)

//   const today = new Date();
//   console.log(today)
