
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log('%s listening at', PORT || 3001); // eslint-disable-line no-console
  });
});
