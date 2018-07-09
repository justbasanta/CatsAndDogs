class Player{
	constructor(props){
		this.height = 30;
		this.width = 20;
		this.bottom = 0;
		this.left = props.left;
		this.status = props.status;
		this.dx = props.dx;
		this.dy = 0;
		this.max_right = props.max_right;
		this.min_left = props.min_left;
		this.$parent = props.$parent;
		this.move_status = true;

		this.$elem = document.createElement('div');
		this.$elem.id = props.id;

		this.init();
	}
	
	init(){
		this.$elem.className = 'player';
		this.$elem.style.height = this.height + "px";
		this.$elem.style.width = this.width + "px";

		this.drawPlayer();
		this.$parent.appendChild(this.$elem);
	}

	drawPlayer(){
		this.$elem.style.left = this.left + "px";
		this.$elem.style.bottom = this.bottom + "px";
	}

	moveRight(){
		if ((this.left + this.width) < this.max_right && this.move_status) {
			let t = this.dx;
			this.left = this.left + t;
			this.$elem.style.left = this.left +"px";
		}
	}
	moveLeft(){
		if((this.left) > this.min_left && this.move_status){
			let t = this.dx;
			this.left = this.left - t;
			this.$elem.style.left = this.left +"px";
		}
	}

	changeMoveStatus(){
		this.move_status = false;
	}
	// togglePlayerStatus(){
	// 	if (this.status) {
	// 		this.status = false;

	// 	}
	// }
	
}