var ca = document.querySelector('#canvas');
var co = ca.getContext('2d');
co.font = '20px sans-serif';
co.fillStyle = "orange";
co.textBaseline = 'top';
// nothing will show if default textBaseline (alphabetic) or ideographic, bottom and x and y 0
co.fillText('hello', 0, 0);

var x = ca.width / 2;
var y = ca.height / 2;

var config = {
    lineCap: 'butt',
    lineWidth: 10,
    strokeStyle: '#333',
    smallCircleRadius: 100,
    radius: 300
};

/* small circle */
co.beginPath();
co.arc(x, y, config.smallCircleRadius, 0, 2 * Math.PI, false);
co.fillStyle = '#aaa';
co.fill();

var segments = [
    {
        fraction: 0.35,
        fillStyle: '#24e344'
    },
    {
        fraction: 0.50,
        fillStyle: '#aabb55'
    },
    {
        fraction: 0.15,
        fillStyle: '#005bb5'
    }
];

/* big circle */
var prevAngle = 0;
var segment = {};
var angle = 0;
var i = 0;

for(i = 0; i < segments.length; ++i, prevAngle = angle) {
    angle = prevAngle + segments[i].fraction * Math.PI * 2;
    co.fillStyle = segments[i].fillStyle;
    co.beginPath();
    co.moveTo(x, y);
    co.arc(x, y, config.smallCircleRadius, angle, prevAngle, true);
    co.arc(x, y, config.radius, prevAngle, angle, false);
    co.fill();
}

prevAngle = 0;
var pos = {};
var smallPos = {};

co.lineCap = config.lineCap;
co.strokeStyle = config.strokeStyle;
co.lineWidth = config.lineWidth;

/* segment lines */
for(i = 0; i < segments.length; ++i, prevAngle = angle) {
    angle = prevAngle + segments[i].fraction * Math.PI * 2;
    smallPos = lineToAngle(x, y, config.smallCircleRadius, prevAngle);
    pos = lineToAngle(x, y, config.radius, prevAngle);

    co.beginPath();
    co.moveTo(smallPos.x, smallPos.y);
    co.lineTo(pos.x, pos.y);
    co.stroke();
}

function lineToAngle(x, y, length, angle) {
    return {
        x: x + length * Math.cos(angle),
        y: y + length * Math.sin(angle)
    }
}


