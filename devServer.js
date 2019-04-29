import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import config from './webpack.config.dev';
import fetch from 'isomorphic-fetch';
import q from 'q';
import backend from './bin/backend';
import window from 'window-or-global';

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
  try{
    backend(window, q);
    const endPoint = window.scalyrBackend;
    const users = await endPoint.getUsers();
    res.json(users);
  } catch(e) {
    res.json([{}]);
  }
});


app.get('/api/users/resendInvite', async function (req, res) {
  try{
    backend(window, q);
    const endPoint = window.scalyrBackend;
    const users = await endPoint.resendInvite();
    res.json(users);
  } catch(e) {
    res.json([{}]);
  }
});

app.get('/api/users/revokeAccess', async function (req, res) {
  try{
    backend(window, q);
    const endPoint = window.scalyrBackend;
    const users = await endPoint.revokeAccess();
    res.json(users);
  } catch(e) {
    res.json([{}]);
  }
});

app.get('/api/users/revokeInvite', async function (req, res) {
  try{
    backend(window, q);
    const endPoint = window.scalyrBackend;
    const users = await endPoint.revokeAccess();
    res.json(users);
  } catch(e) {
    res.json([{}]);
  }
});

const serverStartup = (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
};

app.listen(PORT, 'localhost', serverStartup);
