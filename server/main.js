if (Meteor.isServer) {
    // This gets executed whenEver server starts
  Meteor.startup(function () {
//      Remove all the products from database
    Products.remove({});

    // fill the database with some products
    Products.insert({
      name: 'Milk',
      img: '/milk.png',
      place: 'fridge'
    });

    Products.insert({
      name: 'Juice',
      img: '/juice.png',
      place: 'fridge'
    });

    Products.insert({
      name: 'Bread',
      img: '/bread.png',
      place: 'supermarket'
    });

    Products.insert({
      name: 'Banana',
      img: '/banana.png',
      place: 'supermarket'
    });
    
    Products.insert({
        name: "test",
        img:  "/test.png",
        place: "supermarket"
    });
    
  });
}