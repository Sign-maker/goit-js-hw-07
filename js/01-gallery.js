import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListRef = document.querySelector('.gallery');
galleryListRef.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const { target } = event;

  // разрешаем кликать только по img
  if (!target.classList.contains('gallery__image')) {
    return;
  }

  getBasicLightBox(target.dataset.source).show();
}

function getBasicLightBox(origImgRef) {
  const instance = basicLightbox.create(`<img src=${origImgRef} width="800" height="600">`, {
    onShow: () => window.addEventListener('keydown', catchEscBtn),
    onClose: () => window.removeEventListener('keydown', catchEscBtn),
  });

  function catchEscBtn({ code }) {
    if (code === 'Escape') {
      instance.close();
    }
  }

  return instance;
}

function markUp(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a href="${original}" class="gallery__link"
         ><img src="${preview}" alt="${description}" class="gallery__image" data-source="${original}"
        /></a>
       </li>`
    )
    .join('');
}

galleryListRef.insertAdjacentHTML('beforeend', markUp(galleryItems));
