import '@babel/polyfill/noConflict';
import server from './server';

const options = {
  port: process.env.PORT || 4000,
  cors: {
    credentials: true,
    origin: [process.env.FRONTEND_ENDPOINT]
  }
};

server.start(options, () => {
  console.log('The server is up!');
});
