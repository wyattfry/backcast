var Videos = Backbone.Collection.extend({

  model: Video,
  
  initialize: function() {
    this.search();
  },
  
  search: function(query) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        q: query,
        maxResults: 5,
        type: 'video',
        part: 'snippet',
        key: 'AIzaSyBcto8_WpAMnyHi7Ug7yFeXIQQBFwRFlSs',
        videoEmbeddable: true,
      },
      success: function (response) {
        // console.log('success', response);
      },
      error: function (response) {
        console.error('Failed to get', response);
      }
    });
  },
  
  parse: function() {
    
  },
  
});
