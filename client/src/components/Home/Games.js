import React, { Component } from "react";
import Game from "./CardUI";

import img1 from "../../assets/images/fortnite1.jpg";
import img2 from "../../assets/images/nba2k1.jpg";
import img3 from "../../assets/images/madden1.jpg";
import img4 from "../../assets/images/cod1.jpg";
class Games extends Component {
  render() {
    return (
      <div className="card-frame container-fluid d-flex justify-content-center">
        <div className="row ">
          <div className="col-xs-3 ">
            <Game imgsrc={img1} title="FORTNITE" link={"fortnite"} />
          </div>
          <div className="col-xs-3">
            <Game imgsrc={img2} title="NBA2K" link={"nba"} />
          </div>
          <div className="col-xs-3">
            <Game imgsrc={img3} title="MADDEN" link={"madden"} />
          </div>
          <div className="col-xs-3">
            <Game imgsrc={img4} title="C.O.D" link={"cod"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
