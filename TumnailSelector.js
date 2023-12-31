var selectColorz = document.querySelectorAll(".color-optionNew");
  var selectImagesz = document.querySelectorAll(".natural-thumbnail");

  // Add click event listener to each color option
  selectColorz.forEach(function (colorOption, index) {
    colorOption.addEventListener("click", function () {
      // Reset opacity for all thumbnails, excluding 'a' elements
      selectImagesz.forEach(function (thumbnail, thumbnailIndex) {
        if (thumbnail.tagName.toLowerCase() !== 'a') {
          thumbnail.style.opacity = index === thumbnailIndex ? 1 : 0;
        }
      });
    });
  });