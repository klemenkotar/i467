// Define NavBar manipulation obejct
function NavBar(location) {
    this.location = location;
    this.update = function() {
	this.location ++;
	var elName = "#NavBar-" + this.location.toString();
	$(elName).addClass("strikethrough-inverted");
    };
}
// Instantiate nav obejct 
var nav = new NavBar(0);

// On Document Ready Call
$(document).ready(function() {
    $('#QA1').waypoint(function() {
		$('#NavBar-1').addClass("strikethrough-inverted");
    });
    $('#QA2').waypoint(function() {
		$('#NavBar-2').addClass("strikethrough-inverted");
    });
    $('#QA3').waypoint(function() {
		$('#NavBar-3').addClass("strikethrough-inverted");
    });
    $('#QA4').waypoint(function() {
		$('#NavBar-4').addClass("strikethrough-inverted");
    });
    $('#QA5').waypoint(function() {
		$('#NavBar-5').addClass("strikethrough-inverted");
    });
    $('#QA6').waypoint(function() {
		$('#NavBar-6').addClass("strikethrough-inverted");
    });
    $('#QA7').waypoint(function() {
		$('#NavBar-7').addClass("strikethrough-inverted");
    });
});
