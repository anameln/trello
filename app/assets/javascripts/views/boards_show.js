TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST["boards/show"],

  initialize: function () {
    this.listenTo(this.model.lists(), "add", this.addList);
    this.listenTo(this.model.lists(), "remove", this.removeList)

    var newListView = new TrelloClone.Views.ListsNew({model: this.model});
    this.addSubview(".lists-new", newListView);

    this.model.lists().forEach(function(list){
      this.addList
    }.bind(this));
  },

  render: function () {
    var content = this.template({board: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addList: function (list) {
    var listView = new TrelloClone.Views.ListShow({model: list});
    this.addSubview(".lists", listView);
  },

  removeList: function (list) {
    var subview = _.find(
      this.subviews(".lists"),
      function (subView) { return subView.model === list }
    )
    this.removeSubview(".lists", subview);
  }


})
