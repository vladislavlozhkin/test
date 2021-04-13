const {v4: uuidv4} = require('uuid');

const reviews = [];

exports.create = async (data) => {
  reviews.push({id: uuidv4(), ...data});
}

exports.findAll = async () => {
  return reviews;
}