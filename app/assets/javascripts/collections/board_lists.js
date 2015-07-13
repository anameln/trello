TrelloClone.Collections.BoardLists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,

  url: function () {
    return this.board.url() + "/lists"; //does it need one?
  },

  initialize: function (models, options) {
    this.board = options.todo;
  }
})
