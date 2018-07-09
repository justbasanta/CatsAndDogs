class Player {
	constructor(props){
		this.player= props.player;
		this.height = 30;
		this.width = 20;
		this.bottom = 0;
		this.left = props.left;
		this.right = props.right;
		this.value = props.value;
		this.movePos = 1;
		// console.log(this.player + " player[0]");
	}

	drawPlayer(){
		this.player.style.left = `${this.left}px`; // do like this
		this.player.style.right = this.right +"px";
		this.player.style.bottom = this.bottom +"px";
		this.player.style.height = this.height +"px";
		this.player.style.width = this.width +"px";	
	}

	onkeydown(e){
		console.log(players_array[1].value);
		// console.log(this.value +"this.value")
		if(players_array[1].value){
			if(e.keyCode === 39) {
				// console.log(this.player + " MOVING RIGHT ");
				this.moveRight(e); 
			}
		}
		
		if (e.keyCode === 37){
			this.moveLeft(e);
		}   
	}

	onkeyup(e){
		return undefined; 
	}
	

	moveRight(e){
			// console.log(this.value+ "this.player[1].value");

				// console.log(this.value);
			let temp;
			temp = this.movePos;
			console.log(players_array[1].left +" BEFORE");

			this.left = players_array[1].left + temp;
			console.log(players_array[1].left +" AFTER");
			console.log(this+ "this.player");
			this.player.style.left = `$(players_array[1].left)px`;
			console.log(this.player.style.left + "style left");
			// console.log(this.player + " Player ");
			// console.log(WALL_LEFT);

			if((this.left + this.width) > WALL_LEFT || (this.left > WALL_RIGHT)){	
				this.collisonWithWall();
			}
	}

	moveLeft(e){
		if(e.keyCode === 37){
			let temp;
			temp = this.movePos;
			console.log(temp, '--->>>temp')
			this.left = this.left - temp;
			this.player.style.left = `$(this.left)px`;
			this.collisonWithContainer();
		}
	}

	collisonWithWall(){
		// console.log("Collison of PLAYER with WALL");
	}

	collisonWithContainer(){
		if ((this.player.left > CONTAINER_LEFT) || (this.player.left + this.player.width) > CONTAINER_RIGHT) {
			// console.log("Collison of PLAYER with CONTAINER");
		}
	}
	
}
// let $player = document.getElementsByClassName('player');
let arr = Array.from($player);
let positionOfPlayers = [{left: 500, right: 100, value: false}, {left: 100, right: 500, value: true}] ;
console.log($player);
// console.log($player);


for(let i = 0; i < arr.length; i++){
	// console.log($player[i]);
	player = new Player({
		player: $player[i],
		left: positionOfPlayers[i].left,
		right: positionOfPlayers[i].right,
		value: positionOfPlayers[i].value,
	})
	console.log(player.left + " player.left");
	console.log(player.right + " player.right");
	console.log(player.value + " player.value");

	player.drawPlayer();
	players_array.push(player);
	// console.log(player);
}

console.log(players_array+ "  players_array");

document.onkeydown = keydownEventHandler;
document.onkeyup = keyupEventHandler;

function keydownEventHandler(e){
	// console.log(e.keyCode + "KEY CODE");
	player.onkeydown(e);
	// player.(e);
}

function keyupEventHandler(){
	return undefined;
}


