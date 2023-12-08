import express from "express";
import {
    getUsers, 
    getUserBynpm,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:npm', getUserBynpm);
router.post('/users', createUser);
router.patch('/users/:npm', updateUser);
router.delete('/users/:npm', deleteUser);


export default router;