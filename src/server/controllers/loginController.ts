import { MiddlewareFunction } from "../types";

interface LoginController {
  validateUsername: MiddlewareFunction,
  checkPassword: MiddlewareFunction,
}

export const loginController: LoginController = {
  validateUsername (req, res, next) {
    console.log('validate username');
    return next();
  },
  checkPassword(req, res, next){
    console.log('check password');
    return next();
  }
};
