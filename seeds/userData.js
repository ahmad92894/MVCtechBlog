const {User} = require('../models');
const userData = async () => {
    const data = 


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
    await User.bulkCreate(data);
    console.log('User seeded');
} catch (err) {
    console.error('error seeding user', error);
}
};

module.exports = userData;





