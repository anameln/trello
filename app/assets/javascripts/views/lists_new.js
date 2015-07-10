TrelloClone.Views.ListsNew = Backbone.View.extend({
  template: JST["lists/new"],

  events: {
    "submit form": "submit"
  },

  render: function () {
    var content = this.template({board: this.model})
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    var view = this;
    event.preventDefault();

    var params = this.$("form").serializeJSON();
    var list = new TrelloClone.Models.List();
    list.set(params)
    list.save({}, {
      success: function ()  {
        view.model.lists().add(list);
        view.render();

      }
    });
  }
});
