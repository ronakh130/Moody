import express, { Application, ErrorRequestHandler } from 'express';
import { MiddlewareFunction } from './types';
import { loginRouter } from './routes/loginRouter';

const port = 3000;
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pageNotFoundHandler: MiddlewareFunction = (req, res) => res.status(404).send('Sorry, Page not found');

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
};

app.use('/login', loginRouter);
app.use(pageNotFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

export default app;