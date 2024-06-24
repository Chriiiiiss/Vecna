import express from 'express';
import { config } from './config/config';
import { testRouter } from './routes/testRouter';
import 'dotenv/config';

const app = express();
const port = config.PORT;

app.use(express.json());
app.use(testRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
