import { useState } from "react";

const SeatMaker = ({ onSeatChange, columns, rows }) => {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [seats, setSeats] = useState(null);
  const [lasetSeats, setlasetSeats] = useState([]);

  const selectedSeat = [];

  const uniqueIds = () => {
    let result = "";
    const str =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (let i = 0; i < 6; i++) {
      result += str.charAt(Math.floor(Math.random() * str.length));
    }
    return result;
  };

  const changeSeatDetails = (index, id, seatId, event) => {
    if (lasetSeats.includes(index + 1) || lasetSeats.includes(index)) {
      const totalNumberOfSeat = seats.filter((seat) => seat?.seatId === seatId);
      if (
        totalNumberOfSeat.length == 0 &&
        (seats[index - 1]?.seatId !== seatId ||
          seats[index + 1]?.seatId !== seatId)
      ) {        
        if (totalNumberOfSeat.length <= 1) {
          if (
            totalNumberOfSeat.length === 1 &&
            (seats[index + 1]?.seatId === seatId ||
              seats[index - 1].seatId === seatId)
          ) {
            const seat = seats.map((list) => {
              if (list.id == id) {
                return { ...list, seatId };
              } else {
                return { ...list };
              }
            });
            setSeats(seat);
            onSeatChange(seat);
          }
          if (
            totalNumberOfSeat.length === 0 &&
            (seats[index + 1]?.seatId !== seatId ||
              seats[index - 1].seatId !== seatId)
          ) {
            const seat = seats.map((list) => {
              if (list.id == id) {
                return { ...list, seatId };
              } else {
                return { ...list };
              }
            });
            setSeats(seat);
            onSeatChange(seat);
          }
        } else {
          alert("Please select unique seatId");
          event.target.value = "";
        }
      } else {
        alert("Please select unique seatId");
        event.target.value = "";
      }
    } else {
      const totalNumberOfSeat = seats.filter((seat) => seat.seatId === seatId);
      if (totalNumberOfSeat.length <= 1) {
        if (
          totalNumberOfSeat.length === 1 &&
          (seats[index + 1]?.seatId === seatId ||
            seats[index - 1]?.seatId === seatId)
        ) {
          const seat = seats.map((list) => {
            if (list.id == id) {
              return { ...list, seatId };
            } else {
              return { ...list };
            }
          });
          setSeats(seat);
          onSeatChange(seat);
        }
        if (
          totalNumberOfSeat.length === 0 &&
          (seats[index + 1]?.seatId !== seatId ||
            seats[index - 1].seatId !== seatId)
        ) {
          const seat = seats.map((list) => {
            if (list.id == id) {
              return { ...list, seatId };
            } else {
              return { ...list };
            }
          });
          setSeats(seat);
          onSeatChange(seat);
        }
      } else {
        alert("Please select unique seatId");
        event.target.value = "";
      }
    }
  };

  const addSeatHandler = () => {
    for (let i = 1; i <= row; i++) {
      selectedSeat.push(column * i);
    }
    const numberOfSeat = row * column;
    columns(column);
    rows(row);
    const seat = Array.from({ length: numberOfSeat }, (_, i) => ({
      id: uniqueIds(),
      seatId: i + "",
      seatType: "seater",
    }));
    setSeats(seat);
    setlasetSeats(selectedSeat);
  };

  return (
    <div>
      <div>
        <label>columns</label>
        <input
          type="number"
          onChange={(e) => {
            setColumn(e.target.value);
          }}
        />
        <br />
        <label>rows</label>
        <input
          type="number"
          onChange={(e) => {
            setRow(e.target.value);
          }}
        />
      </div>
      <button onClick={addSeatHandler}>add seat</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${column}, minmax(50px,100px))`,
          gridGap: "10px",
          transform: "translate(90deg)",
          maxWidth: "200px",
        }}>
        {seats !== null &&
          seats.map((item, mov) => (
            <input
              type="text"
              name=""
              key={mov}
              value={item.seatId}
              onChange={(e) => {
                changeSeatDetails(mov, item.id, e.target.value, e);
              }}
            />
          ))}
      </div>
      <button onClick={() => console.log(seats)}>show</button>
    </div>
  );
};

export default SeatMaker;
