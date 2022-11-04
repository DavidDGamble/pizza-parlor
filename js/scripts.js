// Business Logic -------------------------------------------------------------
// total = 0;

const prices = {
  small: 8,
  medium: 10,
  large: 12,
  xtraLarge: 15,
  pepperoni: 1,
  sausage: 1,
  mushroom: 0.5,
  blackOlives: 0.5,
  xtraCheese: 1
}

function Order() {
  this.total = 0
  this.orders = {};
  this.currentOrder = 0;
}

function Pizza(size, pep, saus, mush, blkOlv, xtraChz) {
  this.size = size;
  this.pepperoni = pep;
  this.sausage = saus;
  this.mushroom = mush;
  this.blackOlives = blkOlv;
  this.xtraCheese = xtraChz
}

Order.prototype.assignOrder = function() {
  this.currentOrder++;
  return this.currentOrder;
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignOrder();
  this.orders[pizza.id] = pizza;
}

Pizza.prototype.calculate = function() {
  let priceTotal = 0;
  for (let key in this) {
    if (key === 'size') {
      priceTotal += prices[this[key]];
    } else {
      if (this[key] === true) {
        priceTotal += prices[key];
      }
    }
  }
  return priceTotal;
};

function convert(price) {
  let newPrice = price.toString();
  newPrice = '$' + newPrice;
  if (newPrice[newPrice.length - 2] === '.') {
    newPrice += '0'; 
  } else {
    newPrice += '.00';
  }
  return newPrice
}
// UI Logic -------------------------------------------------------------



function handleSubmit(event) {
  event.preventDefault();
  const sizeInput = document.getElementById('size').value;
  const pepInput = document.getElementById('pepperoni').checked;
  const sausInput = document.getElementById('sausage').checked;
  const mushInput = document.getElementById('mushroom').checked;
  const blkOlvInput = document.getElementById('blk-olives').checked;
  const xtraChzInput = document.getElementById('xtra-cheese').checked;

  const newPizza = new Pizza(sizeInput, pepInput, sausInput, mushInput, blkOlvInput, xtraChzInput);
  const newPrice = newPizza.calculate();
  order.total += newPrice;
  let divDisplay = document.getElementById('display');
  if (divDisplay === null) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'display');
    let newH2 = document.createElement('h2');
    newH2.setAttribute('id', 'price');
    document.getElementById('main').append(newDiv);
    document.getElementById('display').append(newH2);
  }
  for (let key in newPizza) {
    if (key === 'size') {
      let h3 = document.createElement('h3')
      h3.innerHTML = newPizza[key] + ' pie';
      document.getElementById('display').append(h3);
    } else if (newPizza[key] === true) {
      let p = document.createElement('p');
      document.getElementById('display').append(p);
      p.innerHTML = key;
    }
  }
  document.getElementById('price').innerHTML = 'Total: ' + convert(order.total);
  document.getElementById('size').value = 'small';
  document.getElementById('pepperoni').checked = false;
  document.getElementById('sausage').checked = false;
  document.getElementById('mushroom').checked = false;
  document.getElementById('blk-olives').checked = false;
  document.getElementById('xtra-cheese').checked = false;
  order.addPizza(newPizza);
  console.log(order);
}

function handleClear(event) {
  event.preventDefault();

  order = new Order();
  document.getElementById('display').remove('div');
} 

window.addEventListener('load', function() {
  order = new Order();
  document.getElementById('submit').addEventListener('submit', handleSubmit);
  document.getElementById('clear').addEventListener('click', handleClear);
});