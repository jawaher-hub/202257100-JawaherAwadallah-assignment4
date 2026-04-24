# AI Usage Report

## 1. Tools Used & Use Cases
Throughout the development of this portfolio, I utilized a multi-tool AI strategy, choosing each based on its specific strengths in the software development lifecycle:

* **Gemini:** Acted as my primary architectural consultant. I used this for complex logic, such as debugging the asynchronous GitHub Fetch API calls, managing `localStorage` state transitions, and structuring the "View More/Less" expansion logic.
* **ChatGPT:** Used for brainstorming. I consulted this tool for initial code architecture, such as how to implement data attribute filtering in JavaScript and for refining the regex patterns used in contact form validation.
* **Lovable:** Used specifically for CSS/UI refinement. This tool helped me translate my design intent into responsive CSS, particularly in managing flexbox containers, centering elements, and ensuring that my "Dark Mode" styling was applied consistently across all dynamic components.
* **Claude:** Served as my technical editor. I used this to help in my documentation, ensuring that the language used to describe my architecture and "Technical deep dive" was professional and precise.

---

## 2. Benefits & Challenges

### Benefits
The primary benefit was the ability to rapidly iterate through scenarios regarding code architecture. For example, during the development of the GitHub API integration, I was able to test different approaches to state management (storing the entire repo array vs. fetching on demand) without needing to write out every variation manually. 

Furthermore, using **Lovable** allowed me to bridge the gap between "functional code" and "polished UI." Instead of spending hours adjusting padding/margin values manually, I could articulate the desired layout behavior, and the AI generated the structural CSS, allowing me to focus on the performance and logic of the underlying JavaScript.

### Challenges & Limitations
The most significant limitation I encountered was "Context Drift." AI tools often suggested bloated libraries (like jQuery) or older DOM manipulation techniques that contradicted my goal of keeping the project lightweight and dependency free. 

I also faced "Layout Instability." AI-generated CSS for the repository expansion occasionally caused the footer to "snap" upward because the height of the `github-projects` container was not being calculated dynamically and for the components to not be placed at correct positions on smaller screens. I had to manually override these suggestions by implementing CSS keyframe animations and calculating precise transition delays. Relying on AI for a "final solution" was not an option; I had to treat every suggestion as a draft that required rigorous testing against my actual environment.

---

## 3. Learning Outcomes
This assignment significantly deepened my software engineering workflow:

* **Asynchronous Mastery:** Moving from basic scripts to mastering `async/await` and the Fetch API allowed me to handle content without blocking the main browser thread.
* **State Logic & Persistence:** By implementing `localStorage` and `isExpanded` toggles, I learned how to track user preferences effectively, ensuring the UI remains "intelligent" across multiple visits.
* **Perceived Performance:** Through the staggered animation logic, I learned that UX is as much about how elements appear as it is about what appears. The animation delay (`index * 0.1s`) creates a professional "flow" that makes the data fetching process feel intentional and polished.

---

## 4. Responsible Use & Modifications
Academic integrity was my priority. I treated AI as a collaborative mentor.

* **Important fix:** I implemented `novalidate` to disable default browser handling and wrote my own JavaScript logic to sanitize all user inputs using `.trim()` and Regular Expression patterns.
* **Manual Refinement:** When the AI suggested basic repository expansion logic, I audited the performance and replaced the suggested approach with `Array.prototype.slice()` to ensure memory efficiency.
---

## 5. Development Workflow 

### API Logic & Asynchronous Challenges
I engaged Gemini to design the logic for my GitHub repository section. When asked how to show two items by default and expand to show more, the AI suggested hiding elements via CSS. I identified this as a DOM-bloat issue and requested a follow-up that used `slice()`. I then manually handled the "Empty/Failure" state by creating a red-styled `.status-message.error` class, ensuring that even if the API was down, the user interface remained professional and informative.

### UI Styling & Layout
I utilized Lovable to troubleshoot my project filtering. The AI suggested the attribute filtering logic (`data-filter` vs `data-category`), but I had to manually refine the class toggling logic to ensure that animations triggered smoothly. I also faced a horizontal overflow issue caused by the theme toggle, I adjusted the flexbox layout in the header to ensure that elements remain centered across all viewports without causing layout breakage.

### Form Feedback Persistence
I collaborated with ChatGPT to create the contact form's feedback loop. The AI suggested the basic `submit` listener, but I implemented the `setTimeout()` delay and the `localStorage` logic. This ensures a persistent, personalized experience ("Welcome back, [Name]!") that the initial AI template lacked. I verified this by clearing my local storage and testing the user-name capture flow multiple times.
