# Technical Documentation: Personal Portfolio 

## 1. Project Overview & Architecture
This web application is a fully responsive, data driven portfolio designed for professional project showcase. It employs a decoupled architecture, separating the Document Object Model (DOM) structure from the business logic, which facilitates maintainable and scalable code.

### 1.1 Technical Stack
* **Frontend:** HTML, CSS.
* **Logic:** JavaScript.
* **API Integration:** GitHub REST API v3.
* **Storage:** `localStorage` API for state persistence.
* **Deployment:** GitHub Pages (static).

---

## 2. Technical Implementation Details

### 2.1 Asynchronous Data Flow (GitHub API)
The application utilizes the `fetch` API to retrieve repository data dynamically.
* **Implementation:** The `fetchGitHubRepos()` function is declared as an `async` function. By using `await`, the code handles the network request as a non-blocking operation, ensuring the UI remains responsive while the data is in transit.
* **Global State Management:** Fetched repositories are stored in the `allRepos` array. This global state is accessed by the `renderRepos()` function, which dynamically modifies the `innerHTML` of the `#github-projects` container. 
* **Error Handling:** The implementation uses a `try...catch` block to gracefully handle network errors, injecting a user-friendly status message into the UI if the API request fails.


### 2.2 Dynamic UI State Management
* **View Expansion Logic:** The "View More/Less" functionality employs a state based approach. The `renderRepos(isExpanded)` function uses the JavaScript `Array.prototype.slice()` method to determine which subset of data to render based on the current state.
* **Visitor Engagement:** A `setInterval()` function is used to create a session timer that updates every 1000ms, injecting a live-updating string into the DOM to track user session duration in minutes and seconds.

### 2.3 Form Sanitization & Validation
To maintain high data integrity, the contact form uses a custom validation layer rather than relying on browser defaults.
* **Attribute Control:** The `<form>` element includes the `novalidate` attribute to suppress default browser pop ups.
* **Validation Logic:** JavaScript intercepts the `submit` event via `e.preventDefault()`. The input values are processed through `.trim()` to remove extraneous whitespace.
* **Regex Filtering:** A Regular Expression (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) is used to validate the email string pattern, providing an immediate feedback loop through a dynamic `status-message` element.


---

## 3. Persistent State & Performance
* **LocalStorage Integration:** The application persists user preferences specifically the Dark/Light theme mode and the visitor's name across sessions. Upon `DOMContentLoaded`, the script performs a lookup in the browser's `localStorage` to reapply the user's previous visual or personalized settings.
* **Lightweight Performance:** No external libraries were used. By writing custom logic for DOM manipulation and filtering, the page load time is optimized, and the overall bundle size is minimal.

---

## 4. Challenges & Resolutions

| Challenge | Resolution |
| :--- | :--- |
| **Browser Native Validation** | Implemented `novalidate` on the form to allow for custom, CSS styled error feedback instead of disruptive browser pop ups. |
| **Layout Instability** | Resolved potential layout shifts during API renders by ensuring the container maintains height and consistent padding/margin rules. |
| **State Sync** | Synchronized theme toggles by creating a centralized event listener that updates `localStorage` whenever the `<body>` class changes. |

---

## 5. Innovation Highlights
* **Staggered DOM Injection:** Rather than rendering all GitHub repositories at once, the logic uses an index-based `animationDelay` for smooth fade-in transitions.
* **User Feedback:** The form submission process provides a multi stage UI state: "Sending..." $\rightarrow$ "Message sent successfully! I'll get back to you ASAP", ensuring the user is never left in an ambiguous state.

---

## 6. Future Roadmap
1.  **Database Integration:** Migration from `localStorage` to a server side storage solution for persistent contact message collection.
2.  **Modular CSS:** Transitioning to CSS Variables for easier theme maintenance and global color palette updates.
3.  **SEO Optimization:** Implementation of semantic meta-tags to enhance search engine visibility.

***

### 🔗 Live Deployment
* **Access the application here:** [https://jawaher-hub.github.io/202257100-JawaherAwadallah-assignment4/](https://jawaher-hub.github.io/202257100-JawaherAwadallah-assignment4/)
