import { Chart } from "react-google-charts";
import styles from "./lineChart.module.css";

function LineChart() {
  // const demoData = [
  //   {
  //     patientFullName: "Aarav Sharma",
  //     patientNumber: "101",
  //     phoneNumber: "9000000001",
  //     surgeryDate: "2024-03-01",
  //     surgery: "Neuro",
  //   },
  //   {
  //     patientFullName: "Ananya Reddy",
  //     patientNumber: "102",
  //     phoneNumber: "9000000002",
  //     surgeryDate: "2024-03-02",
  //     surgery: "Ortho",
  //   },
  //   {
  //     patientFullName: "Rohan Patel",
  //     patientNumber: "103",
  //     phoneNumber: "9000000003",
  //     surgeryDate: "2024-03-03",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Sneha Iyer",
  //     patientNumber: "104",
  //     phoneNumber: "9000000004",
  //     surgeryDate: "2024-03-04",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Vikram Singh",
  //     patientNumber: "105",
  //     phoneNumber: "9000000005",
  //     surgeryDate: "2024-03-05",
  //     surgery: "Neuro",
  //   },
  //   {
  //     patientFullName: "Priya Nair",
  //     patientNumber: "106",
  //     phoneNumber: "9000000006",
  //     surgeryDate: "2024-03-06",
  //     surgery: "Ortho",
  //   },
  //   {
  //     patientFullName: "Karthik Shetty",
  //     patientNumber: "107",
  //     phoneNumber: "9000000007",
  //     surgeryDate: "2024-03-07",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Meera Joshi",
  //     patientNumber: "108",
  //     phoneNumber: "9000000008",
  //     surgeryDate: "2024-03-08",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Aditya Rao",
  //     patientNumber: "109",
  //     phoneNumber: "9000000009",
  //     surgeryDate: "2024-03-09",
  //     surgery: "Neuro",
  //   },
  //   {
  //     patientFullName: "Kavya Udupa",
  //     patientNumber: "110",
  //     phoneNumber: "9000000010",
  //     surgeryDate: "2024-03-10",
  //     surgery: "Ortho",
  //   },
  //   {
  //     patientFullName: "Suresh Bhat",
  //     patientNumber: "111",
  //     phoneNumber: "9000000011",
  //     surgeryDate: "2024-03-11",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Deepa Hegde",
  //     patientNumber: "112",
  //     phoneNumber: "9000000012",
  //     surgeryDate: "2024-03-12",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Manjunath Shetty",
  //     patientNumber: "113",
  //     phoneNumber: "9000000013",
  //     surgeryDate: "2024-03-13",
  //     surgery: "Neuro",
  //   },
  //   {
  //     patientFullName: "Nithya Pai",
  //     patientNumber: "114",
  //     phoneNumber: "9000000014",
  //     surgeryDate: "2024-03-14",
  //     surgery: "Ortho",
  //   },
  //   {
  //     patientFullName: "Harish Poojary",
  //     patientNumber: "115",
  //     phoneNumber: "9000000015",
  //     surgeryDate: "2024-03-15",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Shilpa Acharya",
  //     patientNumber: "116",
  //     phoneNumber: "9000000016",
  //     surgeryDate: "2024-03-16",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Rajesh Kumar",
  //     patientNumber: "117",
  //     phoneNumber: "9000000017",
  //     surgeryDate: "2024-03-17",
  //     surgery: "Neuro",
  //   },
  //   {
  //     patientFullName: "Lakshmi Rao",
  //     patientNumber: "118",
  //     phoneNumber: "9000000018",
  //     surgeryDate: "2024-03-18",
  //     surgery: "Ortho",
  //   },
  //   {
  //     patientFullName: "Anil Shetty",
  //     patientNumber: "119",
  //     phoneNumber: "9000000019",
  //     surgeryDate: "2024-03-19",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Pooja Naik",
  //     patientNumber: "120",
  //     phoneNumber: "9000000020",
  //     surgeryDate: "2024-03-20",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Sanjay Bhat",
  //     patientNumber: "121",
  //     phoneNumber: "9000000021",
  //     surgeryDate: "2024-03-21",
  //     surgery: "Neuro",
  //   },
  //   {
  //     patientFullName: "Rahul Verma",
  //     patientNumber: "122",
  //     phoneNumber: "9000000022",
  //     surgeryDate: "2024-03-22",
  //     surgery: "Ortho",
  //   },
  //   {
  //     patientFullName: "Neha Kapoor",
  //     patientNumber: "123",
  //     phoneNumber: "9000000023",
  //     surgeryDate: "2024-03-23",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Arjun Das",
  //     patientNumber: "124",
  //     phoneNumber: "9000000024",
  //     surgeryDate: "2024-03-24",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Divya Menon",
  //     patientNumber: "125",
  //     phoneNumber: "9000000025",
  //     surgeryDate: "2024-03-25",
  //     surgery: "Neuro",
  //   },
  //   {
  //     patientFullName: "Kiran Kumar",
  //     patientNumber: "126",
  //     phoneNumber: "9000000026",
  //     surgeryDate: "2024-03-26",
  //     surgery: "Ortho",
  //   },
  //   {
  //     patientFullName: "Asha Shetty",
  //     patientNumber: "127",
  //     phoneNumber: "9000000027",
  //     surgeryDate: "2024-03-27",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Ganesh Pai",
  //     patientNumber: "128",
  //     phoneNumber: "9000000028",
  //     surgeryDate: "2024-03-28",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Sunita Rao",
  //     patientNumber: "129",
  //     phoneNumber: "9000000029",
  //     surgeryDate: "2024-03-29",
  //     surgery: "Neuro",
  //   },
  //   {
  //     patientFullName: "Ravi Shankar",
  //     patientNumber: "130",
  //     phoneNumber: "9000000030",
  //     surgeryDate: "2024-03-30",
  //     surgery: "Ortho",
  //   },
  //   {
  //     patientFullName: "Bhavana Hegde",
  //     patientNumber: "131",
  //     phoneNumber: "9000000031",
  //     surgeryDate: "2024-03-31",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Prakash Naik",
  //     patientNumber: "132",
  //     phoneNumber: "9000000032",
  //     surgeryDate: "2024-04-01",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Tejaswini Shetty",
  //     patientNumber: "133",
  //     phoneNumber: "9000000033",
  //     surgeryDate: "2024-04-02",
  //     surgery: "Neuro",
  //   },
  //   {
  //     patientFullName: "Mahesh Bhat",
  //     patientNumber: "134",
  //     phoneNumber: "9000000034",
  //     surgeryDate: "2024-04-03",
  //     surgery: "Ortho",
  //   },
  //   {
  //     patientFullName: "Preethi Rao",
  //     patientNumber: "135",
  //     phoneNumber: "9000000035",
  //     surgeryDate: "2024-04-04",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Naveen Kumar",
  //     patientNumber: "136",
  //     phoneNumber: "9000000036",
  //     surgeryDate: "2024-04-05",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Swathi Pai",
  //     patientNumber: "137",
  //     phoneNumber: "9000000037",
  //     surgeryDate: "2024-04-06",
  //     surgery: "Neuro",
  //   },
  //   {
  //     patientFullName: "Dinesh Shetty",
  //     patientNumber: "138",
  //     phoneNumber: "9000000038",
  //     surgeryDate: "2024-04-07",
  //     surgery: "Ortho",
  //   },
  //   {
  //     patientFullName: "Radha Iyer",
  //     patientNumber: "139",
  //     phoneNumber: "9000000039",
  //     surgeryDate: "2024-04-08",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Lokesh Naik",
  //     patientNumber: "140",
  //     phoneNumber: "9000000040",
  //     surgeryDate: "2024-04-09",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Varun Shetty",
  //     patientNumber: "141",
  //     phoneNumber: "9000000041",
  //     surgeryDate: "2024-04-10",
  //     surgery: "Neuro",
  //   },
  //   {
  //     patientFullName: "Pallavi Rao",
  //     patientNumber: "142",
  //     phoneNumber: "9000000042",
  //     surgeryDate: "2024-04-11",
  //     surgery: "Ortho",
  //   },
  //   {
  //     patientFullName: "Ajay Bhat",
  //     patientNumber: "143",
  //     phoneNumber: "9000000043",
  //     surgeryDate: "2024-04-12",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Geetha Naik",
  //     patientNumber: "144",
  //     phoneNumber: "9000000044",
  //     surgeryDate: "2024-04-13",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Ramesh Pai",
  //     patientNumber: "145",
  //     phoneNumber: "9000000045",
  //     surgeryDate: "2024-04-14",
  //     surgery: "Neuro",
  //   },
  //   {
  //     patientFullName: "Savitri Shetty",
  //     patientNumber: "146",
  //     phoneNumber: "9000000046",
  //     surgeryDate: "2024-04-15",
  //     surgery: "Ortho",
  //   },
  //   {
  //     patientFullName: "Umesh Kumar",
  //     patientNumber: "147",
  //     phoneNumber: "9000000047",
  //     surgeryDate: "2024-04-16",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Anita Rao",
  //     patientNumber: "148",
  //     phoneNumber: "9000000048",
  //     surgeryDate: "2024-04-17",
  //     surgery: "Cardiac",
  //   },
  //   {
  //     patientFullName: "Mohan Bhat",
  //     patientNumber: "149",
  //     phoneNumber: "9000000049",
  //     surgeryDate: "2024-04-18",
  //     surgery: "Neuro",
  //   },
  //   {
  //     patientFullName: "Latha Naik",
  //     patientNumber: "150",
  //     phoneNumber: "9000000050",
  //     surgeryDate: "2024-04-19",
  //     surgery: "Ortho",
  //   },
  // ];

  let surgeries = JSON.parse(localStorage.getItem("surgeryList")) || [];
  console.log("surgeries_linechart", surgeries);

  const options = {
    title: "Weekly Surgeries",
    hAxis: { title: "Day" },
    vAxis: { title: "Number of Surgeries", format: "0" },
    legend: "none",
  };
  const getWeekRange = () => {
    const today = new Date();
    console.log(today, "today");
    const day = today.getDay();

    const diffToMonday = day === 0 ? -6 : 1 - day;

    const monday = new Date(today);
    monday.setDate(today.getDate() + diffToMonday);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    return { monday, sunday };
  };

  //const { monday, sunday } = getWeekRange();
  const baseDate = new Date(surgeries[0]?.surgeryDate);

  const day = baseDate.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;

  const monday = new Date(baseDate);
  monday.setDate(baseDate.getDate() + diffToMonday);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
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
      <h4 className={styles.header}>Weekly Surgeries Trend</h4>

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
