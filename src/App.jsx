import NewSeatMeaker from "./Components/NewSeatMeaker";
import SeatLayout from "./Components/SeatLayout";
import SeatMaker from "./Components/SeatMaker";
import { useState } from "react";

const App = () => {
  // return <NewSeatMeaker />;
  const [seatState, setSeatState] = useState([]);
  const [column, setColumn] = useState(0);
  const [row, setRow] = useState(0);
  const onSeatChange = (newSeatState) => {
    setSeatState([...newSeatState]);
  };
  const columns = (column) => {
    setColumn(column);
  };
  const rows = (row) => {
    setRow(row);
  };
  return (
    <>
      <SeatMaker onSeatChange={onSeatChange} rows={rows} columns={columns} />
      <hr />
      <SeatLayout seatState={seatState} row={row} column={column} />
    </>
  );
};

export default App;
