
const CONTAINER_TOP = 400;
const CONTAINER_BOTTOM = 0;
const CONTAINER_LEFT = 0;
const CONTAINER_RIGHT = 600;

const WALL_TOP = 100;
const WALL_BOTTOM = 0;
const WALL_LEFT = 288;
const WALL_RIGHT = 313;


class MainGame {

	constructor(props){
		this.gameStatus = true;
		this.timer = 0;
		this.init();
	}

	init(){

		this.homeScreen = new HomeScreen({
			$elem: this.getHomeScreen()
		});

		this.gameScreen = new GameScreen({
			$elem : this.getGameScreen()
		});

		this.gameOverScreen = new GameOverScreen({
			$elem : this.getGameOverScreen()
		});

		this.player1 = new Player({
			left: 100,
			status: true,
			dx: 5,
			max_right: 283,
			min_left: 4,
			$parent: this.getGameScreen(),
			id: 'player1'
		});

		this.player2 = new Player({
			left: 500,
			status: false,
			dx: 5,
			max_right: 597,
			min_left: 315,
			$parent: this.getGameScreen(),
			id: 'player2'
		});

		this.arrow = new Arrow({
			$parent: this.getGameScreen()
		});

		// console.log(this.arrow + "Arrow object");
		this.getStartButton().onclick = () =>{
			this.startGame();
		}

		this.startHomeScreen();

		window.onkeydown = (e) => {
			// console.log(e.keyCode);
			if (e.keyCode === 39) { //moving RIGHT
				if(this.player1.status){
					this.player1.moveRight();
				}
				else{
					this.player2.moveRight();
				}
			}
			if (e.keyCode === 37) { //moving LEFT
				if(this.player1.status){
					this.player1.moveLeft();
				}
				else{
					this.player2.moveLeft();
				}
			}
		}
		// console.log(this.gameScreen);

		this.gameScreen.$elem.onclick = (e) =>{
			console.log(e + "  value of e")
			this.arrow.findPosition(this.getActivePlayer());
			this.arrow.drawArrow();
			this.id = setInterval(() =>{
				console.log("ROTATING");
				this.thetaValue = this.arrow.moveArrow(this.getActivePlayer());
				// console.log(this.thetaValue + "theta value");
			},100);

			this.gameScreen.$elem.onclick = null;
		
			this.gameScreen.$elem.onmousedown = (e) => {
				console.log("clicked mouse!!!");
				clearInterval(this.id);
				// console.log(this.thetaValue + "------------<<<<<>>>>>>>--------");
				this.throwArrowAnimation(this.thetaValue, this.getActivePlayer());
			
				// this.gameScreen.$elem.onmousedown = null;
			}
		}
		
	// this.arrow.throwArrow(this.currentThetaValue,this.getActivePlayer());

	} // end of init()

	startHomeScreen() {
		this.homeScreen.showHomeScreen();
		this.gameScreen.hideGameScreen();
		this.gameOverScreen.hideGameOverScreen();
	}

	startGame() {
		this.homeScreen.hideHomeScreen();
		this.gameScreen.showGameScreen();

	}

	getActivePlayer(){
		if (this.player1.status === true) {
			return this.player1;
			console.log("player 1 is active");
		}
		else if (this.player2.status === true) {
			return this.player2;

			console.log("player 2 is active");
		}
		else{
			return "Error player status not found";
		}
	}

	togglePlayerStatus(){
		if (player1.status === true) {
			player1.status = false;
			player2.status = true;

			console.log("Player 1 is set to false");
		}
		else{
			player2.status = false;
			player1.status = true;

			console.log("Player 2 is set to false")
		}
	}

	checkPlayerStatus(){
		if (this.player1.status) {
			console.log("Player 1 is active now");
		}
		else if (this.player2.status) {
			console.log("Player 2 is active now");
		}
		else{
			console.log("No one is active");
		}
	}

	throwArrowAnimation(){
		this.arrow.setArrow(this.thetaValue, this.getActivePlayer());
	}

	gameOver(){
		this.gameOverScreen.$elem.innerHTML = 'Game Over';

	}
			
	getStartButton(){
		return document.getElementById('button');
	}

	getHomeScreen(){
		return document.getElementById("homescreen");
	}

	getGameScreen(){
		return document.getElementById("gamescreen");
	}

	getGameOverScreen(){
		return document.getElementById("gameoverscreen");
	}		


}

let mainGame = new MainGame();

