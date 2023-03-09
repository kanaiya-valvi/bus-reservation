import _ from "lodash";
import React, { useEffect, useState } from "react";
import "./SeatLayout.css";

const Grid = ({ children, column, row }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${column},minmax(50px,100px))`,
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
      minHeight: "50px",
      minWidth: "50px",
    }}>
    {seat.seatId}
  </div>
);

const SeatLayout = ({ seatState, column, row }) => {
  const [bus, setBus] = useState([...seatState]);
  const [seats, setSeat] = useState([...bus]);

  useEffect(() => {
    const uniques = _.uniqBy(bus, "seatId");
    const diff = _.differenceWith(bus, uniques, _.isEqual);
    const diffSeatId = diff.map((i) => i.seatId);
    const final = _.uniqBy(
      bus.map((item) =>
        diffSeatId.includes(item.seatId)
          ? { ...item, seatType: "sleeper" }
          : { ...item }
      ),
      "seatId"
    );
    setSeat(final);
    setBus(seatState);
  }, [seatState, bus]);

  return (
    <>
      <Grid row={row} column={column}>
        {seats.map((seat) => (
          <Seat key={seat.id} seat={seat} />
        ))}
      </Grid>
    </>
  );
};

export default SeatLayout;
