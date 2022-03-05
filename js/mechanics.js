
function calculateMousePosition(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop;
	return{
		x:mouseX,
		y:mouseY
	}
}

function ballReset(){
	if (player1Score >= winningScore || player2Score >= winningScore) {
		showingWinScreen = true;
	}
	
	ballX = canvas.width/2;
	ballY = canvas.height/2;
	if (ballSpeedX > 0) {
		ballSpeedX = -20;
	}
	else if (ballSpeedX < 0) {
		ballSpeedX = 20;
	}
}


function computerMovement(){
	var paddle2YCenter = paddle2Y + (paddleHeight/2);

	if (paddle2YCenter < ballY - 35){
		paddle2Y += 	14;
	}
	else if(paddle2YCenter > ballY + 35){
		paddle2Y -= 14;
	}
}

function moveEverything(){
	if (showingWinScreen) {
		return;
	}

	else if (showingMainMenu) {
		return;
	}
	else{
	
		computerMovement();
		ballX = ballX + ballSpeedX;
		ballY = ballY + ballSpeedY;
		
		if(ballX > canvas.width - paddleThickness){
			if (ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
				ballSpeedX = -ballSpeedX;
				var deltaY = ballY -(paddle2Y + paddleHeight/2);
				ballSpeedY = deltaY * 0.35;
			}
			else{
				player1Score++;
				ballReset();
			}	
		}

		if(ballX < 0 + paddleThickness){
			if (ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
				ballSpeedX = -ballSpeedX;
				var deltaY = ballY -(paddle1Y + paddleHeight/2);
				ballSpeedY = deltaY * 0.35;
			}
			else{
				player2Score++;
				ballReset();
			}
		}
	
		if(ballY > canvas.height){
			ballSpeedY = -ballSpeedY;
		}

		if(ballY < 0){
			ballSpeedY = -ballSpeedY;
		}
	}
}

function keyDownHandler(e) {
   	if(e.key == "Up" || e.key == "ArrowUp") {
   		upPressed = true;
   	}
   	else if(e.key == "Down" || e.key == "ArrowDown") {
   		downPressed = true;
    }
}

function keyUpHandler(e) {
	if(e.key == "Up" || e.key == "ArrowUp") {
		upPressed = false;
	}
	else if(e.key == "Down" || e.key == "ArrowDown") {
		downPressed = false;
	}
}