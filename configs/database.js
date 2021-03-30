require('dotenv').config({path: `${process.cwd()}/.env`});

const logging = (msg) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(msg);
    return true;
  }
  return false;
};

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  timezone: process.env.DB_TIMEZONE,
  dialect: 'mysql',
  logging,
  pool: {
    max: parseInt(process.env.DB_POOL_MAX) || 1,
    min: parseInt(process.env.DB_POOL_MIN) || 0,
    acquire: parseInt(process.env.DB_POOL_ACQUIRE) || 0,
    idle: parseInt(process.env.DB_POOL_IDLE) || 0,
  },
};
