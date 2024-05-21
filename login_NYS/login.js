document.getElementById('showSignup').addEventListener('click', function() {
    document.querySelector('.login-container').classList.add('fadeOutRight');
    setTimeout(function() {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.signup-container').style.display = 'block';
        document.querySelector('.signup-container').classList.remove('fadeOutLeft');
        document.querySelector('.signup-container').classList.add('fadeInLeft');
    }, 500);
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.querySelector('.signup-container').classList.add('fadeOutLeft');
    setTimeout(function() {
        document.querySelector('.signup-container').style.display = 'none';
        document.querySelector('.login-container').style.display = 'block';
        document.querySelector('.login-container').classList.remove('fadeOutRight');
        document.querySelector('.login-container').classList.add('fadeInRight');
    }, 500);
});

// JavaScript to handle placeholder text on focus and blur
document.querySelectorAll('.form-group input').forEach(input => {
    input.addEventListener('focus', function() {
        this.setAttribute('placeholder', `Enter your ${this.name}`);
    });
    input.addEventListener('blur', function() {
        this.removeAttribute('placeholder');
    });
});