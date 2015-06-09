Twitter.Router.map(function () {
  this.resource('tweets', {path: '/'}, function () {
    this.resource('new-tweet');
  });
});
