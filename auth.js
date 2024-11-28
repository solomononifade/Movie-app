// This function handles the sign-up logic
function handleSignUp(event) {
    event.preventDefault();  // Prevent form from submitting and refreshing the page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate form fields
    if (email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Save the user's email and password in localStorage (for simplicity)
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Redirect to login page after successful sign-up
    alert('Account created successfully! Please log in.');
    window.location.href = "login.html"; // Redirect to login page
}

// This function handles the login logic
function handleLogin(event) {
    event.preventDefault();  // Prevent form from submitting and refreshing the page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get the stored email and password from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Validate login credentials
    if (email === storedEmail && password === storedPassword) {
        // Set login status to true and redirect to the main page
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login successful!');
        window.location.href = "index.html"; // Redirect to the main page
    } else {
        alert('Invalid email or password!');
    }
}

// Check if user is already logged in (redirect to index page if true)
if (localStorage.getItem('isLoggedIn') === 'true') {
    window.location.href = "index.html"; // Redirect to main page
}

// Set event listeners for both sign-up and login forms
window.onload = function() {
    // Check if the current page is the sign-up page
    if (document.getElementById('signupForm')) {
        document.getElementById('signupForm').addEventListener('submit', handleSignUp);
    }

    // Check if the current page is the login page
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', handleLogin);
    }
};