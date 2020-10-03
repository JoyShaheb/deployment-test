import React from "react";
import Michelle from "../images/michelle.jpg";
import share from "../images/icon-share.svg";
import { Social } from "./Index";

const Text = () => {
  return (
    <div className="text">
      <div className="text-1">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </div>
      <div className="text-2">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </div>
      <div className="text-3">
        <div className="user">
          <img className="user-img" src={Michelle} alt="" />
        </div>

        <div className="details">
          <p className="name">Michelle Appleton</p>
          <p className="date">28 June 2020</p>
        </div>

        <div className="share">
          <img src={share} alt="" />
        </div>
        <Social />
      </div>
    </div>
  );
};

export default Text;
