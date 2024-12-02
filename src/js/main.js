import "../css/style.css"

// Función para crear murciélagos
function createBat() {
  const bat = document.createElement('div');
  bat.classList.add('bat');
  bat.style.left = Math.random() * window.innerWidth + 'px';
  bat.style.top = Math.random() * window.innerHeight + 'px';
  
  const duration = Math.random() * 10 + 5; // entre 5 y 15 segundos
  bat.style.animation = `batFly ${duration}s linear infinite`;
  
  document.querySelector('.bats-container').appendChild(bat);
  
  setTimeout(() => {
      bat.remove();
  }, duration * 1000);
}

// Crear murciélagos cada 2 segundos
setInterval(createBat, 2000);

// Función para hacer parpadear las ventanas de la casa embrujada
function flickerWindows() {
  const windows = document.querySelectorAll('.window');
  windows.forEach(window => {
      setInterval(() => {
          window.style.opacity = Math.random() < 0.1 ? '0' : '1';
      }, 100);
  });
}

flickerWindows();

// Control del sonido
const soundToggle = document.getElementById('sound-toggle');
const halloweenSound = document.getElementById('halloween-sound');

soundToggle.addEventListener('click', () => {
  if (halloweenSound.paused) {
      halloweenSound.play();
      soundToggle.textContent = '🔇 Silenciar Sonidos';
  } else {
      halloweenSound.pause();
      soundToggle.textContent = '🎃 Sonidos Espeluznantes';
  }
});

// Animación de las calabazas
function animatePumpkins() {
  const pumpkins = document.querySelectorAll('.pumpkin');
  pumpkins.forEach((pumpkin, index) => {
      pumpkin.style.animation = `pumpkinGlow 2s ease-in-out ${index * 0.5}s infinite alternate`;
  });
}

animatePumpkins();

// Añadir keyframes para la animación de las calabazas
const style = document.createElement('style');
style.textContent = `
  @keyframes pumpkinGlow {
      from { box-shadow: 0 0 5px #ff6600; }
      to { box-shadow: 0 0 20px #ff6600, 0 0 40px #ff6600; }
  }
`;
document.head.appendChild(style);

// Efecto de niebla al mover el ratón
document.addEventListener('mousemove', (e) => {
  const fog = document.createElement('div');
  fog.classList.add('fog');
  fog.style.left = e.clientX + 'px';
  fog.style.top = e.clientY + 'px';
  document.body.appendChild(fog);
  
  setTimeout(() => {
      fog.remove();
  }, 2000);
});

// Añadir estilos para el efecto de niebla
const fogStyle = document.createElement('style');
fogStyle.textContent = `
  .fog {
      position: absolute;
      width: 50px;
      height: 50px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      pointer-events: none;
      animation: fogExpand 2s ease-out;
  }
  @keyframes fogExpand {
      from { transform: scale(1); opacity: 0.5; }
      to { transform: scale(3); opacity: 0; }
  }
`;
document.head.appendChild(fogStyle);

