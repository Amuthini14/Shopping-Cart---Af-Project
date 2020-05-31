const express = require("express");
const storeManagerRoutes = express.Router();
const storeManagerModel = require("./storeManagerSchema");






storeManagerRoutes.route('/').get(function(req, res) {
    storeManagerModel.find(function(err, managers) {
      if (err) {
          console.log(err);
      } else {
          res.json(managers);
      }
  });
});

storeManagerRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  storeManagerModel.findById(id, function(err, managers) {
      res.json(managers);
  });
});



storeManagerRoutes.route("/add").post(function(req, res) {
    let manager = new storeManagerModel(req.body);
    manager

      .save()
      .then(course => {
        res.status(200).json({ manager: "Store Manager added successfully" });
      })
      .catch(err => {
        res.status(400).send("Adding new Store Manager failed");
      });
});

storeManagerRoutes.route('/update/:id').put(function(req, res) {
    storeManagerModel.findById(req.params.id, function(err, manager) {
      if (!manager)
          res.status(404).send('data is not found');
      else
      manager.EmpId = req.body.EmpId;
      manager.SmId = req.body.SmId;
      manager.first_name = req.body.first_name;
      manager.last_name = req.body.last_name;
      manager.email = req.body.email;
      manager.city = req.body.city;
      manager.uname = req.body.uname;
      manager.password = req.body.password;


      manager.save().then(manager => {
              res.json('Store Manager updated');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});

storeManagerRoutes.delete("/delete/:id", (req, res) => {
    storeManagerModel.findOneAndDelete({ EmpId: req.params.id }, (err, employee) => {
    if (err) {
      res.json(err);
    } else {
      res.json("deleted successfully");
    }
  });
});





module.exports = storeManagerRoutes;