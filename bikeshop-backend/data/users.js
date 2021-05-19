
import bcrypt from 'bcryptjs';
//import orderSchema from '../models/orderModel';

//const { default: userSchema } = require("../models/userModel");

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Money',
        email: 'johnmoney@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Julia Cash',
        email: 'juliacash@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
];


export default users;