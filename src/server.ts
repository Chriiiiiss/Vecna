import express from 'express';
import { config } from './config/config';

const app = express();
const port = config.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
