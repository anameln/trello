TrelloClone.Views.CardsShow = Backbone.View.extend({
  template: JST["cards/show"],
  tagName: "li",

  initialize: function() {
    this.listenTo(this.model, "change sync", this.render);
  },

  render: function () {
    var content = this.template({card: this.model});
    this.$el.html(content);
    return this;
  }
})
