class GameOverScreen{
	constructor(props){
		this.$elem = props.$elem;
	}

	showGameOverScreen(){
		this.$elem.style.display = 'block';
	}

	hideGameOverScreen(){
		this.$elem.style.display = 'none';
	}
}