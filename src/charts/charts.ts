import { isNotEmpty } from '@finsweet/ts-utils';
import Chart from 'chart.js/auto';

window.Webflow ||= [];
window.Webflow.push(async () => {
  // Chart 1
  const ctx = document.querySelector<HTMLCanvasElement>('[data-element="chart1"');
  if (!ctx) return;

  const years = await fetchData();

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years.reverse().map((row) => row.year),
      datasets: [
        {
          label: 'Active companies',
          data: years.map((row) => row.active),
        },
        {
          label: 'Mergers/Acquisitions',
          data: years.map((row) => row.mergers),
        },
        {
          label: 'Discontinued',
          data: years.map((row) => row.discontinued),
        },
        {
          label: 'Living Dead / Ideas changed',
          data: years.map((row) => row.livingDead),
        },
      ],
    },
    options: {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  });

  const revenueFinal = await fetchData();

  // Chart 2
  const ctx1 = document.querySelector<HTMLCanvasElement>('[data-element="chart2"');
  if (!ctx1) return;

  new Chart(ctx1, {
    type: 'line',
    data: {
      labels: years.reverse().map((row) => row.year),
      datasets: [
        {
          label: 'Revenue',
          data: years.map((row) => row.active),
        },
      ],
    },
    options: {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  });
});

const fetchData = async () => {
  const response = await fetch('/scores');
  const html = await response.text();
  const parser = new DOMParser();
  const page = parser.parseFromString(html, 'text/html');
  const scripts = page.querySelectorAll('script[type="application/json"]');
  const revenue = [...scripts].map((item) => JSON.parse(item.innerHTML));
  return revenue;
};
