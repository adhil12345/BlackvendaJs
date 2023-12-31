 // Wrap the code in a function to encapsulate variables and avoid polluting the global scope
  function handleSizes() {
    var getSizes = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Size-[")[1].split("]")[0];

    // Use an array to store sizes for better organization
    var sizes = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', 'S', 'L', 'M_', 'X_', 'XX'];

    // Loop through sizes array to reduce repetitive code
    sizes.forEach(function (size) {
      var sizeElement = document.querySelectorAll(`#siz${size}`)[0];
      getSizes.match(size) ? sizeElement.style.display = "unset" : sizeElement.style.display = "none";
    });

    // Use a regular expression to match any digit or uppercase letter
    var getmatchSiz = getSizes.match(/[0-9]|[A-Z]/);

    // Set display for the entire size container
    var sizeContainer = document.querySelectorAll(".size-container")[0];
    getmatchSiz ? sizeContainer.style.display = "unset" : sizeContainer.style.display = "none";
  }

  // Call the function when the page is loaded
  document.addEventListener("DOMContentLoaded", function () {
    handleSizes();
  });

  // Wrap the code in a function to encapsulate variables and avoid polluting the global scope
  function handleOutOfStock() {
    var checksizOut = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Size-[")[1].split("]")[0];

    // Define an array of sizes
    var sizes = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', 'S', 'M_', 'L', 'X_', 'XX', '110CM', '115CM', '120CM', '130CM', '140CM', '150CM', '160CM'];

    // Loop through sizes array
    sizes.forEach(function (size) {
      var sizeElement = document.querySelectorAll(`#siz${size}`)[0];
      var stockElement = document.querySelectorAll(`#siz${size}1`)[0];

      if (checksizOut.match(`-${size}`)) {
        sizeElement.setAttribute("class", "size1");
        stockElement.disabled = true;
        stockElement.setAttribute("value", "Out of Stock");
      }
    });

    // Display or hide the size container based on any digit in the checkSizOut string
    var displaySize = document.querySelectorAll("#disPlaySize")[0];
    checksizOut.match(/[0-9]/g) ? displaySize.style.display = "unset" : displaySize.style.display = "none";
  }

  // Call the function when the page is loaded
  document.addEventListener("DOMContentLoaded", function () {
    handleOutOfStock();
  });
