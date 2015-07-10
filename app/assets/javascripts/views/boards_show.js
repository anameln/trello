TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST["boards/show"],

  render: function () {
    var content = this.template({board: this.model});
    this.$el.html(content);
    return this;
  }
})


// TrelloClone.Views.BoardsNew = Backbone.View.extend({
//   template: JST["boards/new"],
//
//   events: {
//     // "submit form.new-board"
//     "submit form.new-board": "submit"
//   },
//
//   render: function () {
//     var content = this.template();
//     this.$el.html(content);
//     return this;
