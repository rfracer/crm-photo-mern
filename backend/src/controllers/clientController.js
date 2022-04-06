const Client = require('../models/client');
const { checkAccess } = require('../helpers/checkAccess');

const getAllClients = async (req, res) => {
  const clients = await Client.find({ user: req.user.id });
  res.status(200).json({ message: 'Ok', data: clients });
};

const getClient = async (req, res) => {
  const client = await Client.findById(req.params.id);
  if (!client) {
    res.status(400).json({ message: 'Not found' });
  }
  if (!checkAccess(client, req)) {
    return res.status(200).json({ message: 'Ok', data: client });
  }
  res.status(403).json({ message: 'You dont have access for this resource' });
};

const addClient = async (req, res) => {
  const client = await new Client({
    name: req.body.name,
    category: req.body.category,
    date: req.body.date,
    value: req.body.value,
    alreadyPaid: req.body.alreadyPaid,
    status: req.body.status,
    address: req.body.address,
    user: req.user.id,
    info: req.body.info,
  }).save();

  if (!client) {
    return res.status(400).send({ messsage: 'Error while creating' });
  }
  res.status(201).send({ data: client, message: 'Client was created' });
};

const updateClient = async (req, res) => {
  const client = await Client.findById(req.params.id);

  if (!client) {
    return res.status(400).json({ message: 'Not found' });
  }

  if (!checkAccess(client, req)) {
    return res
      .status(403)
      .json({ message: 'You dont have access for this resource' });
  }
  const updatedClient = await Client.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({ message: 'Ok', data: updatedClient });
};

const deleteClient = async (req, res, next) => {
  const client = await Client.findById(req.params.id);

  try {
    if (!client) {
      res.status(400);
      throw new Error('My error');
    }
  } catch (err) {
    return next(err);
  }
  if (!checkAccess(client, req)) {
    res.status(403);
    throw new Error('My error');
    //.json({ message: 'You dont have access for this resource' });
  }
  client.remove();
  res.status(200).json({ message: 'Ok', data: client });
};

module.exports = {
  getAllClients,
  getClient,
  addClient,
  deleteClient,
  updateClient,
};
