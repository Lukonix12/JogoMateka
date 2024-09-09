const images = [
	"../assets/image/uva.png",
	"../assets/image/maça.png",
	"../assets/image/banana.png"
];

const questions = [
	"Quantas uvas?",
	"Quantas maças?",
	"Quantas bananas?"
];

var uvas = 0, maças = 0, bananas = 0, n = 0, q = 0, score = 0;
var e = document.getElementById("id_moving_fruits");

function game() {

	q = Math.floor(Math.random() * 3);
	n = [
		Math.floor(Math.random() * 3),
		Math.floor(Math.random() * 3),
		Math.floor(Math.random() * 3)
	];

	document.getElementById("img2").innerHTML = '<img src="'+images[n[1]]+'" width="130vw" height="130vh"/>';
	document.getElementById("img3").innerHTML = '<img src="'+images[n[2]]+'" width="130vw" height="130vh"/>';
	document.getElementById("img1").innerHTML = '<img src="'+images[n[0]]+'" width="130vw" height="130vh"/>';

	playAnimation();

	let animated = document.getElementById("id_moving_fruits");
	animated.addEventListener('animationend', ()=> {
		for(let i = 0; i < 10; i++){
				document.getElementById("btn_resposta" + i.toString()).disabled = false;
		}
		document.getElementById("img1").innerHTML = '<img src="../assets/image/vazio.png" width="180px" height="180px"></img>';
		document.getElementById("img2").innerHTML = '<img src="../assets/image/vazio.png" width="180px" height="180px></img>"' 	
		document.getElementById("img3").innerHTML = '<img src="../assets/image/vazio.png" width="180px" height="180px"</img>' 
	})

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
}

function reset() {
	uvas = 0;
	maças = 0;
	bananas = 0;

	for(let i = 0; i < 10; i++){
		document.getElementById("btn_resposta" + i.toString()).disabled = true;
	}
}

function playAnimation() {
	e.classList.add("run-animation");
}

function resetAnimation(){
	e.classList.remove("run-animation");
	void e.offsetWidth;
	e.classList.add("run-animation");
}

function increaseScore(score) {
	document.getElementById("id_score_numero").innerText = score.toString();
}


function obterResposta(n) {
	if(q == 0){
		if(n == uvas){
			score += 10;
			alert("Acertou!");
			increaseScore(score);
			reset();
			resetAnimation();
			game();
		}
		else{
			alert("Errou!");
			reset();
			resetAnimation();
			game();
		}
	}
	else if(q == 1){
		if(n == maças){
			score += 10;
			alert("Acertou!")
			increaseScore(score);
			reset();
			resetAnimation();
			game();
		}else{
			alert("Errou")
			reset();
			resetAnimation();
			game();
		}
	}else{
		if(n == bananas){
			score += 10;
			alert("Acertou!")
			increaseScore(score);
			reset();
			resetAnimation();
			game();
		}else{
			alert("Errou")
			reset();
			resetAnimation();
			game();
		}
	}
}

reset();
game();


