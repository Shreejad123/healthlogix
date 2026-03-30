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
  return (
    <>
      <div className="statsCard">
        <div className="statsPatient">
          <h2>
            <BsPeopleFill />
            Total Patients: {countpatientFullName}
          </h2>
        </div>
        <div className="statsSugery">
          <h2>
            <ImScissors />
            Total Surgeries : {count}
          </h2>
        </div>
      </div>
    </>
  );
}
export default StatsCard;
