document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('nextForm').style.display = 'block';
})