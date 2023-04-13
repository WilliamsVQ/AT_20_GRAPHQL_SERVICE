import User from '../models/User.js'
import Role from '../models/Role.js';
import fs from "fs";
import { createWriteStream } from "fs";
import  GraphQLUpload  from 'graphql-upload/GraphQLUpload.mjs';
import path from 'path';
import { uuid } from 'uuidv4';
import axios from 'axios'
import FormData from 'form-data';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const saveImagesWithStream = ({ filename, mimetype, stream }) => {

    const uniqueId = uuid();
    const path = `uploads/${uniqueId}-${filename}`;
    const name = `${uniqueId}-${filename}`;
    return new Promise((resolve, reject) =>
      stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ path, name, mimetype }))
      .on("error", reject)
    );
  };

export const resolvers = {

    Upload: GraphQLUpload,

    Query: {
        users: async() => await User.find(),
        user: async(_, {_id}) => await User.findById(_id),
        roles: async() => await Role.find(),
        role: async(_, {_id}) => await Role.findById(_id),
        photo: (parent, { filename }, context) => {
            const filePath = path.join(__dirname, '/uploads', filename);
            console.log(filePath);
            return filePath;
        },
    },  

    Mutation: {

        compiler: async (parent, { file, language }) => {
            const { filename, mimetype, createReadStream } = await file;
            const stream = createReadStream();
            const upload = await saveImagesWithStream({ filename, mimetype, stream });
            console.log(fs.createReadStream(`/app/user/uploads/${upload.name}`));
            const form = new FormData();
            form.append('file', fs.createReadStream(`/app/user/uploads/${up.name}`));
            form.append('language', language);
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:9292/api/v1.0/compiler',
                headers: { 
                  ...data.getHeaders()
                },
                data : data
              };
              
              return axios.request(config)
              .then((response) => {
                console.log(JSON.stringify(response.data));
              })
              .catch((error) => {
                console.log(error);
              });
        },

        createRole: async (_, {name}) => {
            const role = new Role({
                name
            })
            const roleSaved = await role.save();
            return roleSaved
        },

        createUser: async (_, { name, email, roleId, photo}) => {
            const user = new User({
              name,
              email,
              roleId,
              photo,
            })      
            const savedUser = await user.save();
            return savedUser;
          },

        deleteUser: async (_, {_id}) => {
            const deleteUser = await User.findByIdAndDelete(_id);
            if (!deleteUser) throw new Error('User not found');
            await Role.deleteMany({userId: deleteUser._id})
            return deleteUser;
        },

        deleteRole: async (_, {_id}) => {
            const deleteRole = await Role.findByIdAndDelete(_id);
            if (!deleteRole) throw new Error('Role not found');
            return deleteRole;
        },

        updateUser: async (_, args) => {
            const updateUser = await User.findByIdAndUpdate(args._id, args, {new: true});
            if(!updateUser) throw new Error('User not found');
            return updateUser;
        },
        singleUpload: async (_, args) => {
            console.log(args);
            const { filename, mimetype, createReadStream } = await args.file;
            const stream = createReadStream();
            const file = await saveImagesWithStream({ filename, mimetype, stream });
            console.log(file.name);
            return file.name;
        },

    },
        User: {
            role: async(user) => await Role.findById(user.roleId),
    },
        Role: {
            users: async(role) => await User.find({roleId: role._id}),
    },
}

