type User = {
    firstName : string
    lastName : string
}

function getfullName (user:User) {
    return `${user.firstName.toUpperCase()} ${user.lastName}`;
}

const user: User = {
    firstName : 'Al Kautsar ',
    lastName : 'Diprajaya',

};

console.log(getfullName(user));