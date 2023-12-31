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