import { useEffect, useState } from "react";
import Day2 from "./Day2";
import Day3 from "./Day3";
import Day4 from "./Day4";
import Day5 from "./Day5";
import Day6 from "./Day6";
import Day7 from "./Day7";
import Day8 from "./Day8";
import Day9 from "./Day9";
import Day10 from "./Day10";
import Day11 from "./Day11";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// Main Component
const App = () => {
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [currentDay, setCurrentDay] = useState(9);
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/Authentication")
    }
  })

  const handleDayClick = (day) => {
    setCurrentDay(day);
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "ທ່ານແນ່ໃຈບໍ່ ?",
      text: "ແນ່ໃຈທີ່ຈະອອກຈາກລະບົບບໍ່ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ແມ່ນ",
      cancelButtonText: "ຍົກເລີກ",
    });
    if (result.isConfirmed) {
      localStorage.removeItem("token");
      await Swal.fire({
        icon: "success",
        title: "ອອກຈາກລະບົບສໍາເລັດ",
        text: "ຂອບໃຈທີ່ໃຊ້ບໍລິການ !",
        timer: 1500,
      });
      navigate("/Authentication");
    }
  };
  const DayContent = ({ day }) => {
    switch (day) {
      case 2:
        return <Day2></Day2>;
      case 3:
        return <Day3></Day3>;
      case 4:
        return <Day4></Day4>;
      case 5:
        return <Day5></Day5>;
      case 6:
        return <Day6></Day6>;
      case 7:
        return <Day7></Day7>;
      case 8:
        return <Day8></Day8>;
      case 9:
        return <Day9></Day9>;
      case 10:
        return <Day10></Day10>;
      case 11:
        return <Day11></Day11>;
      default:
        return null;
    }
  };
  return (
    <div className="app">
      {days.map((day) => (
        <button
          onClick={() => {
            handleDayClick(day);
          }}
          className={currentDay == day ? "active-btn" : "inactive-btn"}
        >
          ມື້ທີ {day}
        </button>
      ))}
      <DayContent day={currentDay}></DayContent>
      <button onClick={handleLogout}>ອອກຈາກລະບົບ</button>
      <style jsx>
        {`
          .app {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
            font-family: Saysettha OT;
          }
          button {
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s;
            margin: 10px;
            font-family: Saysettha OT;
            background-color: #3085d6;
          }
          .active-btn {
            background-color: green;
          }
          .inactive-btn {
            background-color: gray;
          }
        `}
      </style>
    </div>
  );
};

export default App;
