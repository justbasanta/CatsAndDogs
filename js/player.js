class Player {
	constructor(props){
		this.player= props.player;
		this.height = 30;
		this.width = 20;
		this.bottom = 0;
		this.play_status = false;
		this.left = props.left;
		this.right = props.right;
	}

	drawPlayer(){
		this.player.style.left = `${this.left}px`; // do like this
		this.player.style.right = this.right +"px";
		this.player.style.bottom = this.bottom +"px";
		this.player.style.height = this.height +"px";
		this.player.style.width = this.width +"px";	
	}
}

let arr = Array.from($player);
let positionOfPlayers = [{left: 500, right: 100}, {left: 200, right: 400}] 
console.log($player)
for(let i = 0; i < arr.length; i++) {
	console.log($player[i])
	player = new Player({
        player: $player[i],
		left: positionOfPlayers[i].left,
		right: positionOfPlayers[i].right,
	})
	player.drawPlayer()
}


// class Player {
//     constructor(props){
//         this.height = 30;
//         this.width = 20;
//         this.bottom = 0;
//         this.play_status = false;
//         this.left = props.left;
//         this.right = props.right;

//         this.player1 = document.createElement('div');
//         this.player2 = document.createElement('div');
//     }
//     drawPlayer1(){
//     	this.player1.className = 'player1';
//         this.player1.style.left = `${this.left}px`; // do like this
//         this.player1.style.right = this.right +"px";
//         this.player1.style.bottom = this.bottom +"px";
//         this.player1.style.height = this.height +"px";
//         this.player1.style.width = this.width +"px";
//         $background.appendChild(this.player1);
// //     }
// //     drawPlayer2(){
// //     	this.player2.className = 'player2';
// //         this.player2.style.left = `${this.left}px`; // do like this
// //         this.player2.style.right = this.right +"px";
// //         this.player2.style.bottom = this.bottom +"px";
// //         this.player2.style.height = this.height +"px";
// //         this.player2.style.width = this.width +"px";
// //         $background.appendChild(this.player2);
// //     }
// // }

// // let player1 = new Player({
// // 	left: 100,
// // });
// // let player2 = new Player({
// // 	right:100,
// // });
// // player1.drawPlayer1();
// // player2.drawPlayer2();







// // console.log($player + " $player");
 
// // let arr = Array.from($player);
// // let positionOfPlayers = [{left: 500, right: 100}, {left: 200, right: 400}]
// // console.log($player)
// // for(let i = 0; i < arr.length; i++) {
// //     console.log($player[i]);
// //     player = new Player({
// //         player: $player[i],
// //         left: positionOfPlayers[i].left,
// //         right: positionOfPlayers[i].right,
// //     })
// //     player.drawPlayer();
// //     console.log("player drawn");
// // }