(function() {
  'use strict';

  const app = angular.module('cameraApp');

  app.controller('cartManagerCtrl', function() {
    this.itemsInCart = [];

    this.subtotal = 0

    this.addPrices = function(item) {
      if (item.hasOwnProperty('price')) {
        this.subtotal += item.price
      }
    }

    this.addItem = function(cameraAddedToCart) {
      let existingCamera = this.itemsInCart.filter(cartItem => {
        return cartItem.id === cameraAddedToCart.id
      })[0]

      if (existingCamera) {
        existingCamera.quantity++
        this.addPrices(existingCamera)
      } else {
        let newItem = {
          id: cameraAddedToCart.id,
          name: cameraAddedToCart.name,
          price: cameraAddedToCart.price,
          quantity: 1
        }
        this.itemsInCart.push(newItem)
        this.addPrices(newItem);
      }
    }
  });

  app.controller('itemCatalogCtrl', function() {
    this.dropDown = 'name';
    this.search = '';

    this.cameras = [
      {
      id: 1,
      name: 'Nikon D3100 DSLR',
      image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
      rating: 4,
      price: 369.99,
      onSale: true
      },
      {
      id: 2,
      name: 'Canon EOS 70D',
      image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
      rating: 2,
      price: 1099.0,
      onSale: false
      },
      {id: 3,
        name: 'Nikon D810A',
        image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
        rating: 3,
        price: 3796.95,
        onSale: true
      }
    ]

  });

}());


//  [{id: 1,name: 'Nikon D3100 DSLR',image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',rating: 4,price: 369.99,onSale: true},{id: 2,name: 'Canon EOS 70D',image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',rating: 2,price: 1099.0,onSale: false},{id: 3,name: 'Nikon D810A',image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',rating: 3,price: 3796.95,onSale: true}]"
