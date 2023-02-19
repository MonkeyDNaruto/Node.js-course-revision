const usersDB = {
    users: require("../model/users.json"),
    setUsers: function (data) { this.users = data}
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewUsers = async (req, res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd) return res.status(400).json({ 'message': "Username and password are required"})
    // check for duplicate in db
    const duplicate = usersDB.users.find(person => person.username === user)
    if(duplicate) return res.sendStatus(409) // conflict
    try{
        // encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        // store the new user
        const newUser = {"username": user, "password": hashedPwd}
        usersDB.setUsers([...usersDB.users, newUser])
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.js'),
            JSON.stringify(usersDB.users)
        );
        console.log(usersDB.users)
        res.status(200).json({"sucess": `New user ${user} created!`});
    } catch (err) {
        res.status(500).json({'message': err.message });
    }
}

module.exports = { handleNewUsers }