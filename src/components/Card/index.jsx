import React from "react";
import {FormDialog} from "../dialog/DialogForm";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.post}
        day={props.day}
        month={props.month}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.post}</h1>
        <p className="card-id">{props.id}</p>
        <p className="card-day">{props.day}</p>
        <p className="card-month">{props.month}</p>
        <h3 className="card-content">{props.content}</h3>
      </div>
    </>
  );
}