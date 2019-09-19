// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error.html');
// });





// mongo.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, (err, client) => {
//       if (err) {
//         console.error(err)
//         return
//       }
//       console.log('Connected!')
//       const db = client.db('new_database');

//       const collection = db.collection('new_collection');

//       collection.find().toArray((err, items) => {
//         console.log(items)
//       })

//       client.close();
// })