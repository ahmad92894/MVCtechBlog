const {User} = require('../models');
const seedUserdata = async () => {
    const userData = 


[
{
username:"TimForPresident",
password:"Password1"
},
{
username:"EmpressCynthia",
password:"Password2"
},
{
username:"JackElJefe",
password:"Password3"
},
{
username:"QueenKanika",
password:"Password4"
}
]
try {
    await User.bulkCreate(userData);
    console.log('User seeded');
} catch (err) {
    console.error('error seeding user', error);
}
};

module.exports = seedUserdata;





