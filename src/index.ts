import { Server } from 'http';
import { app } from './server.js';
const port = 8080;

const server: Server = app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);

  process.on('SIGINT', function () {
    server.close(function () {
      process.exit(0);
    });
  });
});
