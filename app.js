// JS for welcome button alert and background color change on photo hover

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing JavaScript...');
    
    // Show alert on button click
    const welcomeBtn = document.getElementById('welcomeBtn');
    if (welcomeBtn) {
        console.log('Welcome button found');
        welcomeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Hello, welcome to my page!');
        });
        
        // Also add onclick as fallback
        welcomeBtn.onclick = function() {
            alert('Hello, welcome to my page!');
        };
    } else {
        console.error('Welcome button not found');
    }

    // Change background color when hovering profile image
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        console.log('Profile image found');
        profileImage.addEventListener('mouseenter', function() {
            document.body.classList.add('bg-alt');
        });
        profileImage.addEventListener('mouseleave', function() {
            document.body.classList.remove('bg-alt');
        });
    } else {
        console.error('Profile image not found');
    }
});

// Additional fallback to ensure button works
window.onload = function() {
    const btn = document.getElementById('welcomeBtn');
    if (btn && !btn.hasAttribute('data-initialized')) {
        btn.setAttribute('data-initialized', 'true');
        btn.onclick = function() {
            alert('Hello, welcome to my page!');
        };
    }
};