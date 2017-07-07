const request = require('request');
/**
 * getDefer
 * @return {object} deferred
 */
const getDefer = () => {
  const deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
};

exports.DEFAULTS = {
  key: '',
  timeout: 5000
};

exports.sendRequest = (params = {}, timeout = 5000) => {
  const deferred = getDefer();
  request({
    method: 'POST',
    url: 'http://www.tuling123.com/openapi/api',
    headers: [{
      name: 'content-type',
      value: 'application/x-www-form-urlencoded'
    }],
    timeout: parseInt(timeout, 10),
    form: params
  }, (err, res) => {
    if (err) {
      deferred.reject(err);
    }
    deferred.resolve(JSON.parse(res.body));
  });
  return deferred.promise;
};