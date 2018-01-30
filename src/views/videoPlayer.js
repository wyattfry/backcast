var VideoPlayerView = Backbone.View.extend({

  el: '.player',
  
  initialize: function() {
    this.video = this.collection.models[0];
    this.collection.on('select', function(selectedVideo) {
      this.video = selectedVideo;
      this.render();
    }, this);
  },
  
  render: function() {
    if (this.video) {
      this.$el.html(this.template(this.video.attributes));
      return this; 
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
      return this; 
    }
  },

  template: templateURL('src/templates/videoPlayer.html')

});
