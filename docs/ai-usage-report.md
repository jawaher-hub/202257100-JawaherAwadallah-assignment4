# AI Usage Report: Advanced Functionality Development

## 1. Tools Used & Use Cases
During the development of Assignment 3, I utilized ChatGPT and Gemini as my primary architectural consultants. My goal was to move beyond basic code generation and use these tools for complex problem solving. Specifically, I used these models to brainstorm the state management logic required for the GitHub repository expansion feature.  

I also used GitHub Copilot within my code editor to suggest initial boilerplate for the JavaScript fetch parameters. By combining these tools.



## 2. Benefits & Challenges

### Benefits
The primary benefit of using AI was the significant reduction in **Debugging Time**. While implementing the GitHub API, I initially struggled with asynchronous timing the *"View More"* button would occasionally appear before the data was ready. By discussing execution order with Gemini, I learned how to properly sequence function calls.


Additionally, AI helped bridge the gap between **Functional** and **Beautiful** code by suggesting CSS keyframe logic that I would not have developed as quickly on my own.

### Challenges & Limitations
One major challenge was **Context**. At one point, ChatGPT suggested using jQuery to handle the API fetch.

I also faced layout issues; a CSS snippet for the expansion caused the footer to *"snap or jump"* upward. It required several rounds of manual adjustments to flexbox properties to ensure a smooth expansion.

---

## 3. Learning Outcomes
Using AI for this assignment was a valuable learning experience beyond simple coding:


- **State Logic**: Implementing the `isExpanded` variable showed how a single boolean can control the entire user interface behavior.  
- **Staggered Animation Concepts**: I learned how `animation-delay` works mathematically. Using index-based delay (`index * 0.1s`) creates smooth and professional animations.

---

## 4. Responsible Use & Modifications
To ensure academic integrity and originality, I treated every AI suggestion as a **draft**. For example, in the GitHub API integration, the AI suggested a generic card layout, but I completely rewrote the template literal, to master it in future.

I also conducted a manual security audit, I verified that no insecure practices were included. I ensured that:
All user input from the contact form was sanitized using `.trim()` and regular expressions before processing.  

The lines of JavaScript in this repository was reviewed, manually typed and slightly changed based on my preference, and tested against cases documented in my technical report.

## 5. Prompts and responses
To demonstrate the iterative nature of this project, I have documented the specific interaction where I had to correct the AI's logic to fit my specific UI requirements.

- Implementing the "View More" Toggle. Prompt: "I have a list of GitHub repos fetched from an API stored in an array called allRepos. I want to show only 2 by default, and when I click a button, I want it to expand to show all of them. How do I do this without fetching the data again?" AI Response (Simplified): The AI suggested using display: none on the extra items. Then i asked for a follow-up: "Can I use .slice() instead to keep the DOM clean?" Refinement: The AI then provided a logic snippet using .slice(0, 2). I manually adapted this into my renderRepos(isExpanded) function, ensuring that the button text also toggled between "View more" and "View less" to maintain clear UX.

- Error Handling for the API. "What happens if the GitHub API is down? My page just shows 'Loading...' forever. Give me a catch block that shows a red error message." AI Response: The AI provided a `console.log(error)`. My implementation after another suggestion: I created a CSS class `.status-message.error` and updated the JavaScript to inject the text "Unable to load GitHub projects at this time" into the `github-projects` div. This ensured that even in a failure state, the User Experience remained informative.

