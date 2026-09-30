"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getfullName(user) {
    return `${user.firstName.toUpperCase()} ${user.lastName}`;
}
const user = {
    firstName: 'Al Kautsar ',
    lastName: 'Diprajaya',
};
console.log(getfullName(user));
//# sourceMappingURL=test.js.map