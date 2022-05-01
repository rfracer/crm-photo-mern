const mongoose = require('mongoose');
require('dotenv').config();
const Task = require('../models/task');
const Client = require('../models/client');

const conn = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

const ClearCollections = () => {
  Task.deleteMany({}, () => {});
  Client.deleteMany({}, async () => {
    await mongoose.connection.close();
  });
};

conn();
ClearCollections();
