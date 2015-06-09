Twitter.NewTweetController = Ember.Controller.extend({

  actions: {
    save: function(){

      var newDate = new Date()
      var newTweet = this.store.createRecord('tweet', {
        name: this.get('name'),
        text: this.get('text'),
        date: newDate
      });
      newTweet.save();

      this.transitionToRoute('tweets');
      this.set("name", "");
      this.set("text", "");
    }
  }
});
