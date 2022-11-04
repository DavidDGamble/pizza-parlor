// Business Logic -------------------------------------------------------------
const prices = {
  sm: 8,
  md: 10,
  lg: 12,
  xlg: 15,
  pep: 1,
  saus: 1,
  mush: 0.5,
  blkOlv: 0.5,
  xtraChz: 1
}

function Order(size, pep, saus, mush, blkOlv, xtraChz) {
  this.size = size;
  this.pep = pep;
  this.saus = saus;
  this.mush = mush;
  this.blkOlv = blkOlv;
  this.xtraChz = xtraChz
}

Order.prototype.calculate = function() {
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

console.log(convert(14));

// UI Logic -------------------------------------------------------------



function handleSubmit(event) {
  event.preventDefault();

  const sizeInput = document.getElementById('size').value;
  const pepInput = document.getElementById('pepperoni').checked;
  const sausInput = document.getElementById('sausage').checked;
  const mushInput = document.getElementById('mushroom').checked;
  const blkOlvInput = document.getElementById('blk-olives').checked;
  const xtraChzInput = document.getElementById('xtra-cheese').checked;

  const order = new Order(sizeInput, pepInput, sausInput, mushInput, blkOlvInput, xtraChzInput);
  // document.getElementById('display').innerHTML = 
}

window.addEventListener('load', function() {
  document.getElementById('form').addEventListener('submit', handleSubmit);
});