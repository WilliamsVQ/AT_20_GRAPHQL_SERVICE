import { useEffect } from 'react';
//import axios from 'axios';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { GET_USERS, DELETE_USER, GET_PHOTO } from '../../graphql/user';
import { useQuery, useMutation } from '@apollo/client'

export function Dashboard() {

  const {loading, error, data, refetch} = useQuery(GET_USERS);

  const photo = useQuery(GET_PHOTO, {
    variables: {
      filename: "828d214c-1a64-4ee0-8338-4a7479202947-asd.jpg",
    },
  });  
  
  useEffect(() => {
    refetch();
  }, [data, refetch]);

  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [
      {
        query: GET_USERS,
      },
    ],
  });

  if(loading) return <p>Loading</p>
  if(error) return <p>Error</p>


  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser({
        variables: {
          id: id,
        },
      });
    }
  };

  return (

    <TableContainer component={Paper}>
      <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Photo</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {data.users.map(user => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              
              <TableCell>
              <Box
                component="img"
                  sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                src={photo.data.photo}
                />
                {user.photo}
                </TableCell>
              <TableCell>
                <IconButton aria-label="delete" onClick={() => handleDelete(user._id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      </Table>
    </TableContainer>
  );
}