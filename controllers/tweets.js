Twitter.TweetsController = Ember.ArrayController.extend({
  tweetDate: false,
  actions: {
    showDate: function () {
      if (this.tweetDate) {
        this.set('tweetDate', false);
      } else {
        this.set('tweetDate', true);
      }
    }
  }
});
