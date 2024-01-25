document.addEventListener('DOMContentLoaded', function () {
	const imageList = document.getElementById('imageList');
	const modalImg = document.getElementById('modalImg');
	const modal = document.getElementById('myModal');
	const closeModalBtn = document.getElementById('closeModalBtn');
  
	// Adiciona manipuladores de eventos de clique para cada imagem
	imageList.addEventListener('click', function (event) {
	  if (event.target.tagName === 'IMG') {
		const imgSrc = event.target.src.replace(window.location.origin, '');
		openModal(imgSrc);
	  }
	});
  
	// Adiciona manipulador de evento de clique para fechar a modal
	closeModalBtn.addEventListener('click', function () {
	  closeModal();
	});
  
	// Função para exibir a imagem em tamanho maior
	function openModal(imgSrc) {
	  modal.style.display = 'flex';
	  modalImg.src = imgSrc;
	}
  
	// Função para fechar a modal
	function closeModal() {
	  modal.style.display = 'none';
	}
  });
  