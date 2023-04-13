import { Button, TextField} from "@mui/material";
//import { Formik } from "formik";
//import useMediaQuery from "@mui/material/useMediaQuery";
//import Header from "../../components/Header";
import { useState } from "react"
import {useMutation} from '@apollo/client'
import { COMPILER } from "../../graphql/user";


export function Workshop () {
  const [compiler, { data }] = useMutation(COMPILER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const file = event.target.file.files[0];
    const language = event.target.language.value;
    await compiler({ variables: { file, language } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" />
      <input type="text" name="language" />
      <button type="submit">Submit</button>
    </form>
  );
};