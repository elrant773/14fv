const music = document.getElementById('music');
const btn = document.getElementById('toggleMusic');

btn.addEventListener('click', () => {
  if (music.paused) {
    music.volume = 0.3; // тихо, чтобы не пугать
    music.play().catch(() => {}); // catch на автоплей блок
    btn.textContent = '♫ Выключить';
    btn.classList.add('active');
  } else {
    music.pause();
    btn.textContent = '♫ Включить музыку';
    btn.classList.remove('active');
  }
});