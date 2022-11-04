Describe: Order()

Test: Should create an object that contains all of the customers order details.
Code: new Order('large', true, true, false, false, false)
Expected Outcome: order {
  size: large
  pep: true
  saus: true
  mush: false
  blkOlv: false
  xtraChz: false
}

Describe: Order.prototype.calulate()

Test: Should calculate the total price for the order in the order object.
Code: test = new Order('lg', true, true, false, false, false)
test.calculate() 
Expected Output: 14

Test: Should calculate the total price for the order in the order object when a price value === 0.5.
Code: test = new Order('lg', true, true, true, false, false)
test.calculate() 
Expected Output: 14.5

Describe: convert()

Test: Should convert price total to readable price display when price total has 1 tenths value.
Code: convert(14.5)
Expected Output: '$14.50'

Test: Should convert price total to readable price display when price total has no decimal.
Code: convert(14)
Expected Output: '$14.00'

