import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import produce from "immer";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    day: props.day,
    post: props.post,
    content: props.content,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditGame = () => {
    Axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      day: editValues.day,
      month: editValues.month,
      post: editValues.post,
      content: editValues.content,
    }).then(() => {
      props.setListCard(
        props.listCard.map((value) => {
          return value.id == editValues.id
            ? {
            id: editValues.id,
            day: editValues.day,
            month: editValues.month,
            post: editValues.post,
            content: editValues.content,
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteGame = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
      props.setListCard(
        props.listCard.filter((value) => {
          return value.id != editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="postedWhen"
            defaultValue={props.day}
            type="number"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="month"
            label="postedWhen"
            defaultValue={props.month}
            type="number"
            onChange={handleChangeValues}
            fullWidth
          />
            <TextField
            autoFocus
            margin="dense"
            id="post"
            label="postTitle"
            defaultValue={props.post}
            type="text"
            onChange={handleChangeValues}
            fullWidth
            />
            <TextField
            autoFocus
            margin="dense"
            id="content"
            label="postContent"
            defaultValue={props.content}
            type="text"
            onChange={handleChangeValues}
            fullWidth
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteGame()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditGame()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}