'use strict';

/**
 * dynamic-zone service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dynamic-zone.dynamic-zone');
