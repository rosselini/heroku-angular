var express = require("express");
    api = require('./routes/api'),

app = module.exports = express();

app.locals.pretty = true;
app.use(express.logger());
app.use(express.bodyParser());
app.use(app.router);
app.use('/js', express.static(__dirname + '/js'));
app.set('views', __dirname + 'js/views');
app.engine('html', require('ejs').renderFile);

app.get('/', api.index);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
