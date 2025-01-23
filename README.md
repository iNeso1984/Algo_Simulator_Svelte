# **Big O Visualizer** 🌐

## **What is Big O Notation?** 🤔
This is a app I created to understand algorithims as I work through my graduate courses. This is a simplified version of a bigger topic, but had fun creating it.

## Quick Summary:

Big O Notation is a mathematical representation of an algorithm's efficiency. It describes how the runtime or space requirements of an algorithm grow relative to the input size. The most common complexities include:

- **O(1):** Constant time — performance remains the same regardless of input size.
- **O(log n):** Logarithmic time — performance grows slowly as input size increases.
- **O(n):** Linear time — performance grows directly proportional to input size.
- **O(n log n):** Linearithmic time — often seen in efficient sorting algorithms like mergesort.
- **O(n²):** Quadratic time — performance grows rapidly; common in nested loops.
- **O(2ⁿ):** Exponential time — extremely inefficient for large inputs; common in brute-force solutions.

Understanding these complexities helps developers write efficient code and make informed decisions about algorithm selection.

---

### **Tech Stack**
- **Frontend Framework:** [Svelte](https://svelte.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Charting Library:** [Chart.js](https://www.chartjs.org/)

### **Key Files**
- `App.svelte`: The main component handling user interactions and graph rendering.
- `calculateBigO.js`: Implements the logic for calculating Big O values for the selected algorithm and input size.

---

## **Getting Started** 🏁

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd <project-folder>
npm run dev to start app

