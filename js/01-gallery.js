import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMurkupConteiner = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener('click', (e) => {
  e.preventDefault();
})
  
galleryContainer.insertAdjacentHTML('beforeend', galleryMurkupConteiner);

function createGalleryMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `;
    }).join(""); 
}

const galItem = galleryItems.map((item) => {
  return item.preview;
}).join("");

console.log(galleryItems);

document.querySelector('.gallery').onclick = (e) => {
 
  if (!e.target.classList.contains('gallery__image')) {
    return;
}
	const instance = basicLightbox.create(`
  <div class="modal">
    <img
    class="gallery__image"
    src="${e.target.dataset.source}"
    data-source=""
    alt=""
  />
  <a>Close</a>
  </div>
	`,
    {
    onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close;
        instance.element().querySelector('img').onclick = instance.close;
      window.addEventListener('keyup', onEscClose)
      },
      
    onClose: () => {
      window.removeEventListener('keyup', onEscClose)
    },
  });
  
  function onEscClose(e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  }
instance.show()
}
