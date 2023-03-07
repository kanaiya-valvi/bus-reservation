import _, { transform } from "lodash";
import React, { useEffect, useState } from "react";
import "./SeatLayout.css";

const Grid = ({ children, column, row }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${column}, 1fr)`,
      gridTemplateRows: `repeat(${row}, 50px)`,
      gridGap: "10px",
      transform: "translate(90deg)",
      maxWidth: "200px",
      maxWidth: "min-content",
    }}>
    {children}
  </div>
);

const Seat = ({ seat }) => (
  <div
    style={{
      backgroundColor: seat.seatType === "sleeper" ? "#3bc9db" : "#99e9f2",
      gridColumn: seat.seatType === "sleeper" ? `span 2` : `span 1`,
      // height: "50px",
      minHeight: "50px",
      minWidth: "50px",
    }}>
    {seat.seatId}
  </div>
);

const SeatLayout = ({ seatState, column, row }) => {
  // const [bus, setBus] = useState(Bus[0].seat);
  console.log(column, row);
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
      <Grid row={row} column={column}>
        {bus.map((seat) => (
          <Seat key={seat.id} seat={seat} />
        ))}
      </Grid>
      <button onClick={removeDuplicates}>fix me</button>
    </>
  );
};

export default SeatLayout;
