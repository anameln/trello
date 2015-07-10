TrelloClone.Views.BoardsNew = Backbone.View.extend({
  template: JST["boards/new"],

  events: {
    // "submit form.new-board"
    "submit form.new-board": "submit"
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submit: function () {
    event.preventDefault();
    var params = this.$("form").serializeJSON();
    var board = new TrelloClone.Models.Board();
    board.set(params)
    board.save({}, {
      success: function () {
        TrelloClone.boards.add(board);
        Backbone.history.navigate("/", {trigger: true});
      }
    });
  }
})
