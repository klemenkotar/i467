function NavBar(location) {
	this.location = location;
	this.update - function() {
		this.location ++;
		var elName = "NavBar-" + this.loocation.toString();
		var el = document.getElementById(elName);
		if(el) {
			el.className += el.className ? ' crossed' : 'crossed';
		}
	}
}
