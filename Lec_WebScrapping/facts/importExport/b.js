let name = "steve";
let age = 100;

// module.exports = {};

// multiple exports 
module.exports.nickname = name;
module.exports.age = age;

// { name:"steve" };

// single export
module.exports = name;

// "steve"
