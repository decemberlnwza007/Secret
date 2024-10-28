// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
    cursorDot.style.transform = 'scale(0.5)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursorDot.style.transform = 'scale(1)';
});

// Hover effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .theme-switch');
interactiveElements.forEach(el => {
    el.addEventListener('mouseover', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.borderColor = 'var(--secondary)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = 'var(--secondary)';
    });
});

// Logo text animation
// Logo text animation
const text = "<Phongsakorn />";
const logoText = document.querySelector('.logo-text');
let idx = 0;
let isDeleting = false;
let interval = 200;

function typeText() {
    const currentText = text.substring(0, idx);
    logoText.textContent = currentText + (isDeleting ? '' : '|');

    // ตรวจสอบว่ากำลังพิมพ์อยู่หรือไม่
    if (!isDeleting && idx === text.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && idx === 0) {
        isDeleting = false;
    }

    idx = isDeleting ? idx - 1 : idx + 1;
    interval = isDeleting ? 100 : 200;

    // ตั้งค่า timeout สำหรับการพิมพ์
    setTimeout(typeText, interval);
}

typeText();

// Enhanced scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 50) {
        navbar.classList.add('scrolled'); // ปรับเพิ่ม class เมื่อลง
    } else {
        navbar.classList.remove('scrolled'); // ลบ class เมื่อลากขึ้น
    }
    lastScroll = currentScroll;
});


// Active link handling with smooth scroll
const navLinks = document.querySelectorAll('.nav-item');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinksContainer = document.querySelector('.nav-links');
const socialLinksContainer = document.querySelector('.social-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinksContainer.classList.navLinksContainer.classList.toggle('active');
    socialLinksContainer.classList.toggle('active');
});

const themeSwitch = document.querySelector('.theme-switch');

// themeSwitch.addEventListener('click', () => {
//     document.body.classList.toggle('dark');
//     const isDark = document.body.classList.contains('dark');
//     themeSwitch.textContent = isDark ? '🌙' : '🌞';
// })

