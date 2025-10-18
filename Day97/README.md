# 📅 Day 97 — #100DaysOfCode

### 🔍 Theme: Class Components, Testing & the React Ecosystem

---

## ✅ What I Learned / Did

- Completed the **Class Components** section in _The Odin Project_ — explored syntax and behavior of class-based components (`class MyComponent extends React.Component`).
- Learned about **Component Lifecycle Methods**: `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` — understanding mounting, updating, and unmounting phases.
- Covered **React Testing**:
  - Introduction to React testing fundamentals.
  - **Mocking Callbacks and Components** to isolate behavior and test components in separation.
- Explored **The React Ecosystem**:
  - **Type Checking with PropTypes** for runtime validation.
  - **React Router** for client-side routing and navigation.
  - **Fetching Data in React** and handling loading/error states effectively.
  - **Styling React Applications** using different approaches (CSS modules, styled-components, etc.).
- Practiced integrating all of the above — combining routing, prop validation, lifecycle methods, and tests in small React components.

---

## 💡 Key Takeaways

- **Class Components** provide a deep understanding of how React manages state and lifecycle — essential for maintaining older projects.
- Lifecycle highlights:
  - `componentDidMount()` → good for API calls or subscriptions after render.
  - `componentDidUpdate()` → responds to prop/state changes; requires careful condition checks to prevent loops.
  - `componentWillUnmount()` → handles cleanup tasks (e.g., clearing intervals or listeners).
- **PropTypes** add an extra layer of reliability through runtime type checking.
- **React Router** powers dynamic single-page navigation with nested routes and parameters.
- **Data Fetching**: manage loading, error, and success states cleanly for a better UX.
- **Styling React** can be flexible — pick one consistent approach to maintain code clarity.
- **Testing** ensures code reliability; mocking helps test without real dependencies.
- Mastering class components improves understanding of how **hooks** map to lifecycle logic.

---

**Built with class-based wisdom and functional curiosity.**
