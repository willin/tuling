import {DEFAULTS, sendRequest} from './common';

module.exports = class TULING {
  constructor(options) {
    TULING.options = Object.assign({}, DEFAULTS, options);
    this.send = async(opts) => {
      this.params = Object.assign({}, TULING.options, opts);
      const timeout = this.params.timeout;
      delete this.params.timeout;
      return sendRequest(this.params, timeout);
    };
  }
};
