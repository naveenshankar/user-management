import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import config from './webpack.config.dev';
import fetch from 'isomorphic-fetch';

const PORT = 8050;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/users', async function (req, res) {
  const wait = (ts) => new Promise((resolve) => setTimeout(()=>resolve([{},{},{},{}]), ts) );
  const feeds = await wait(2000);
  res.json(feeds);
});

const serverStartup = (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
};

app.listen(PORT, 'localhost', serverStartup);
