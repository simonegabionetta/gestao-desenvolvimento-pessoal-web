/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jira-blue': '#0052CC',
        'jira-dark': '#161B22',
        'jira-light': '#F7F8FA',
        'status-todo': '#626F86',
        'status-progress': '#0052CC',
        'status-done': '#216E4E',
        'priority-critical': '#AE2A19',
        'priority-high': '#974F0C',
        'priority-medium': '#7F5F01',
        'priority-low': '#216E4E',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
