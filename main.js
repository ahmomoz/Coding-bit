import './assets/scss/all.scss';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-wrapper');

  // 確保 loader 存在再執行動作
  if (loader) {
    setTimeout(() => {
      loader.classList.add('loader-hidden');
    }, 1500);
  }
});
