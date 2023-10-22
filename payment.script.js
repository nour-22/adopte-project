var cron = require('node-cron');

cron.schedule('0 0 * * *', () => {
  console.log('running a task every minute');
});
