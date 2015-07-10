TrelloClone.Routers.TrelloRouter = Backbone.Router.extend({
  initialize: function (b, el) {
    this.boards = b;
    this.$rootEl = el;
  },

  routes: {
    "": "index"
  },

  index: function () {
    var view = new TrelloClone.Views.BoardsIndex({collection: this.boards})
    this._swapViews(view)

  },

  _swapViews: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el) //why can't render _currentView??
  }
})
