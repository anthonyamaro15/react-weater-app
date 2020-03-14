import React from "react";
import Form from "./Form";

const MainApp = () => {
  return (
    <div>
      <div className="container">
        <div className="form-container">
          <Form />
        </div>

        <div className="info-container">
          <div className="top-left">
            <div className="main-location">
              <p>las vegas</p>
            </div>
            <div className="bottom-left">
              <div className="date-info">
                <span className="time">4: 00 pm</span>
                <span className="date">fri mar 13 2020</span>
              </div>
              <div className="main-temp">
                <span>50.3 c</span>
              </div>
            </div>
          </div>

          <div className="top-right">
            <div className="icon-container">
              <span className="icon">icon</span>
              <span className="icon-des">overcast clouds</span>
            </div>
            <div className="description">
              <div className="location border flex">
                <p>location</p>
                <span>las vegas</span>
              </div>
              <div className="temperature border flex">
                <p>temperature</p>
                <span>58.3 c</span>
              </div>
              <div className="humidity border flex">
                <p>humidity</p>
                <span>55%</span>
              </div>
              <div className="wind-speed border flex">
                <p>wind speed</p>
                <span>14.99 mph</span>
              </div>
              <div className="sunrise flex">
                <p>sunrise</p>
                <span>6:53 am</span>
              </div>
              <div className="sunset border flex">
                <p>sunset</p>
                <span>6:46 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainApp;
