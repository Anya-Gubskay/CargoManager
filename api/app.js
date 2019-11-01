const startApp = require('./appConfig');

const DEFAULT_PORT = 3000;
const app = startApp();

app.listen(DEFAULT_PORT, () => console.log(`Server has been started (port ${DEFAULT_PORT})...`));