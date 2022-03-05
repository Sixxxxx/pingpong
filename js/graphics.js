
	function drawEverything(){
		displayBackground();	
		if (showingMainMenu == true) {
			displayMainMenu();
			return;
		}	
		
		if (showingWinScreen) {
			displayWinScreen();	
			return;
		}
		
		drawNet();

		drawPlayer1Paddle();

		drawPlayer2Paddle();

		drawBall();

		drawPlayer1Score();

		drawPlayer2Score();
		
		
		if(downPressed && paddle1Y < canvas.height - paddleHeight) {
    		paddle1Y += 20;
		}
		if(upPressed && paddle1Y > 0) {
    		paddle1Y -= 20;
		}
	}

	function displayBackground(){
		colourRect(0,0, canvas.width, canvas.height, "black");
	}

	function displayMainMenu(){
		canvasContext.fillStyle = "white";
		canvasContext.font="30px Arial";
		canvasContext.fillText("Select Difficulty", canvas.width/2 - 100,canvas.height/2 - 100);
		canvasContext.fillText("Easy", canvas.width/2 - 60,canvas.height/2 - 50);
		canvasContext.fillText("Intermediate", canvas.width/2 - 60,canvas.height/2);
		canvasContext.fillText("Hard", canvas.width/2 - 60,canvas.height/2 + 50);
		canvasContext.fillText("Insane", canvas.width/2 - 60,canvas.height/2 + 100);
	}

	function displayWinScreen(){
		canvasContext.fillStyle = "white";
			
		if (player1Score >= winningScore){
			canvasContext.fillStyle = "white";
			canvasContext.font="30px Arial";
			canvasContext.fillText("You Win!", canvas.width/2 - 30,canvas.height/2);
		} 
		
		else if (player2Score >= winningScore) {
			canvasContext.fillStyle = "white";
			canvasContext.font="30px Arial";
			canvasContext.fillText("You lose!", canvas.width/2 - 30,canvas.height/2);
		}
		canvasContext.font="10px Arial";
		canvasContext.fillText("(Click anywhere to Continue)", canvas.width/2 - 30,canvas.height/2 + 30);
	}

	function drawNet(){
		for (var i = 0; i <= canvas.height; i+=40) {
			colourRect(canvas.width/2-1,i,2,20, 'white');
		}
	}

	function drawPlayer1Paddle(){
		colourRect(0, paddle1Y, paddleThickness, paddleHeight, "white");
	}

	function drawPlayer2Paddle(){
		colourRect(canvas.width - paddleThickness, paddle2Y, paddleThickness, paddleHeight, "white");
	}

	function drawBall(){
		colourCircle(ballX, ballY, 10, "white");
	}

	function drawPlayer1Score(){
		canvasContext.fillText(player1Score, 100,100);
	}

	function drawPlayer2Score(){
		canvasContext.fillText(player2Score, canvas.width - 100,100);
	}

	function colourRect(leftX, topY, width, height, drawColour){
		canvasContext.fillStyle = drawColour;
		canvasContext.fillRect(leftX, topY, width, height);   
	}

	function colourCircle(centerX, centerY, radius, colour){
		canvasContext.fillStyle = colour;
		canvasContext.beginPath();
		canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
		canvasContext.fill();
	}