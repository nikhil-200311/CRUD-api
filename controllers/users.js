// S:\API\controllers\users.js
import { v4 as uuid } from 'uuid';
import User from '../models/userModel.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        
        console.log(`Users in the database: ${users}`);
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new User({ ...user, id: uuid() });

    try {
        await newUser.save();
        
        console.log(`User [${user.username}] added to the database.`);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await User.findByIdAndRemove(id);

        console.log(`User with id ${id} has been deleted`);
        res.status(204).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, age } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { username, age }, { new: true });

        console.log(`Username has been updated to ${username}. Age has been updated to ${age}`);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
