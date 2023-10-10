import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListRef = document.querySelector('.gallery');

function markUp(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a href="${original}" class="gallery__link"
         ><img src="${preview}" alt="${description}" class="gallery__image"
        /></a>
       </li>`
    )
    .join('');
}

galleryListRef.insertAdjacentHTML('beforeend', markUp(galleryItems));

const options = {
  captionsData: 'alt',
  captionDelay: 250,
};

const lightboxRef = new SimpleLightbox('.gallery a', options);
