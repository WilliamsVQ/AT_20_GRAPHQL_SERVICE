import { gql } from '@apollo/client'

export const CREATE_USER = gql`
mutation($name: String, $email: String, $roleId: ID, $photo: String){
  createUser (name: $name, email: $email, roleId: $roleId, photo: $photo){
    _id
    name
    role {
      _id
      name
    }
    photo
  }
}
`
export const UPLOAD_IMAGE = gql`
  mutation singleUpload($file: Upload) {
    singleUpload(file: $file)
  }
`

export const GET_USERS = gql`
{
  users {
    _id
    name
    email
    role {
      _id
      name
    }
    photo
  }
}
`

export const DELETE_USER = gql`
mutation($id: ID) {
  deleteUser (_id: $id){
    _id
    name
  }
}
`

export const GET_PHOTO = gql`
query ($filename: String) {
  photo(filename: $filename)
}
`
export const COMPILER = gql`
mutation($file: Upload!, $language: String!){
  compiler(file: $file, language: $language)
}
`