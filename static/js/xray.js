  function previewImage() {
  const previewBox = document.getElementById("previewBox");
  const previewImage = document.getElementById("previewImage");
  const fileInput = document.getElementById("xray-upload");

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      previewImage.src = e.target.result;
    };

    reader.readAsDataURL(fileInput.files[0]);
    previewBox.style.display = "block"; // Show the preview box
  } else {
    previewImage.src = ""; // Clear the image source
    previewBox.style.display = "none"; // Hide the preview box
  }
}

function resetImage() {
  const previewImage = document.getElementById("previewImage");
  previewImage.style.filter = "none"; // Remove CSS filters
}

function applyFilters() {
  const previewImage = document.getElementById("previewImage");
  // Apply your CSS filters here if needed
  previewImage.style.filter = "invert(96%) sepia(97%) saturate(12%) hue-rotate(237deg) brightness(103%) contrast(103%)";
}