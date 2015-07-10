TrelloClone.Routers.TrelloRouter = Backbone.Router.extend({
  // initialize: function (b, el) {
  //   this.boards = b;
  //   this.$rootEl = el;
  // },

  routes: {
    "": "index",
    "boards/new": "new",
    "boards/:id": "show"
  },

  index: function () {
    var view = new TrelloClone.Views.BoardsIndex({collection: TrelloClone.boards})
    this._swapViews(view)
  },

  new: function () {
    var view = new TrelloClone.Views.BoardsNew();
    this._swapViews(view);
  },

  show: function (id) {
    var board = TrelloClone.boards.getOrFetch(id);
    var view = new TrelloClone.Views.BoardsShow({model: board});
    this._swapViews(view);
  },

  _swapViews: function (newView) {

    this._currentView && this._currentView.remove();
    this._currentView = newView;
    TrelloClone.$rootEl.html(this._currentView.render().$el) //
  }
})
