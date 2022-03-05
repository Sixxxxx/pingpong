	
	var canvas;
	var canvasContext;
	var ballX = 675;
	var ballY = 335;
	var ballSpeedX = 20;
	var ballSpeedY = 5;
	var paddle1Y = 250;
	var paddle2Y = 250;
	var rightPressed = false;
	var leftPressed = false;
	const paddleHeight = 100;
	const paddleThickness = 10;
	var player1Score = 0;
	var player2Score = 0;
	const winningScore = 5;
	var showingMainMenu = false;
	var showingWinScreen = false;
	var upPressed = false;
	var downPressed = false;
	

	function handleMouseClick(evt){
		if (showingWinScreen) {
			player1Score = 0;
			player2Score = 0;
			showingWinScreen= false;
		}
	}

	

	window.onload =function(){
		canvas = document.getElementById("gameCanvas");
		canvasContext = canvas.getContext("2d");
		var framesPerSecond = 30;
		setInterval(function(){moveEverything(); drawEverything();}, 1000/framesPerSecond); 
		canvas.addEventListener('mousedown', handleMouseClick);
		canvas.addEventListener('mousemove', function(evt) {var mousePosition = calculateMousePosition(evt);
														    paddle1Y = mousePosition.y - paddleHeight/2;

														});
		document.addEventListener("keydown", keyDownHandler, false);
		document.addEventListener("keyup", keyUpHandler, false);


	}

	
	

