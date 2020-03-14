import React from "react";
import Form from "./Form";

const MainApp = () => {
  return (
    <div>
      <h2>MainApp</h2>
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
                <span>4: 00 pm</span>
                <span>fri mar 13 2020</span>
              </div>
              <div className="main-temp">
                <span>50.3</span>
              </div>
            </div>
          </div>

          <div className="top-right">
            <div className="icon-container">
              <span>icon</span>
              <span>overcast clouds</span>
            </div>
            <div className="description">
              <div className="location">
                <p>location</p>
                <span>las vegas</span>
              </div>
              <div className="temperature border">
                <p>temperature</p>
                <span>58.3</span>
              </div>
              <div className="humidity border">
                <p>humidity</p>
                <span>55%</span>
              </div>
              <div className="wind-speed border">
                <p>wind speed</p>
                <span>14.99 mph</span>
              </div>
              <div className="sunrise">
                <p>sunrise</p>
                <span>6:53 am</span>
              </div>
              <div className="sunset border">
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
