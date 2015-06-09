Twitter.NewTweetController = Ember.Controller.extend({

  actions: {
    save: function(){
      var newTweet = {
        name: this.get('name'),
        text: this.get('text')
      }
      tweets.addObject(newTweet);
      this.transitionToRoute('tweets');
      this.set("name", "");
      this.set("text", "");
    }
  }
});
