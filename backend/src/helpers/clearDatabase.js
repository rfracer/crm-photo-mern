const mongoose = require('mongoose');
require('dotenv').config();

const Task = require('../models/task');
const Client = require('../models/client');

const conn = async () => {
  await mongoose.connect(
    'mongodb+srv://admin:kinga1992@cluster0.4ww5x.mongodb.net/crm-photo-test?retryWrites=true&w=majority'
  );
};

const ClearCollections = () => {
  Task.deleteMany({}, () => {});
  Client.deleteMany({}, async () => {
    await mongoose.connection.close();
  });
};

conn();
ClearCollections();
