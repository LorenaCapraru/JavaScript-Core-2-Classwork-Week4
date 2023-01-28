/*

Exercise 2
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/

var randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
setInterval(() => (document.body.style.backgroundColor = randomColor()), 1000);

/*let colors = ["red", "blue", "orange", "blue"];
let currentColor = 0;
function changeColor () {
  let main = document.getElementById ("main");
  main.style.backgroundColor = colors [currentColor];
  currentColor++;
  if (currentColor >= colors.length){
    currentColor = 0;
}
}
setTimeout(changeColor, 1000);
setInterval(changeColor, 1000);*/

// program to stop the setInterval() method after five times
let count = 0;
// function creation
let interval = setInterval(function () {
  // increasing the count by 1
  count += 1;
  // when count equals to 5, stop the function
  if (count === 5) {
    clearInterval(interval);
  }
  // display the current time
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
}, 2000);
