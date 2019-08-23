import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import sassMiddleware from 'node-sass-middleware';
import exphbs from 'express-handlebars';

import {
  handle404,
  handleErrorAndShowErrorPage,
} from '@middlewares/error-handlers';
import router from '@routes';
import { ADMIN_UI_PATH } from '@config';

const app = express();
const saas = sassMiddleware({
  src: path.join(__dirname, 'assets'),
  dest: path.join(__dirname, 'assets'),
  indentedSyntax: true,
  sourceMap: true,
});

app
  .engine('hbs', exphbs({ extname: 'hbs' }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(saas)
  .use(express.static(path.join(__dirname, 'assets')))
  .use('/admin', express.static(ADMIN_UI_PATH))
  .use('/', router)
  .use(handle404)
  .use(handleErrorAndShowErrorPage);

module.exports = app;
