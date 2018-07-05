class Player {
	constructor(props){
		this.player = $player;
		this.height = 30;
		this.width = 20;
		this.bottom = 0;
		this.play_status = false;
		this.left = props.left;
		this.right = props.right;
	}
	drawPlayer(){
		let arr = Array.from($player);
		console.log(arr  + " Player");
		console.log(arr.length);
			this.player[0].style.left = this.left +"px";
			this.player[0].style.right = this.right +"px";
			this.player[0].style.bottom = this.bottom +"px";
			this.player[0].style.height = this.height +"px";
			this.player[0].style.width = this.width +"px";	
	}
}
let player1 = new Player({
	left: 500, right: 100});

let player2 = new Player({
	left: 200, right: 400,});

player1.drawPlayer();
player2.drawPlayer();
