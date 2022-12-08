document
  .querySelector('header > button')
  .addEventListener('click', () => document.body.classList.toggle('dark'));

[...document.querySelectorAll('main > div > img')].forEach(img => {
  img.addEventListener('click', e => {
    renderModal(e.currentTarget.src);
  });
});

function renderModal(src) {
  const root = document.createElement('div');
  const close = document.createElement('div');
  const main = document.createElement('div');
  const button = document.createElement('button');
  button.innerText = 'Играть';

  root.classList.add('game-modal');
  close.classList.add('game-modal-close', 'game-modal-close-appear');
  main.classList.add('game-modal-main', 'game-modal-main-appear');
  button.classList.add('game-modal-play');
  main.style.background = `url(${src}) center/cover no-repeat`;

  let closed = false;

  const closeModal = () => {
    if (closed) {
      return;
    }
    closed = true;
    close.classList.remove('game-modal-close-appear');
    main.classList.remove('game-modal-main-appear');
    close.offsetWidth;
    main.offsetWidth;
    close.classList.add('game-modal-close-disappear');
    main.classList.add('game-modal-main-disappear');
    setTimeout(() => {
      root.remove();
      close.removeEventListener('click', closeModal);
    }, 300);
  };
  close.addEventListener('click', closeModal);

  main.append(button);
  root.append(close, main);
  document.body.append(root);
}
