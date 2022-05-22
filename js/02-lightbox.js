import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(({ original, preview, description }) => {
    return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
  })
  .join(" ");
gallery.innerHTML = galleryList;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
