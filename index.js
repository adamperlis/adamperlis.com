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

  var server = express();

  app.set('port', (process.env.PORT || 5000));

  // log all requests to the console
  server.use(express.static('build'));

  // Serve index.html for all routes to leave routing up to Angular
  server.all('/*', function(req, res) {
      res.sendFile('index.html', { root: 'build' });
  });

  // Start webserver if not already running
  var s = http.createServer(server);
  s.on('error', function(err){
    if(err.code === 'EADDRINUSE'){
      gutil.log('Development server is already started at port ' + app.get('port'));
    }
    else {
      throw err;
    }
  });

  s.listen(app.get('port'));