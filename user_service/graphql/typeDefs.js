import {gql} from 'graphql-tag'

export const typeDefs = gql`

    scalar File
    scalar Upload
    type Query{
        users: [User]
        user(_id: ID): User
        role(_id: ID): Role
        roles: [Role]
        photo(filename: String): String
        
    }
    type Mutation {
        createRole(name: String): Role
        createUser(name: String, email: String, roleId: ID, photo: String): User
        updateRole(_id: ID, name: String): Role
        updateUser(_id: ID, name: String, email: String, roleId: ID): User
        deleteRole(_id: ID): Role
        deleteUser(_id: ID): User
        singleUpload(file: Upload): String
        compiler(file: Upload!, language: String!): String
    }
    type Role {
        _id: ID
        name: String
        createdAt: String
        updatedAt: String
        users: [User]
    }
    type User {
        _id: ID
        name: String
        email: String
        photo: String
        createdAt: String
        updatedAt: String
        role: Role
    }

    type comp {
        stdout: String
        stderr: String
    }
`