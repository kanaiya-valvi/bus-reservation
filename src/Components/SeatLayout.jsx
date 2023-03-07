import _ from "lodash";
import React, { useEffect, useState } from "react";
import Bus from "../Utils/Utils";
import "./SeatLayout.css";

const Grid = ({ children }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridGap: "10px",
    }}>
    {children}
  </div>
);

const Seat = ({ seat }) => (
  <div
    style={{
      backgroundColor: seat.seatType === "sleeper" ? "blue" : "green",
      gridColumn: seat.seatType === "sleeper" ? `span 2` : `span 1`,
      height: "50px",
    }}>
    {seat.seatId}
  </div>
);

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
      <Grid>
        {bus.map((seat) => (
          <Seat key={seat.id} seat={seat} />
        ))}
      </Grid>
      <button onClick={removeDuplicates}>fix me</button>
    </>
  );
};

export default SeatLayout;
