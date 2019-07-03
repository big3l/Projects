

##Rounding to the nearest number (3.4 = 3)
Math.round (3,4)
3

##Square root of 4
Math.sqrt(4)
2

##to the power of
Math.pow(2,3)
8

##Print PI
Math.PI
3.141592653589793

##Generates random number up to 1
Math.random()

#Generates random number up to the number 10
Math.ceil(Math.random()* 10) //ceil rounds the number up
Math.floor(Math.random()* 10) //floor round the number down

#Random function
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}