const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// CREATE SERVER
const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
// app.all('/*', function(req, res, next) {
  // res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    return res.send(200);
  } else {
    return next();
  }
});

// ROUTES
const api = require('./routes/api');
app.use('/api/', api);

app.options('*', cors());



app.post('/', cors(), (req, res) => {
  // const posts = await loadPostsCollection();
  // await posts.insertOne({
  //   text: req.body.text,
  //   createdAt: new Date()
	// });
	console.log(req);
  res.status(200).send();
});

// app.post(/.*/, cors(), function (req, res, next) {
// 	res.status(200).json({ message: "It worked!" });
//   // res.json({msg: 'This is CORS-enabled for all origins!'});
// })

// HANDLE PRODUCTION
// if(process.env.NODE_ENV === 'production') {
	// STATIC FOLDER
	app.use(express.static(path.join(__dirname, 'public')));
	// HANDLE SPA
	app.get(/.*/, cors(), (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
// }

// DEFINE PORT
const port = process.env.PORT || 5000;

// RUN SERVER
app.listen(port, () => console.log(`server started on port ${port}`));
