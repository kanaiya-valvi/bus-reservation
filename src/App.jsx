import NewSeatMeaker from "./Components/NewSeatMeaker";
import SeatLayout from "./Components/SeatLayout";
import SeatMaker from "./Components/SeatMaker";
import { useState } from "react";

const App = () => {
  // return <NewSeatMeaker />;
  const [seatState, setSeatState] = useState([]);
  const onSeatChange = (newSeatState) => {
    setSeatState([...newSeatState]);
  };
  return (
    <>
      <SeatMaker onSeatChange={onSeatChange} />
      <hr />
      <SeatLayout seatState={seatState} />
    </>
  );
};

export default App;
