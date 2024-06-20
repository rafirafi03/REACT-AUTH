import express from 'express';
const adminRouter = express.Router();
import {
    getUsers
} from '../controllers/adminController.js';

adminRouter.get('/users',getUsers)

export default adminRouter;