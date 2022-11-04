# _Pizza Parlor_

#### By: _David Gamble_

#### _A pizza parlor website._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _BootStrap_

## Description

_This is a website for a pizza parlor that allows the user to build a pizza and get the price._

## Setup/Installation Requirements

* _Clone the project to your desktop from GitHub._
* _Open the index.html file to view website._

_GitHub location: https://github.com/DavidDGamble/pizza-parlor_

## Known Bugs

* _No known bugs._

## License

_Copyright (c) 2022 David Gamble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

```
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
```