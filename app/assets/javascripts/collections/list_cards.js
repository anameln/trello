TrelloClone.Collections.ListCards = Backbone.Collection.extend({
  model: TrelloClone.Models.Card,

  url: function () {
    return this.list.board.url() + this.list.url() + "/cards"; //does it need one?
  },

  initialize: function (models, options) {
    this.list = options.list;
  }
})
