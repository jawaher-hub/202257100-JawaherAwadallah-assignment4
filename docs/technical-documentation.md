# Technical Documentation: Advanced Portfolio Functionality

## 1. System Architecture & Design
This project is built using a decoupled architecture where the UI (HTML/CSS) is independent of the data fetching logic (JavaScript). The application leverages the **Fetch API** to interact with the GitHub API. 

### 1.1 Asynchronous Data Flow
To ensure the user interface remains responsive while waiting for external data, I implemented an `async/await` pattern. 
- **Execution Flow:** On `DOMContentLoaded`, the script triggers `fetchGitHubRepos()`.
- **State Management:** The fetched data is stored in a global `allRepos` array. This allows the "View More" logic to manipulate the view without making redundant network requests, optimizing performance.

## 2. Feature Implementation Details

### 2.1 GitHub API Integration & Error Handling
The integration uses a `try...catch` block to handle network uncertainties.
- **Success Case:** The JSON response is parsed and passed to the `renderRepos` function.
- **Error Case:** If the API is unreachable, the catch block injects a user-friendly error message into the DOM using the `.status-message.error` class.

### 2.2 Complex Expansion Logic
The "View More/Less" feature demonstrates complex logic by managing a boolean state (`isExpanded`).
- **Logic:** I used the `.slice()` method to toggle between a "collapsed" view (first 2 items) and an "expanded" view (full array).
- **UI Interaction:** The button dynamically updates its `textContent` based on the current state.

### 2.3 Perceived Performance & Animations
To solve the issue of "layout jumping" during expansion, I utilized CSS Keyframes.
- **Opacity & Transform:** Each new project card is assigned a `.fade-in` class.
- **Staggered Delay:** I calculated a dynamic `animationDelay` based on the element's index, creating a professional effect that guides the user's eye.

## 3. Testing Methodology (Manual Audit)

Instead of automated testing, I conducted a series of manual tests to ensure the application's stability and reliability.

### 3.1 API Connectivity Testing
I tested the GitHub integration by simulating three different network environments:
- **Optimal Connection:** Verified that all repositories load within 2 seconds with correct names.
- **Disconnected State:** I disabled the network and refreshed the page. I verified that the loading text was replaced by the red Failed to load GitHub .. error message, confirming the `catch` block functions correctly.
- **Empty State:** I pointed the fetch URL to an account with zero repositories. I verified that the "View More" button correctly remained hidden (`display: none`), proving the conditional `if (allRepos.length > 2)` is accurate.

### 3.2 UI/UX Responsiveness Testing
- **Visual Feedback:** I tested the contact form by entering an incorrectly formatted email ("test@com"). I confirmed that the RegEx validation blocked the submission and displayed a validation error instantly.
- **Theme Persistence:** I toggled to Dark Mode, performed a hard refresh of the browser, and verified that the `localStorage` key `theme: 'dark'` was retrieved, keeping the UI consistent without a "flash" of white.
- **Smoothness Check:** I repeatedly clicked the "View More" button to ensure the `fade-in` animation triggered on every render. I confirmed that the staggered delay creates a smooth transition without any sudden jumping.

## 4. Code Snippet Highlight: Expansion Logic
The following logic handles the primary complexity of the advanced project section:

```javascript
function renderRepos(isExpanded) {
    githubContainer.innerHTML = '';
    const reposToShow = isExpanded ? allRepos : allRepos.slice(0, 2);

    reposToShow.forEach((repo, index) => {
        const repoCard = document.createElement('div');
        repoCard.className = 'project tech show fade-in';
        repoCard.style.animationDelay = `${index * 0.1}s`;
        repoCard.innerHTML = `<h3>${repo.name}</h3>...`;
        githubContainer.appendChild(repoCard);
    });
}