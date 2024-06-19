// Array of image objects

const images = [
  {
    id: "image-1",
    imageName: "./images/image1.jpg",
    caption: "Hacker in charge",
  },
  {
    id: "image-2",
    imageName: "./images/image2.jpg",
    caption: "Coding in progress",
  },
  {
    id: "image-3",
    imageName: "./images/image3.jpg",
    caption: "Motor-bike in zone",
  },
  {
    id: "image-4",
    imageName: "./images/image4.jpg",
    caption: "Next-gen Bike",
  },
  {
    id: "image-5",
    imageName: "./images/image5.jpg",
    caption: "Nature to the top",
  },
  {
    id: "image-6",
    imageName: "./images/image6.jpg",
    caption: "Advanced animals",
  },
];

// Function to render images
function renderImages() {
  const imageContainer = document.getElementById("image-container");
  images.forEach((image) => {
    // Create the div element with the class 'img-thumb'
    const imgThumbDiv = document.createElement("div");
    imgThumbDiv.classList.add("img-thumb");

    // Create the img element
    const imgElement = document.createElement("img");
    imgElement.src = image.imageName;
    imgElement.alt = image.caption;
    imgElement.id = image.id;

    // Append the img element to the div
    imgThumbDiv.appendChild(imgElement);

    // Append the div to the image container
    imageContainer.appendChild(imgThumbDiv);
  });
}

// Call the function to render images on page load
renderImages();

// Modal functionality
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function openModal(index) {
  modal.style.display = "block";
  updateModal(index);
}

function updateModal(index) {
  const image = images[index];
  modalImg.src = image.imageName;
  captionText.textContent = image.caption;
  currentIndex = index;
  updateNavigationButtons();
}

function closeModal() {
  modal.style.display = "none";
}

function showPrev() {
  if (currentIndex > 0) {
    updateModal(currentIndex - 1);
  }
}

function showNext() {
  if (currentIndex < images.length - 1) {
    updateModal(currentIndex + 1);
  }
}

function updateNavigationButtons() {
  prevBtn.style.display = currentIndex === 0 ? "none" : "block";
  nextBtn.style.display = currentIndex === images.length - 1 ? "none" : "block";
}

// Event listeners
document.querySelectorAll(".img-thumb img").forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

closeBtn.addEventListener("click", closeModal);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

// Close the modal when clicking outside of the image
window.addEventListener("click", (event) => {
  console.log(event);
  if (event.target === modal) {
    closeModal();
  }
});
