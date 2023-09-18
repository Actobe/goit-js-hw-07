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



// // ПОВЕРНУТИ ЯКЩО НЕ СПРАЦЮЄ КОД НИЖЧЕ//
// // Відкриття модального вікна при кліку на елементі галереї
// galleryContainer.addEventListener("click", (event) => {
//   event.preventDefault(); // Забороняємо стандартну дію посилання
//   if (event.target.nodeName === "IMG") {
//     const largeImageUrl = event.target.dataset.source; // Отримуємо URL великого зображення

//     // Створюємо модальне вікно з великим зображенням і встановлюємо клас для стилів
//     const instance = basicLightbox.create(`
//       <img src="${largeImageUrl}" alt="" />
//     `, {
//       className: 'my-lightbox', // Додайте клас для стилізації модального вікна
//     });

//     instance.show(); // Показуємо модальне вікно
//   }
// });

// Відкриття модального вікна при кліку на елементі галереї
galleryContainer.addEventListener("click", (event) => {
  event.preventDefault(); // Забороняємо стандартну дію посилання
  if (event.target.nodeName === "IMG") {
    const largeImageUrl = event.target.dataset.source; // Отримуємо URL великого зображення

    // Отримуємо модальне вікно
    const modal = basicLightbox.create(`
      <img src="${largeImageUrl}" alt="" />
    `, {
      className: 'my-lightbox', // Додайте клас для стилізації модального вікна
    });

    // Отримуємо елемент <img> у модальному вікні
    const modalImage = modal.element().querySelector('img');

    // Опціонально встановлюємо атрибути альтернативного тексту і будь-які інші атрибути, які вам потрібні

    // Відкриваємо модальне вікно
    modal.show();
  }
});






document.addEventListener("DOMContentLoaded", () => {
  // Ваш код для створення галереї і обробки подій кліку
});

