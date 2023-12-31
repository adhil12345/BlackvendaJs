 // Get references to the elements
        const colorDisplayText = document.getElementById('colorDisplayBew');
        const colorOptionsx = document.querySelectorAll('.color-optionNew');
        const sizeLabels = document.querySelectorAll('.size');

        // Function to update the color display and disable out-of-stock sizes
        function updateColorDisplay(selectedColor) {
            colorDisplayText.innerText = selectedColor;
            removeActiveClassAndCheckSizeInput(); // Remove active class and set active size input to checked
            disableOutOfStockSizes(selectedColor);
        }

        // Initial call to set the initial color display
        updateColorDisplay(colorOptionsx[0].getAttribute('data-color'));

        // Add click event listeners to the color divs
        colorOptionsx.forEach(function(colorOption) {
            colorOption.addEventListener('click', function() {
                const selectedColor = colorOption.getAttribute('data-color');
                updateColorDisplay(selectedColor);
            });
        });

        // Function to disable out-of-stock sizes for the selected color
        function disableOutOfStockSizes(selectedColor) {
            const outOfStockSizes = {};
            const getCol = document.querySelector(".contant-detaiels-here").innerText.split("OutofStockSizes-[")[1].split("]")[0].toLowerCase();
            const availableSizes = document.querySelector(".contant-detaiels-here").innerText.split("Size-[")[1].split("]")[0];

            // Parse the OutofStockSizes data
            getCol.split(',').forEach(function(colorInfo) {
                const parts = colorInfo.split('(');
                const color = parts[0];
                const sizes = parts[1].replace(')', '').split('/');
                outOfStockSizes[color] = sizes;
            });

            const sizes = outOfStockSizes[selectedColor];
            const availableSizeArray = availableSizes.split(' ');

            let firstOutOfStockSizeFound = false;

            // Iterate over size labels and update classes
            sizeLabels.forEach(function(sizeLabel, index) {
                const sizeInput = sizeLabel.querySelector('input');
                const sizeValue = sizeInput.value;
                if (sizes.includes(sizeValue)) {
                    sizeInput.disabled = true;
                    sizeLabel.classList.replace('size', 'size1'); // Replace the class
                } else if (availableSizeArray.includes(sizeValue + '(1)')) {
                    sizeInput.disabled = false;
                    sizeLabel.classList.replace('size1', 'size'); // Restore the original class

                    // Automatically add "active" class to the next available size
                    if (!firstOutOfStockSizeFound) {
                        sizeLabel.classList.add('active');
                        sizeInput.click(); // Programmatically trigger a click on the size input
                        firstOutOfStockSizeFound = true;
                    }else {
					
					}
                }
            });
        }

        // Function to remove the "active" class and set the active size input to checked
        function removeActiveClassAndCheckSizeInput() {
            sizeLabels.forEach(function(sizeLabel) {
                sizeLabel.classList.remove('active');
            });
        }

//]]> 
