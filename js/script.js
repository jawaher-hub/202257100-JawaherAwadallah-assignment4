// theme toggle with LocalStorage
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
// Check for saved theme of user
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    // Update emojie and save preference
    if (body.classList.contains('dark')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // remove class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // add class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projects.forEach(project => {
            project.classList.remove('show');
            
            if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
                project.classList.remove('hide');
                project.classList.add('show');
            } else {
                project.classList.add('hide');
            }
        });
    });
});
// storage of greeting
const greetingArea = document.getElementById('greeting-area');
const savedName = localStorage.getItem('visitorName');
if (savedName) {
    greetingArea.textContent = `Welcome back, ${savedName}!`;
} else {
    greetingArea.textContent = "Welcome to my portfolio!";
}
// error and feedback of form
const contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop submission

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        statusMsg.textContent = "Please fill in all fields (•◡•)";
        statusMsg.className = "status-message error";
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        statusMsg.textContent = "Please enter a valid email address!";
        statusMsg.className = "status-message error";
        return;
    }
    // sending data
    statusMsg.textContent = "Sending...";
    statusMsg.className = "status-message";

    setTimeout(() => {
        // Save name to local storage for next visit
        localStorage.setItem('visitorName', nameInput.value.trim());

        // success Feedback
        statusMsg.textContent = "Message sent successfully! I'll get back to you ASAP";
        statusMsg.className = "status-message success";
        // clear form
        contactForm.reset();
    }, 2000); 
});
// GitHub API  
let allRepos = []; // Store repos 
const githubBase = document.getElementById('github-projects');
const expandBtn = document.getElementById('expand-btn');

async function fetchGitHubRepos() {
    const username = 'jawaher-hub'; 
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);        
        allRepos = await response.json();
        renderRepos(false); // Initial: collapsed
        if (allRepos.length > 2) {
            expandBtn.style.display = 'inline-block';
        }
    } catch (error) {
        githubBase.innerHTML = `<p class="status-message error">Failed to load GitHub info.</p>`;
    }
}

function renderRepos(isExpanded) {
    githubBase.innerHTML = '';
    
    // If not expanded, only show first 2. If expanded, show all.
    const reposToShow = isExpanded ? allRepos : allRepos.slice(0, 2);

    reposToShow.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.className = 'project tech show';
        repoCard.innerHTML = `
            <h3>${repo.name}</h3>
            <a href="${repo.html_url}" target="_blank" style="color: #428ff2; text-decoration: none; font-weight: bold;">Link</a>
        `;
        githubBase.appendChild(repoCard);
    });
}

// button click 
expandBtn.addEventListener('click', () => {
    const isExpanding = expandBtn.textContent === 'View more';
    renderRepos(isExpanding);
    expandBtn.textContent = isExpanding ? 'View less' : 'View more';
});

// Call the function
fetchGitHubRepos();
// session Timer 
let secondsActive = 0;
const timerDisplay = document.createElement('div');
timerDisplay.id = 'session-timer';
timerDisplay.style = 'text-align: center; font-size: 0.9em; color: #6d5da8; margin-bottom: 10px;';
document.body.prepend(timerDisplay);

setInterval(() => {
    secondsActive++;
    const mins = Math.floor(secondsActive/60);
    const secs = secondsActive % 60;
    timerDisplay.textContent = `You've been exploring for: ${mins}m ${secs}s ᯓ★`;
}, 1000);

//  API call 
window.addEventListener('DOMContentLoaded', fetchGitHubRepos);