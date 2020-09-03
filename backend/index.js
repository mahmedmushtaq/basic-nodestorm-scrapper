const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request-promise').defaults({
  headers: {
    Authorization: 'apikey 8ea31c48-95c3-4bcf-9db1-d6ada47565f2',
    NordApiVersion: 2,
  },
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/nordstorm', async (req, res) => {
  const numberOfTop = req.query.top;
  const keyword = encodeURIComponent(req.query.keyword);
  const url = `https://query.ecommerce.api.nordstrom.com/api/queryresults/keywordsearch/?top=${numberOfTop}&IncludeFacets=false&Keyword=${keyword}`;

  const json = await request.get(url);
  res.setHeader('Content-Type', 'application/json');
  res.send(json);
});

app.listen(4000, () => {
  console.log('server is listening on the port 4000');
});
