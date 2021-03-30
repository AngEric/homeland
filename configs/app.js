const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const i18n = require('i18n');
const dayjs = require('dayjs');
// const apiRoutesV1 = require('../routes/v1');
const expressHealthCheck = require('express-healthcheck');
const Redis = require('ioredis');
const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

const logger = require('../services/logger');
const database = require('../databases/models');
console.log(`Server Origin Time: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`);

const app = express();

app.use('/healthcheck', expressHealthCheck({
  healthy: () => {
    return {status: 'Healthy!'};
  },
  test: async (callback) => {
    try {
      await database.sequelize.authenticate();
      logger.info(`MySQL connection OK!`);
      await redis.get('placeholder');
      logger.info(`Redis connection OK!`);
      callback();
    } catch (err) {
      logger.error(`Health check error`, err);
      callback({status: 'Unhealthy!'});
    }
  },
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

i18n.configure({
  locales: ['en', 'id'],
  defaultLocale: 'id',
  directory: __dirname + '/../locales',
  register: global,
  header: 'locale',
});
app.use(i18n.init);

// Maintenance mode
app.use((req, res, next) => {
  if (process.env.MAINTENANCE_MODE === 'true') {
    return res.status(503).json({message: 'Server is under maintenance.'});
  }
  next();
});

// Routes
// app.use('/v1', apiRoutesV1);

module.exports = app;
