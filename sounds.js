export const playClickSound = () => {
  try {
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-modern-click-box-check-1120.mp3');
    audio.volume = 0.3;
    audio.play().catch(error => console.error("Erro ao tocar som de clique:", error));
  } catch (error) {
    console.error("Erro ao carregar som de clique:", error);
  }
};

export const playSuccessSound = () => {
  try {
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3');
    audio.volume = 0.4;
    audio.play().catch(error => console.error("Erro ao tocar som de sucesso:", error));
  } catch (error) {
    console.error("Erro ao carregar som de sucesso:", error);
  }
};

// Pré-carrega sons após a primeira interação
document.addEventListener("click", () => {
  playClickSound();
}, { once: true });
