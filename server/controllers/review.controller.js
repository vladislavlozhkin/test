const ReviewService = require('../services/review.service');

exports.create = async (req, res) => {
  const data = {
    reviewText: req.body.reviewText,
    reviewText1: req.body.reviewText1,
    reviewText2: req.body.reviewText2,
    reviewText3: req.body.reviewText3,
  };

  try {
    await ReviewService.create(data);
    res.send({success: true});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await ReviewService.findAll()
    res.send(data);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};
