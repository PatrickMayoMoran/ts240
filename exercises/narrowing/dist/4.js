"use strict";
function isCircle(shape) {
    return shape.kind === "circle";
}
function isSquare(shape) {
    return shape.kind === 'square';
}
function getArea(shape) {
    if (isCircle(shape)) {
        return Math.PI * shape.radius * shape.radius;
    }
    else { //if (isSquare(shape)) {
        return shape.sideLength * shape.sideLength;
    }
}
console.log(getArea({ kind: "circle", radius: 10 }));
console.log(getArea({ kind: "square", sideLength: 10 }));
