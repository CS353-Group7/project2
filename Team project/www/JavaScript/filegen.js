function file(){
	var emotes = ["happy","sad","angry","surprised","love","laughing","tired","pensive","confused","shy","crying","sleepy","frustrated","scared","embarrassed","relieved","satisfied","content","worried","excited","exhausted","ecstatic","smug","innocent"];
	
	var value = Math.ceil(Math.random()*emotes.length)-1;
	var str1 = emotes[value];
	var find = document.getElementById("find");
	find.innerHTML = str1;
	
	var times = ["one","two","three"];
	var value1 = Math.ceil(Math.random()*times.length)-1;
	(document.getElementById(times[value1])).src = "../img/" + str1 + ".png";
	(document.getElementById(times[value1])).onclick = function (){window.location.reload();return false;};
	if (value > -1) {
		times.splice(value1, 1);
	}
	
	for(i=0;i<times.length;i++){
		if (value > -1) {
			emotes.splice(value, 1);
		}
		
		value = Math.ceil(Math.random()*emotes.length)-1;
		str1 = emotes[value];
		
		(document.getElementById(times[i])).src = "../img/" + str1 + ".png";
		(document.getElementById(times[i])).onclick =  function (){alert('Whoops,you picked the wrong one. Try again!');return false;};
	}
	
}