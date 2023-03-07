import { useState } from "react";

const SeatMaker = ({ onSeatChange }) => {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [seats, setSeats] = useState(null);

  const changeSeatDetails = (id, seatId) => {
    const seat = seats.map((list) => {
      if (list.id == id) {
        return { ...list, seatId };
      } else {
        return { ...list };
      }
    });
    setSeats(seat);
    onSeatChange(seat);
  };

  const addSeatHandler = () => {
    const numberOfSeat = row * column;
    const seat = [];
    for (let i = 0; i < numberOfSeat; i++) {
      seat.push({ id: i, seatId: "", seatType: "seater" });
    }
    setSeats(seat);
  };
  const showSeats = () => {
    console.log(seats);
  };
  let count = 0;
  return (
    <div>
      <div>
        <label>columns</label>
        <input type="number" onChange={(e) => setColumn(e.target.value)} />
        <br />
        <label>rows</label>
        <input type="number" onChange={(e) => setRow(e.target.value)} />
      </div>
      <button onClick={addSeatHandler}>add seat</button>
      <br />
      {seats !== null &&
        seats.map((item, index) => {
          if (count === parseInt(column)) {
            count = 1;
          } else {
            count = count + 1;
          }
          return (
            <>
              <input
                type="text"
                key={index}
                onChange={(e) => {
                  changeSeatDetails(item.id, e.target.value);
                }}
              />
              {count === parseInt(column) && <p key={index * 5}></p>}
            </>
          );
        })}
      <button onClick={showSeats}>show</button>
    </div>
  );
};

export default SeatMaker;
