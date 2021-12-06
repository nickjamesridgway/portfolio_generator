const db = require('./connection');
const { User } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  // const users = await User.insertMany([
  //   { name: 'John' },
  //   { name: 'Jack' },
  // ]);

  // console.log("Users have been seeded.");

  // await Project.deleteMany();

  const users = await User.insertMany([
    {
      firstName: 'John',
      lastName: 'Johnson',
      email: 'johnjohnson@gmail.com',
      bio: 'about me',
      projects: 'my projects'
    },
    
  
 ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    bio: 'about me',
    projects: 'my projects'
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    bio: 'about me',
    projects: 'my projects'
  });

  console.log('users seeded');

  process.exit();
});
