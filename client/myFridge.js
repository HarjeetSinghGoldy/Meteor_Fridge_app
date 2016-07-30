if (Meteor.isClient) {
  Template.fridge.onRendered(function () {
//      every template has its own instance
    var templateInstance = this;

//restrict the DOM to id of fridge for prevent being slow and more managable
    templateInstance.$('#fridge').droppable({
      drop: function (evt, ui) {
        var query = {
//            Get the draggable img id using jquery ui data attributes
          _id: ui.draggable.data('id') // Insted of $(ui.draggable).attr('data-id')  jQ 1.4.3
        };
        var changes = {
          $set: {
            place: 'fridge'
          }
        };
        Products.update(query, changes);
      }
    });

  });

  Template.productList.onRendered(function () {
    var templateInstance = this;

    templateInstance.$('#supermarket').droppable({
      drop: function (evt, ui) {
        var query = {
          _id: ui.draggable.data('id')
        };
        var changes = {
          $set: {
            place: 'supermarket'
          }
        };
        Products.update(query, changes);
      }
    });

  });

  Template.productListItem.onRendered(function () {
    var templateInstance = this;

    templateInstance.$('.draggable').draggable({
      cursor: 'move',
      helper: 'clone'
    });
  });

  Template.fridge.helpers({
    products: function () {
      return Products.find({
        place: 'fridge'
      });
    }
  });
  Template.productList.helpers({
    products: function () {
      return Products.find({
        place: 'supermarket'
      });
    }
  });

}

