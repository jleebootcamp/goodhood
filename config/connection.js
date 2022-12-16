const mongoose = require('mongoose');

mongoose.connect(
  //process.env.MONGODB_URI || 'mongodb://localhost/goodhood',
  process.env.MONGODB_URI || 'mongodb+srv://goodhood:Alpha123456@cluster0.vibx862.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
    
  }
);

module.exports = mongoose.connection;