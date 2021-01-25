import bodyParser from 'body-parser';
import cors from 'cors';

export default (app) => {
  // support application/json type post data
  app.use(bodyParser.json());
  // support application/x-www-form-urlencoded post data
  app.use(bodyParser.urlencoded({ extended: false }));
  // enable cors
  app.use(cors());
};