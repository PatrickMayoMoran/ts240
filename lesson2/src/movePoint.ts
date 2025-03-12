interface Point {
  readonly x: number;
  readonly y: number;
}

function movePoint(point: Point, dx: number, dy: number): Point {
  return { x: point.x + dx, y: point.y + dy };
}

let newPoint: Point = movePoint({ x: 3, y: 4 }, 2, 2);
console.log(newPoint);
