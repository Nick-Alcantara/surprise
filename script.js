document.getElementById('surprise-link').addEventListener('click', function(event) {
    event.preventDefault();
  
    // Ocultar a div com a classe 'surprise-container'
    document.querySelector('.surprise-container').style.display = 'none';
  
    // Tocar um audio
    var audio = new Audio('amor.mp3');
    audio.play();
  
    // Adicionar uma mensagenzinha
    alert("Você é a minha melhor escolha, e você foi a melhor coisa que já aconteceu na minha vida!");
  
    // incluir as imagens na tela 
    var images = ['doisanos.jpg','investidura.jpg', 'nicolandia.jpg', 'amor.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  
    // Embaralhe as imagens aleatoriamente
    images = shuffleArray(images);
  
    // Exibir imagens centralizadas na tela
    var imageContainer = document.getElementById('image-container');
    imageContainer.classList.remove('hidden');
  
    // Centralizar o container de imagens
    imageContainer.style.position = 'absolute';
    imageContainer.style.left = '50%';
    imageContainer.style.top = '50%';
    imageContainer.style.transform = 'translate(-50%, -50%)';
  
    images.forEach(function(imagePath, index) {
      var imgElement = document.createElement('img');
      imgElement.src = imagePath;
  
      // Ajustar o tamanho da imagem (pode ser personalizado conforme necessário)
      imgElement.style.width = '100px'; // Substitua com o tamanho desejado
  
      // Adicionar classe para iniciar a animação
      setTimeout(() => imgElement.classList.add('fade-in'), index * 500);
  
      imageContainer.appendChild(imgElement);
    });
  
    // Adicionar o texto "Eu te amo" no centro das imagens
    addLoveText();
  });
  
  function addLoveText() {
    // Criar elemento de texto
    var loveTextContainer = document.createElement('div');
    loveTextContainer.classList.add('love-text-container');
  
    var loveText = document.createElement('div');
    loveText.innerText = 'Eu te amo ❤️';
    loveText.classList.add('love-text', 'hidden');
  
    // Adicionar o elemento ao corpo
    document.body.appendChild(loveTextContainer);
    loveTextContainer.appendChild(loveText);
  
    // Exibir o texto com um atraso
    loveText.classList.remove('hidden');
  
    // Adicionar a classe fade-in para aplicar a animação
    setTimeout(() => loveText.classList.add('fade-in'), 500);
  }
   
  
  // Função para embaralhar um array
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Função para calcular uma posição aleatória sem sobreposição
  function calculateRandomPosition(maxWidth, imageWidth, index) {
    var maxAttempts = 20;
    var attempt = 0;
    var position;
  
    do {
      position = Math.floor(Math.random() * (maxWidth - imageWidth));
      attempt++;
    } while (isOverlap(position, imageWidth, index) && attempt < maxAttempts);
  
    return position;
  }
  
  // Função para calcular uma posição aleatória ao redor do centro
  function calculateRandomPositionAroundCenter(centerPosition, distance) {
    var angle = Math.random() * 2 * Math.PI;
    var x = centerPosition.x + distance * Math.cos(angle);
    var y = centerPosition.y + distance * Math.sin(angle);
    return { x: x, y: y };
  }
  
  // Função para verificar se há sobreposição com imagens já posicionadas
  function isOverlap(position, imageWidth, index) {
    var images = document.querySelectorAll('#image-container img');
    for (var i = 0; i < images.length; i++) {
      if (Math.abs(position - parseInt(images[i].style.left, 10)) < imageWidth && i !== index) {
        return true; // Há sobreposição
      }
    }
    return false; // Não há sobreposição
  }
