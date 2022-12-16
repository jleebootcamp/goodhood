const mongoose = require('mongoose');

mongoose.connect(
  process.env.JAWSDB_MARIA_URL || 'mongodb://localhost/goodhood',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
    
  }
);

module.exports = mongoose.connection;