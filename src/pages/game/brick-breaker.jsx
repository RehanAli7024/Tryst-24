import React, { useEffect, useRef, useState } from "react";
import "./brick-breaker.css";

const BrickBreaker = () => {
  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(true);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Game variables
    let playerWidth = 80;
    let playerHeight = 10;
    let playerVelocityX = 10;

    let player = {
      x: canvas.width / 2 - playerWidth / 2,
      y: canvas.height - playerHeight - 5,
      width: playerWidth,
      height: playerHeight,
      velocityX: playerVelocityX,
    };

    let ballWidth = 10;
    let ballHeight = 10;
    let ballVelocityX = 3;
    let ballVelocityY = 2;

    let ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      width: ballWidth,
      height: ballHeight,
      velocityX: ballVelocityX,
      velocityY: ballVelocityY,
    };

    let blockArray = [];
    let blockWidth = 50;
    let blockHeight = 10;
    let blockColumns = 8;
    let blockRows = 3;
    let blockMaxRows = 10;
    let blockCount = 0;

    let blockX = 15;
    let blockY = 45;

    // Define collision functions
    function detectCollision(a, b) {
      return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
      );
    }

    function topCollision(ball, block) {
      return detectCollision(ball, block) && ball.y + ball.height >= block.y;
    }

    function bottomCollision(ball, block) {
      return detectCollision(ball, block) && block.y + block.height >= ball.y;
    }

    function leftCollision(ball, block) {
      return detectCollision(ball, block) && ball.x + ball.width >= block.x;
    }

    function rightCollision(ball, block) {
      return detectCollision(ball, block) && block.x + block.width >= ball.x;
    }

    // Define update function
    function update() {
      requestAnimationFrame(update);
      if (gameOver) return;
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw player
      context.fillStyle = "lightgreen";
      context.fillRect(player.x, player.y, player.width, player.height);

      // Draw ball
      context.fillStyle = "white";
      ball.x += ball.velocityX;
      ball.y += ball.velocityY;
      context.fillRect(ball.x, ball.y, ball.width, ball.height);

      // Handle collisions with player
      if (topCollision(ball, player) || bottomCollision(ball, player)) {
        ball.velocityY *= -1;
      } else if (leftCollision(ball, player) || rightCollision(ball, player)) {
        ball.velocityX *= -1;
      }

      // Handle collisions with walls
      if (ball.y <= 0) {
        ball.velocityY *= -1;
      } else if (ball.x <= 0 || ball.x + ball.width >= canvas.width) {
        ball.velocityX *= -1;
      } else if (ball.y + ball.height >= canvas.height) {
        setGameOver(true);
      }

      // Draw blocks
      context.fillStyle = "skyblue";
      for (let i = 0; i < blockArray.length; i++) {
        let block = blockArray[i];
        if (!block.break) {
          if (topCollision(ball, block) || bottomCollision(ball, block)) {
            block.break = true;
            ball.velocityY *= -1;
            blockCount -= 1;
            setScore((prevscore) => prevscore + 100); // Update score
          } else if (
            leftCollision(ball, block) ||
            rightCollision(ball, block)
          ) {
            block.break = true;
            ball.velocityX *= -1;
            blockCount -= 1;
            setScore((prevscore) => prevscore + 100);
          }
          context.fillRect(block.x, block.y, block.width, block.height);
        }
      }

      // Next level
      if (blockCount === 0) {
        //setScore(prevscore => prevscore + 100 * blockRows * blockColumns); // Update score
        blockRows = Math.min(blockRows + 1, blockMaxRows);
        createBlocks();
      }
    }

    // Create blocks
    function createBlocks() {
      blockArray = [];
      for (let c = 0; c < blockColumns; c++) {
        for (let r = 0; r < blockRows; r++) {
          let block = {
            x: blockX + c * blockWidth + c * 10,
            y: blockY + r * blockHeight + r * 10,
            width: blockWidth,
            height: blockHeight,
            break: false,
          };
          blockArray.push(block);
        }
      }
      blockCount = blockArray.length;
    }

    // Start game
    function startGame() {
      requestAnimationFrame(update);
      window.addEventListener("keydown", movePlayer); // Change document to window
    }

    // Handle player movement
    function movePlayer(e) {
      console.log(e);
      e.preventDefault();
      if (gameOver) {
        if (e.code === "Space") {
          setGameOver(false);
          resetGame();
        }
        return;
      }
      if (e.code === "ArrowLeft") {
        let nextPlayerX = player.x - player.velocityX;
        if (nextPlayerX >= 0) {
          player.x = nextPlayerX;
        }
      } else if (e.code === "ArrowRight") {
        let nextPlayerX = player.x + player.velocityX;
        if (nextPlayerX + player.width <= canvas.width) {
          player.x = nextPlayerX;
        }
      }
    }

    function resetGame() {
      setGameOver(false);
      setScore(0);
      player.x = canvas.width / 2 - player.width / 2;
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      blockRows = 3;
      createBlocks();
      window.removeEventListener("keydown", movePlayer);
      // Remove event listener
      startGame(); // Re-add event listener
    }

    startGame();

    // Cleanup
    return () => {
      document.removeEventListener("keydown", movePlayer);
    };
  }, [gameOver]); // Effect runs whenever gameOver changes

  return (
    <div className="brickBreaker-container">
      <div className="game-over">Press on the window to a Start New-game</div>

      <div className="canvas-containor">
        <div
          className="leftArrowIcon"
          onClick={() => {
            const event = new KeyboardEvent("keydown", {
              key: "ArrowLeft",
              keyCode: 37,
              which: 37,
              code: "ArrowLeft",
            });

            window.dispatchEvent(event);
          }}
        >
         {'<'}
        </div>
        <canvas ref={canvasRef} id="board" width="500" height="500" onClick={()=>{
            const event = new KeyboardEvent("keydown", {
    key: " ",
    keyCode: 32, // Key code for space key
    which: 32, // Another representation of space key code
    code: "Space", // Code for space key
});

window.dispatchEvent(event);
        }} />
        <div
          className="leftArrowIcon"
          onClick={() => {
            const rightArrowKeyDownEvent = new KeyboardEvent("keydown", {
              bubbles: true,
              cancelable: true,
              key: "ArrowRight",
              code: "ArrowRight",
              keyCode: 39,
              which: 39,
            });

            document.dispatchEvent(rightArrowKeyDownEvent);
          }}
        >
         {'>'}
        </div>
      </div>
      <div className="gameScore">Score : {score}</div>
    </div>
  );
};

export default BrickBreaker;
