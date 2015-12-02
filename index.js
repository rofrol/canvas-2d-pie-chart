var ca = document.querySelector('#canvas');
var co = ca.getContext('2d');
co.font = '20px sans-serif';
co.fillStyle = "orange";
co.textBaseline = 'top';
// nothing will show if default textBaseline (alphabetic) or ideographic, bottom and x and y 0
co.fillText('hello', 0, 0);

var x = ca.width / 2;
var y = ca.height / 2;
var radius = 75;
var startAngle = 1.1 * Math.PI;
var endAngle = 1.9 * Math.PI;
var counterClockwise = false;

co.beginPath();
co.arc(x, y, radius, startAngle, endAngle, counterClockwise);
co.lineWidth = 15;
co.strokeStyle = '#a31343';
co.stroke();

co.beginPath();
co.arc(x, y, 80, 0, 2 * Math.PI, false);
co.fillStyle = 'green';
co.fill();

co.beginPath();
co.moveTo(30, 30);
co.lineTo(100, 100);
co.lineWidth = 10;
co.strokeStyle = 'red';
co.lineCap = 'round';
co.stroke();
