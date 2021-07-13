const imageArr = [
  require('../images/back-to-the-future1.jpg'),
  require('../images/back-to-the-future2.jpg'),
  require('../images/back-to-the-future3.jpg'),
  require('../images/lord-of-the-ring1.jpg'),
  require('../images/lord-of-the-rings2.jpg'),
  require('../images/lord-of-the-rings3.jpg'),
  require('../images/star-wars-new-hope.jpg'),
  require('../images/star-wars-empires-strike-back.jpg'),
  require('../images/star-wars-return-of-the-jedi.jpg'),
];

const gallery = document.querySelector('.gallery');
const closeButton = document.querySelector('.modal__button');
const backdrop = document.querySelector('.backdrop');
const modalImage = document.querySelector('.modal__image');

// fill our list with picture
for (let i = 0; i < imageArr.length; i++) {
  const item = document.createElement('li');
  item.setAttribute('class', 'gallery__item');

  const image = document.createElement('img');
  image.setAttribute('class', 'gallery__image');
  image.setAttribute('src', imageArr[i]);

  document.querySelector('ul.gallery').appendChild(item).appendChild(image);
}

// open modal
gallery.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.nodeName !== 'LI' && e.target.nodeName !== 'IMG') {
    return;
  }
  backdrop.classList.remove('is-hidden');

  let target;
  if (e.target.nodeName === 'LI') {
    target = e.target.querySelector('.gallery__image');
  } else {
    target = e.target;
  }

  openImage(target);
}

function openImage(target) {
  const targetImage = target.getAttribute('src');
  modalImage.setAttribute('src', targetImage);
}

// close modal
closeButton.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') backdrop.classList.add('is-hidden');
});

backdrop.addEventListener('click', (e) => {
  if (e.target.nodeName === 'DIV') backdrop.classList.add('is-hidden');
});

// arrows
document.addEventListener('keydown', (e) => {
  if (!backdrop.classList.contains('is-hidden')) {
    const imageSource = imageArr.indexOf(modalImage.getAttribute('src'));
    const imageIndex = imageArr.indexOf(imageArr[imageSource]);

    if (e.keyCode === 39 && imageIndex < imageArr.length - 1) {
      modalImage.setAttribute('src', imageArr[imageSource + 1]);
    } else if (e.keyCode === 37 && imageIndex > 0) {
      modalImage.setAttribute('src', imageArr[imageSource - 1]);
    }
  }
});
