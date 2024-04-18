import express, { Router } from 'express';
import { loginController } from '../controllers/loginController';

export const loginRouter: Router = express.Router();

loginRouter.post('/', loginController.validateUsername, loginController.checkPassword, (req, res) => {
  res.status(200).json();
});
