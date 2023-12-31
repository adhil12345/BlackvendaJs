function getUserInfoz() {
            var name = document.getElementById('userNm').textContent;
            var email = document.getElementById('userEm').textContent;

fetch('https://script.google.com/macros/s/AKfycbzxrQe4-VeD5kmqkjilzPZMW3PUB2ueVbi2qfnvcshPEnDKzsgi-4eDyjEMLcHhQ478kQ/exec?name=' + name + '&email=' + email)
                .then(response => response.json())
                .then(data => {
                    if (data && data.fullName && data.district && data.city && data.mobileNumber && data.address) {
                        // Update the input fields only if all required data is available
					document.getElementById('YourName').value = data.fullName;
                    document.getElementById('Address').value = data.address;
                    document.getElementById('District').value = data.district;
                    document.getElementById('Mobile1').value = data.mobileNumber;
                    document.getElementById('Mobile2').value = '';
                    }
                });
// Fetch data from the Google Apps Script web app
fetch('https://script.google.com/macros/s/AKfycbxpIgUJoXhnX9ZzdIrEGMZgr_7wDlRZUhAQXwKa_3J0F1XdVWEO4D_9IzetqNyropl8/exec') // Replace with your web app URL
    .then(response => response.text())
    .then(data => {
        const gtB = document.querySelector(".contant-detaiels-here").innerHTML;
        const checking = data.split('Available Qtty"')[1].replaceAll("],[", "/").replaceAll(/"/g, " ").replace("/", "").replaceAll(" ", "");

        const Ditemcode = document.querySelector(".modelNor").textContent;
        const DitemColor = document.querySelectorAll("#colorDisplayBew")[0].innerHTML.toLowerCase();
        const DitemSize = gtB.split("Size-[")[1].split("]")[0].replaceAll("(1)", "").split(" ");

        // Iterate through sizes and check stock
        for (let i = 0; i < DitemSize.length; i++) {
            const fullForm = Ditemcode + "-" + DitemSize[i] + "," + DitemColor + ",";
            const checkFulC = checking.split(fullForm)[1].split("/")[0].split(",");
            const finQ = checkFulC[3];
            const getSizD = "siz" + DitemSize[i] + "1";

            if (checkFulC && finQ === "0") {
                document.getElementById(getSizD).disabled = true;
                const sizeLabel = document.getElementById(`siz${DitemSize[i]}`);
                sizeLabel.classList.replace('size', 'size1');
				document.querySelectorAll("#myBtn12")[0].style.display= "none";
				document.querySelectorAll(".qtyAviBal")[0].innerHTML ="Out of stock";
            }
        }
    })

// Fetch data from the Google Apps Script web app
fetch('https://script.google.com/macros/s/AKfycbxpIgUJoXhnX9ZzdIrEGMZgr_7wDlRZUhAQXwKa_3J0F1XdVWEO4D_9IzetqNyropl8/exec') // Replace with your web app URL
    .then(response => response.text())
    .then(data => {
        const gtB = document.querySelector(".contant-detaiels-here").innerHTML;
        const checking = data.split('Available Qtty"')[1].replaceAll("],[", "/").replaceAll(/"/g, " ").replace("/", "").replaceAll(" ", "");

        const Ditemcode = document.querySelector(".modelNor").textContent;
        const DitemColor = document.querySelectorAll("#colorDisplayBew")[0].innerHTML.toLowerCase();
        const DitemSize = gtB.split("Size-[")[1].split("]")[0].replaceAll("(1)", "").split(" ");

        // Iterate through sizes and check stock
        for (let i = 0; i < DitemSize.length; i++) {
            const fullForm = Ditemcode + "-" + DitemSize[i] + "," + DitemColor + ",";
            const checkFulC = checking.split(fullForm)[1].split("/")[0].split(",");
            const finQ = checkFulC[3];
            const getSizD = "siz" + DitemSize[i] + "1";

            if (checkFulC && finQ > 0) {
                const sizeLabel = document.getElementById(`siz${DitemSize[i]}`);
                sizeLabel.click();
				document.querySelectorAll("#myBtn12")[0].style.display= "";
				document.querySelectorAll(".qtyAviBal")[0].innerHTML ="1 Pieces available";
                break;
               
            }
        }
    })

    
    .catch(error => {
        console.error('Error:', error);
    });

        }

        document.addEventListener("DOMContentLoaded", getUserInfoz);
