var ca = document.querySelector('#canvas');
var co = ca.getContext('2d');
co.font = "20px sans-serif";
co.fillStyle = "blue";
co.textBaseline = "top";
// nothing will show if default textBaseline (alphabetic) or ideographic, bottom and x and y 0
co.fillText("hello", 0, 0);

co.beginPath();
co.moveTo(30, 30);
co.lineTo(50, 50);
co.lineWidth = 5;
co.stroke();