const { connect, connection } = require('mongoose');

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://goodhood:Alpha123456@cluster0.vibx862.mongodb.net/?retryWrites=true',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
