
#  Contributing to NEET Battleground (NBG)

Thank you for your interest in contributing to **NEET Battleground**, an interactive platform designed to make NEET preparation fun and engaging through multiplayer games!

We welcome all contributions—whether you're fixing bugs, adding features, improving documentation, or enhancing UI. Let's make NEET learning better together 

---

## Project Context

NEET Battleground (NBG) is a multiplayer learning platform for NEET aspirants featuring:
- **MCQ Quiz Battles** – Timed, competitive quizzes with instant scoring and explanations.
- **Drawing Challenge** – A medical pictionary-style game to visualize NEET concepts.
- **Real-time Multiplayer** – Play with friends or random students, complete with chat and live scoring.

---

## Tech Stack

This project is built using:
- ⚛️ **React 18** with **TypeScript**
- 🎨 **Tailwind CSS** for styling
- 🔌 **Socket.IO** for real-time communication
- 🧠 **Zustand** for state management
- 🧭 **React Router** for navigation

---


## Project Structure Overview

```
/components   → Reusable UI components
/pages        → Application routes and pages
/services     → API and Socket.IO logic
/store        → State management with Zustand
/types        → Socket and API services
```

---


## Local Development Setup

1. **Fork the repository** to your GitHub account.

2. **Clone your forked repository**:
   ```bash
   git clone https://github.com/<your-username>/neet-battleground.git
   cd neet-battleground
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173` to view the app in your browser.

---

##  Contribution Workflow

### 1. Create a Branch
```bash
git checkout -b <type>/<short-description>
```
Examples:
- `fix/socket-reconnect`
- `feat/add-timer-to-drawing`
- `docs/update-readme`

### 2. Make Your Changes

### 3. Commit Your Work
git add .
git commit -m "Add: Your descriptive commit message"

Use clear, descriptive commit messages. Prefer this format:
```
<type>: <short summary>
```
Examples:
- `fix: resolve socket disconnection issue`
- `docs: add setup instructions to README`
- `feat: implement user kick feature in quiz rooms`

### 4. Push Your Changes
```bash
git push origin <your-branch-name>
```

### 5. Submit a Pull Request
- Go to the GitHub repo and open a **Pull Request (PR)**.
- Include a short summary and **reference any related issue** (e.g., `Closes #12`).
- Ensure your PR passes all checks (formatting, linter, build, etc.).

---

## Contribution Guidelines

- Keep your commits atomic and meaningful
- Follow the existing coding style (indentation, naming, etc.)
- Document your code if needed
- Be respectful in comments and PR discussions

---

##  Good First Contributions

- Fix typos or broken links in documentation
- Add comments to complex code blocks
- Create small UI improvements
- Write test cases for existing components

---

## Need Help?

If you get stuck:
- Browse the existing issues or open a new one.
- Ask questions in the discussion tab (if enabled).

---

## License

By contributing, you agree that your code will be licensed under the [MIT License](LICENSE).

---

Thank you for helping improve NEET Battleground! Your contributions make a difference 
