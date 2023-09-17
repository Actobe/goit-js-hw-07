import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");


galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.dataset.source = item.original; 

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  galleryContainer.appendChild(galleryItem);
});


console.log(galleryItems);


galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault(); // Заборонити перехід за посиланням
  const target = event.target;

  // Перевірити, чи був клік на елементі з класом gallery__image
  if (target.classList.contains("gallery__image")) {
    // Отримати URL великого зображення з data-атрибуту source
    const largeImageUrl = target.dataset.source;

    // Тут ви можете використовувати largeImageUrl для подальшої обробки
    // Наприклад, відкрити модальне вікно з цим зображенням
    // або використовувати його в інших способах
    console.log(largeImageUrl);
  }
}


