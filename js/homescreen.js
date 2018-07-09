class HomeScreen {
	constructor(props){
		this.$elem =  props.$elem;
	}

	showHomeScreen(){
		this.$elem.style.display ='block';
	}

	hideHomeScreen(){
		this.$elem.style.display = 'none';
	}
}