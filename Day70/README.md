# Day 70 — Recursion Completed & Big O Notation Deep Dive  

### 📝 Summary  
Wrapped up the recursion project and spent today diving into **time complexity, space complexity, and Big O notation** — the real tools for measuring algorithm efficiency.  

---

### 🚀 What I Did Today
- ✅ Finished the **Recursion Project** (Fibonacci & Merge Sort).  
- 📚 Studied **time complexity** (how fast algorithms grow with input size).  
- 📚 Studied **space complexity** (how much memory algorithms consume).  
- 🔍 Explored **Big O notation** in detail.  
- Briefly touched on asymptotic notations (**Ω**, **Θ**) but main focus was on Big O.  

---

### 💡 Key Takeaways
- **Time Complexity**  
  - Describes how the runtime of an algorithm grows with input size `n`.  
  - Common growth rates:  
    - **O(1)** → Constant time (fastest, doesn’t depend on input size).  
    - **O(log n)** → Logarithmic (binary search, divide & conquer patterns).  
    - **O(n)** → Linear (looping through all items once).  
    - **O(n log n)** → Typical for efficient sorting algorithms (merge sort, quicksort).  
    - **O(n²)** → Quadratic (nested loops, e.g. bubble sort).  
    - **O(2^n), O(n!)** → Exponential and factorial growth — impractical for large inputs.  

- **Space Complexity**  
  - Measures the amount of memory an algorithm needs relative to input size.  
  - Includes:  
    - **Fixed part** (code, constants, variables).  
    - **Variable part** (recursion stack, dynamic structures, arrays).  
  - Recursive functions often increase space usage due to call stacks.  

- **Big O Notation**  
  - Focuses on the **worst-case** performance (upper bound).  
  - Gives a high-level view of efficiency, ignoring constants and small terms.  
  - Example: `3n + 5 → O(n)` because the linear term dominates growth.  

- **Other notations** (just touched briefly):  
  - **Big Ω** = best-case scenario.  
  - **Big Θ** = tight bound (both upper & lower).  

---

### 📅 Next Steps
- Apply Big O reasoning to all upcoming algorithms and data structures.  
- Revisit recursion solutions with complexity in mind.  
- Start thinking about writing more optimized code, not just code that “works.”  

---
