function createBubbles() {
    const body = document.querySelector('body');
    for(let i = 0; i < 10; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'floating-bubble';
        bubble.style.width = Math.random() * 100 + 50 + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.left = Math.random() * window.innerWidth + 'px';
        bubble.style.top = Math.random() * window.innerHeight + 'px';
        bubble.style.animationDuration = (Math.random() * 10 + 5) + 's';
        bubble.style.animationDelay = (Math.random() * 5) + 's';
        body.appendChild(bubble);
    }
}

// Password toggle
const passwordToggle = document.querySelector('.password-toggle');
const passwordInput = document.querySelector('#password');

// passwordToggle.addEventListener('click', () => {
//     const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
//     passwordInput.setAttribute('type', type);
//     passwordToggle.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
// });

const strengthMeter = document.querySelector('.strength-meter');
const strengthBar = strengthMeter.querySelector('div');

passwordInput.addEventListener('focus', () => {
    strengthMeter.style.display = 'block';
});

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    let strength = 0;
    
    if(value.length >= 8) strength += 25;
    if(value.match(/[A-Z]/)) strength += 25;
    if(value.match(/[0-9]/)) strength += 25;
    if(value.match(/[^A-Za-z0-9]/)) strength += 25;

    strengthBar.style.width = strength + '%';
    
    if(strength <= 25) {
        strengthBar.style.background = '#ef4444';
    } else if(strength <= 50) {
        strengthBar.style.background = '#f59e0b';
    } else if(strength <= 75) {
        strengthBar.style.background = '#10b981';
    } else {
        strengthBar.style.background = '#6366f1';
    }
});

// Form submission animation
const loginForm = document.querySelector('#loginForm');
const successAnimation = document.querySelector('.success-animation');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    successAnimation.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Create success message
    const message = document.createElement('div');
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.background = 'white';
    message.style.padding = '2rem';
    message.style.borderRadius = '1rem';
    message.style.animation = 'success 0.5s ease forwards';
    message.innerHTML = `
        <h3 style="color: #6366f1; margin-bottom: 1rem;">เข้าสู่ระบบสำเร็จ! 🎉</h3>
        <p style="color: #6b7280;">กำลังนำคุณไปยังหน้าหลัก...</p>
    `;
    
    successAnimation.appendChild(message);

    // Reset form after animation
    setTimeout(() => {
        successAnimation.style.display = 'none';
        successAnimation.innerHTML = '';
        loginForm.reset();
        document.body.style.overflow = 'auto';
    }, 3000);
});

// Input animations
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.parentElement.querySelector('label').style.color = '#6366f1';
    });

    input.addEventListener('blur', () => {
        input.parentElement.parentElement.querySelector('label').style.color = '#4b5563';
    });
});

// Initialize bubbles
createBubbles();