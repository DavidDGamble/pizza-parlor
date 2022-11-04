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

// UI Logic -------------------------------------------------------------
