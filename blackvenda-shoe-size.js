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
