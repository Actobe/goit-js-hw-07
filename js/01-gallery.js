import { galleryItems } from './gallery-items.js';
// Change code below this line



// Get a reference to the gallery container
const galleryContainer = document.querySelector(".gallery");

// Create gallery items and add them to the container
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
  galleryImage.dataset.source = item.original; // Use dataset for custom attributes

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  galleryContainer.appendChild(galleryItem);
});


console.log(galleryItems);
