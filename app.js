const cron = require('node-cron');
const { syncDB } = require('./tasks/syncDB');

console.log('Inicio de la app');

cron.schedule('1-59/5 * * * * *', syncDB);
