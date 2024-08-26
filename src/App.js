import { useEffect, useState } from "react";
import {
  generateCalendarData,
  formate,
  dayNames,
  monthNames,
} from "./API/calender";
import "./App.css";

function App() {
  const data = generateCalendarData(2024);
  const [month, setMonth] = useState(0);
  const [monthDate, setMonthDate] = useState(formate[data[monthNames[0]]]);
  useEffect(() => {
    setMonthDate(formate(data[monthNames[month]]));
  }, [month]);
  return (
    <div className="App">
      <div className="main">
        
        <div className="container gap-1 blue">
          {month > 0 ? <div onClick={() => {
                setMonth(month - 1);
              }}> {"<"} </div> : <></>}
          {month > 0 ? (
            <div
              onClick={() => {
                setMonth(month - 1);
              }}
            >
              {monthNames[month - 1]}
            </div>
          ) : (
            <></>
          )}
        
            <div
              onClick={() => {
                setMonth(month);
              }}
            >
              {monthNames[month]}
            </div>
        
          {month <11? (
            <div
              onClick={() => {
                setMonth(month + 1);
              }}
            >
              {monthNames[month + 1]}
            </div>
          ) : (
            <></>
          )}
          {month < 11 ? <div onClick={() => {
                setMonth(month + 1);
              }}> {">"} </div> : <></>}
          <div
             
            >
              Full Year 2024
            </div>
        </div>
        <div className="container">
          <div className="title">
          Calender for {monthNames[month]} 2024 (united states)
          </div>
        </div>
        <div className="container flex-col ">
          <div className="heading">
            <div>{monthNames[month]}</div>
          </div>

          <div>
            <div className="container">
              {" "}
              {dayNames.map((data) => (
                <div className="data-cell header-cell">{data}</div>
              ))}
            </div>
            <div className="container">
              {dayNames.map((days) => (
                <div>
                  {/* {console.log(monthDate[days])} */}
                  {monthDate !== undefined ? (
                    monthDate[days].map((dates) => {
                      if (dates == 0) {
                        return (
                          <div className="data-cell empty-cell">
                            {/* {"&nbsp"} */}
                          </div>
                        );
                      } else {
                        return (
                          <div
                            className={`data-cell ${
                              days === "Sun" ? "red " : ""
                            } ${days === "Sat" ? "gray " : ""}`}
                          >
                            {dates}
                          </div>
                        );
                      }
                    })
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
