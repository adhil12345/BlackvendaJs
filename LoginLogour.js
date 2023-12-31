  // Check if the user is already logged in (for example, using a token or session) from local storage
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';

    if (userLoggedIn) {
        document.getElementById('sign-out-button').style.display = 'block';
        document.querySelectorAll("#singInNew")[0].style.display = "none";
        document.querySelectorAll("#singOutNew")[0].style.display = "";
        document.getElementById('customer-name').textContent = localStorage.getItem('userName');
        document.getElementById('userNm').textContent = localStorage.getItem('userName');
        document.getElementById('userEm').textContent = localStorage.getItem('userEmail');
        document.querySelectorAll("#nameInput")[0].value = localStorage.getItem('userName');
        document.querySelectorAll("#emailInput")[0].value = localStorage.getItem('userEmail');
        document.querySelectorAll(".loginForReBut")[0].style.display = "none";
        document.querySelectorAll(".logForRe")[0].style.display = "";
        document.querySelectorAll(".shippingCartLoin")[0].style.display = "none";
        document.querySelectorAll(".shippingCartDet")[0].style.display = "";
        document.getElementById("nameInput").readOnly = true;
        document.getElementById("emailInput").readOnly = true;
        setTimeout(function () {
            signOut(); // Trigger the logout function after 3 minutes
        }, 300000);
    }

    // Function to switch between Login and Signup tabs
    function showTab(tabName) {
        const loginTab = document.getElementById('login-tab');
        const signupTab = document.getElementById('signup-tab');
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        const titleHed = document.querySelectorAll(".signHead")[0];

        if (tabName === 'login') {
            loginTab.classList.add('active-tab');
            signupTab.classList.remove('active-tab');
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
            titleHed.innerText = "Login";

        } else {
            signupTab.classList.add('active-tab');
            loginTab.classList.remove('active-tab');
            signupForm.style.display = 'block';
            loginForm.style.display = 'none';
            titleHed.innerText = "Signup";

        }
    }

    // Function to handle login
    async function login() {
        const loginButton = document.querySelector("#login-form button");
        const email = document.getElementById('login-email-input').value;
        const password = document.getElementById('login-password-input').value;
        const rememberMe = document.getElementById('remember-me-input').checked;

        // Add client-side validation
        if (!email || !password) {
            document.getElementById('error-message').textContent = 'Please fill in all fields.';
            return;
        } else {
            loginButton.innerHTML = "Loading...";
        }

        const response = await postData('login', { email, password, rememberMe });

        if (response.startsWith('Login successful,')) {
            // Split the response to get the user's name and email
            const [, userData] = response.split(',');
            const [userName, userEmail] = userData.split(';');
            const previousUrl = document.referrer;

            localStorage.setItem('userLoggedIn', 'true');
            localStorage.setItem('userName', userName);
            localStorage.setItem('userEmail', userEmail); // Store the user's email
            document.getElementById('customer-name').textContent = userName;
            document.getElementById('customerNameDisplay').textContent = 'Successfully signed in as ' + userName + ' 🎉🎉🎉';
            window.location = previousUrl;
            document.querySelectorAll("#singInNew")[0].style.display = "none";
            document.getElementById('sign-out-button').style.display = 'block';
            document.querySelectorAll("#singOutNew")[0].style.display = "block";
            document.getElementById('userEm').textContent = userEmail;
            document.getElementById('userNm').textContent = userName;
            document.getElementById('error-message').textContent = '';
            document.querySelectorAll(".mainLogandSing")[0].style.display = "none";
        } else {
            document.getElementById('error-message').textContent = response;
        }
    }

    // Function to handle signup
    async function signup() {
        const name = document.getElementById('signup-name-input').value;
        const email = document.getElementById('signup-email-input').value;
        const password = document.getElementById('signup-password-input').value;

        // Add client-side validation
        if (!name || !email || !password) {
            document.getElementById('error-message').textContent = 'Please fill in all fields.';
            return;
        }

        const response = await postData('signup', { name, email, password });

        if (response === 'Signup successful') {
            document.getElementById('error-message').textContent = 'Signup successful';
            setTimeout(function () {
                document.getElementById('error-message').textContent = 'Please login...';
            }, 5000); // 5000 milliseconds = 5 sec
            setTimeout(function () {
                document.getElementById('login-tab').click(); // Switch to login after 5 sec minutes
            }, 5000); // 5000 milliseconds = 5 sec
        } else {
            document.getElementById('error-message').textContent = response;
        }
    }

    // Function to handle logout
    function signOut() {
        localStorage.setItem('userLoggedIn', 'false');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail'); // Remove the user's email
        document.getElementById('sign-out-button').style.display = 'none';
        document.getElementById('customer-name').textContent = '';
        document.querySelectorAll("#singInNew")[0].style.display = "";
        document.querySelectorAll("#singOutNew")[0].style.display = "none";
        window.location = "https://www.blackvenda.lk/";
    }

    // Define the postData function here
    async function postData(action, data) {
        const googleScriptURL = 'https://script.google.com/macros/s/AKfycbxfj0zQI3elLJNIWVSWplOY3gYTAVUnpdrO_tVZ6NlRrrsumDTlSpCUJx9XGTuczCXvHA/exec';

        const url = googleScriptURL;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify({ action, ...data }),
        });

        if (response.status === 200) {
            return response.text();
        } else {
            return 'Network error';
        }
    }

    // Show the login tab by default
    showTab('login');
