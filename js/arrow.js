class Arrow{
	constructor(props){
		this.height = 20;
		this.width = 30;
		this.theta_1= 1;
		this.theta_2 = 180;
		this.$parent = props.$parent;
		this.$elem = document.createElement('div');
		this.dx = 1;
		this.init();

		this.max_angle = 90;
		this.min_angle = 0;
		this.flag = true;
		this.counter = 0;

		
		this.gravity = 9.80;	
		this.velocity = 60;
		this.t = 0;

	}

	init(){
		this.$elem.className = 'arrow';
		this.$elem.style.height = this.height + "px";
		this.$elem.style.width = this.width + "px";

		this.$parent.appendChild(this.$elem);
		// console.log("init()");
	}

	findPosition(player){
		// console.log(player.$elem.id);
		if (player.$elem.id === 'player1') { 
			this.left = player.left + player.width; 
			// console.log("the value of Left " + this.left);
		}
		else {
			this.left = player.left - 20;
			this.$elem.style.transform = 'scaleX(-1)';
		}

		this.bottom = player.bottom + (player.height/2);
		// console.log(this.bottom);
		player.changeMoveStatus();

	}

	drawArrow(){
		this.$elem.style.display = 'block';
		this.$elem.style.left = this.left + "px";
		this.$elem.style.bottom = this.bottom + "px";
		// console.log(this.left + "-->left" + (400 - this.bottom) + "--->top");
		// console.log("drawing method invoked");
	}

	moveArrow(player){
		// console.log("moveArrow invoked");
		if (player.$elem.id === 'player1') {
			
			if (this.flag) {
				this.theta_1 = this.theta_1 + 1;
				this.$elem.style.transform = "rotate(" +(-this.theta_1) + "deg)";
				if (this.theta_1 >= this.max_angle) {
					this.flag = false;
				}
			}
			if (!this.flag) {
				this.theta_1 = this.theta_1 - 1;
				this.$elem.style.transform = "rotate(" +(-this.theta_1) + "deg)";
				if (this.theta_1 == this.min_angle) {
					this.flag = true;
				}
			}
			return (this.theta_1);
		}

		else{
			if (this.flag) {
				this.theta_2 = this.theta_2 + 1;
				this.$elem.style.transform = "rotate(" +(this.theta_2) + "deg)";
				if (this.theta_2 >= this.max_angle + 180) {
					this.flag = false;
				}
			}
			if (!this.flag) {
				this.theta_2 = this.theta_2 - 1 ;
				this.$elem.style.transform = "rotate(" +(this.theta_2) + "deg)";
				if (this.theta_2 == this.min_angle + 180) {
					this.flag = true;
				}
			}
			return(this.theta_2);

		}
		
	}

	setArrow(thetaValue, player){
		// if (player.$elem.id === 'player1') {
			this.x = this.left;
			// console.log(this.x + "the value of left after set arrow");
			this.y = this.bottom;
			this.angle = thetaValue;
			// console.log(this.angle+ "this.angle");
			this.vx = this.velocity * Math.cos(this.angle * Math.PI / 180);
			this.vy = this.velocity * Math.abs(Math.sin(this.angle* Math.PI / 180));


			this.animateArrow(this.x,this.y,this.angle,this.vx,this.vy,player)
			
	}
animateArrow(x,y,angle,vx,vy,player){
	var init_x = x;
	var init_y = y;
	var max_height =(this.velocity * this.velocity * Math.pow(Math.sin(angle * Math.PI / 180),2))/(2 * this.gravity);
	var max_height_reached = false;
	console.log(max_height);
	// console.log(this);
	this.run = setInterval(() =>{

		if (player.$elem.id === 'player1') {
			console.log("------throwArrowAnimation in progress----");
				this.t += 1;
				x = init_x + vx * this.t;
				y = init_y + (vy * this.t - (this.gravity/2) * this.t * this.t);

				this.$elem.style.left = x + "px";
				this.$elem.style.bottom = y + "px";

				console.log(y + "y-value");

				if (y+20 >= Math.floor(max_height) + 15) {
					console.log("HERERERE");
					max_height_reached = true;
				}
				if(max_height_reached){
					this.$elem.style.transform = 'rotate(45deg)';
				}
				// console.log("check collisonWithWall");
				this.collisonWithWall(x,y,player);
				// console.log("check collisonWithPlayer");
				this.collisonWithPlayer(x,y,player);
				// console.log("check collisonWithContainer");	
				this.collisonWithContainer(x,y,player);
		}
		else{
			console.log("------throwArrowAnimation in progress----");
				this.t += 1;
				// debugger;
				x = init_x + (vx * this.t);
				y = init_y + (vy * this.t - (this.gravity/2) * this.t * this.t);
				this.$elem.style.left = x + "px";
				this.$elem.style.bottom = y + "px";
				// console.log(this.$elem.style.left +"left");
				// console.log(this.$elem.style.bottom +"bottom");
				
				this.collisonWithWall(x,y,player);
				this.collisonWithPlayer(x,y,player);
				this.collisonWithContainer(x,y,player);		
		}
			
	},200);
}

collisonWithWall(x,y,player){	
	if (player.$elem.id === 'player1') {
		if (((x + this.width) > WALL_LEFT) && y <= WALL_TOP && !((x+this.width) > WALL_RIGHT)) {
			this.$elem.remove();
			// console.log(this);
			clearInterval(this.run);
			player.status= false;
			player2.status=true;


		// mainGame.gameScreen.$elem.onclick = (e) =>{
		// 	console.log(e + "  value of e")
		// 	mainGame.arrow.findPosition(mainGame.getActivePlayer());
		// 	mainGame.arrow.drawArrow();
		// 	this.id = setInterval(() =>{
		// 		console.log("ROTATING");
		// 		mainGame.thetaValue = mainGame.arrow.moveArrow(mainGame.getActivePlayer());
		// 		// console.log(this.thetaValue + "theta value");
		// 	},100);
		// 	mainGame.gameScreen.$elem.onclick = null;
		

		// 	mainGame.gameScreen.$elem.onmousedown = (e) => {
		// 		console.log("clicked mouse!!!");
		// 		clearInterval(this.id);
		// 		// console.log(this.thetaValue + "------------<<<<<>>>>>>>--------");
		// 		mainGame.throwArrowAnimation(mainGame.thetaValue, mainGame.getActivePlayer());
		// 		mainGame.gameScreen.$elem.onmousedown = null;
		// 	}
		}

			// mainGame.gameScreen.$elem.onclick(e);
			console.log("Collided With Wall by Player 1");
		}

	else{
		if (x < WALL_RIGHT && y<=WALL_TOP && !(x < WALL_LEFT)) {
			this.$elem.remove();
			clearInterval(this.run);
			player.status= false;
			player1.status=true;
			console.log("Collided With Wall by Player 2");
		}
	}
		
}

collisonWithContainer(x,y,player){
	if (player.$elem.id === 'player1') {
		if ((x + this.width) > CONTAINER_RIGHT || y < CONTAINER_BOTTOM || (y + 20) > CONTAINER_TOP) {
			this.$elem.remove();	
			player.status= false;
			player2.status=true;
			mainGame.gameScreen.$elem.onclick;
			console.log("Collided with container by player 1");
			clearInterval(this.run);
		}
	}
	else{
		if (x  < CONTAINER_LEFT || y < CONTAINER_BOTTOM || (y + 20) > CONTAINER_TOP) {
			this.$elem.remove();	
			player.status= false;
			player1.status=true;
			console.log("Collided with container by Player 2");
			clearInterval(this.run);
		}
	}
		
}

collisonWithPlayer(x,y,player){
	if (player.$elem.id === 'player1') {
		// console.log("collison with player");
		// console.log(mainGame.player2);
		let player2 = mainGame.player2;
		console.log(x + this.width);
		console.log(player2.left);
		console.log(y);
		console.log(player2.bottom);
		if (x + this.width > player2.left && y < player2.bottom + 30 && !((x + this.width) > player2.left+ 20)) {
			this.$elem.remove();
			console.log("Collided Player 1 with Player 2");	
			player.status= false;
			player2.status=true;
			clearInterval(this.run);
		}
	}
	else{
		let player1 = mainGame.player1;
		if (x < player1.left + 20 && y < player1.bottom + 30 && !(x > player.left)) {
			this.$elem.remove();
			console.log("Collided Player 2 with Player 1");	
			player.status= false;
			player1.status = true;
			clearInterval(this.run);
		}
	}
}

}; // End of Class Arrow