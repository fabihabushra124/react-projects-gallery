import { useState } from "react";
import { carsData } from "../carsData";
import Button from "./Button";

const Popular = () => {
  const [number, setNumber] = useState(0);
  const [active, setActive] = useState(carsData[0]);
  // console.log(number);
  // console.log(active);

  return (
    <section id="popular">
      <div className="container">
        <div className="text-center">
          <h2 className="blue-h">our popular deals</h2>
        </div>
        <div className="row pt-4">
          <div className="col-lg-4 pt-4 pt-lg-0 d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center flex-column">
              {carsData.map((item, inx) => (
                <Button
                  onClick={() => {
                    setNumber(inx);
                    setActive(item);
                  }}
                  key={inx}
                  name={item.name}
                  className={`popular-filter-btn ${
                    active === item && "active"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-4 pt-4 pt-lg-0 d-flex align-items-center">
            <img src={carsData[number].img} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-4 pt-4 pt-lg-0">
            <div className="car-detail">
              <div className="price-head">
                <p className="m-0">
                  <strong className="fs-4">{carsData[number].price}</strong> /
                  per day
                </p>
              </div>
              <div className="info-item">
                <p className="info-text">model</p>
                <p className="info-text">{carsData[number].name}</p>
              </div>
              <div className="info-item">
                <p className="info-text">engine</p>
                <p className="info-text">{carsData[number].engine}</p>
              </div>
              <div className="info-item">
                <p className="info-text">mileage</p>
                <p className="info-text">{carsData[number].mileage}</p>
              </div>
              <div className="info-item">
                <p className="info-text">body</p>
                <p className="info-text">{carsData[number].body}</p>
              </div>
              <div className="info-item">
                <p className="info-text">air conditioner</p>
                <p className="info-text">{carsData[0].airConditioner}</p>
              </div>
              <div className="info-item">
                <p className="info-text">passengers</p>
                <p className="info-text">{carsData[number].passengers}</p>
              </div>
              <div className="info-item">
                <p className="info-text">fuel</p>
                <p className="info-text">{carsData[number].fuel}</p>
              </div>
              <div className="info-item">
                <p className="info-text">fuel capacity</p>
                <p className="info-text">{carsData[0].fuelCapacity}</p>
              </div>
              <div className="info-item">
                <p className="info-text">transmission</p>
                <p className="info-text">{carsData[number].transmission}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
