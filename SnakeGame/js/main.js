window.onload = function () {

    let gameSnakeBoard = document.getElementById('gameSnake');
    let context = gameSnakeBoard.getContext("2d");
    document.addEventListener("keydown", keyPush);

    setInterval(snakeGame, 80);

    const speed = 1;

    let speedX = speedY = 0;
    let posX = 10;
    let posY = 15;
    let squareSize = 16;
    let squareQuantity = gameSnakeBoard.width / squareSize;
    let foodX = foodY = randomNumber(1,30);
    let score = 0;
    let scoreArray = [];
    let trail = [];
    tail = 5;

    function randomFood() {
        foodX = Math.floor(Math.random() * squareQuantity);
        foodY = Math.floor(Math.random() * squareQuantity);
    }

    function gameOver() {
        scoreArray.push(score);
        alert("Game Over");
    }

    function reduceBoard() {
        if (gameSnakeBoard.width > 400) {
            gameSnakeBoard.width = gameSnakeBoard.width - 113;
            gameSnakeBoard.height = gameSnakeBoard.height - 113;
            squareQuantity = gameSnakeBoard.width / squareSize
            randomFood();
        }
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function snakeGame() {
        posX += speedX;
        posY += speedY;
        if (posX < 0) {
            reduceBoard();
            posX = squareQuantity;
        }
        if (posX > squareQuantity) {
            reduceBoard();
            posX = 0;
        }
        if (posY < 0) {
            reduceBoard();
            posY = squareQuantity - 1;
        }
        if (posY > squareQuantity) {
            reduceBoard();
            posY = 0;
        }

        context.fillStyle = "grey";
        context.fillRect(0, 0, gameSnakeBoard.width, gameSnakeBoard.height);

        context.fillStyle = "white";
        context.fillRect(foodX * squareSize, foodY * squareSize, squareSize, squareSize);

        context.fillStyle = "blue";

        for (let i = 0; i < trail.length; i++) {
            context.fillRect(trail[i].x * squareSize, trail[i].y * squareSize, squareSize - 1, squareSize - 1);
            if (trail[i].x == posX && trail[i].y == posY) {
                if (speedX != 0 || speedY != 0) {
                    gameOver();
                }
                speedX = speedY = 0;
                tail = 5;

            }
        }

        trail.push({
            x: posX,
            y: posY
        })
        while (trail.length > tail) {
            trail.shift();
        }

        if (foodX == posX && foodY == posY) {
            tail++;
            randomFood();
          
        }

    }

    function keyPush(event) {

        switch (event.keyCode) {
            case 37: // Left
                speedX = -speed;
                speedY = 0;
                break;
            case 38: // up
                speedX = 0;
                speedY = -speed;
                break;
            case 39: // right
                speedX = speed;
                speedY = 0;
                break;
            case 40: // down
                speedX = 0;
                speedY = speed;
                break;
            default:

                break;
        }


    }

}