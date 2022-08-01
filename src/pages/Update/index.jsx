import React, { useState, useEffect, createElement } from "react";
import api from "../../services/api";
import "./style.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { schema } from "../../validation/schema";
import styled, { ThemeProvider } from "styled-components";
// import {validate} from '../../validation/schema'
import * as C from './style'
import { Link } from "react-router-dom";
import axios from "axios";
export default function Update(){
    const [values, setValues] = useState([]);
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [content, setContent] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [post, setPost] = useState("");
    const [postData, setPostData] = useState([]);
    useEffect(() => {
      loadPost();
    }, []);
    const loadPost = async () => {
      const res = await api.get("/posts");
      console.log(res.data);
      setPostData(res.data);
    };
  
    const handleChange = (e) => {
      setValues(e.target.values);
    };
  
    const handleSubmit = async (values, id) => {
      const addPost = {
        
        day: values.day,
        month: values.month,
        post: values.post,
        content: values.content,
        checkbox: values.checkbox,
      };
      const res = await api.put(`/posts/${id}`, addPost);
    };
    const submitForm = (values) => {
      console.log(values);
    };
    const setData = (data) => {
      console.log(data);
    };
  
    return (
      <C.div className="containingComp">
       
        <C.h1> <C.div variant='llink'> <Link to="/Create"> &larr; </Link></C.div> Update Section </C.h1>
        <div className="featured---form col-md-6">
          <Formik
            validationSchema={schema}
            initialValues={{
              post: "",
              day: "",
              month: "",
              checkbox: false,
            }}
            onSubmit={(id, values) => {
              console.log(values);
              handleSubmit(id, values);
            }}
          >
            {({ values, errors, touched, handleChange }) => {
              return (
                <Form action="submit">
                  <label htmlFor="post">Posts to be updated</label>
                  <C.input
                    type="text"
                    name="post"
                    id="post"
                    placeholder="post"
                    onChange={handleChange}
                    values={values.post}
                    error={touched.post && Boolean(errors.post)}
                    helpertext={touched.post && errors.post}
                  />
                  <label htmlFor="day">Day when last updated</label>
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
                  <label htmlFor="month">Month when last updated</label>
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
                  <label htmlFor="content">Content to be updated</label>
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
                    I [still] agree to the company Terms and Conditions.
                  </label>
                  <C.input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    variant='checkbox'
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
      </C.div>
    );
  }
//o que precisa fazer:
// fazer um axios.get(db)
// com base no que tiver, dar as opcoes de editar os campos
//reaproveitar o codigo de formulario e validacao do create
// depois de atualizar, poder salvar ou cancelar e ja renderizar na tela o objeto alterado
//para achar o objeto a ser deletado: query selector na rota de url onde esta o get (/create) e fazer axios.put('url'/).innerhtml, usando props para pushar o input novo
