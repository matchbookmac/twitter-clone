Twitter.NewTweetController = Ember.Controller.extend({

  actions: {
    save: function(){
      var newTweet = this.store.createRecord('tweet', {
        name: this.get('name'),
        text: this.get('text')
      });
      newTweet.save();

      this.transitionToRoute('tweets');
      this.set("name", "");
      this.set("text", "");
    }
  }
});
