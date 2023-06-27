//your code here
// Array of image URLs
const imageUrls = [
  "https://via.placeholder.com/150?text=Image1",
  "https://via.placeholder.com/150?text=Image2",
  "https://via.placeholder.com/150?text=Image3",
  "https://via.placeholder.com/150?text=Image4",
  "https://via.placeholder.com/150?text=Image5",
  "https://via.placeholder.com/150?text=Image6"
];

// Shuffle the image URLs array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to check if two selected images are identical
function checkIdenticalImages() {
  const selectedImages = document.querySelectorAll(".selected");
  if (selectedImages.length === 2) {
    const img1 = selectedImages[0].getAttribute("src");
    const img2 = selectedImages[1].getAttribute("src");
    return img1 === img2;
  }
  return false;
}

// Function to handle image selection
function handleImageSelection() {
  const imageContainer = document.querySelector(".image-container");

  // Event listener for image click
  imageContainer.addEventListener("click", function (e) {
    const target = e.target;

    // Check if the clicked element is an image
    if (target.tagName === "IMG" && !target.classList.contains("selected")) {
      target.classList.add("selected");

      // Check if two images are selected
      if (document.querySelectorAll(".selected").length === 2) {
        document.getElementById("verify").style.display = "block";
      }
    }
  });

  // Event listener for reset button click
  document.getElementById("reset").addEventListener("click", function () {
    const selected

