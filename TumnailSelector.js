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


const contentHereDiv = document.querySelector('.contant-detaiels-here');
        const contentDiscriptionImg = contentHereDiv.innerHTML.split("DiscriptionImgsUrl-[")[1].split("]")[0];
        
        if(contentHereDiv){
        	document.querySelectorAll("#showMoreBtn")[0].style.display= "none";
        }
        
        
        const urlMatches = contentDiscriptionImg;

        if (urlMatches && urlMatches.length > 1) {
            const imageUrls = urlMatches.split(',');
            const descriptionImageDiv = document.querySelector('#description-image');
            const showMoreBtn = document.querySelector('#showMoreBtn');
            const showLessBtn = document.querySelector('#showLessBtn');

            // Function to show images
            function showImages() {
                descriptionImageDiv.style.maxHeight = 'none';
                showMoreBtn.style.display = 'none';
                showLessBtn.style.display = 'block';
            }

            // Function to hide images
            function hideImages() {
                descriptionImageDiv.style.maxHeight = '300px';
                showMoreBtn.style.display = 'block';
                showLessBtn.style.display = 'none';
            }

            showMoreBtn.addEventListener('click', showImages);
            showLessBtn.addEventListener('click', hideImages);

            // Initially, hide images
            hideImages();

            imageUrls.forEach((imageUrl) => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl.trim();
                imgElement.style.width= "100%";
                descriptionImageDiv.appendChild(imgElement);
            });
        }
