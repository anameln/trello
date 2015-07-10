window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TrelloClone.$rootEl = $("#main");
    TrelloClone.boards = new TrelloClone.Collections.Boards();
    TrelloClone.boards.fetch();
    new TrelloClone.Routers.TrelloRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
