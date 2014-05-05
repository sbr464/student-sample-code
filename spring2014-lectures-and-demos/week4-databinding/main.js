var VideoGame = function(title, platform){
  this.title = title;
  this.platform = platform;
  this._renderedObject = null;
};

VideoGame.prototype.render = function() {
  this._renderedObject = $('<li></li>');
  this._renderedObject.append(
    '<div class="title">' +
    '<strong>Title:</strong>' +
    '<span class="value">' + this.title + '</span>' +
    '</div>'
  );
  this._renderedObject.append(
    '<div class="platform">' +
    '<strong>Platform:</strong>' +
    '<span class="value">' + this.platform + '</span>' +
    '</div>'
  );
  return this._renderedObject;
};

VideoGame.prototype.setProperty = function(prop, value) {
  this[prop] = value;
  this.updateRender();
};

VideoGame.prototype.updateRender = function() {
  if(this._renderedObject === null) {
    throw new Error('This object has not been rendered!');
  }

  this._renderedObject
    .find('.title .value')
    .text(this.title);
  this._renderedObject
    .find('.platform .value')
    .text(this.platform);
};


var skyrim = new VideoGame('Skyrim', 'all');
var halfLife = new VideoGame('Half-Life', 'pc');

$('#videogame-list').append(skyrim.render());
$('#videogame-list').append(halfLife.render());



$(document).on('ready', function() {
  
});