const player1 = "X"
const player2 = "O"
let turn = player1
let gameover = false
let vencedor = ''
let x = 0
let o = 0

placar()
att()
ini()

function att(){
	if (gameover){
		return
	}else if(turn == player1){
		let player = document.querySelectorAll("div#tit img")[0]
		player.setAttribute('src', 'x.png')
	}else if(turn == player2){
		let player = document.querySelectorAll("div#tit img")[0]
		player.setAttribute('src', 'circle.png')
	}
}

function ini(){
	let space = document.getElementsByClassName('space')
	for (let i = 0; i < space.length; i++){
		space[i].addEventListener("click", function(){
			if (gameover){
				return
			} 
			if(this.getElementsByTagName('img').length == 0){
				if(turn == player1){
					this.innerHTML = "<img src='x.png'>"
					this.setAttribute('jogada', player1)
					turn = player2
				}else{
					this.innerHTML = "<img src='circle.png'>"
					this.setAttribute('jogada', player2)
					turn = player1
				}
				att()
				verification()
			}
		})
		
	}
}

async function verification(){

	let a1 = document.getElementById('a1').getAttribute('jogada')
	let a2 = document.getElementById('a2').getAttribute('jogada')
	let a3 = document.getElementById('a3').getAttribute('jogada')

	let b1 = document.getElementById('b1').getAttribute('jogada')
	let b2 = document.getElementById('b2').getAttribute('jogada')
	let b3 = document.getElementById('b3').getAttribute('jogada')

	let c1 = document.getElementById('c1').getAttribute('jogada')
	let c2 = document.getElementById('c2').getAttribute('jogada')
	let c3 = document.getElementById('c3').getAttribute('jogada')


	if((a1 == b1 && a1 == c1 && a1 != '') || (a1 == a2 & a1 == a3 && a1 != '') || (a1 == b2 & a1 == c3 && a1 != '')){
		
		vencedor = a1
		
	}else if((b1 == b2 && b2 == b3 && b2 != '') || (b2 == a3 & b2 == c1 && b2 != '') || (b2 == a2 & b2 == c2 && b2 != '')){
		
		vencedor = b2

	}else if((c3 == c2 && c3 == c1 && c3 != '') || (c3 == b3 & c3 == a3 && c3 != '')){
		
		vencedor = c3

	}


	if (vencedor != ''){

		gameover = true
		await sleep(50)
		alert('o vencedor foi o: ' + vencedor)
		if(vencedor == "X"){
			x += 1
			placar()
		}else{
			o += 1
			placar()
		}

	}		
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms))
}

function reset(){

	let space = document.getElementsByClassName('space')

	for (let i = 0; i < space.length; i++){
		space[i].innerHTML = ''
		space[i].setAttribute('jogada', '')

	}
	if (gameover == true){

		gameover = false
		vencedor = ''


	}

}

function placar(){

	let score = document.getElementById('score')
	score.innerHTML = `X: ${x} O: ${o}`
}
