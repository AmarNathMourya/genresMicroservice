const Item = require('../../models/Item');

const insertGenresRecord = (req, res) => {
  console.log('hit the controller')
  if (req.body && req.body.name && req.body.description) {
    const newItem = new Item({
      name: req.body.name,
      description: req.body.description
    });
  
    newItem.save().then(item => res.status(200).json({"ApiStatus": "Success", message: "Record Added successfully"}));
  } else {
    res.status(400).json({apiStatus: "Failure", error: "Data is missing in Body"});
  }
}

const deleteGenresRecord = (req, res) => {
  if (req.params && req.params.name) {
    Item.deleteOne({ name: req.params.name }).then(item => res.status(200).json({"ApiStatus": "Success", message: "Record Deleted successfully"}));
  } else {
    res.status(400).json({apiStatus: "Failure", error: "Delete parameter is missing"});
  }
}

const fetchGenresData = (req, res) => {
  const filter = {};
  if (req.params && req.params.name) {
    filter.name = req.params.name
  }
  Item.find(filter).then(item => res.status(200).json({"ApiStatus": "Success", data: item}));
}

module.exports = {
  insertGenresRecord,
  deleteGenresRecord,
  fetchGenresData
}