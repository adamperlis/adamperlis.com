// var express = require('express');
// var app = express();

// app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '../build'));

// // views is directory for all template files
// app.set('views', __dirname + '../build');
// app.set('view engine', 'html');

// app.get('/', function(request, response) {
//   response.render('index.html');
// });

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

'use strict';

var config  = require('gulp/config');
var http    = require('http');
var express = require('express');
var gulp    = require('gulp');
var gutil   = require('gulp-util');
var morgan  = require('morgan');

  var server = express();

  // log all requests to the console
  server.use(morgan('dev'));
  server.use(express.static(config.dist.root));

  // Serve index.html for all routes to leave routing up to Angular
  server.all('/*', function(req, res) {
      res.sendFile('index.html', { root: 'build' });
  });

  // Start webserver if not already running
  var s = http.createServer(server);
  s.on('error', function(err){
    if(err.code === 'EADDRINUSE'){
      gutil.log('Development server is already started at port ' + config.serverport);
    }
    else {
      throw err;
    }
  });

  s.listen(config.serverport);