const Client = require('../models/client');
const { checkAccess } = require('../helpers/checkAccess');
const ApiError = require('../helpers/ApiError');

const getAllClients = async (req, res, next) => {
  try {
    const clients = await Client.find({ user: req.user.id });
    if (!clients.length) {
      return next(new ApiError('Not found any users', 404));
    }
    res.status(200).json({ status: 200, data: clients });
  } catch (err) {
    return next(new ApiError(err, 404));
  }
};

const getAllTest = async (req, res, next) => {
  try {
    const clients = await Client.find({});
    if (!clients.length) {
      return next(new ApiError('Not found any users', 404));
    }
    res.status(200).json({ status: 200, data: clients });
  } catch (err) {
    return next(new ApiError(err, 404));
  }
};

const getClient = async (req, res, next) => {
  const client = await Client.findById(req.params.id);
  if (!client) {
    return next(new ApiError('Client of this id not found', 404));
  }
  if (!checkAccess(client, req)) {
    return next(new ApiError("You don't have access to this resource", 403));
  }
  res.status(200).json({ status: 200, data: client });
};

const addClient = async (req, res, next) => {
  const { name, category, date, value, alreadyPaid, status, address, info } =
    req.body;

  const client = await new Client({
    name,
    category,
    date,
    value,
    alreadyPaid,
    status,
    address,
    // user: req.user.id,
    info,
  }).save();

  if (!client) {
    return next(new ApiError('Error while saving to databases', 500));
  }
  res
    .status(201)
    .send({ status: 201, data: client, message: 'Client was created' });
};

const updateClient = async (req, res, next) => {
  const client = await Client.findById(req.params.id);

  if (!client) {
    return next(new ApiError('Client of this id not found', 404));
  }

  if (!checkAccess(client, req)) {
    return next(new ApiError("You don't have access to this resource", 403));
  }

  const updatedClient = await Client.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedClient) {
    return next(new ApiError('Error while saving to databases', 500));
  }

  res.status(200).json({ message: 'Ok', data: updatedClient });
};

const deleteClient = async (req, res, next) => {
  const client = await Client.findById(req.params.id);

  if (!client) {
    return next(new ApiError('Client of this id not found', 404));
  }

  if (!checkAccess(client, req)) {
    return next(new ApiError("You don't have access to this resource", 403));
  }

  try {
    client.remove();
  } catch (err) {
    return next(new ApiError(err, 500));
  }

  res.status(200).json({ message: 'Ok', data: client });
};

module.exports = {
  getAllClients,
  getClient,
  addClient,
  deleteClient,
  updateClient,
  getAllTest,
};
