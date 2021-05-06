const Item = require('../../models/Item');

const insertGenresRecord = async(req, res) => {
  console.log('hit the controller')
  try {
    if (req.body && req.body.name && req.body.description) {
      await Item.create({
        name: req.body.name,
        description: req.body.description
      });
      return res.status(200).json({"ApiStatus": "Success", message: "Record Added successfully"})
    } else {
      res.status(400).json({apiStatus: "Failure", error: "Data is missing in Body"});
    }
  }
  catch(error) {
    res.status(400).json({apiStatus: "Failure", error: "Error while innserting record"});
  }
}

const deleteGenresRecord = async (req, res) => {
  try {
    if (req.params && req.params.name) {
      await Item.deleteOne({ name: req.params.name });
      return res.status(200).json({"ApiStatus": "Success", message: "Record Deleted successfully"})
  
    } else {
      res.status(400).json({apiStatus: "Failure", error: "Delete parameter is missing"});
    }
  } 
  catch(error) {
    res.status(400).json({apiStatus: "Failure", error: "Error While Delete"});
  }
}

const fetchGenresData = async(req, res) => {
  try{
    const filter = {};
    if (req.params && req.params.name) {
      filter.name = req.params.name
    }
    const item = await Item.find(filter);
    return res.status(200).json({"ApiStatus": "Success", data: item})
  }
  catch(error) {
    res.status(400).json({"ApiStatus": "Failure", error: "Error While Fetching data"})
  }
}

module.exports = {
  insertGenresRecord,
  deleteGenresRecord,
  fetchGenresData
}