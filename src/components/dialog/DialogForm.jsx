import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {DialogProvider, useDialog} from '../context/index'
import api from '../../services/api';


export function FormDialog() {
  const { open, setOpen } = useDialog();
  const [idPost, setIdPost] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleUpdate = async (idPost) => {
    const res = await api.put(`/posts/${idPost}`);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Digite o que deseja editar.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="post"
            label="post"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="day"
            label="day"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="month"
            label="month"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="content"
            label="content"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel action</Button>
          <Button onClick={handleUpdate}>Edit post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

/*import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import api from "../../services/api";

//!important                import {DialogProvider, useDialog} from '../context/index'
export default function FormDialog(props) {
    const [open, setOpen] = useState(false);

    const handleOpenUpdate = () => {
      setOpen(true);
    };

    const handleCloseUpdate = () => {
      setOpen(false);
    };
    const [editValues, setEditValues] = useState({
      id: props.id,
      post: props.post,
      day: props.day,
      month: props.month,
      content: props.content,
    });

    const handleUpdate = () => {
      api.put("http://localhost:3333/post", {
        id: props.id,
        post: props.post,
        day: props.day,
        month: props.month,
        content: props.content,
        checkbox: props.checkbox,
      }).then(() => {
        props.setListCard(
          props.listCard.map((value) => {
            return value.id === editValues.id
              ? {
                id: props.id,
                post: props.post,
                day: props.day,
                month: props.month,
                content: props.content,
                checkbox: props.checkbox,
                }
              : value;
          })
        );
      });
      handleCloseUpdate();
    };
    
    return (
      <div>
        <Dialog
          open={props.open}
          onClose={handleCloseUpdate}
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
              id="day"
              label="day"
              defaultValue={props.day}
              type="number"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="month"
              label="month"
              defaultValue={props.month}
              type="number"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="post"
              label="postTitle"
              defaultValue={props.post}
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="content"
              label="content"
              defaultValue={props.content}
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseUpdate} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary" onSubmit={handleUpdate}>
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
*/