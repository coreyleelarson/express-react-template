import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send({ message: 'hello world!!!' });
});

app.listen(5000, () => {
  console.log('Application listening on port', 5000);
});