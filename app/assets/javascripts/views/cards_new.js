TrelloClone.Views.CardsNew = Backbone.View.extend({
  template: JST["cards/new"],

  events: {
    "submit form": "submit"
  },

  render: function () {
    debugger
    var content = this.template({list: this.model}) // no id???
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    var view = this;
    event.preventDefault();

    var params = this.$("form").serializeJSON()["card"];
    debugger
    var card = new TrelloClone.Models.Card();
    card.set(params)
    card.save({}, {
      success: function ()  {
        view.model.cards().add(card);
        view.render();

      }
    });
  }
});
