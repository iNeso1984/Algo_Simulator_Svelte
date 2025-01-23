<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let n = 100; // Default value for n
  let selectedAlgorithm = "O(1)"; // Default algorithm
  let chart; // Chart instance

  const algorithms = ["O(1)", "O(log n)", "O(n)", "O(n^2)"];

  const calculateBigO = (n, algorithm) => {
    switch (algorithm) {
      case "O(1)":
        return Array(n).fill(1); // Constant value of 1
      case "O(log n)":
        return Array.from({ length: n }, (_, i) =>
          i === 0 ? 0 : Math.log2(i + 1)
        ); // Logarithmic growth
      case "O(n)":
        return Array.from({ length: n }, (_, i) => i + 1); // Linear growth
      case "O(n^2)":
        return Array.from({ length: n }, (_, i) => Math.pow(i + 1, 2)); // Quadratic growth
      default:
        return [];
    }
  };

  const updateChart = () => {
    const datasets = algorithms.map((algo) => ({
      label: algo,
      data: calculateBigO(n, algo),
      borderColor: getRandomColor(),
      fill: false,
      tension: 0.1,
    }));

    if (chart) {
      chart.destroy(); // Destroy existing chart before re-creating
    }

    const ctx = document.getElementById("chart").getContext("2d");
    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array.from({ length: n }, (_, i) => i + 1),
        datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Allow custom sizing
        scales: {
          x: {
            title: {
              display: true,
              text: "n (Input Size)",
              font: {
                size: 16,
              },
            },
          },
          y: {
            title: {
              display: true,
              text: "Operations",
              font: {
                size: 16,
              },
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  onMount(updateChart);
</script>

<style>
  .container {
    text-align: center;
    padding: 20px;
  }
  input {
    padding: 10px;
    font-size: 16px;
    width: 200px;
  }
  select {
    padding: 10px;
    font-size: 16px;
    margin-left: 10px;
  }
  .chart-container {
    width: 90%;
    height: 500px; /* Increased height for better visibility */
    margin: 20px auto;
  }
  .description {
    margin-top: 10px;
    font-size: 16px;
    text-align: left;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<div class="container">
  <h1>Big O Algorithm Visualizer</h1>

  <div class="description">
    <p>
      This app helps you visualize and understand Big O notation, a way to describe the performance of algorithms as the input size (n) grows. Big O focuses on the worst-case scenario to help programmers optimize their code.
    </p>
    <ul>
      <li><strong>O(1)</strong>: Constant time. The algorithm's runtime doesn't depend on the input size.</li>
      <li><strong>O(log n)</strong>: Logarithmic time. The algorithm reduces the problem size exponentially, often seen in divide-and-conquer strategies.</li>
      <li><strong>O(n)</strong>: Linear time. The algorithm's runtime scales directly with the input size.</li>
      <li><strong>O(n^2)</strong>: Quadratic time. The runtime grows exponentially with the input size, common in nested loops.</li>
    </ul>
    <p>
      Adjust the input size (n) and observe how the algorithms perform. This can help you identify which algorithm is more efficient for larger datasets.
    </p>
  </div>

  <div>
    <label for="n">Value of n:</label>
    <input
      id="n"
      type="number"
      min="1"
      bind:value={n}
      on:input={updateChart}
    />
    <label for="algorithm">Select Algorithm:</label>
    <select id="algorithm" bind:value={selectedAlgorithm} on:change={updateChart}>
      {#each algorithms as algo}
        <option value={algo}>{algo}</option>
      {/each}
    </select>
  </div>
  
  <p>
    {selectedAlgorithm} for n = {n}: 
    <span>{calculateBigO(n, selectedAlgorithm)[n - 1]}</span>
  </p>

  <div class="chart-container">
    <canvas id="chart"></canvas>
  </div>
</div>
