var VideoListView = Backbone.View.extend({
  
  initialize: function () {
    this.videos = new Videos();
    console.log(this.videos);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.collection.forEach(this.renderVideoEntry, this);
    this.$el.html(this.template());
    return this;
  },
  
  renderVideoEntry: function(video) {
    var videoEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
