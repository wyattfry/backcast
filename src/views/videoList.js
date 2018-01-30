var VideoListView = Backbone.View.extend({
  
  el: '.list',
  
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.collection.each(this.renderVideoEntry, this);
  },
  
  renderVideoEntry: function(video) {
    var videoEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoEntryView.render().el);
  },

  template: templateURL('src/templates/videoList.html')

});
