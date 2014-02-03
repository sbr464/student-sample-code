var posts = [
  {id:"", title:"A better syntax"},
  {id:"", title:"See you next year"},
  {id:"", title:"Coffee. A must have."},
];


var postsToDisplay = posts.filter(function (val, i, ary) {
  // this === posts === ary

  return val.title[0].match(/^A/i);
  
}, posts);