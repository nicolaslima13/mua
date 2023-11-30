function exibirMensagem() {
    var button = document.getElementById('cliqueAquiButton');
    var mensagemContainer = document.getElementById('mensagemContainer');
    var meuVideo = document.getElementById('meuVideo');
  
    button.style.display = 'none';
    mensagemContainer.style.display = 'block';
  
    // Define a origem do vídeo
    meuVideo.src = 'gatinho.mp4';
  
    // Inicia o vídeo
    meuVideo.play();
  }
  