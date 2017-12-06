const mongoose = require('mongoose');
const User = require('../models/user');
const Nonprofit = require('../models/nonprofit');
const Skill = require('../models/skill');


const { dbURI } = require('../config/environment');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true });

User.collection.remove();
Nonprofit.collection.remove();
Skill.collection.remove();


User.create([
  {
    username: 'Person',
    firstName: 'Person',
    lastName: 'Person',
    email: 'person@person.com',
    image: '...',
    description: 'do gooder',
    address: 'road street',
    password: 'password',
    passwordConfirmation: 'password'
  }
])
  .then(users => console.log(`${users.length} users created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
