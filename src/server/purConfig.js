let path = require('path');
let Validator = require('jsonschema').Validator;

class PurConfig {
  constructor(logger) {
    this.logger = logger;
    this.configSchema = {
      'id': '/Config',
      'type': 'object',
      'properties': {
        'host': {
          'type': 'string'
        },
        'mail_user': {
          'type': 'string'
        },
        'mail_password': {
          'type': 'string'
        },

      }
    };
    this._initialize(path.join(__dirname, '../../.env.json'));
  }

  _initialize(configFilePath) {
    let fs = require('fs');
    try {
      this.config = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
      this._readFromEnvironmentVariables();
      this._validateConfig();
    } catch (err) {
      this.logger.info(`could not load ${configFilePath}. Now trying to load only from environment variables`);
      this.config = {};
      this._readFromEnvironmentVariables();
      this._validateConfig();
    }
  }

  _readFromEnvironmentVariables() {
    Object.keys(this.configSchema.properties).forEach(requiredParam => {
      if (requiredParam in process.env) {
        if (this.configSchema.properties[requiredParam].type === 'number') {
          this.config[requiredParam] = parseFloat(process.env[requiredParam]);
        } else if (this.configSchema.properties[requiredParam].type === 'boolean') {
          this.config[requiredParam] = (process.env[requiredParam] === 'true');
        } else {
          this.config[requiredParam] = process.env[requiredParam];
        }
      }
    });
  }

  _validateConfig() {
    let configValidator = new Validator();
    let validationResult = configValidator.validate(this.config, this.configSchema);
    if (validationResult.errors.length > 0) {
      this.logger.error('.env.json is not valid!');
      this.logger.error(validationResult.errors);
      process.exit();
    }
  }

  get(key, fallbackValue) {
    if (key in this.config) {
      return this.config[key];
    }
    return (typeof fallbackValue === 'undefined') ? null : fallbackValue;
  }
}

module.exports = PurConfig;
