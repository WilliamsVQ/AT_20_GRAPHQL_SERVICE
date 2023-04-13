import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
//import * as yup from "yup";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react"
import {useMutation} from '@apollo/client'
import { CREATE_USER, UPLOAD_IMAGE } from "../../graphql/user";


export function Form () {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    photo: "",
  });

  const [createUser, { loading, error }] = useMutation(CREATE_USER, {
    onCompleted: () => {
      alert('User created successfully!');
      setUser({ name: '', email: '', role: '', photo:'' });
    },
  });

  const [singleUpload] = useMutation(UPLOAD_IMAGE);
  const [newImage, setnewImage] = useState(null);

const [userPhoto, setUserPhoto] = useState(null);

const handlePhotoChange = (e) => {
  setUserPhoto(e.target.files[0]);
  setnewImage(e.target.files[0]);
};

const handlePhotoUpload = async () => {
 const { data } = await singleUpload({
    variables: {
      file: newImage,
    },
  });
  return data.singleUpload;
};

  if (loading) return <p>Loading...</p>
  if (error) return `Submission error! ${error.message}`;


  const handleSubmit = async (e) => {
    e.preventDefault();
    const photoName = await handlePhotoUpload();
    console.log(photoName);
    createUser({
      variables: {
        name: user.name,
        email: user.email,
        roleId: user.role,
        photo: photoName,
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onChange={handleChange}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                onChange={handleChange}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}  
                sx={{ gridColumn: "span 4" }}
              />
              <Box sx={{ gridColumn: "span 2" }}>
                <Select
                  fullWidth
                  variant="filled"
                  label="Role"
                  name="role"
                  onChange={handleChange}
                  value={user.role}
                  error={!!touched.role && !!errors.role}
                >
                  <MenuItem value="6428ee0a8380d6915518d291">Trainer</MenuItem>
                  <MenuItem value="6428ee128380d6915518d293">Candidate</MenuItem>
                </Select>
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating..." : "Create New User"}
              </Button>
            </Box>
            <Box>
            <input
              type="file"
              name="photo"
              value={user.photo}
              onChange={handlePhotoChange}
              />
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};