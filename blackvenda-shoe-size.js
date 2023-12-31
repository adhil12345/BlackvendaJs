function handleSizes() {
    var getSizes = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Size-[")[1].split("]")[0];

    var sizes = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', 'S', 'L', 'M_', 'X_', 'XX'];

    sizes.forEach(function (size) {
      var sizeElement = document.querySelectorAll(`#siz${size}`)[0];
      getSizes.match(size) ? sizeElement.style.display = "unset" : sizeElement.style.display = "none";

      // Additional logic for disabling and marking as "Out of Stock"
      if (getSizes.match(`-${size}`)) {
        sizeElement.setAttribute("class", "size1");
        var stockElement = document.querySelectorAll(`#siz${size}1`)[0];
        stockElement.disabled = true;
        stockElement.setAttribute("value", "Out of Stock");
      }
    });

    var getmatchSiz = getSizes.match(/[0-9]|[A-Z]/);
    var sizeContainer = document.querySelectorAll(".size-container")[0];
    getmatchSiz ? sizeContainer.style.display = "unset" : sizeContainer.style.display = "none";

    if (getSizes.match(/-[0-9]{2,3}CM/)) {
      var cmElement = document.querySelectorAll(`#siz${getSizes.match(/-[0-9]{2,3}CM/)[0]}1`)[0];
      cmElement.setAttribute("class", "size1");
      cmElement.disabled = true;
      cmElement.setAttribute("value", "Out of Stock");
    }

    if (getSizes.match(/[0-9]/g)) {
      document.querySelectorAll("#disPlaySize")[0].style.display = "unset";
    } else {
      document.querySelectorAll("#disPlaySize")[0].style.display = "none";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    handleSizes();
  });
