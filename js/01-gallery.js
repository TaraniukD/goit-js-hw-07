import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMurkupConteiner = createGalleryMarkup(galleryItems);

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

galleryContainer.addEventListener('click', openModal);
 
function openModal(e) {
    e.preventDefault(); 
 
  if (!e.target.classList.contains('gallery__image')) {
    return;
}
	const instance = basicLightbox.create(`
    <img
    class="gallery__image"
    src="${e.target.dataset.source}"
    data-source=""
    alt=""
  />
	`,
    {
    onShow: (instance) => {
      document.addEventListener('keyup', onEscClose)
      },
      
    onClose: () => {
      document.removeEventListener('keyup', onEscClose)
    },
  });
  
  function onEscClose(e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  }
instance.show()
}

console.log(galleryItems);