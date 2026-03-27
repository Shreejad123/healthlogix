import { Chart } from "react-google-charts";
import styles from "./dashboard.module.css";
function LineChart() {
  const options = {
    title: "Weekly Surgeries",
    hAxis: { title: "Day" },
    vAxis: { title: "Number of Surgeries" },
    legend: "none",
  };

  const surgeries = JSON.parse(localStorage.getItem("surgeryList")) || [];
  console.log("surgeries", surgeries);
  const getWeekRange = () => {
    const today = new Date();
    const day = today.getDay();

    const diffToMonday = day === 0 ? -6 : 1 - day;

    const monday = new Date(today);
    monday.setDate(today.getDate() + diffToMonday);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    return { monday, sunday };
  };

  const { monday, sunday } = getWeekRange();

  const weeklySurgeries = surgeries.filter((item) => {
    const date = new Date(item.surgeryDate);
    return date >= monday && date <= sunday;
  });

  const count = {
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
    Sun: 0,
  };

  weeklySurgeries.forEach((item) => {
    const day = new Date(item.surgeryDate).toLocaleString("en-US", {
      weekday: "short",
    });

    if (count[day] !== undefined) {
      count[day]++;
    }
  });

  const chartData = [
    ["Day", "Surgeries"],
    ["Mon", count.Mon],
    ["Tue", count.Tue],
    ["Wed", count.Wed],
    ["Thu", count.Thu],
    ["Fri", count.Fri],
    ["Sat", count.Sat],
    ["Sun", count.Sun],
  ];

  return (
    <div>
      <h2>Weekly Surgeries Trend</h2>

      <Chart
        chartType="LineChart"
        width="500px"
        height="400px"
        data={chartData}
        options={options}
        className={styles.Chart}
      />
    </div>
  );
}

export default LineChart;
