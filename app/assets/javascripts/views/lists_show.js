TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({
  template: JST["lists/show"],
  tagName: "li",

  initialize: function() {
    this.listenTo(this.model, "change sync", this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    this.listenTo(this.model.cards(), "remove", this.removeCard);

    this.model.cards().each(this.addCard.bind(this));
  },

  events: {
    "click .add-card": "addNewView"
  },

  render: function () {
    var content = this.template({list: this.model}); //where is id??
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },



  addNewView: function() {
    debugger
    var newCardView = new TrelloClone.Views.CardsNew({model: this.model})
    this.addSubview(".cards-new", newCardView);
    this.$(".add-card").addClass("invisible");
    this.$(".cards-new").addClass("visible");
  },

  addCard: function (card) {
    debugger
    var cardView = new TrelloClone.Views.CardsShow({model: card});
    this.addSubview(".cards", cardView);
  },

  removeCard: function (card) {
    var subs = this.subviews(".cards");
    var subview = subs.find(function (subview) {
      return subview.model === card;
    });

    this.removeSubview(".cards", subview);
  }

})
