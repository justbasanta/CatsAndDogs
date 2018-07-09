class GameScreen {
	constructor(props){
		this.$elem = props.$elem;

	}

	showGameScreen(){
		this.$elem.style.display = 'block';
	}

	hideGameScreen(){
		this.$elem.style.display = 'none';
	}

}