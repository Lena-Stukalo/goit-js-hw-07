import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

const gallaryArray = [];
galleryItems.map((galleryItem) => {
  const galleryItemEl = document.createElement("div");
  galleryItemEl.classList = "gallery__item";

  const galleryLink = document.createElement("a");
  galleryLink.classList = "gallery__link";
  galleryLink.href = galleryItem.original;

  const galleryImg = document.createElement("img");
  galleryImg.classList = "gallery__image";
  galleryImg.src = galleryItem.preview;
  galleryImg.alt = galleryItem.description;
  galleryImg.dataset.source = galleryItem.original;

  galleryLink.appendChild(galleryImg);
  galleryItemEl.appendChild(galleryLink);
  gallaryArray.push(galleryItemEl);
});
gallery.append(...gallaryArray);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const orignlImg = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${orignlImg}">`);
  instance.show();

  console.log(orignlImg);
});
