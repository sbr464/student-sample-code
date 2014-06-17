describe("createSong", function() {
  it("should have class 'song'", function() {
    expect(createSong(songs[0]).attr('class')).toEqual('song');
  });
});
