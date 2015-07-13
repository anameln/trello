TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST["boards/show"],

  initialize: function () {

    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.addList);
    this.listenTo(this.model.lists(), "remove", this.removeList)

    var newListView = new TrelloClone.Views.ListsNew({model: this.model});
    this.addSubview(".lists-new", newListView);
    var that = this;



    this.model.lists().each(this.addList.bind(this)); //no id?

  },

  render: function () {
    var content = this.template({board: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addList: function (list) { //no id

    var listView = new TrelloClone.Views.ListsShow({model: list});
    this.addSubview(".lists", listView);
  },

  // removeList: function (list) {
  //   debugger
  //   var subview = _.find(
  //     this.subviews(".lists"),
  //     function (subView) { return subView.model === list }
  //   )
  //   this.removeSubview(".lists", subview);
  // }

  removeList: function (list) {

    var subs = this.subviews(".lists");
    var subview = subs.find(function (subview) {
      return subview.model === list;
    });

    this.removeSubview(".lists", subview);

  }


})
