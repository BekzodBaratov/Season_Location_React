import React from "react";

const getMonth = function () {
  return new Date().getMonth();
};
const getSeason = (lat, month) => {
  if (month >= 2 && month <= 9) {
    if (lat > 0) {
      return (
        <div>
          <i id="icon1" className="sun icon loading huge yellow"></i>
          <div id="text"> Let`s hit the beach</div>
          <i id="icon2" className="sun icon loading huge yellow"></i>
          <button className="positive ui button">Positive Button</button>
        </div>
      );
    } else {
      return (
        <div>
          <i id="icon1" className="snowflake icon loading huge"></i>
          <div id="text">Burr, it`s chilly!</div>{" "}
          <i id="icon2" className="snowflake icon loading huge"></i>
        </div>
      );
    }
  } else if (month < 2 && month > 9) {
    if (lat < 0) {
      return (
        <div>
          <i id="icon1" className="sun icon loading huge yellow"></i>
          <div id="text"> Let`s hit the beach</div>
          <i id="icon2" className="sun icon loading huge yellow"></i>
        </div>
      );
    } else {
      return (
        <div>
          <i id="icon1" className="snowflake icon loading huge"></i>
          <div id="text">Burr, it`s chilly!</div>{" "}
          <i id="icon2" className="snowflake icon loading huge"></i>
        </div>
      );
    }
  }
};
const DisplaySeason = (props) => {
  return <div>{getSeason(props.lat, getMonth())}</div>;
};
export default DisplaySeason;
