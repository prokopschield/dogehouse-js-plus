import * as config from 'doge-config';
import * as utils from 'doge-utils';
import * as legacy from './dogehouse-js/src/index';
const dhjs = require('./dogehouse.js');

module.exports = {
	...config,
	...utils,
	...legacy,
	...dhjs,
}
