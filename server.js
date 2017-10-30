var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
if (!isProduction) {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
  })
  .listen(3000, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://0.0.0.0:3000');
  });
} else {
  // production, just run the server, not webpack-dev
  const app = express();
  const publicPath = path.resolve(__dirname, 'dist');
  app.use('/build', express.static(publicPath));

  const appHtmlHandler = (req, res) => {
    // handle annoying favicon.ico requests
    if (req.url === '/favicon.ico') {
      res.status(200).send({ 'Content-Type': 'image/x-icon' });
      res.end();
      return;
    }
    res.sendFile(path.join(__dirname, 'index.html'));
  };
  app.get('*', appHtmlHandler);
  app.listen(3000, () => {
    console.log(`App listening on port 3000. [PRODUCTION]`);
  });

}

