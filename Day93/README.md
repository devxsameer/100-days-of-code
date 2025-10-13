# 📅 Day 93 — #100DaysOfCode

### 🔍 Theme: Side Effects in React

---

## ✅ What I Learned / Did

- Completed the **How to Deal With Side Effects** lesson in The Odin Project’s React curriculum.
- Learned when and how to use the **`useEffect`** hook to perform side effects in React components (e.g. data fetching, subscriptions, DOM updates).
- Understood common pitfalls:
  - **Infinite loops** caused by missing or incorrect dependency arrays
  - Knowing when an effect is necessary (or when you _don’t_ need it)
- Reflected on component lifecycle and how React under the hood handles mounting, updating, and cleanup with effects.

---

## 💡 Key Takeaways

- An **effect** is any operation that interacts with the outside world (e.g. fetch, setTimeout, event listeners).
- `useEffect(() => { … }, [dependencies])` allows you to manage side effects in a controlled way.
- Always specify a **dependency array** correctly — mismatches lead to repeated runs or stale data.
- Sometimes you don’t need an effect — pure render logic without side effects is safer and simpler.
- Components unmounting require cleanup logic (return a cleanup function from `useEffect`) to avoid memory leaks.

---

## 🔭 What’s Next

- Apply side effects in my React projects: fetching data, subscriptions, etc.
- Practice structuring effects and cleanup logic in components.
- Continue further React lessons — e.g. `useEffect` dependencies, custom hooks, effect optimization.

---

**Built with React curiosity and a side of effect mastery.**
