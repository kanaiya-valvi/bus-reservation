import { useSelector } from "react-redux";
import Addseat from "./Addseat";

const NewSeatMeaker = () => {
  //   {id:0001,siteType:"siter",numberOfSite:0,row:0,column:0,seat:[]}
  const { seat } = useSelector((state) => state.data);
  console.log(seat);

  return (
    <>
      <div>
        <label htmlFor="">seleter seat types</label>
        <select name="" id="">
          <option value="siter">siter</option>
          <option value="sliper">sliper</option>
          <option value="both">both</option>
        </select>
        <div className="seatLayout">
          <div className="seat">
            {seat?.map((seat) => {
              if (seat.column === "col1") {
                return (
                  <div
                    key={seat.id}
                    className={seat.seatType === "sleeper" ? "sleeper seats" : ""}>
                    {seat.seatNumber}
                  </div>
                );
              }
            })}
          </div>
          <div className="seat">
            {seat?.map((seat) => {
              if (seat.column === "col2") {
                return <div key={seat.id}>{seat.seatNumber}</div>;
              }
            })}
          </div>
          <div className="seat">
            {seat?.map((seat) => {
              if (seat.column === "col3") {
                return <div key={seat.id}>{seat.seatNumber}</div>;
              }
            })}
          </div>
          <div className="seat">
            {seat?.map((seat) => {
              if (seat.column === "col4") {
                return <div key={seat.id}>{seat.seatNumber}</div>;
              }
            })}
          </div>
        </div>
        <button>Add</button>
      </div>
      <Addseat />
    </>
  );
};

export default NewSeatMeaker;
