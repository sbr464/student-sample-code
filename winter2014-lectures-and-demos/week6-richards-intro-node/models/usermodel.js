var users = [
  {id:0, name:"Bob"},
  {id:1, name:"Joe"},
  {id:2, name:"John"}
];


var UserModel = module.exports = {
  findAll: function () {
    return users.slice(0);
  }
};