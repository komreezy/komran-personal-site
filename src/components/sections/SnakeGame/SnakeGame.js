import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { useInterval } from "./useInterval"
import getDocument from "get-document"
import useKeypress from "react-use-keypress"
import {
  CANVAS_SIZE,
  SNAKE_START,
  FOOD_START,
  SCALE,
  SPEED,
  DIRECTIONS,
} from "./constants"

const SnakeGame = props => {
  const canvasRef = useRef()
  const [snake, setSnake] = useState(SNAKE_START)
  const [food, setFood] = useState(FOOD_START)
  const [dir, setDir] = useState([0, -1])
  const [speed, setSpeed] = useState(null)
  const [gameOver, setGameOver] = useState(true)
  const [score, setScore] = useState(0)
  const [foodColor, setFoodColor] = useState("#E07A5F")

  useInterval(() => gameLoop(), speed)

  const endGame = () => {
    setSpeed(null)
    setGameOver(true)
    clearScore()
    props.stateSetter({ description: "Game Over" })
  }

  useKeypress(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"], event => {
    if (
      gameOver === true &&
      (event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight")
    ) {
      startGame()
    } else {
      setDir(DIRECTIONS[event.key])
    }
  })

  const createFood = () =>
    food.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)))

  const incrementScore = () => {
    setScore(score => score + 1)
    props.stateSetter({ description: "score: " + score.toString() })
    setSpeed(speed => speed - 10)
  }

  const clearScore = () => {
    setScore(0)
  }

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true
    }
    return false
  }

  const checkFoodCollision = newSnake => {
    if (newSnake[0][0] === food[0] && newSnake[0][1] === food[1]) {
      let newFood = createFood()
      incrementScore()
      setFoodColor(randomFoodColor())
      while (checkCollision(newFood, newSnake)) {
        newFood = createFood()
      }
      setFood(newFood)
      return true
    }
    return false
  }

  const randomFoodColor = () => {
    const random = Math.floor(Math.random() * Math.floor(4))
    if (random === 0) {
      return "#E07A5F"
    } else if (random === 1) {
      return "#F39237"
    } else if (random === 2) {
      return "#EF8275"
    } else if (random === 3) {
      return "#C1666B"
    } else if (random === 4) {
      return "#D5896F"
    } else {
      return "345666"
    }
  }

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake))
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]]
    snakeCopy.unshift(newSnakeHead)
    if (checkCollision(newSnakeHead)) endGame()
    if (!checkFoodCollision(snakeCopy)) snakeCopy.pop()
    setSnake(snakeCopy)
  }

  const startGame = () => {
    setSnake(SNAKE_START)
    setFood(FOOD_START)
    setDir([0, -1])
    setSpeed(SPEED)
    setGameOver(false)
    incrementScore()
  }

  useEffect(() => {
    const context = canvasRef.current.getContext("2d")
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0)
    context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    context.fillStyle = "#4A5759"
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1))
    context.fillStyle = foodColor
    context.fillRect(food[0], food[1], 1, 1)
  }, [snake, food, gameOver])

  return (
    <Container isGameOver={gameOver} role="button" tabIndex="0">
      <Canvas
        style={{ border: "1px solid gray" }}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
    </Container>
  )
}

const Container = styled.div`
  background-color: transparent;
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  height: 100vh;
  width: 100vw;
  margin: 0;
  overflow: hidden;
  text-align: center;
  outline: none;
  opacity: ${props => (props.isGameOver ? "0" : "1")};
  transition: visibility 0s linear 0s, opacity 700ms;
  pointer-events: none;
`

const Canvas = styled.canvas`
  background-color: transparent;
  height: 80%;
  height: 80vh;
  width: same-as-height;
  overflow: hidden;
  display: inline-block;
  outline: none;
  margin-top: 5%;
`

export default SnakeGame
