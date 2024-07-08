const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://shekki7798:!Cooper22!@merncluster.iej6lzs.mongodb.net/?retryWrites=true&w=majority&appName=MernCluster';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
