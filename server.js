import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/ping', async (req, res) => {
  res.send({
    text: 'pong',
  });
});

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
