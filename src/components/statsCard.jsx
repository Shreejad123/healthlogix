import "./statsCard.css";
import { BsPeopleFill } from "react-icons/bs";
import { ImScissors } from "react-icons/im";
function StatsCard() {
  const savedData = JSON.parse(localStorage.getItem("surgeryList"));
  console.log(savedData);
  const countpatientFullName = savedData.filter(
    (item) => item.patientFullName,
  ).length;
  const count = savedData.filter((item) => item.surgery).length;

  const surgeries = JSON.parse(localStorage.getItem("surgeryList")) || [];
  console.log("surgeries", surgeries);
  const counts = {};

  surgeries.forEach((p) => {
    if (!p.surgery) return;

    const type = p.surgery;
    counts[type] = (counts[type] || 0) + 1;
  });

  console.log("counts:", counts);
  return (
    <>
      <div className="statsCard">
        <div className="statsPatient">
          <h3>
            <BsPeopleFill />
            Total Patients: {countpatientFullName}
          </h3>
        </div>
        <div className="statsSugery">
          <h3>
            <ImScissors />
            Total Surgeries : {count}
          </h3>
        </div>
      </div>
    </>
  );
}
export default StatsCard;
