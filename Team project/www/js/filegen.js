function file(type){
	if(type==1){
		var pics = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var folder = "alphabet";
	}
	else if(type==2){
		var pics = ["happy","sad","angry","surprised","love","laughing","pensive","crying","sleepy","frustrated","scared","embarrassed","excited","smug","innocent","bored"];
		var folder = "emotions";
	}
	else if(type==3){
		var pics = [];
		var folder = "roadsigns";
	}
	else{
		var pics =["1","2","3","4","5","6","7","8","9"];
		var folder = "numbers";
	}
	var counter = parseInt(document.getElementById("count").innerHTML);
	if (counter < 8){
		counter++;
		document.getElementById("count").innerHTML=counter;
		
		var value = Math.ceil(Math.random()*pics.length)-1;
		var str1 = pics[value];
		var find = document.getElementById("find");
		find.innerHTML = str1;
		
		var times = ["one","two","three"];
		var value1 = Math.ceil(Math.random()*times.length)-1;
		(document.getElementById(times[value1])).src = "../img/"+folder+"/" + str1 + ".png";
		(document.getElementById(times[value1])).onclick = function (){file(type);return false;};
		if (value > -1) {
			times.splice(value1, 1);
		}
		
		for(i=0;i<times.length;i++){
			if (value > -1) {
				pics.splice(value, 1);
			}
			
			value = Math.ceil(Math.random()*pics.length)-1;
			str1 = pics[value];
			
			(document.getElementById(times[i])).src = "../img/"+folder+"/" + str1 + ".png";
			(document.getElementById(times[i])).onclick =  function (){alert('Whoops,you picked the wrong one. Try again!');return false;};
		}
	}
	else{
		window.location = "finished.html";
	}
	
}