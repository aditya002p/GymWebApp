import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import { features } from "caniuse-lite";
import whiteTick from "../../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benfits -></span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
