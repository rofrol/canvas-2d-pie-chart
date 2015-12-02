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

/* small circle */
var smallCircleRadius = 100;
co.beginPath();
co.arc(x, y, smallCircleRadius, 0, 2 * Math.PI, false);
co.fillStyle = '#aaa';
co.fill();

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


/* segment line */
var pos = {};
var smallPos = {};

co.lineCap = 'butt';

co.beginPath();
smallPos = lineToAngle(x, y, smallCircleRadius, prevAngle);
pos = lineToAngle(x, y, radius, prevAngle);
co.moveTo(smallPos.x, smallPos.y);
co.lineTo(pos.x, pos.y);
co.stroke();

/* big circle */

co.strokeStyle = '#333';
co.lineWidth = 2;

prevAngle = angle;

fraction = 0.50;
angle = prevAngle + fraction * Math.PI * 2;
co.fillStyle = '#aabb55';
co.beginPath();
co.moveTo(x, y);
co.arc(x, y, smallCircleRadius, angle, prevAngle, true);
co.arc(x, y, radius, prevAngle, angle, false);
co.closePath();
co.lineTo(x, y);
co.fill();

/* segment line */
co.beginPath();
smallPos = lineToAngle(x, y, smallCircleRadius, prevAngle);
pos = lineToAngle(x, y, radius, prevAngle);
co.moveTo(smallPos.x, smallPos.y);
co.lineTo(pos.x, pos.y);
co.stroke();

/* big circle */

co.strokeStyle = '#333';
co.lineWidth = 2;

prevAngle = angle;

fraction = 0.15;
angle = prevAngle + fraction * Math.PI * 2;
co.fillStyle = '#005bb5';
co.beginPath();
co.moveTo(x, y);
co.arc(x, y, smallCircleRadius, angle, prevAngle, true);
co.arc(x, y, radius, prevAngle, angle, false);
co.closePath();
co.lineTo(x, y);
co.fill();

/* segment line */
co.beginPath();
smallPos = lineToAngle(x, y, smallCircleRadius, prevAngle);
pos = lineToAngle(x, y, radius, prevAngle);
co.moveTo(smallPos.x, smallPos.y);
co.lineTo(pos.x, pos.y);
co.stroke();

function lineToAngle(x, y, length, angle) {
    return {
        x: x + length * Math.cos(angle),
        y: y + length * Math.sin(angle)
    }
}


