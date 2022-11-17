import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMurkupConteiner = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMurkupConteiner);

galleryContainer.addEventListener('click', (e) => {
  e.preventDefault();
  })

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

console.log(galItem);
console.log(galleryItems);

document.querySelector('.gallery').onclick = () => {

	const instance = basicLightbox.create(`
  <div class="modal">
    <img
    class="gallery__image"
    src='https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg'
    data-source=""
    alt=""
  />
  <a>Close</a>
  </div>
	`, {
    onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close
    }
});
instance.show()
}


// const instance = basicLightbox.create(`
//     <div class="modal">
//     <img
//     class="gallery__image"
//     src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg"
//     data-source=""
//     alt=""
//   />
//     </div>
// `)

// instance.show()

// const instance = basicLightbox.create(`
//     <div class="modal">
//     <img
//     class="gallery__image"
//     src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg"
//     data-source=""
//     alt=""
//    />
//         <a>Close</a>
//     </div>
// `, {
//     onShow: (instance) => {
//         instance.element().querySelector('a').onclick = instance.close
//     }
// })

// instance.show()