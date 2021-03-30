const parseAxiosError = (e) => {
  let errDetail;
  if (e.response) {
    errDetail = {
      error: e.name,
      url: e.response.config?.url,
      status: e.response.status,
      status_text: e.response.statusText,
      response_data: e.response.data,
    };
  }
  console.info(JSON.stringify(errDetail));
  return `${e.name}: ${e.message} from ${e.config?.url} with result ${e.response?.data || 'no data'}`;
};

module.exports = {
  error: (...value) => {
    const error = value.map((e) => e.isAxiosError === true ? parseAxiosError(e) : e);
    console.error('ERROR:', error);
  },
  log: (...value) => {
    console.log('LOG:', ...value);
  },
  info: (...value) => {
    console.info('INFO:', ...value);
  },
  debug: (...value) => {
    console.debug('DEBUG:', ...value);
  },
  warn: (...value) => {
    console.warn('WARN:', ...value);
  },
};
