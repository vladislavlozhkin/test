const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

require('./routes/review.route')(app);

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
