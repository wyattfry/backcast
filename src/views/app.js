var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    //this.videos = new Videos(window.exampleVideoData);// collection of movies
    this.videos = new Videos();
    this.render();
    console.log('this.videos:',this.videos);
    
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
