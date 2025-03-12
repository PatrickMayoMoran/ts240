"use strict";
function movePoint(point, dx, dy) {
    return { x: point.x + dx, y: point.y + dy };
}
let newPoint = movePoint({ x: 3, y: 4 }, 2, 2);
console.log(newPoint);
