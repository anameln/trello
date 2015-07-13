TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards",

  lists: function () {
    // debugger
    this._lists = this._lists ||
      new TrelloClone.Collections.BoardLists([], { board: this });
    // console.log("lists: " + this._lists)
    return this._lists;

  },

  parse: function (load) {
    console.log("parsing")
    if (load.lists) {
      this.lists().set(load.lists, { parse: true }); 
      delete load.lists;
    }

    return load;
  }

});
