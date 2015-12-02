var ca = document.querySelector('#canvas');
var co = ca.getContext('2d');
co.font = '20px sans-serif';
co.fillStyle = "orange";
co.textBaseline = 'top';
// nothing will show if default textBaseline (alphabetic) or ideographic, bottom and x and y 0
co.fillText('hello', 0, 0);

var x = ca.width / 2;
var y = ca.height / 2;
var radius = 300;
var startAngle = 1.1 * Math.PI;
var endAngle = 1.9 * Math.PI;
var counterClockwise = false;

co.beginPath();
co.arc(x, y, radius, startAngle, endAngle, counterClockwise);
co.lineWidth = 15;
co.strokeStyle = '#a31343';
co.stroke();

/* small circle */
var smallCircleRadius = 100;
co.beginPath();
co.arc(x, y, smallCircleRadius, 0, 2 * Math.PI, false);
co.fillStyle = 'green';
co.fill();

co.beginPath();
co.moveTo(30, 30);
co.lineTo(100, 100);
co.lineWidth = 10;
co.strokeStyle = 'red';
co.lineCap = 'round';
co.stroke();

/* big circle */

co.strokeStyle = '#333';
co.lineWidth = 2;

var prevAngle = 0;

var fraction = 0.35;
var angle = prevAngle + fraction * Math.PI * 2;
co.fillStyle = '#24e344';
co.beginPath();
co.moveTo(x, y);
co.arc(x, y, smallCircleRadius, angle, prevAngle, true);
co.arc(x, y, radius, prevAngle, angle, false);
co.closePath();
co.lineTo(x, y);
co.fill();


/* segment lines */
var pos = {};
var smallPos = {};

co.lineCap = 'butt';
co.beginPath();
smallPos = lineToAngle(x, y, smallCircleRadius, prevAngle);
pos = lineToAngle(x, y, radius, prevAngle);
co.moveTo(smallPos.x, smallPos.y);
co.lineTo(pos.x, pos.y);
co.stroke();

co.beginPath();
smallPos = lineToAngle(x, y, smallCircleRadius, angle);
pos = lineToAngle(x, y, radius, angle);
co.moveTo(smallPos.x, smallPos.y);
co.lineTo(pos.x, pos.y);
co.stroke();

function lineToAngle(x, y, length, angle) {
    return {
        x: x + length * Math.cos(angle),
        y: y + length * Math.sin(angle)
    }
}


