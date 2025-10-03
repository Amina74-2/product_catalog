const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/users.json");

function getUsers() {
    return JSON.parse(fs.readFileSync(filePath));
}

function addUser(user) {
    const users = getUsers();
    users.push(user);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

module.exports = { getUsers, addUser };
