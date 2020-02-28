import { Server } from 'http';
import { app } from './server';
const port = 8080;

const server: Server = app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);

  process.on('SIGINT', function() {
    server.close(function() {
      process.exit(0);
    });
  });
});
