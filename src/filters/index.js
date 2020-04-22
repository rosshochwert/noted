import Vue from 'vue'

Vue.filter('formatName', function (value) {
	if (!value) return ''
	value = value.toString()
	var index = value.indexOf(", ")
	var first = value.substring(index+2, value.length)
	var last = value.substring(0, index)
	return first + " " + last
});

Vue.filter('convertTime', function(seconds) {
	if (seconds > 0){
		var s = seconds,
		h = Math.floor(s/3600);
		s -= h*3600;
		var m = Math.floor(s/60);
		s -= m*60;
		s = Math.floor(s)

		if(seconds >= "3600") {
			return "0" + h + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
		} else {
			return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
		}	
	} else {
		return ''
	}

})