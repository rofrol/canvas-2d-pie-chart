var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');
context.font = "20px sans-serif";
context.fillStyle = "blue";
context.textBaseline = "top";
// nothing will show if default textBaseline (alphabetic) or ideographic, bottom and x and y 0
context.fillText("hello", 0, 0);