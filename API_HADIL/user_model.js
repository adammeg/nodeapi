const User = require("./user_schema");

exports.getUsers = (req, res) => {
    User.find({})
      .then((users) => {
        res.status(200).json({ users });
      })
      .catch((error) => {
        res.satus(400).json({ error });
      });
  },

exports.addUser = (req, res) =>{
    let newUser = new User ({
        ...req.body,
    });
    newUser.save()
    .then((user) =>{
        res.status(201).json({user})
    }).catch((error) => res.status(400).json({ error }))
},

exports.deleteUser = (req,res) =>{
    const id = req.params.id 
    User.findOneAndDelete({id})
    .then(() => {res.status(201).json({message : "user deleted"})})
    .catch((error)=> res.staus(400).json({error})) 
},

exports.updateUser = (req,res) =>{
    const id = req.params.id 
    User.findByIdAndUpdate({id}, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({message : "user updated"}))
    .catch((error)=> res.staus(400).json({error})) 
}