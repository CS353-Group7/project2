function file(){
	var counter = parseInt(document.getElementById("count").innerHTML);
	if (counter < 8){
		counter++;
		document.getElementById("count").innerHTML=counter;
		var emotes = ["happy","sad","angry","surprised","love","laughing","pensive","crying","sleepy","frustrated","scared","embarrassed","excited","smug","innocent","bored"];
		
		var value = Math.ceil(Math.random()*emotes.length)-1;
		var str1 = emotes[value];
		var find = document.getElementById("find");
		find.innerHTML = str1;
		
		var times = ["one","two","three"];
		var value1 = Math.ceil(Math.random()*times.length)-1;
		(document.getElementById(times[value1])).src = "../img/emotions/" + str1 + ".png";
		(document.getElementById(times[value1])).onclick = function (){file();return false;};
		if (value > -1) {
			times.splice(value1, 1);
		}
		
		for(i=0;i<times.length;i++){
			if (value > -1) {
				emotes.splice(value, 1);
			}
			
			value = Math.ceil(Math.random()*emotes.length)-1;
			str1 = emotes[value];
			
			(document.getElementById(times[i])).src = "../img/emotions/" + str1 + ".png";
			(document.getElementById(times[i])).onclick =  function (){alert('Whoops,you picked the wrong one. Try again!');return false;};
		}
	}
	else{
		window.location = "finished.html";
	}
	
}