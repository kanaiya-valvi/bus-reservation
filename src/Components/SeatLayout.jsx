import _ from "lodash";
import React, { useEffect, useState } from "react";
import Bus from "../Utils/Utils";
import "./SeatLayout.css";
const SeatLayout = ({ seatState }) => {
  // const [bus, setBus] = useState(Bus[0].seat);
  const [bus, setBus] = useState([...seatState]);
  console.log(seatState);
  // useEffect(() => {
  //   setBus(_.uniqBy(bus, "seatId"));
  // }, []);
  const removeDuplicates = () => {
    const uniques = _.uniqBy(bus, "seatId");
    // console.log(uniques, bus);
    const diff = _.differenceWith(bus, uniques, _.isEqual);
    const diffSeatId = diff.map((i) => i.seatId);
    const final = _.uniqBy(
      bus.map((item, index) =>
        diffSeatId.includes(item.seatId)
          ? { ...item, seatType: "sleeper" }
          : { ...item }
      ),
      "seatId"
    );
    setBus(final);
  };
  useEffect(() => {
    setBus(seatState);
  }, [seatState]);

  return (
    <>
      <div
        style={{
          display: "grid",
        }}
        className="layout">
        {bus?.map((seat) => (
          <div
            style={{ width: "50px" }}
            key={seat.id}
            className={`seats ${seat.seatType}`}>
            {seat.seatId}
            {console.log(bus, "***")}
          </div>
        ))}
      </div>
      <button onClick={removeDuplicates}>fix me</button>
    </>
  );
};

export default SeatLayout;
