



var orderCount=0;


function getSubTotal(itemCount){

  return (itemCount * 7.5);

}

function getTax(){
  return (getSubTotal(orderCount) * 0.06);

}

function getTotal(){

  return (getSubTotal(orderCount) + getTax());

}

function takeOrder(topping,crustType) {

  console.log('Order:'+ crustType +' crust pizza topped with ' + topping);


  orderCount= orderCount + 1;
  console.log(getSubTotal(orderCount));


}

console.log(getTotal());


/*ARRAY
Arrays are lists and are a way to store data in JavaScript. Each item inside of an array is at a numbered position. Arrays are created with brackets [].
We can access one item in an array using it's numbered position, with syntax like: myArray[0].
Arrays have a length property, which allows you to see how many items are in an array.
Arrays also have their own methods, including push and pop, which add and subtract items from an array, respectively.

*/



var bucketList = ['first','second','third'];
console.log(bucketList);

var listItem = bucketList[0];
console.log(listItem);
console.log(bucketList.length);

bucketList.push('fourth','fifth');

console.log(bucketList);

bucketList.pop();



var hello = 'Hello World';
console.log(hello[6]);
// Output: W
