const CANVAS_SIZE = [800, 800]
const SNAKE_START = [
  [20, 19],
  [20, 20],
]
const FOOD_START = [20, 15]
const SCALE = 12
const SPEED = 120
const DIRECTIONS = {
  ArrowUp: [0, -1], // up
  ArrowDown: [0, 1], // down
  ArrowLeft: [-1, 0], // left
  ArrowRight: [1, 0], // right
}

export { CANVAS_SIZE, SNAKE_START, FOOD_START, SCALE, SPEED, DIRECTIONS }
