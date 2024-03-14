document.addEventListener('DOMContentLoaded', function () {
	const imageList = document.getElementById('imageList');
	const modalImg = document.getElementById('modalImg');
	const modal = document.getElementById('myModal');
	const closeModalBtn = document.getElementById('closeModalBtn');
	const dark = document.getElementById('darkBtn');
	const background = document.querySelector('.background');
	const esquerda= document.querySelector('.btn-left');
	const direita= document.querySelector('.btn-right');
	const blabla = document.querySelectorAll('li > img')
	const img1 = document.getElementById('img1');
	const img2 = document.getElementById('img2');
	const img3 = document.getElementById('img3');
	const img4 = document.getElementById('img4');
	const img5 = document.getElementById('img5');
	const img6 = document.getElementById('img6');
	let op = 0;
	let i =0;
	
	console.log(blabla)
	blabla.forEach(element => {
		console.log(element.id)		
	});
	img1.onclick = function(){
		modal.style.display='flex'
		modalImg.setAttribute('src', "img/img1.jpg")
		console.log('de')
	  }

	  img2.onclick = function(){
		modal.style.display='flex'
		modalImg.setAttribute('src', "img/img2.jpg")
	  }

	img3.onclick = function(){

		modal.style.display='flex'
		modalImg.setAttribute('src', "img/img3.jpg")
	}


	img4.onclick = function(){
		modalImg.setAttribute('src', "img/img1.jpg")
    }

	img5.onclick = function(){
		modalImg.setAttribute('src', "img/img2.jpg")
	}

	img6.onclick = function(){
		modalImg.setAttribute('src', "img/img3.jpg")
	}

	dark.onclick= function(){

		if(op === 0){
			 dark.textContent='Normal'
			 background.style.display = 'block '
             op=1;
		}
		else {

		dark.textContent = 'Dark'
		background.style.display = 'none '
        op=0		}
	
	}

direita.onclick = function(){
	if(i===0){
		modalImg.setAttribute('src', "img/img2.jpg")
		i=1
	}else if(i===1){
	modalImg.setAttribute('src', "img/img3.jpg")
	i=2
	}else
	modalImg.setAttribute('src', "img/img1.jpg")
	i=0;
}

 closeModalBtn.onclick= function(){

	modal.style.display='none'
 }
	// Adicione aqui seu código
  });
  






