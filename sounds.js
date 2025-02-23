export const playClickSound = () => {
  const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-modern-click-box-check-1120.mp3');
  audio.volume = 0.3;
  audio.play();
};

export const playSuccessSound = () => {
  const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3');
  audio.volume = 0.4;
  audio.play();
};
