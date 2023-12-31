// Get the element with the class "contant-detaiels-here"
var contentElement = document.querySelectorAll(".contant-detaiels-here")[0];

if (contentElement) {
  // Check if the element's inner text contains "OutofStockSizes-["
  var contentText = contentElement.innerText;
  if (contentText.includes("OutofStockSizes-[")) {
    // Show the element with class "color-optionsNew"
    var colorOptionsElement = document.querySelectorAll(".color-optionsNew")[0];
    if (colorOptionsElement) {
      colorOptionsElement.style.display = "flex";
    } else {
      console.error("Element with class 'color-optionsNew' not found.");
    }
  } else {
    // Hide the element with class "color-optionsNew"
    var colorOptionsElement = document.querySelectorAll(".color-optionsNew")[0];
    if (colorOptionsElement) {
      colorOptionsElement.style.display = "none";
    } else {
      console.error("Element with class 'color-optionsNew' not found.");
    }
  }
} else {
  console.error("Element with class 'contant-detaiels-here' not found.");
}
