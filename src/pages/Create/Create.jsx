import React, { useState, useEffect, createElement, useContext } from "react";
import api from "../../services/api";
import "./style.css";
import { Formik, Form, Field, FieldArray, withFormik } from "formik";
import { schema } from "../../validation/schema";
import * as C from "./styles.js";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import people from 'localdb'

export default function Create() {
  // states
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = useState([]);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [content, setContent] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [post, setPost] = useState("");
  const [postData, setPostData] = useState([]);
  const [idPost, setIdPost] = useState("");
  const [postInfo, getPostInfo] = useState({
    post: "",
    day: "",
    month: "",
    content: ""
  });
  //effect
  useEffect(() => {
    loadPost();
  }, []);
  //handles
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setValues(e.target.values);
  };

  const handleUpdate = async (idPost, values) => {
    const updatePost = {
      day: values.day,
      month: values.month,
      post: values.post,
      content: values.content,
      checkbox: values.checkbox,
    };
    const res = await api.put(`/posts/${idPost}`, updatePost);
  };

  const handleSubmitUpdate = (idPost, values) => {
    handleUpdate(idPost, values);
    loadPost();
  };

  // http
  const loadPost = async () => {
    const res = await api.get("/posts");
    setPostData(res.data);
  };

  const getSinglePost = async (id) => {
    const res = await api.get(`/posts/${id}`);
  };

  const remove = async (id) => {
    const res = await api.delete(`/posts/${id}`);
    loadPost();
  };

  const handleSubmit = async (values) => {
    const addPost = {
      day: values.day,
      month: values.month,
      post: values.post,
      content: values.content,
      checkbox: values.checkbox,
    };
    api.post("/posts", addPost);
  };
  //funcoes
  const submitForm = (values) => {
    console.log(values);
  };
  const setData = (data) => {
    console.log(data);
  };
  // consts
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  //opcoes para poder usar o postsTable: initial values em outro componente, recebendo as props do map
  
  const savedValues = {
    posts: "",
    day:"",
    month:"",
    content:"",
    checkbox:""
  }

  const initVal = {
    post: "",
    day: "",
    month: "",
    checkbox: false,
  }

  return (
    <C.div className="containingComp">
      <C.h1>
        {" "}
        <C.div variant="llink">
          {" "}
          <Link to="/"> &larr; </Link>
        </C.div>{" "}
        React Crud Operations{" "}
      </C.h1>
      <div className="featured---form col-md-6">
        <Formik
          validationSchema={schema}
          initialValues={initVal}
          onSubmit={(values) => {
            console.log(values);
            handleSubmit(values);
          }}
        >
          {({ values, errors, touched, handleChange }) => {
            return (
              <Form action="submit">
                <label htmlFor="post">Posts</label>
                <C.input
                  type="text"
                  name="post"
                  id="post"
                  placeholder="post" // precisa ser o valor anterior (prevVal)
                  onChange={handleChange}
                  values={values.post}
                  error={touched.post && Boolean(errors.post)}
                  helpertext={touched.post && errors.post}
                />
                <label htmlFor="day">Day</label>
                <C.input
                  type="number"
                  name="day"
                  id="day"
                  placeholder="day"
                  onChange={handleChange}
                  values={values.day}
                  error={touched.day && Boolean(errors.day)}
                  helpertext={touched.day && errors.day}
                />
                <label htmlFor="month">Month</label>
                <C.input
                  type="number"
                  name="month"
                  id="month"
                  placeholder="month"
                  onChange={handleChange}
                  values={values.month}
                  error={touched.month && Boolean(errors.month)}
                  helpertext={touched.month && errors.month}
                />
                <label htmlFor="content">Content</label>
                <C.input
                  type="text"
                  name="content"
                  id="content"
                  placeholder="content"
                  onChange={handleChange}
                  values={values.content}
                  error={touched.content && Boolean(errors.content)}
                  helpertext={touched.content && errors.content}
                />

                <label htmlFor="checkbox" id="checkboxtext">
                  I agree to the company <br /> Terms and Conditions.
                </label>
                <C.input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  onChange={handleChange}
                  values={values.checkbox}
                  error={touched.checkbox && Boolean(errors.checkbox)}
                  helpertext={touched.checkbox && errors.checkbox}
                />
                <button id="submitbutton" type="submit" onSubmit={handleSubmit}>
                  Submit Post
                </button>
              </Form>
            );
          }}
        </Formik>
        <div />
      </div>
      <hr />

      {postData?.map((postsTable, key) => {
        return (
          <C.tr key={postsTable.id}>
            <C.th id="number" variant="day" scope="column">
              {" "}
              Day posted: {postsTable.day}
            </C.th>

            <C.th id="number" scope="column">
              Month posted: {postsTable.month}
            </C.th>

            <C.th scope="column"> Post title: {postsTable.post}</C.th>

            <C.th scope="column"> What was written:{postsTable.content}</C.th>

            <C.th scope="column">
              <C.div>
                {" "}
                <C.button
                  variant="outlined"
                  onClick={() => {
                    handleClickOpen();
                    setIdPost(postsTable.id);
                    getSinglePost(postsTable.id);
                    getPostInfo(postsTable)
                  }}
                >
                  Update
                </C.button>
              </C.div>
            </C.th>
            <C.th scope="column">
              <C.button
                variant="delete"
                className="col-xs-2"
                onClick={() => {
                  remove(postsTable.id);
                }}
              >
                Delete
              </C.button>
            </C.th>
          </C.tr>
        );
      })}
      <Dialog open={open} onClose={handleClose}>
        <Formik
          initialValues={savedValues || initVal} //criar state pra armazenar o que esta no objeto segundo o id
          onSubmit={(values) => {
            handleSubmitUpdate(idPost, values);
          }}
          enableReinitialize={true}
        >
          {({ values, errors, touched, handleChange }) => {
            return (
              <Form>
                      <>
                        
                          <div>
                            <DialogTitle>Edit Post</DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                Type in the information to update the post.
                              </DialogContentText>
                              <TextField //passar props pros inputs. como?
                                name="post"
                                autoFocus
                                margin="dense"
                                id="post"
                                defaultValue={postInfo.post}
                                onChange={handleChange}
                                values={values.post}
                                type="post"
                                fullWidth
                                variant="standard"
                              />
                              <TextField
                                autoFocus
                                margin="dense"
                                id="day"
                                name="day"
                                defaultValue={postInfo.day}
                                onChange={handleChange}
                                values={values.day}
                                label="dayUpdated"
                                type="number"
                                fullWidth
                                variant="standard"
                              />
                              <TextField
                                autoFocus
                                margin="dense"
                                id="month"
                                name="month"
                                defaultValue={postInfo.month}
                                onChange={handleChange}
                                values={values.month}
                                label="monthUpdated"
                                type="number"
                                fullWidth
                                variant="standard"
                              />
                              <TextField
                                autoFocus
                                margin="dense"
                                id="content"
                                name="content"
                                defaultValue={postInfo.content}
                                onChange={handleChange}
                                values={values.content}
                                label="postContent"
                                type="text"
                                fullWidth
                                variant="standard"
                              />
                              <FormControl component="fieldset">
                                <FormLabel component="legend">
                                  {" "}
                                  <Link to={"/"}> Terms and conditions. </Link>
                                </FormLabel>
                                <FormGroup aria-label="position" row>
                                  <FormControlLabel
                                    value="checked"
                                    control={<Checkbox disabled checked />}
                                    label="You must continue accepting the Terms to update a post."
                                    labelPlacement="end"
                                  />
                                </FormGroup>
                              </FormControl>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose}>Cancel</Button>
                              <Button type="submit">Edit</Button>
                            </DialogActions>
                          </div>
                        
                      </>
                    )
               
              </Form>
            );
          }}
        </Formik>
      </Dialog>
    </C.div>
  );
}

