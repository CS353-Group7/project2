var temppics = ["Hello"];
function file(type){
	var levelnum = parseInt((document.location.href).slice(-2)[0]);
	if(type==1){
		if(levelnum==0) var pics = ["Apple","Ball","Cat","Dog","Elephant","Fish","Girl","House"];
		else if(levelnum==1) var pics = ["IceCream","Jumper","Kite","Lion","Monkey","Nose","Orange","Pencil"];
		else var pics = ["Queen","Ring","Snake","Tree","Umbrella","Volcano","Window","Xray","Yoyo","Zebra"];
		var folder = "alphabet";
	}
	else if(type==2){
		if(levelnum==0) var pics = ["happy","sad","angry","surprised","sleepy","scared","pensive","innocent"];
		else var pics = ["like they are in love","frustrated","like they are laughing","embarrassed","excited","smug","like they are crying","bored"];
		var folder = "emotions";

	}
	else if(type==3){
		if(levelnum==0) var pics = ["stop","greenlight","redlight","amberlight","roadclosed","roadworks","busstop","noentry"];
		else if(levelnum==1) var pics = ["leftturn","rightturn","gostraight","nouturn","yield","gosign","greenman","redman"];
		else var pics = ["dualcarriageway","narrowroad","noovertaking","buslane","childrenahead","parking","noparking","dangerousbend"];
		var folder = "roadsigns";
	}
	else{
		var pics =["zero","one","two","three","four","five","six","seven","eight","nine"];
		var folder = "numbers";
	}
	var counter = parseInt(document.getElementById("count").innerHTML);
	if(counter==0){
		temppics=pics.slice();
	}

	if (counter < 8){
		counter++;
		document.getElementById("count").innerHTML=counter;

		var value = Math.ceil(Math.random()*temppics.length)-1;
		var str1 = temppics[value];
		var find = document.getElementById("find");
		temppics.splice(value, 1);
		value = pics.indexOf(str1);
		if(type==1){
			find.innerHTML = str1.charAt(0);
		}
		else{
			find.innerHTML = str1;
		}

		var times = ["one","two","three"];
		var value1 = Math.ceil(Math.random()*times.length)-1;
		(document.getElementById(times[value1])).src = "../img/"+folder+"/" + str1 + ".png";
		(document.getElementById(times[value1])).onclick = function (){file(type);return false;};
		if (value1 > -1) {
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
		console.log(pics);
	}
	else{
		levelnum++;
		if((type==1)|(type==3)){
			if(levelnum>2) window.location = "alldone.html";
			else window.location = "finished.html#"+levelnum+type;
		}
		else if(type==2){
			if(levelnum>1) window.location = "alldone.html";
			else window.location = "finished.html#"+levelnum+type;
		}
		else{
			if(levelnum>0) window.location = "alldone.html";
			else window.location = "finished.html#"+levelnum+type;
		}
	}

}

function load(){
	var type = parseInt((document.location.href).slice(-1));
	var list = document.getElementsByClassName("btn btn-large btn-primary");
	if(type==1){
		document.getElementById("heading").innerHTML = "Alphabet";
		document.getElementsByClassName("lead")[0].innerHTML = "Here we will play different levels that will test your knowledge on the alphabet.<br> First lets pick a level!";
	}
	else if(type==2){
		document.getElementById("heading").innerHTML = "Emotions";
		document.getElementsByClassName("lead")[0].innerHTML = "Here we will play different levels that will test your knowledge on emotions.<br> First lets pick a level!";
		list[2].parentElement.removeChild(list[2]);
	}
	else if(type==3){
		document.getElementById("heading").innerHTML = "Road Signs";
		document.getElementsByClassName("lead")[0].innerHTML = "Here we will play different levels that will test your knowledge on road signs.<br> First lets pick a level!";
	}
	else{
		document.getElementById("heading").innerHTML = "Numbers";
		document.getElementsByClassName("lead")[0].innerHTML = "Here we will play different levels that will test your knowledge on the numbers.<br> First lets pick a level!";
		list[2].parentElement.removeChild(list[2]);
		list[1].parentElement.removeChild(list[1]);
	}
	list = document.getElementsByClassName("btn btn-large btn-primary");
	for(i = 0;i<list.length;i++){
		list[i].href = "level.html#" + i + type;
	}
}

function next(){
	var levelnum = parseInt((document.location.href).slice(-2)[0]);
	var type = parseInt((document.location.href).slice(-1));
	window.location.href = "level.html#" + levelnum + type;
}

function bit(){
	var type = parseInt((document.location.href).slice(-1));
	if(type==1){
		document.getElementById("top").innerHTML = "Lets Go! Which picture begins with the letter <b id='find'>Default</b>";
	}
	else if(type==2){
		document.getElementById("top").innerHTML = "Lets Go! Which person looks <b id='find'>Default</b>";
	}
	else if(type==3){
		document.getElementById("top").innerHTML = "Lets Go! Which road sign looks like <b id='find'>Default</b>";
	}
	else{
		document.getElementById("top").innerHTML = "Lets Go! Which picture is the number <b id='find'>Default</b>";
	}
	file(type);
}

function nextlevel(){
	var levelnum = parseInt((document.location.href).slice(-2)[0]);
	document.getElementById("which").innerHTML="Well Done! You Finished Level " + levelnum + "!";
	levelnum++;
	document.getElementById("levelnum").innerHTML="Continue to Level " + levelnum;
}

function alldone(){
	var type = parseInt((document.location.href).slice(-1));
	if(type==1){
		document.getElementById("which").innerHTML="Well done! You finished the alphabet game!";
	}
	else if(type==2){
		document.getElementById("which").innerHTML="Well done! You finished the emotions game!";
	}
	else if(type==3){
		document.getElementById("which").innerHTML="Well done! You finished the road signs game!";
	}
	else{
		document.getElementById("which").innerHTML="Well done! You finished the numbers game!";
	}
}
