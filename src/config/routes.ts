import { Codefy } from '@routes/codefy';

const API = '/';

export default (app) => {
  app.use(API, Codefy);
};
