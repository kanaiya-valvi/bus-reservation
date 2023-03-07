import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSeat } from "../Store/ActionSlice";

const Addseat = () => {
  const [item, setItem] = useState("seater");
  const [seatNumber, setSeatNumber] = useState("");
  const [column, setCulumn] = useState("col1");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // const str=abcdefghijklmnopqrstuvwyz;

    const id = Math.random(100) * 100;
    const seat = {
      id: id,
      seatType: item,
      seatNumber: seatNumber,
      column: column,
      availability: true,
    };
    dispatch(addSeat(seat));
    console.log(id, item, seatNumber, column);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}>
        <label>Seat item seats/space</label>
        <select
          name=""
          id=""
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}>
          <option value="seater">seater</option>
          <option value="sleeper">sleeper</option>
          <option value="space">space</option>
        </select>
        <label>seat number</label>
        <input
          type="text"
          name=""
          id=""
          value={seatNumber}
          onChange={(e) => {
            setSeatNumber(e.target.value);
          }}
        />
        <label>Sealect Column</label>
        <select
          name=""
          id=""
          value={column}
          onChange={(e) => {
            setCulumn(e.target.value);
          }}>
          <option value="col1">col1</option>
          <option value="col2">col2</option>
          <option value="col3">col3</option>
          <option value="col4">col4</option>
        </select>
        <button>Add item</button>
      </form>
    </div>
  );
};

export default Addseat;
