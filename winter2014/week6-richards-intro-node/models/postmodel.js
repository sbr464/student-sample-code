var posts = [
  {id:0, title:"My first blog post", body:"lorem ipsum dolor sit amet"},
  {id:1, title:"The day I lost two ribs"},
  {id:2, title:"A funny thing happened..."}
];


var PostModel = module.exports = {
  findAll: function () {
    return posts.slice(0);
  },

  findById: function (id) {

    return posts[id];

  }
};