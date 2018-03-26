$(function() {

	// Display a bit on the LED display
	function setBit(bit, on) {
		if (on) {
			$("#bit" + bit).css("background-color", "Red");		
		} else {
			$("#bit" + bit).css("background-color", "LimeGreen");		
		}
	}

	// Display a byte on the LED display
	function displayChar(ch) {
		// console.log("Key: " + String.fromCharCode(ch) + "[" + ch + "]");
		setBit(7, (ch & 0x80) > 0)
		setBit(6, (ch & 0x40) > 0)
		setBit(5, (ch & 0x20) > 0)
		setBit(4, (ch & 0x10) > 0)
		setBit(3, (ch & 0x08) > 0)
		setBit(2, (ch & 0x04) > 0)
		setBit(1, (ch & 0x02) > 0)
		setBit(0, (ch & 0x01) > 0)
	}

	// Clears the display back to grey
	function clearDisplay() {
		$(".bitbtn").css("background-color", "LightGray");		
	}

	// Animate the string into the LED display
	$("#go").click(function() {

		var pos = 0;
		var msg = $("#keyboard").val();
		clearDisplay();
		if (msg.length == 0) return;
		var interval = setInterval(function() {
			var ch = msg.charCodeAt(pos);
			if (pos++ >= msg.length) {
				clearInterval(interval);
				clearDisplay();
			} else {
				displayChar(ch);
			}
		}, 1000)

		return false;
	});

})