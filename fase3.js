const images = [
	"uva.png",
	"maça.png",
	"banana.png"
];

const questions = [
	"Quantas uvas?",
	"Quantas maças?",
	"Quantas bananas?"
];

let n = [
	Math.floor(Math.random() * 3),
	Math.floor(Math.random() * 3),
	Math.floor(Math.random() * 3)
];

let q = Math.floor(Math.random() * 3);

let uvas = 0, maças = 0, bananas = 0;

document.getElementById("img1").innerHTML = '<img src="'+images[n[0]]+'" width="120px" height="120px"/>';

document.getElementById("img2").innerHTML = '<img src="'+images[n[1]]+'" width="120px" height="120px"/>';

document.getElementById("img3").innerHTML = '<img src="'+images[n[2]]+'" width="120px" height="120px"/>';

if(q == 0){
	alert(questions[0])
	for(let i = 0; i < 3; i++){
		if(n[i] == 0){
			uvas++;
		}
	}
	console.log("Uvas: " + uvas)
}
else if(q == 1){
	alert(questions[1])
	for(let i = 0; i < 3; i++){
		if(n[i] == 1){
			maças++;
		}
	}
	console.log("Maçãs: " + maças)
}
else{
	alert(questions[2])
	for(let i = 0; i < 3; i++){
		if(n[i] == 2){
			bananas++;
		}
	}
	console.log("Bananas: " + bananas)
}

function obterResposta(n) {
	if(q == 0){
		if(n == uvas){
			alert("Acertou!");
		}
		else{
			alert("Errou!");
		}
	}
	else if(q == 1){
		if(n == maças){
			alert("Acertou!")
		}else{
			alert("Errou")
		}
	}else{
		if(n == bananas){
			alert("Acertou!")
		}else{
			alert("Errou")
		}
	}
}

